import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const adicionarContato = async (dados) => {
  return await prisma.contato.create({
    data: dados,
  });
};

export const listarTodos = async () => {
  return await prisma.contato.findMany();
};

export const buscarPorId = async (id) => {
  return await prisma.contato.findUnique({
    where: { id: Number(id)  },
  });
};

export const atualizar = async (id, novosDados) => {
  return await prisma.contato.update({
    where: { id: Number(id)  },
    data: novosDados,
  });
};

export const deletar = async (id) => {
  return await prisma.contato.delete({
    where: { id: Number(id)  },
  });
};
