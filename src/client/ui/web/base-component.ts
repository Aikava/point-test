import $ from 'jquery';
import { IComponent } from 'client/ui/web/types';

export class Component implements IComponent {
  tpl: any;

  private node: HTMLElement;

  getNode() {
    if (!this.node) {
      this.node = $(this.getRawNode())[0];
    }

    return this.node;
  }

  getRawNode() {
    return this.tpl(this);
  }
}