import { Router } from 'express';

import listasRouter from './listas.routes';
import itensRouter from './itens.routes';

const routes = Router();

routes.use('/listas', listasRouter);
routes.use('/itens', itensRouter);

export default routes;
