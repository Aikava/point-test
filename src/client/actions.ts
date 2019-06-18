import * as Repository from 'client/repository';
import { IEvent } from 'client/view/types';

export async function getEvents() {
  return await Repository.loadEvents();
}

export async function getEvent(eventId: IEvent['id']) {
  return await Repository.getEvent(eventId);
}

export async function updateEvent(eventId: IEvent['id'], data: object) {
  return await Repository.updateEvent(eventId, data);
}

export async function removeEvent(eventId: IEvent['id']) {
  return await Repository.removeEvent(eventId)
}