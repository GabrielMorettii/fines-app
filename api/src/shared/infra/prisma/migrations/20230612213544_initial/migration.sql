-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `multas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placa_veiculo` VARCHAR(7) NOT NULL,
    `descricao` VARCHAR(255) NOT NULL,
    `valor` DECIMAL(10, 2) NOT NULL,
    `servico` VARCHAR(255) NOT NULL,
    `estado` VARCHAR(2) NOT NULL,
    `data_infracao` DATE NOT NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `veiculos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placa` VARCHAR(7) NOT NULL,
    `modelo` VARCHAR(100) NOT NULL,
    `chassi` VARCHAR(17) NOT NULL,
    `estado` VARCHAR(2) NOT NULL,
    `renavam` VARCHAR(11) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    UNIQUE INDEX `veiculos_placa_key`(`placa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `multas` ADD CONSTRAINT `fk_multas_placa_veiculo` FOREIGN KEY (`placa_veiculo`) REFERENCES `veiculos`(`placa`) ON DELETE NO ACTION ON UPDATE NO ACTION;
