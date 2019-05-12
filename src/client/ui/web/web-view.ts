import {  IView, IEventDetailsView, IEventListView, IEventViewFactory } from 'client/ui/types';
import { IEvent } from 'client/types';
import WebEventListView from 'client/ui/web/components/event-list/event-list';
import WebEventDetailsView from 'client/ui/web/components/event-details/event-details';
import { IComponent } from 'client/ui/web/types';
import WebEventViewFactory from 'client/ui/web/event-factory';

export default class WebView implements IView {
  private mountPoint: HTMLElement;
  private eventListView: IEventListView & IComponent;
  private eventDetailsView: IEventDetailsView & IComponent;

  constructor() {
    this.mountPoint = document.getElementById('app');
    this.eventListView = new WebEventListView();
    this.eventDetailsView = new WebEventDetailsView();

    this.mountPoint.append(this.eventDetailsView.getNode(), this.eventListView.getNode());
  }

  showEventDetails(event: IEvent) {
    this.eventDetailsView.show(event);
  }

  hideEventDetails() {
    this.eventDetailsView.hide();
  }

  showEventList(events: Array<IEvent>) {
    const eventsView = events.map(WebEventViewFactory.GetEventView);

    this.eventListView.display(eventsView);
  }
}