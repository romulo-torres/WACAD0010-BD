-- CreateTable
CREATE TABLE `Consumidor` (
    `cpf` INTEGER NOT NULL,
    `nome` VARCHAR(50) NOT NULL,
    `nascimento` DATE NOT NULL,
    `telefone` VARCHAR(14) NOT NULL,
    `email` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `Consumidor_email_key`(`email`),
    PRIMARY KEY (`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto_Comprado` (
    `idproduto_comprado` INTEGER NOT NULL,
    `consumidor_cpf` INTEGER NOT NULL,
    `codigo_produto` INTEGER NOT NULL,
    `endereco_escolhido` INTEGER NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `forma_pagamento` VARCHAR(15) NOT NULL,
    `preco_total` DECIMAL(10, 2) NOT NULL,
    `desconto` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`idproduto_comprado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enderecos` (
    `id_endereco` INTEGER NOT NULL AUTO_INCREMENT,
    `consumidor_cpf` INTEGER NOT NULL,
    `endereco` VARCHAR(60) NOT NULL,

    INDEX `Enderecos_consumidor_cpf_idx`(`consumidor_cpf`),
    UNIQUE INDEX `Enderecos_id_endereco_consumidor_cpf_key`(`id_endereco`, `consumidor_cpf`),
    PRIMARY KEY (`id_endereco`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `codigo` INTEGER NOT NULL,
    `categoria` VARCHAR(30) NOT NULL,
    `subcategoria` VARCHAR(40) NOT NULL,
    `modelo` VARCHAR(45) NOT NULL,
    `fabricante` VARCHAR(30) NOT NULL,
    `qtd` INTEGER NOT NULL,
    `preco` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Numero_Serie` (
    `codigo_produto` INTEGER NOT NULL,
    `numero_de_serie` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Numero_Serie_numero_de_serie_key`(`numero_de_serie`),
    PRIMARY KEY (`codigo_produto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Produto_Comprado` ADD CONSTRAINT `Produto_Comprado_consumidor_cpf_fkey` FOREIGN KEY (`consumidor_cpf`) REFERENCES `Consumidor`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto_Comprado` ADD CONSTRAINT `Produto_Comprado_codigo_produto_fkey` FOREIGN KEY (`codigo_produto`) REFERENCES `Produto`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto_Comprado` ADD CONSTRAINT `Produto_Comprado_endereco_escolhido_consumidor_cpf_fkey` FOREIGN KEY (`endereco_escolhido`, `consumidor_cpf`) REFERENCES `Enderecos`(`id_endereco`, `consumidor_cpf`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Enderecos` ADD CONSTRAINT `Enderecos_consumidor_cpf_fkey` FOREIGN KEY (`consumidor_cpf`) REFERENCES `Consumidor`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Numero_Serie` ADD CONSTRAINT `Numero_Serie_codigo_produto_fkey` FOREIGN KEY (`codigo_produto`) REFERENCES `Produto`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;
