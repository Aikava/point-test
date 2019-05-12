import 'client/ui/web/components/event-details/event-details.scss';
import { IEventDetailsView, IComponent } from 'client/ui/types';
import { Component } from 'client/ui/web/base-component';

const eventDetailsTpl = require('client/ui/web/components/event-details/event-details.hbs');

export default class WebEventDetailsView extends Component implements IEventDetailsView {
  tpl = eventDetailsTpl;

  public hide() {
    // this.node.style.display = 'none';
  }

  public show() {
    // this.node.style.display = 'block';
  }

}
