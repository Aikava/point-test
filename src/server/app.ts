import { get } from 'config';
import express from 'express';
import router from 'server/router';
import api from './api';

const app = express();

app
  .use(express.static(get('staticDir')))
  .use('/api', api)
  .use(router);



export default app;
