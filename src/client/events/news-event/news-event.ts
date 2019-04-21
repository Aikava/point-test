import { BaseEvent } from 'client/events';
import NewsEventView from 'client/events/news-event/news-event-view';

import 'client/events/news-event/news-event.scss';

export interface INewsEvent {
  id: number;
  title: string;
  value: string;
  date: Date;
  type: string;
  isRead: boolean;
}

const template = require('client/events/news-event/news-event.hbs');

export default class NewsEvent extends BaseEvent<INewsEvent> {
  protected tpl = template;

  constructor(params: any) {
    super(params);

    this.hidden = this.data.isRead;
    this.data.date = new Date(this.data.date);
    this.eventView = new NewsEventView(this.data);
  }
}
