import 'client/view/components/event-details/event-details.scss';
import { IEventDetailsView, IEventDetails } from 'client/view/types';
import { Component } from 'client/view/base-component';

const eventDetailsTpl = require('client/view/components/event-details/event-details.hbs');

export default class WebEventDetailsView extends Component implements IEventDetails {
  private _event: IEventDetailsView;
  private _onHide: () => void;

  tpl = eventDetailsTpl;

  public set event(event: IEventDetailsView) {
    if (event) {
      this._event = event;
      this.showEventDetails();
      this.addEventListener();
    } else {
      this.removeEventListener();
      this.hideEventDetails();
      this._event = event;
    }
  }

  public get event() {
    return this._event;
  }

  public set onHide(listener: () => void) {
    this._onHide = listener;
    this.getNode().getElementsByClassName('hide-button')[0].addEventListener('click', this._onHide);
  }

  public get onHide() {
    return this._onHide;
  }

  private addEventListener() {
    const eventDetailViewNode = this.getNode();
    const actionNode = eventDetailViewNode.getElementsByClassName('action')[0];

    if(actionNode) {
      actionNode.addEventListener('click', this._event.action);
    }
  }

  private removeEventListener() {
    const eventDetailViewNode = this.getNode();
    const actionNode = eventDetailViewNode.getElementsByClassName('action')[0];

    if(actionNode) {
      actionNode.removeEventListener('click', this._event.action);
    }
  }
  private hideEventDetails() {
    const node = this.getNode();
    const contentNode = node.getElementsByClassName('content')[0];

    contentNode.innerHTML = '';
    node.style.visibility = 'hidden';
  }

  private showEventDetails() {
    const eventDetailViewNode = this.getNode();
    const contentNode = eventDetailViewNode.getElementsByClassName('content')[0];

    contentNode.append(this._event.view);
    eventDetailViewNode.style.visibility = 'inherit';
  }
}
