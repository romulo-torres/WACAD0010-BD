import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient, Prisma } from "./generated/prisma/client.js";

// ---------------------------------------------------------------
// Conexão
// No Prisma 7, o MySQL usa um "driver adapter".
// Os dados vêm do mesmo DATABASE_URL do .env.
// ---------------------------------------------------------------
const url = new URL(process.env.DATABASE_URL!);

const adapter = new PrismaMariaDb({
  host: url.hostname,
  port: Number(url.port || 3306),
  user: decodeURIComponent(url.username),
  password: decodeURIComponent(url.password),
  database: url.pathname.slice(1),
  connectionLimit: 5,
});

const prisma = new PrismaClient({ adapter });

// ---------------------------------------------------------------
// CREATE
// ---------------------------------------------------------------

/**
 * Cadastra um consumidor e, na mesma operação, seus endereços.
 * O "create" aninhado do Prisma roda tudo em uma única transação:
 * se um endereço falhar, o consumidor também não é criado.
 */
export async function criarConsumidor(
  dados: {
    cpf: number;
    nome: string;
    nascimento: Date;
    telefone: string;
    email: string;
  },
  enderecos: string[] = [],
) {
  return prisma.consumidor.create({
    data: {
      ...dados,
      enderecos: {
        create: enderecos.map((endereco) => ({ endereco })),
      },
    },
    include: { enderecos: true },
  });
}

/** Adiciona um novo endereço a um consumidor que já existe. */
export async function adicionarEndereco(cpf: number, endereco: string) {
  return prisma.enderecos.create({
    data: { endereco, consumidor_cpf: cpf },
  });
}

// ---------------------------------------------------------------
// READ
// ---------------------------------------------------------------

/** Busca um consumidor pelo CPF, já trazendo seus endereços. */
export async function buscarConsumidor(cpf: number) {
  return prisma.consumidor.findUnique({
    where: { cpf },
    include: { enderecos: true },
  });
}

/** Lista todos os consumidores com a quantidade de endereços de cada um. */
export async function listarConsumidores() {
  return prisma.consumidor.findMany({
    orderBy: { nome: "asc" },
    include: { _count: { select: { enderecos: true } } },
  });
}

/** Busca consumidores cujo nome contenha o texto informado. */
export async function buscarPorNome(texto: string) {
  return prisma.consumidor.findMany({
    where: { nome: { contains: texto } },
    include: { enderecos: true },
  });
}

/** Busca o endereço de um consumidor pelo texto (parte do endereço). */
export async function buscarEndereco(cpf: number, texto: string) {
  return prisma.enderecos.findFirst({
    where: { consumidor_cpf: cpf, endereco: { contains: texto } },
  });
}

// ---------------------------------------------------------------
// UPDATE
// ---------------------------------------------------------------

/** Atualiza dados do consumidor (o CPF, por ser chave, não é alterado). */
export async function atualizarConsumidor(
  cpf: number,
  dados: Partial<{
    nome: string;
    nascimento: Date;
    telefone: string;
    email: string;
  }>,
) {
  return prisma.consumidor.update({
    where: { cpf },
    data: dados,
    include: { enderecos: true },
  });
}

/** Altera o texto de um endereço existente. */
export async function atualizarEndereco(id_endereco: number, endereco: string) {
  return prisma.enderecos.update({
    where: { id_endereco },
    data: { endereco },
  });
}

// ---------------------------------------------------------------
// DELETE
// ---------------------------------------------------------------

/**
 * Remove um endereço.
 * Se ele já foi usado como endereço de entrega em alguma compra, o banco
 * recusa (FK composta com NoAction) e o Prisma devolve o erro P2003.
 * Tratamos o erro para dar uma mensagem clara.
 */
export async function removerEndereco(id_endereco: number) {
  try {
    return await prisma.enderecos.delete({ where: { id_endereco } });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2003") {
      throw new Error(
        "Não é possível remover: este endereço já foi usado em uma compra.",
      );
    }
    throw e;
  }
}

/**
 * Remove o consumidor junto com seus endereços.
 * Se ele tiver compras registradas, a remoção é bloqueada para não perder
 * o histórico. A exclusão dos endereços e do consumidor ocorre em uma
 * transação: ou apaga tudo, ou nada.
 */
