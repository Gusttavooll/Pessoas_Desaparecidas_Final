import * as userService from '../services/user.services.js';

export async function registrar(req, res) {
  try {
    const novoUsuario = await userService.registrarUsuario(req.body);
    res.status(201).json(novoUsuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function login(req, res) {
  try {
    const resultado = await userService.loginUsuario(req.body);
    res.status(200).json(resultado);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}
