import { Router } from 'express';

import logRequestsMiddleware from './app/middlewares/logRequests';

import cepController from './app/controllers/CepController';

const routes = new Router();

routes.use(logRequestsMiddleware);

// Busca CEP
routes.get('/cep/:cep', cepController.show);
// Buscar CEP por UF + Cidade + Rua
//RS/Porto Alegre/ Domingos/json
routes.get('/cep', cepController.query);

export default routes;
