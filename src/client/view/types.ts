export interface IComponent {
  tpl: any;

  getNode: () => HTMLElement;
  getRawNode: () => string;
}

export interface IEvent {
  id: number;
  type: string;
  createdAt: string;
  data: any;
}

export interface IEventDetailsView {
  view: HTMLElement;
  action: () => void;
};
export type IEventView = HTMLElement

export interface IEventListView {
  eventList: Array<IEventView>;
 }

export interface IEventDetails {
  event: IEventDetailsView;
  onHide: () => void;
}

export interface IControls {

}

export abstract class IEventViewFactory {
  public abstract getEventView (event: IEvent): IEventView;
  public abstract getEventDetailsView (event: IEvent): IEventView;
}

export enum SortDirection {
  DESC = 'desc',
  ASC = 'asc'
}

export enum SortType {
  NAME = 'name',
  DATE = 'date'
}

export interface ISortParams {
  direction: SortDirection;
  type: SortType;
}

export abstract class AbstractController {
  protected _view: AbstractView;

  public abstract onShowEventList(): void;
  public abstract onShowEventDetails(eventId: IEvent['id']): void;
  public abstract onHideEventDetails(): void;
  public abstract onUpdateEvent(eventId: IEvent['id']): void;
  public abstract onRemoveEvent(eventId: IEvent['id']): void;
  public abstract onSort(params: ISortParams): void;
  public abstract onAction(params?: any): void;
  public abstract setView(view: AbstractView): void;
  public abstract setActions(actions: any): void;
}

export abstract class AbstractView implements IEventDetailsView, IEventListView {
  protected _controller: AbstractController;

  public abstract setController(controller: AbstractController): void;
  public abstract showEventList(events: Array<IEventView>): void;
  public abstract updateEvent(id: IEvent['id'], data: IEventView): void;
  public abstract showEventDetails(event: IEventDetailsView): void;
  public abstract hideEventDetails(): void;
  public abstract removeEvent(id: IEvent['id']): void;
}