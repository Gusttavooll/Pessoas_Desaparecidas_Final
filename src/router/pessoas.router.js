import { Router } from "express";
import PessoaController from "../controller/pessoas.controller.js";

const pessoas = Router();

pessoas.get("/",PessoaController.getPessoas);
pessoas.post("/cadastrar",PessoaController.cadastrarPessoas)
pessoas.delete("/deletar/:id",PessoaController.deletarPessoas)
pessoas.patch("/atualizar/:id",PessoaController.AtualizarPessoas)



export default pessoas;