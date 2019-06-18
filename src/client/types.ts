import { IEventView } from 'client/view/types';

export enum EventTypes {
  NEWS = 'news',
  TRANSACTION = 'transaction'
}

export type IEvents = INewsEvent | ITransactionEvent;
export interface IEvent {
  id: number;
  type: EventTypes;
  createdAt: string;
  data: string;
}

export interface IBaseEvent {
  id: number;
  type: string;
  data: object;
  getRawNode: () => string;
  eventView: IBaseEventView<IEvents>;
  hidden: boolean;
}

export interface IBaseEventView <T> {
  getRawNode: () => string;
  event: T;
  id: number;
}

export interface INewsEvent {
  id: IBaseEvent['id'];
  title: string;
  value: string;
  date: Date;
  type: string;
  isRead: boolean;
}

export interface ITransactionEvent {
  id: IBaseEvent['id'];
  sum: number;
  currency: string;
  from: string;
  description: string;
  isComing: boolean;
  date: Date | number;
  isDeleted: boolean;
  type: string;
}

export abstract class AbstractEventController {
  protected currentView: IEventView;

  protected abstract set view (view: IEventView);
}
