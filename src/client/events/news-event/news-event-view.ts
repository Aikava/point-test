import BaseEventView from 'client/events/base-event/base-event-view';
import { INewsEvent } from 'client/types';

import 'client/events/news-event/news-event-view.scss';

const template = require('client/events/news-event/news-event-view.hbs');

export default class NewsEventView extends BaseEventView<INewsEvent> {
  protected tpl = template;
}
