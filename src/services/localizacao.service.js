import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { v4 as uuidv4 } from 'uuid';



export const findAllLocalizacoes = async () => {
    return await prisma.localizacao.findMany();
};


export const findLocalizacaoById = async (id) => {
    return await prisma.localizacao.findUnique({
        where: { id: Number(id)  },
    });
};

export const createLocalizacao = async (data) => {
    const { latitude, longitude, nome } = data;
    const novaLocalizacao = await prisma.localizacao.create({
        data: {
            id: uuidv4(),
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            nome: nome || null,
        },
    });
    return novaLocalizacao;
};

export const updateLocalizacao = async (id, data) => {
    const { latitude, longitude, nome } = data;
    const localizacaoAtualizada = await prisma.localizacao.update({
        where: { id: Number(id)  },
        data: {
            latitude: latitude ? parseFloat(latitude) : undefined,
            longitude: longitude ? parseFloat(longitude) : undefined,
            nome: nome !== undefined ? nome : undefined,
        },
    });
    return localizacaoAtualizada;
};

export const deleteLocalizacao = async (id) => {
    await prisma.localizacao.delete({
        where: { id: Number(id)  },
    });
};