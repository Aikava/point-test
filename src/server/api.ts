import { Router } from 'express';
import Events from 'server/controllers/events';
import bodyParser from 'body-parser';

const api = Router();

api
  .get('/events', Events.findAll)
  .get('/events/:eventId', Events.findOne)
  .get('/events/:eventId/remove', Events.removeEvent)
  .post('/events', bodyParser.json(), Events.addEvent)
  .post('/events/:eventId/update', bodyParser.json(), Events.updateEvent);

export default api;
