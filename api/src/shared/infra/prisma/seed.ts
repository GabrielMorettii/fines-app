import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async function prismaSeed() {
  try {
    await prisma.$transaction([
      prisma.multas.deleteMany(),
      prisma.veiculos.deleteMany(),
      prisma.usuarios.deleteMany()
    ])

    await prisma.$queryRaw`INSERT INTO veiculos (placa, modelo, chassi, estado, renavam) VALUES
    ('ALB8901', 'Toyota Hilux', '2HGCM82633A345678', 'AL', '89012345678'),
    ('PEA2345', 'Hyundai Creta', '3HGCM82633A123456', 'PE', '23456789012'),
    ('SEB6789', 'Honda HR-V', '4HGCM82633A789012', 'SE', '67890123456'),
    ('TOA0123', 'Nissan Kicks', '5HGCM82633A123456', 'TO', '01234567890'),
    ('ABC1234', 'Fiat Uno', '1HGCM82633A123456', 'SP', '12345678901'),
    ('XYZ5678', 'Volkswagen Gol', '1HGCM82633A789012', 'RJ', '78901234567'),
    ('DEF3456', 'Ford Ka', '2HGCM82633A123456', 'SP', '45678901234')`;

    await prisma.$queryRaw`INSERT INTO multas (placa_veiculo, descricao, valor, servico, estado,
      data_infracao) VALUES
      ('ALB8901', 'Avanço de sinal vermelho', 160.30, 'DETRAN', 'AL',
      '2023-06-06'),
      ('PEA2345', 'Estacionamento em local proibido', 95.80, 'DNIT', 'PE',
      '2023-05-12'),
      ('SEB6789', 'Excesso de velocidade', 210.60, 'DPRF', 'SE', '2023-04-18'),
      ('TOA0123', 'Ultrapassagem em local proibido', 275.40, 'DETRAN', 'TO',
      '2023-03-04'),
      ('ABC1234', 'Excesso de velocidade', 195.23, 'DETRAN', 'SP',
      '2023-01-15')`;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
  await prisma.$disconnect();
})();
