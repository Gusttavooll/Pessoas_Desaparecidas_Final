import { logEvents } from "../middleware/logger.middleware.js";
import {
  getAllPessoas,
  createPessoas, // deve ser igual ao nome exportado no service
  deletandoPessoas,
  updatedPessoasFull
} from "../services/pessoas.services.js";

class PessoaController
{
    async getPessoas(req, res) 
    {
        const pessoas = await getAllPessoas();
        res.status(200).json({ pessoas });
    }

    async cadastrarPessoas(req, res) {
        const {
            nome,
            idade,
            dataDesaparecimento,
            descricao,
            status
        } = req.body;

        if (
            !nome ||
            !idade ||
            !dataDesaparecimento ||
            !status
        ) {
            return res.status(400).json({ message: "Forneça todos os campos obrigatórios para continuar..." });
        }

        await logEvents(`Cadastrando Pessoa_Desaparecida`, "CadastrarPessoa.log");
        try {
            const pessoa = await createPessoas({
                nome,
                idade,
                dataDesaparecimento,
                descricao,
                status
            });
            res.status(201).json({ message: "Pessoa cadastrada com sucesso!", pessoa });
        } catch (error) {
            res.status(500).json({ message: "Erro ao cadastrar pessoa.", error: error.message });
        }
    }

    async deletarPessoas(req, res)
    {
        const { id } = req.params;
        await logEvents(`Deletando id:${id}`, "deletaPessoas.log");
        const pessoa = await deletandoPessoas(id);
        if (!pessoa) {
            return res.status(404).json({ message: "Pessoa não encontrada." });
        }
        res.status(200).json({
            message: "Pessoa Deletada Com Sucesso...",
            pessoaDeletada: pessoa,
        });
    }

    async AtualizarPessoas(req, res)
    {
        const { id } = req.params;
        const {
            nome,
            idade,
            dataDesaparecimento,
            descricao,
            status
        } = req.body;
        if (
            !nome ||
            !idade ||
            !dataDesaparecimento ||
            !status
        ) {
            return res.status(400).json({ message: "Forneça todos os campos obrigatórios para continuar..." });
        }
        const updated = await updatedPessoasFull(id, {
            nome,
            idade,
            dataDesaparecimento,
            descricao,
            status
        });
        if (!updated) {
            return res.status(404).json({ message: "Pessoa não encontrada." });
        }
        res.status(200).json({ message: "Pessoa atualizada completamente!", pessoas: updated });
    }
}

export default new PessoaController();

