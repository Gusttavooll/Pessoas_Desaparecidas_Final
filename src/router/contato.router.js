import { Router } from 'express';
import ContatoController from '../controller/contato.controller.js';

const contato = Router();

contato.get("/listarContatos", ContatoController.listarContatos); // Usando GET para listar
contato.post('/criarContato', ContatoController.criarContato);   // Usando POST para criar
contato.get('/buscarContatoPorId/:id', ContatoController.buscarContatoPorId); // GET para buscar por ID
contato.put('/atualizarContato/:id', ContatoController.atualizarContato); // PUT para atualizar
contato.delete('/deletarContato/:id', ContatoController.deletarContato); // DELETE para deletar

export default contato;