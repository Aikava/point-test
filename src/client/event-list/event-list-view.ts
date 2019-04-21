import $ from 'jquery';

import 'client/event-list/event-list.scss';

const tpl = require('client/event-list/event-list.hbs');

interface IEventListViewParams {
  init?: boolean;
}

export default class EventListView {
  public node: any;
  constructor({ init = true}: IEventListViewParams = {}) {
    if (init) {
      this.init();
    }
  }

  init() {
    this.node = $(tpl(this))[0];
  }

}
