import * as localizacaoService from '../services/localizacao.service.js';

class LocalizacaoController {
async getAllLocalizacoes(req, res) {
    try {
    const localizacoes = await localizacaoService.findAllLocalizacoes();
    res.status(200).json(localizacoes);
    } catch (error) {
    console.error("Erro no controller ao buscar localizações:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
    }
}

async getLocalizacaoById(req, res) {
    const { id } = req.params;
    try {
    const localizacao = await localizacaoService.findLocalizacaoById(id);
    if (!localizacao) {
        return res.status(404).json({ message: "Localização não encontrada." });
    }
    res.status(200).json(localizacao);
    } catch (error) {
    console.error("Erro no controller ao buscar localização por ID:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
    }
}

async createLocalizacao(req, res) {
    const { latitude, longitude, nome } = req.body;
    if (!latitude || !longitude) {
    return res.status(400).json({ message: "Latitude e Longitude são obrigatórias." });
    }
    try {
    const novaLocalizacao = await localizacaoService.createLocalizacao({ latitude, longitude, nome });
    res.status(201).json(novaLocalizacao);
    } catch (error) {
    console.error("Erro no controller ao criar localização:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
    }
}

async updateLocalizacao(req, res) {
    const { id } = req.params;
    const { latitude, longitude, nome } = req.body;
    try {
    const localizacaoAtualizada = await localizacaoService.updateLocalizacao(id, { latitude, longitude, nome });
    res.status(200).json(localizacaoAtualizada);
    } catch (error) {
    console.error("Erro no controller ao atualizar localização:", error);
    if (error.code === 'P2025') {
        return res.status(404).json({ message: "Localização não encontrada para atualização." });
    }
    res.status(500).json({ message: "Erro interno do servidor." });
    }
}

async deleteLocalizacao(req, res) {
    const { id } = req.params;
    try {
    await localizacaoService.deleteLocalizacao(id);
      res.status(204).send(); // No Content
    } catch (error) {
    console.error("Erro no controller ao deletar localização:", error);
    if (error.code === 'P2025') {
        return res.status(404).json({ message: "Localização não encontrada para exclusão." });
    }
    res.status(500).json({ message: "Erro interno do servidor." });
    }
}
}

export default new LocalizacaoController();