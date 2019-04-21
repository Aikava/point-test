import $ from 'jquery';
import 'client/light-box/light-box.scss';

interface IField {
  name: string;
  id: string;
}

const tpl = require('client/light-box/light-box.hbs');

export default class LightBoxView {
  public node: any;

  constructor() {
    this.node = $(tpl(this))[0];
  }

  hide() {
    this.node.style.display = 'none';
  }

  show() {
    this.node.style.display = 'block';
  }
}
