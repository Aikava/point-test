import $ from 'jquery';
import 'client/view/components/events/transaction-event/transaction-event.scss';
import { IEventView } from 'client/view/types';

const listElementTpl = require('client/view/components/events/transaction-event/transaction-event.hbs');
const eventDetailsTpl = require('client/view/components/events/transaction-event/transaction-event-details.hbs');

export function event(data: IEventView): HTMLElement {
  return $(listElementTpl(data))[0];
}

export function eventDetails(data: IEventView): HTMLElement {
  return $(eventDetailsTpl(data))[0]
}
