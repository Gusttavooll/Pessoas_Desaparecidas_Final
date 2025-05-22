import { logEvents } from "../middleware/logger.middleware.js";
import {
    getAllAvistamentos,
    createAvistamento,
    deleteAvistamento,
    updateAvistamento,
  // getAvistamentoById // Se for usar a função comentada
} from "../services/avistamento.services.js";


class AvistamentoController {
async getAvistamentos(req, res) {
    try {
    const avistamentos = await getAllAvistamentos();
    res.status(200).json({ avistamentos });
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar avistamentos." });
    }
}

async cadastrarAvistamento(req, res) {
    const {
    idPessoaDesaparecida,
    comentario,
    localAvistamento,
    latitude,
    longitude,
    nomeInformante,
    contatoInformante,
    } = req.body;

    if (!idPessoaDesaparecida || !comentario) {
    return res.status(400)
        .json({ message: "ID da pessoa desaparecida e comentário são obrigatórios." });
    }

    try {
    await logEvents(`Cadastrando Avistamento da Pessoa ID: ${idPessoaDesaparecida}`, "cadastrarAvistamento.log");
    const novoAvistamento = await createAvistamento({
        idPessoaDesaparecida,
        comentario,
        localAvistamento,
        latitude,
        longitude,
        nomeInformante,
        contatoInformante,
    });
    res.status(201).json({ message: "Avistamento cadastrado com sucesso!", avistamento: novoAvistamento });
    } catch (error) {
    console.error("Erro ao cadastrar avistamento:", error);
    res.status(500).json({ message: "Erro ao cadastrar avistamento." });
    }
}
 // Não adicionar Avistamento por ID
/* async getAvistamentoPorId(req, res) {
    const { id } = req.params;
    try {
    const avistamento = await getAvistamentoById(id);
    if (!avistamento) {
        return res.status(404).json({ message: "Avistamento não encontrado." });
    }
    res.status(200).json({ avistamento });
    } catch (error) {
    console.error(`Erro ao buscar avistamento com ID ${id}:`, error);
    res.status(500).json({ message: "Erro ao buscar avistamento." });
    }
} */

async deletarAvistamento(req, res) {
    const { id } = req.params;
    try {
    await logEvents(`Deletando avistamento id:${id}`, "deletarAvistamento.log");
    const avistamentoDeletado = await deleteAvistamento(id);
    if (!avistamentoDeletado) {
        return res.status(404).json({ message: "Avistamento não encontrado." });
    }
    res.status(200).json({
        message: "Avistamento deletado com sucesso.",
        avistamento: avistamentoDeletado,
    });
    } catch (error) {
    console.error(`Erro ao deletar avistamento com ID ${id}:`, error);
    res.status(500).json({ message: "Erro ao deletar avistamento." });
    }
}

async atualizarAvistamento(req, res) {
    const { id } = req.params;
    const {
    idPessoaDesaparecida,
    comentario,
    localAvistamento,
    latitude,
    longitude,
    nomeInformante,
    contatoInformante,
    } = req.body;

    if (!idPessoaDesaparecida || !comentario) {
    return res
        .status(400)
        .json({ message: "ID da pessoa desaparecida e comentário são obrigatórios." });
    }

    try {
    const avistamentoAtualizado = await updateAvistamento(id, {
        idPessoaDesaparecida,
        comentario,
        localAvistamento,
        latitude,
        longitude,
        nomeInformante,
        contatoInformante,
    });

    if (!avistamentoAtualizado) {
        return res.status(404).json({ message: "Avistamento não encontrado." });
    }

    res.status(200).json({
        message: "Avistamento atualizado com sucesso!",
        avistamento: avistamentoAtualizado,
    });
    } catch (error) {
    console.error(`Erro ao atualizar avistamento com ID ${id}:`, error);
    res.status(500).json({ message: "Erro ao atualizar avistamento." });
    }
}
}

export default new AvistamentoController();