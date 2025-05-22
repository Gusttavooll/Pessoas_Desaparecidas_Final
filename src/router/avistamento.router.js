import { Router } from "express";
import AvistamentoController from "../controller/avistamento.controller.js"

const avistamento = Router();

avistamento.get("/",AvistamentoController.getAvistamentos);
avistamento.post("/cadastrar",AvistamentoController.cadastrarAvistamento);
avistamento.delete("/deletar/:id",AvistamentoController.deletarAvistamento);
avistamento.patch("/atualizar/:id",AvistamentoController.atualizarAvistamento);



export default avistamento;