import { IEvent } from 'client/types';

export interface IEventView extends IEvent {
}

export interface IEventListView {
  display: (events: Array<IEventView>) => void;
  updateEvent: (eventId: IEvent['id']) => void;
 }

export interface IEventDetailsView {
  show: (event: IEvent) => void;
  hide: () => void;
 }

export interface IView {
  showEventList: (eventList: Array<IEventView>) => void;
  showEventDetails: (event: IEventView) => void;
  hideEventDetails: () => void;
}

export abstract class IEventViewFactory {
  public static GetEventView: (event: IEvent) => IEventView;
}