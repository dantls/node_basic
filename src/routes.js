import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ hello: 'World1' }));

export default routes;
