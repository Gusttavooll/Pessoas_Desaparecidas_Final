import { Router } from "express";
import LocalizacaoController from '../controller/localizacao.controller.js';

const local = Router();

local.get("/",LocalizacaoController.getAllLocalizacoes);
local.get("/LocalizacaoById:id",LocalizacaoController.getLocalizacaoById);
local.post("/createLocalizacao",LocalizacaoController.createLocalizacao);
local.put("/updateLocalizacao:id",LocalizacaoController.updateLocalizacao);
local.delete("/deleteLocalizacao:id",LocalizacaoController.deleteLocalizacao);

export default local;