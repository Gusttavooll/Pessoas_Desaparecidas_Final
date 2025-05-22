import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const SECRET = process.env.JWT_SECRET || 'segredo_super_secreto';

export const registrarUsuario = async ({ nome, email, senha, tipo_usuario }) => {
  const senha_hash = await bcrypt.hash(senha, 10);

  const user = await prisma.uSER.create({
    data: {
      nome,
      email,
      senha_hash,
      tipo_usuario,
    },
  });

  return { id: user.id, nome: user.nome, email: user.email };
};
export const loginUsuario = async ({ email, senha }) => {
  const user = await prisma.uSER.findUnique({ where: { email } });

  if (!user) throw new Error('Usuário não encontrado');

  const senhaCorreta = await bcrypt.compare(senha, user.senha_hash);
  if (!senhaCorreta) throw new Error('Senha incorreta');

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '1h' });

  return { token };
};
