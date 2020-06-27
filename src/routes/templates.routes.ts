import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import TemplatesRepository from '../repositories/TemplatesRepository';
import CriarTemplateService from '../services/CriarTemplateService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

/** Instancia o express */
const templatesRouter = Router();

/**
 * Define o uso do middleware de autenticação para todas as rotas
 */
templatesRouter.use(ensureAuthenticated);

templatesRouter.get('/', async (request, response) => {
    /**
     * Recupera o repositório e iniciliza-o na variável
     */
    const templatesRepository = getCustomRepository(TemplatesRepository);
    const appointments = await templatesRepository.find();

    return response.json(appointments);
});

/**
 * Não é necessário apontar o recurso na rota "/templates", pois essa indicação já está
 * sendo realizada no arquivo index.ts
 */
templatesRouter.post('/', async (request, response) => {
    const { nome, data } = request.body;

    const createAppointment = new CriarTemplateService();

    const appointment = await createAppointment.execute({
        nome,
        data,
    });

    return response.json(appointment);
});

export default templatesRouter;
