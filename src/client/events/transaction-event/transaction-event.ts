import moment from 'moment';

import { BaseEvent } from 'client/events';
import 'client/events/transaction-event/transaction-event.scss';
import { ITransactionEvent } from 'client/types';
import TransactionEventView from 'client/events/transaction-event/transaction-event-view';

const template = require('client/events/transaction-event/transaction-event.hbs');

export default class TransactionEvent extends BaseEvent<ITransactionEvent> {
  protected tpl = template;

  constructor(params: any) {
    super(params);

    this.hidden = this.data.isDeleted;
    this.data.date = new Date(this.data.date);
    this.eventView = new TransactionEventView(this.data);
  }

  prepareData({ date, ...data}: ITransactionEvent) {
    return {
      ...data,
      date: moment(date).format('DD.MM.YYYY')
    }
  }
}
