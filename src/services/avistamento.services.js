import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function getAllAvistamentos() 
{
    const rows = await prisma.Avistamento.findMany();
    return rows;
}

export async function createAvistamento(data) 
{
    const created = await prisma.Avistamento.create(
        {
            data:
            {
                idPessoaDesaparecida: data.idPessoaDesaparecida,
                comentario: data.comentario,
                localAvistamento: data.localAvistamento,
                latitude: data.latitude,
                longitude: data.longitude,
                nomeInformante: data.nomeInformante,
                contatoInformante: data.contatoInformante
            },
        }
    );
    return created;
}


export async function deleteAvistamento(id) {
    const existing = await prisma.Avistamento.findUnique({ where: { id: Number(id)  } });
    if (!existing) return null;

    const del = await prisma.Avistamento.delete({ where: { id: Number(id) } });
    return del;
}

export async function updateAvistamento(id,data) 
{
    const updated = await prisma.Avistamento.update(
        {
            where: {id},
            data: 
            {
                idPessoaDesaparecida: data.idPessoaDesaparecida,
                comentario: data.comentario,
                localAvistamento: data.localAvistamento,
                latitude: data.latitude,
                longitude: data.longitude,
                nomeInformante: data.nomeInformante,
                contatoInformante: data.contatoInformante
            }
        }
    );
    return updated;
}