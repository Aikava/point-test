import { IEvent } from 'client/types';

const db = require('client/repository/db.json');


export async function loadEvents() {
  return db;
}

export async function removeEvent(id: number) {
  const i = db.findIndex((event: IEvent) => event.id === id);

  if (i < 0) {
    //send error
    return false;
  }

  db.slice(i, 1);
}

export async function updateEvent(id: number, data: object) {
  const i = db.findIndex((event: IEvent) => event.id === id);

  if (i < 0) {
    //send error
    return false;
  }

  db[i].data = JSON.stringify({ ...db[i].data, ...data });
  return db[i];
}

export function getEvent(id: IEvent['id']) {
  return db.find((event: IEvent) => event.id === id);
}
