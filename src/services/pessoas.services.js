import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllPessoas() {
    return await prisma.pessoaDesaparecida.findMany();
}

export async function createPessoas(data) {
    return await prisma.pessoaDesaparecida.create({
        data: {
            nome: data.nome,
            idade: data.idade,
            dataDesaparecimento: new Date(data.dataDesaparecimento),
            descricao: data.descricao ?? null,
            status: data.status ?? 'ATIVO',
        },
    });
}

export async function deletandoPessoas(id) {
    const existing = await prisma.pessoaDesaparecida.findUnique({ where: { id: Number(id) } });
    if (!existing) return null;
    return await prisma.pessoaDesaparecida.delete({ where: { id: Number(id) } });
}

export async function updatedPessoasFull(id, data) {
    const updated = await prisma.pessoaDesaparecida.update({
        where: { id: Number(id) },
        data: {
            nome: data.nome,
            idade: data.idade,
            dataDesaparecimento: new Date(data.dataDesaparecimento),
            descricao: data.descricao ?? null,
            status: data.status ?? 'ATIVO',
            // dataAtualizacao é automático pelo Prisma
        }
    });
    return updated;
}