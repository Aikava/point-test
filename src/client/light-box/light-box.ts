import LightBoxView from 'client/light-box/light-box-view';
import { IBaseEventView, IEvents } from 'client/types';

interface ILightBoxParams {
  onAction?: (params?: any) => any;
}

export default class LightBox {
  private view: LightBoxView;
  private hideButton: HTMLInputElement;
  private actionInput: HTMLInputElement;
  protected onAction: ILightBoxParams['onAction'];
  private currentEvent: IBaseEventView<IEvents>;

  constructor({ onAction }: ILightBoxParams = {}) {
    this.view = new LightBoxView();
    this.hideButton = this.view.node.getElementsByClassName('hide-button')[0];
    this.onAction = onAction;

    this.addListeners();
  }

  addListeners() {
    this.hideButton.addEventListener('click', this.hide.bind(this));
  }

  getNode() {
    return this.view.node;
  }

  append(event: IBaseEventView<IEvents>) {
    const content = this.view.node.getElementsByClassName('content')[0];

    content.innerHTML = event.getRawNode();
    this.appendAction();
  }

  appendAction() {
    if (!this.onAction) {
      return;
    }

    const currentEvent = this.currentEvent;

    this.actionInput = this.view.node.getElementsByClassName('action')[0];
    this.actionInput.addEventListener('click', this.onAction.bind(null, currentEvent));
  }

  show(event: IBaseEventView<IEvents>, id: number) {
    this.currentEvent = { ...event, id };

    this.append(event);
    this.view.show();
  }

  hide() {
    this.currentEvent = null;
    this.view.hide();
  }
}
