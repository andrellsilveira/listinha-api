import { Router } from 'express';
import { getRepository } from 'typeorm';

import CriarListaService from '../services/CriarListaService';
import Lista from '../models/Lista';

/** Instancia o express */
const listasRouter = Router();

listasRouter.get('/', async (request, response) => {
    const listasRepository = getRepository(Lista);
    const listas = await listasRepository.find();

    return response.json(listas);
});

/**
 * Não é necessário apontar o recurso na rota "/listas", pois essa indicação já está
 * sendo realizada no arquivo index.ts
 */
listasRouter.post('/', async (request, response) => {
    const { nome } = request.body;

    const criarLista = new CriarListaService();

    const lista = await criarLista.execute(nome);

    return response.json(lista);
});

listasRouter.patch('/:id', async (request, response) => {
    const { id } = request.params;

    return response.sendStatus(204);
});

listasRouter.delete('/:id', async (request, response) => {
    const { id } = request.params;

    return response.sendStatus(204);
});

export default listasRouter;
