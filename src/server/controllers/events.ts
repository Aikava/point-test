import { Request, Response } from 'express';
import db from 'server/db';
import { IDBEvent } from 'server/db/events';

export default class Events {
  public static async findAll(req: Request, res: Response) {
    const all: Array<IDBEvent> = await db.events.findAll().map(instance => instance.toJSON());

    res.json(all);
  }

  public static async findOne(req: Request, res: Response) {
    const { params: { eventId } } = req;
    const one = await db.events.findOne({ where: { id: parseInt(eventId) }, raw: true } as any);

    if(!one) {
      res.sendStatus(404);

      return;
    }

    res.json(one);
  }

  public static async addEvent(req: Request, res: Response) {
    const { body: { createdAt, type, data } } = req;

    if(!(createdAt && type && data)) {
      res.sendStatus(400);

      return;
    }

    try {
      await db.events.create({  createdAt, type, data});
      res.json({ result: true });
    } catch (err) {
      res.status(400).json(err);
    }
  }

  public static async removeEvent(req: Request, res: Response) {
    const { eventId: id } = req.params;

    const event = db.events.findOne({ where: { id: parseInt(id) } });

    if (!event) {
      res.sendStatus(404);

      return;
    }

    try {
      await db.events.destroy({ where: { id: parseInt(id) } });

      res.json({ result: true });
    } catch (err) {
      res.status(400).json(err);
    }
  }

  public static async updateEvent(req: Request, res: Response) {
    const { params: { eventId: id }, body: { data } } = req;

    const event = db.events.findOne({ where: { id: parseInt(id) } });

    if (!event) {
      res.sendStatus(404);

      return;
    }

    try {
      await db.events.update({ data }, { where: { id: parseInt(id) } });

      res.json({ result: true });
    } catch (err) {
      res.status(400).json(err);
    }
  }
}
