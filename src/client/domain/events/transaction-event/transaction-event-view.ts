import BaseEventView from 'client/domain/events/base-event/base-event-view';
import { ITransactionEvent } from 'client/domain/events';

import 'client/domain/events/transaction-event/transaction-event-view.scss';

const template = require('client/events/transaction-event/transaction-event-view.hbs');

export default class TransactionEventView extends BaseEventView<ITransactionEvent> {
  protected tpl = template;
}
