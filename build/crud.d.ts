import "dotenv/config";
import { Prisma } from "./generated/prisma/client.js";
/**
 * Cadastra um consumidor e, na mesma operação, seus endereços.
 * O "create" aninhado do Prisma roda tudo em uma única transação:
 * se um endereço falhar, o consumidor também não é criado.
 */
export declare function criarConsumidor(dados: {
    cpf: number;
    nome: string;
    nascimento: Date;
    telefone: string;
    email: string;
}, enderecos?: string[]): Promise<{
    enderecos: {
        id_endereco: number;
        consumidor_cpf: number;
        endereco: string;
    }[];
} & {
    cpf: number;
    nome: string;
    nascimento: Date;
    telefone: string;
    email: string;
}>;
/** Adiciona um novo endereço a um consumidor que já existe. */
export declare function adicionarEndereco(cpf: number, endereco: string): Promise<{
    id_endereco: number;
    consumidor_cpf: number;
    endereco: string;
}>;
/** Busca um consumidor pelo CPF, já trazendo seus endereços. */
export declare function buscarConsumidor(cpf: number): Promise<({
    enderecos: {
        id_endereco: number;
        consumidor_cpf: number;
        endereco: string;
    }[];
} & {
    cpf: number;
    nome: string;
    nascimento: Date;
    telefone: string;
    email: string;
}) | null>;
/** Lista todos os consumidores com a quantidade de endereços de cada um. */
export declare function listarConsumidores(): Promise<({
    _count: {
        enderecos: number;
    };
} & {
    cpf: number;
    nome: string;
    nascimento: Date;
    telefone: string;
    email: string;
})[]>;
/** Busca consumidores cujo nome contenha o texto informado. */
export declare function buscarPorNome(texto: string): Promise<({
    enderecos: {
        id_endereco: number;
        consumidor_cpf: number;
        endereco: string;
    }[];
} & {
    cpf: number;
    nome: string;
    nascimento: Date;
    telefone: string;
    email: string;
})[]>;
/** Atualiza dados do consumidor (o CPF, por ser chave, não é alterado). */
export declare function atualizarConsumidor(cpf: number, dados: Partial<{
    nome: string;
    nascimento: Date;
    telefone: string;
    email: string;
}>): Promise<{
    enderecos: {
        id_endereco: number;
        consumidor_cpf: number;
        endereco: string;
    }[];
} & {
    cpf: number;
    nome: string;
    nascimento: Date;
    telefone: string;
    email: string;
}>;
/** Altera o texto de um endereço existente. */
export declare function atualizarEndereco(id_endereco: number, endereco: string): Promise<{
    id_endereco: number;
    consumidor_cpf: number;
    endereco: string;
}>;
/**
 * Remove um endereço.
 * Se ele já foi usado como endereço de entrega em alguma compra, o banco
 * recusa (FK composta com NoAction) e o Prisma devolve o erro P2003.
 * Tratamos o erro para dar uma mensagem clara.
 */
export declare function removerEndereco(id_endereco: number): Promise<{
    id_endereco: number;
    consumidor_cpf: number;
    endereco: string;
}>;
/**
 * Remove o consumidor junto com seus endereços.
 * Se ele tiver compras registradas, a remoção é bloqueada para não perder
 * o histórico. A exclusão dos endereços e do consumidor ocorre em uma
 * transação: ou apaga tudo, ou nada.
 */
export declare function removerConsumidor(cpf: number): Promise<[Prisma.BatchPayload, {
    cpf: number;
    nome: string;
    nascimento: Date;
    telefone: string;
    email: string;
}]>;
//# sourceMappingURL=crud.d.ts.map