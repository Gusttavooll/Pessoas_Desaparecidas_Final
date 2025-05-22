import * as avistamentoService from '../avistamento.services.js';

describe('avistamento.service', () => {
it('deve exportar getAllAvistamentos', () => {
    expect(typeof avistamentoService.getAllAvistamentos).toBe('function');
});

it('deve exportar createAvistamento', () => {
    expect(typeof avistamentoService.createAvistamento).toBe('function');
});

it('deve exportar deleteAvistamento', () => {
    expect(typeof avistamentoService.deleteAvistamento).toBe('function');
});

it('deve exportar updateAvistamento', () => {
    expect(typeof avistamentoService.updateAvistamento).toBe('function');
});
});