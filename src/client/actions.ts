import { IEvent } from 'client/types';

const db = require('client/api/db.json');

export async function loadEvents() {
  return db;
}

export async function removeEvent(id: number) {
  const i = db.findIndex((event: IEvent) => event.id === id);

  if (i < 0) {
    return false;
  }

  db.slice(i, 1);
}

export async function updateEvent(id: number, data: object) {
  const i = db.findIndex((event: IEvent) => event.id === id);

  if (i < 0) {
    return false;
  }

  return db[i].data = { ...db[i].data, ...data };
}
