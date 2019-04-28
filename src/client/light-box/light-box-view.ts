import $ from 'jquery';
import 'client/light-box/light-box.scss';

const tpl = require('client/light-box/light-box.hbs');

export default class LightBoxView {
  public node: any;

  constructor() {
    this.node = $(tpl(this))[0];
  }

  public hide() {
    this.node.style.display = 'none';
  }

  public show() {
    this.node.style.display = 'block';
  }
}
