import {
  adicionarContato,
  listarTodos,
  buscarPorId,
  atualizar,
  deletar,
} from "../services/contato.service.js";

class ContatoController {
  async listarContatos(req, res) {
    try {
      const contatos = listarTodos();
      res.status(200).json({ contatos });
    } catch (error) {
      res.status(500).json({ mensagem: "Erro ao listar contatos." });
    }
  }

  async criarContato(req, res) {
    const { nome, telefone, email, pessoaId } = req.body;

    if (!nome || !telefone || !pessoaId) {
      return res.status(400).json({ mensagem: "Nome, telefone e pessoaId são obrigatórios." });
    }

    try {
      const novoContato = adicionarContato({ nome, telefone, email, pessoaId });
      res.status(201).json({ mensagem: "Contato criado com sucesso!", contato: novoContato });
    } catch (error) {
      res.status(400).json({ mensagem: "Erro ao criar contato." });
    }
  }

  async buscarContatoPorId(req, res) {
    try {
      const contato = buscarPorId(req.params.id);
      if (!contato) {
        return res.status(404).json({ mensagem: "Contato não encontrado." });
      }
      res.status(200).json({ contato });
    } catch (error) {
      res.status(500).json({ mensagem: "Erro ao buscar contato." });
    }
  }

  async atualizarContato(req, res) {
    try {
      const contatoAtualizado = atualizar(req.params.id, req.body);
      if (!contatoAtualizado) {
        return res.status(404).json({ mensagem: "Contato não encontrado." });
      }
      res.status(200).json({ mensagem: "Contato atualizado com sucesso!", contato: contatoAtualizado });
    } catch (error) {
      res.status(400).json({ mensagem: "Erro ao atualizar contato." });
    }
  }

  async deletarContato(req, res) {
    try {
      const contatoDeletado = deletar(req.params.id);
      if (!contatoDeletado) {
        return res.status(404).json({ mensagem: "Contato não encontrado." });
      }
      res.status(200).json({ mensagem: "Contato deletado com sucesso!" });
    } catch (error) {
      res.status(400).json({ mensagem: "Erro ao deletar contato." });
    }
  }
}

export default new ContatoController();

