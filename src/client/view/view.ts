import { IEventDetailsView, IEventListView, IControls, IComponent,  AbstractView, IEventView, IEventDetails, IEvent } from 'client/view/types';
import WebEventListView from 'client/view/components/event-list/event-list';
import WebEventDetailsView from 'client/view/components/event-details/event-details';
import Controls from 'client/view/components/controls/controls';
import ApplicationController from 'client/view/controller';

export default class WebView extends AbstractView {
  private mountPoint: HTMLElement;
  private eventListView: IEventListView & IComponent;
  private eventDetailsView: IEventDetails & IComponent;
  private controls: IControls & IComponent;
  public controller: ApplicationController;

  constructor() {
    super();

    this.mountPoint = document.getElementById('app');
    this.eventListView = new WebEventListView();
    this.eventDetailsView = new WebEventDetailsView();
    this.controls = new Controls();

    this.mountPoint.append(this.controls.getNode(), this.eventDetailsView.getNode(), this.eventListView.getNode());
  }

  setController(controller: ApplicationController) {
    this.controller = controller;

    this.eventListView.getNode().addEventListener('click', e => this.onShowEventDetails(e));
    this.eventDetailsView.onHide = () => this.onHideEventDetails();
    this.controls.getNode().addEventListener('click', e => this.onSort(e));
  }

  onShowEventDetails(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const eventDiv = target.closest('.event') as HTMLElement;

    if (eventDiv) {
      const id = eventDiv.dataset['id'];

      this.controller.onShowEventDetails(parseInt(id));
    }
  }

  onHideEventDetails() {
    this.controller.onHideEventDetails();
  }

  showEventDetails(event: IEventDetailsView) {
    this.eventDetailsView.event = event;
  }

  hideEventDetails() {
    this.eventDetailsView.event = null;
  }

  showEventList(events: Array<IEventView>) {
    this.eventListView.eventList = events;
  }

  updateEvent(eventId: number, element: IEventView) {
    const event = this.eventListView.getNode().querySelector(`.event[data-id="${eventId}"]`);

    this.eventListView.getNode().replaceChild(element, event);
  }

  removeEvent(eventId: IEvent['id']) {
    const event = this.eventListView.getNode().querySelector(`.event[data-id="${eventId}"]`);

    if(event) {
      event.remove();
    }
  }

  onSort(e: MouseEvent) {
    this._controller.onSort(e);
  }
}