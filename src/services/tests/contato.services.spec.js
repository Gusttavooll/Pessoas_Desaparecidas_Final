import * as contatoService from '../contato.service.js';

describe('contato.service', () => {
it('deve exportar adicionarContato', () => {
    expect(typeof contatoService.adicionarContato).toBe('function');
});

it('deve exportar listarTodos', () => {
    expect(typeof contatoService.listarTodos).toBe('function');
});

it('deve exportar buscarPorId', () => {
    expect(typeof contatoService.buscarPorId).toBe('function');
});

it('deve exportar atualizar', () => {
    expect(typeof contatoService.atualizar).toBe('function');
});

it('deve exportar deletar', () => {
    expect(typeof contatoService.deletar).toBe('function');
});
});