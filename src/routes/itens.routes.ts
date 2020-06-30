import { Router } from 'express';
import { getRepository } from 'typeorm';

import CriarItemService from '../services/CriarItemService';
import Item from '../models/Item';

/** Instancia o express */
const itensRouter = Router();

itensRouter.get('/', async (request, response) => {
    const itensRepository = getRepository(Item);
    const itens = await itensRepository.find();

    return response.json(itens);
});

itensRouter.post('/', async (request, response) => {
    const { nome, qtde, id_lista } = request.body;

    const criarItem = new CriarItemService();

    const lista = await criarItem.execute({ nome, qtde, id_lista });

    return response.json(lista);
});

itensRouter.patch('/:id', async (request, response) => {
    const { id } = request.params;

    return response.sendStatus(204);
});

itensRouter.delete('/:id', async (request, response) => {
    const { id } = request.params;

    return response.sendStatus(204);
});

export default itensRouter;