export async function removerConsumidor(cpf: number) {
  const compras = await prisma.produto_Comprado.count({
    where: { consumidor_cpf: cpf },
  });

  if (compras > 0) {
    throw new Error(
      `Não é possível remover: o consumidor possui ${compras} compra(s) registrada(s).`,
    );
  }

  return prisma.$transaction([
    prisma.enderecos.deleteMany({ where: { consumidor_cpf: cpf } }),
    prisma.consumidor.delete({ where: { cpf } }),
  ]);
}

// ---------------------------------------------------------------
// Demonstração por etapas, para tirar os prints um passo por vez.
//
//   npx tsx src/crud.ts create   -> cria consumidor + endereços
//   npx tsx src/crud.ts read     -> lê (busca por CPF e listagem)
//   npx tsx src/crud.ts update   -> localiza (READ), altera e confere
//   npx tsx src/crud.ts delete   -> remove endereço e consumidor
//
// Depois de cada etapa, atualize (F5) as tabelas no DBeaver e tire o print.
// ---------------------------------------------------------------
async function main() {
  // CPF de teste dentro do limite do tipo Int (veja observação no relatório)
  const cpf = 123456789;
  const etapa = process.argv[2];

  switch (etapa) {
    case "create": {
      // Limpa restos de execuções anteriores para poder repetir a etapa
      await prisma.enderecos.deleteMany({ where: { consumidor_cpf: cpf } });
      await prisma.consumidor.deleteMany({ where: { cpf } });

      console.log("\n=== CREATE: consumidor com 2 endereços ===");
      console.log(
        await criarConsumidor(
          {
            cpf,
            nome: "Maria Souza",
            nascimento: new Date("1999-05-20"),
            telefone: "(92)99999-0000",
            email: "maria.souza@email.com",
          },
          ["Rua das Flores, 100 - Manaus", "Av. Djalma Batista, 500 - Manaus"],
        ),
      );

      console.log("\n=== CREATE: novo endereço ===");
      console.log(await adicionarEndereco(cpf, "Rua Nova, 42 - Manaus"));
      break;
    }

    case "read": {
      console.log("\n=== READ: busca por CPF ===");
      console.log(await buscarConsumidor(cpf));

      console.log("\n=== READ: listagem ===");
      console.log(await listarConsumidores());
      break;
    }

    case "update": {
      console.log("\n=== UPDATE: telefone do consumidor ===");
      console.log(await atualizarConsumidor(cpf, { telefone: "(92)98888-1111" }));

      // 1. READ: localiza o endereço que será alterado
      const alvo = await buscarEndereco(cpf, "Rua Nova");
      if (!alvo) {
        throw new Error('Nenhum endereço contendo "Rua Nova". Rode a etapa create.');
      }
      console.log("\n=== READ: endereço encontrado ===");
      console.log("ANTES:  ", alvo);

      // 2. UPDATE: usa o id que o READ devolveu
      console.log("\n=== UPDATE: texto do endereço ===");
      console.log(
        "RETORNO:",
        await atualizarEndereco(alvo.id_endereco, "Rua Nova, 42, apto 3"),
      );

      // 3. READ: confirma que a mudança ficou gravada no banco
      console.log(
        "DEPOIS: ",
        await prisma.enderecos.findUnique({
          where: { id_endereco: alvo.id_endereco },
        }),
      );
      break;
    }

    case "delete": {
      // READ: localiza o endereço a remover
      const alvo = await buscarEndereco(cpf, "Rua Nova");
      if (!alvo) {
        throw new Error('Nenhum endereço contendo "Rua Nova". Rode a etapa create.');
      }

      console.log("\n=== DELETE: um endereço ===");
      console.log(await removerEndereco(alvo.id_endereco));

      console.log("\n=== DELETE: consumidor e endereços ===");
      console.log(await removerConsumidor(cpf));

      console.log("\n=== READ após remoção (esperado: null) ===");
      console.log(await buscarConsumidor(cpf));
      break;
    }

    default:
      console.log("Use: npx tsx src/crud.ts <create|read|update|delete>");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());