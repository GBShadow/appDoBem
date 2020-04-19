import { Router } from 'express';

import OngController from './controllers/OngController';
import UserController from './controllers/UserController';
import CaseController from './controllers/CaseController';
import ProfileOngController from './controllers/ProfileOngController';
import ProfileUserController from './controllers/ProfileUserController';
import OngSessionController from './controllers/OngSessionController';
import UserSessionController from './controllers/UserSessionController';
import OngDetailController from './controllers/OngDetailController';

const routes = new Router();

routes.post('/ong/session', OngSessionController.create);
routes.post('/user/session', UserSessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/ong/profile', ProfileOngController.index);
routes.get('/user/profile', ProfileUserController.index);

routes.get('/ong/detail', OngDetailController.index);

routes.get('/cases', CaseController.index);

routes.post('/cases', CaseController.create);

routes.delete('/cases/:id', CaseController.delete);

export default routes;
