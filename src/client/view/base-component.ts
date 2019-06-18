import $ from 'jquery';
import { IComponent } from 'client/view/types';

export class Component implements IComponent {
  tpl: (data: IComponent) => string;

  private node: HTMLElement;

  getNode() {
    if (!this.node) {
      this.node = $(this.getRawNode())[0];
    }

    return this.node;
  }

  getRawNode(): string {
    return this.tpl(this);
  }
}