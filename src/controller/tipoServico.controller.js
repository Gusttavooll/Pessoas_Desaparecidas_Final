import * as tipoServicoService from '../services/tipoServico.service.js'; // Importa todas as funções do service

export const getAllTipoServicos = async (req, res) => {
    try {
        const tipoServicos = await tipoServicoService.findAllTipoServicos();
        res.status(200).json(tipoServicos);
    } catch (error) {
        console.error("Erro no controller ao buscar tipos de serviço:", error);
        res.status(500).json({ message: "Erro interno do servidor." });
    }
};

export const getTipoServicoById = async (req, res) => {
    const { id } = req.params;
    try {
        const tipoServico = await tipoServicoService.findTipoServicoById(id);
        if (!tipoServico) {
            return res.status(404).json({ message: "Tipo de serviço não encontrado." });
        }
        res.status(200).json(tipoServico);
    } catch (error) {
        console.error("Erro no controller ao buscar tipo de serviço por ID:", error);
        res.status(500).json({ message: "Erro interno do servidor." });
    }
};

export const createTipoServico = async (req, res) => {
    const { nome, descricao, custoEstimado, ativo } = req.body;
    if (!nome) {
        return res.status(400).json({ message: "O nome do tipo de serviço é obrigatório." });
    }
    try {
        const novoTipoServico = await tipoServicoService.createTipoServico({ nome, descricao, custoEstimado, ativo });
        res.status(201).json(novoTipoServico);
    } catch (error) {
        console.error("Erro no controller ao criar tipo de serviço:", error);
        // O tratamento de erro específico do Prisma (P2002) é feito no service,
        // mas o controller ainda trata a resposta HTTP
        if (error.code === 'P2002' && error.meta?.target?.includes('nome')) {
            return res.status(409).json({ message: "Já existe um tipo de serviço com este nome." });
        }
        res.status(500).json({ message: "Erro interno do servidor." });
    }
};

export const updateTipoServico = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, custoEstimado, ativo } = req.body;
    try {
        const tipoServicoAtualizado = await tipoServicoService.updateTipoServico(id, { nome, descricao, custoEstimado, ativo });
        res.status(200).json(tipoServicoAtualizado);
    } catch (error) {
        console.error("Erro no controller ao atualizar tipo de serviço:", error);
        if (error.code === 'P2025') { // Prisma error code for record not found
            return res.status(404).json({ message: "Tipo de serviço não encontrado para atualização." });
        }
        if (error.code === 'P2002' && error.meta?.target?.includes('nome')) {
            return res.status(409).json({ message: "Já existe um tipo de serviço com este nome." });
        }
        res.status(500).json({ message: "Erro interno do servidor." });
    }
};

export const deleteTipoServico = async (req, res) => {
    const { id } = req.params;
    try {
        await tipoServicoService.deleteTipoServico(id);
        res.status(204).send(); // No Content
    } catch (error) {
        console.error("Erro no controller ao deletar tipo de serviço:", error);
        if (error.code === 'P2025') { // Prisma error code for record not found
            return res.status(404).json({ message: "Tipo de serviço não encontrado para exclusão." });
        }
        res.status(500).json({ message: "Erro interno do servidor." });
    }
};  