export interface IBaseEventView {
  getRawNode: () => string;
  event: object;
  id: number;
}

export default class BaseEventView<T> {
  public event: T;
  protected tpl: (params: T) => string;

  constructor(eventData: T) {
    this.event = eventData;
  }

  getRawNode() {
    return this.tpl(this.event);
  }
}
