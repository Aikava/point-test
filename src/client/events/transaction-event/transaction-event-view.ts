import BaseEventView from 'client/events/base-event/base-event-view';
import { ITransactionEvent } from 'client/events';

import 'client/events/transaction-event/transaction-event-view.scss';

const template = require('client/events/transaction-event/transaction-event-view.hbs');

export default class TransactionEventView extends BaseEventView<ITransactionEvent> {
  protected tpl = template;
}
