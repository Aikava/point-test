import moment from 'moment';

import { BaseEvent } from 'client/events';
import 'client/events/transaction-event/transaction-event.scss';
import TransactionEventView from './transaction-event-view';


export interface ITransactionEvent {
  id: number;
  transactionSum: number;
  currency: string;
  from: string;
  description: string;
  isComing: boolean;
  date: Date | number;
  isDeleted: boolean;
  type: string;
}

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
      date: moment(date).format('DD MM YYYY')
    }
  }
}
