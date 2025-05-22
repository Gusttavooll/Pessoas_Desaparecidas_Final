import user from '../user.routes.js';

describe('user router', () => {
it('deve definir todas as rotas corretamente', () => {
    const routes = user.stack
    .filter(layer => layer.route)
    .map(layer => ({
        path: layer.route.path,
        methods: Object.keys(layer.route.methods)
    }));

    expect(routes).toEqual(
    expect.arrayContaining([
        expect.objectContaining({ path: '/registrar', methods: expect.arrayContaining(['post']) }),
        expect.objectContaining({ path: '/login', methods: expect.arrayContaining(['post']) }),
    ])
    );
});
});