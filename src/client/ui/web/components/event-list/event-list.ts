import 'client/ui/web/components/event-list/event-list.scss';
import { IEventListView, IEventView } from 'client/ui/types';
import { IEvent } from 'client/types';
import { Component } from 'client/ui/web/base-component';
import { WebEventView } from 'client/ui/web/types';

const eventListTpl = require('client/ui/web/components/event-list/event-list.hbs');

export default class WebEventListView extends Component implements IEventListView {
  tpl = eventListTpl;

  display(events: Array<HTMLElement>) {
    this
    .getNode()
    .append(...events);
  }

  updateEvent(eventId: IEvent['id']) {

  }
}
