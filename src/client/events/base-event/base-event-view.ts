import { IBaseEventView, IEvents } from 'client/types';
import moment = require('moment');

export default class BaseEventView<T extends IEvents> implements IBaseEventView<T> {
  public event: T;
  public id: IBaseEventView<T>['id'];
  protected tpl: (params: T) => string;

  constructor(eventData: T) {
    this.event = eventData;
    this.id = eventData.id;
  }

  prepareData(data: T) {
    const { date } = data;

    return {
      ...data,
      date: moment(date).locale('ru').format('DD MMMM YYYY')
    };
  }

  getRawNode() {
    return this.tpl(this.prepareData(this.event));
  }
}
