import * as localizacaoService from '../localizacao.service.js';

describe('localizacao.service', () => {
it('deve exportar getAllLocalizacoes', () => {
    expect(typeof localizacaoService.findAllLocalizacoes).toBe('function');
});

it('deve exportar getLocalizacaoById', () => {
    expect(typeof localizacaoService.findLocalizacaoById).toBe('function');
});

it('deve exportar createLocalizacao', () => {
    expect(typeof localizacaoService.createLocalizacao).toBe('function');
});

it('deve exportar updateLocalizacao', () => {
    expect(typeof localizacaoService.updateLocalizacao).toBe('function');
});

it('deve exportar deleteLocalizacao', () => {
    expect(typeof localizacaoService.deleteLocalizacao).toBe('function');
});
});