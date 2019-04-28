import { BaseEvent } from 'client/events';
import { INewsEvent } from 'client/types';
import NewsEventView from 'client/events/news-event/news-event-view';

import 'client/events/news-event/news-event.scss';

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
