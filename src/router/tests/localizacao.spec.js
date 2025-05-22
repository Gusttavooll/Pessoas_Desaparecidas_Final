import local from '../localizacao.router.js';

describe('localizacao router', () => {
it('deve definir todas as rotas corretamente', () => {
    const routes = local.stack
    .filter(layer => layer.route)
    .map(layer => ({
        path: layer.route.path,
        methods: Object.keys(layer.route.methods)
    }));

    expect(routes).toEqual(
    expect.arrayContaining([
        expect.objectContaining({ path: '/', methods: expect.arrayContaining(['get']) }),
        expect.objectContaining({ path: '/LocalizacaoById:id', methods: expect.arrayContaining(['get']) }),
        expect.objectContaining({ path: '/createLocalizacao', methods: expect.arrayContaining(['post']) }),
        expect.objectContaining({ path: '/updateLocalizacao:id', methods: expect.arrayContaining(['put']) }),
        expect.objectContaining({ path: '/deleteLocalizacao:id', methods: expect.arrayContaining(['delete']) }),
    ])
    );
});
});