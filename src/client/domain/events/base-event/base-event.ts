import { IBaseEvent, IEvents } from 'client/types';


export default class BaseEvent<T extends IEvents> {
  public data: T;
  public id: IBaseEvent['id'];
  public type: IBaseEvent['type'];
  public hidden = false;
  public eventView: IBaseEvent['eventView'];

  protected tpl: (data: object) => string;

  constructor({ data, id, type }: { data: T | string, id: number, type: string }) {
    this.data = typeof data  === 'string' ? JSON.parse(data) : data;
    this.id = id;
    this.type = type;
  }

  prepareData(data: T): object {
    return data;
  }

  getRawNode() {
    return this.tpl(this.prepareData({ ...this.data, id: this.id, type: this.type }));
  }
}
