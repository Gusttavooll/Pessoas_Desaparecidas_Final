import * as pessoasService from '../pessoas.services.js';

describe('pessoas.service', () => {
it('deve exportar getAllPessoas', () => {
    expect(typeof pessoasService.getAllPessoas).toBe('function');
});

it('deve exportar createPessoas', () => {
    expect(typeof pessoasService.createPessoas).toBe('function');
});

it('deve exportar deletandoPessoas', () => {
    expect(typeof pessoasService.deletandoPessoas).toBe('function');
});

it('deve exportar updatedPessoasFull', () => {
    expect(typeof pessoasService.updatedPessoasFull).toBe('function');
});
});