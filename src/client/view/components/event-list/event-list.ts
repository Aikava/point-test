import 'client/view/components/event-list/event-list.scss';
import { IEventListView, IEventView } from 'client/view/types';
import { Component } from 'client/view/base-component';

const eventListTpl = require('client/view/components/event-list/event-list.hbs');

export default class WebEventListView extends Component implements IEventListView {
  private _eventList: Array<IEventView>;

  tpl = eventListTpl;

  public set eventList(eventList: Array<IEventView>) {
    this._eventList = eventList;

    this.showEventList(this._eventList);
  }

  public get eventList() {
    return this._eventList;
  }

  private showEventList(events: Array<IEventView>) {
    this
    .getNode()
    .append(...events);
  }

  private updateEvent(id: number, data: IEventView) {
    
  }
}
