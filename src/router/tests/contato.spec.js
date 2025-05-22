import contato from '../contato.router.js';

describe('contato router', () => {
it('deve definir todas as rotas corretamente', () => {
    const routes = contato.stack
    .filter(layer => layer.route)
    .map(layer => ({
        path: layer.route.path,
        methods: Object.keys(layer.route.methods)
    }));

    expect(routes).toEqual(
    expect.arrayContaining([
        expect.objectContaining({ path: '/listarContatos', methods: expect.arrayContaining(['get']) }),
        expect.objectContaining({ path: '/criarContato', methods: expect.arrayContaining(['post']) }),
        expect.objectContaining({ path: '/buscarContatoPorId/:id', methods: expect.arrayContaining(['get']) }),
        expect.objectContaining({ path: '/atualizarContato/:id', methods: expect.arrayContaining(['put']) }),
        expect.objectContaining({ path: '/deletarContato/:id', methods: expect.arrayContaining(['delete']) }),
    ])
    );
});
});