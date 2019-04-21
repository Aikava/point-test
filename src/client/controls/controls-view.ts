import $ from 'jquery';
import 'client/controls/controls.scss';

const tpl = require('client/controls/controls.hbs');

export default class ControlsView {
  private div: any;

  constructor() {
    this.div = $(tpl(this))[0];
  }

  getNode() {
    return this.div;
  }
}
