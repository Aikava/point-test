import { IEventViewFactory, AbstractController, AbstractView } from 'client/view/types';
import { IEvent, EventTypes } from 'client/types';
import WebEventViewFactory from 'client/view/event-factory';

export default class WebController extends AbstractController {
  private eventViewFactory: IEventViewFactory;
  protected view: AbstractView;
  protected actions: any;

  constructor() {
    super();

    this.eventViewFactory = new WebEventViewFactory();
  }

  setView(view: AbstractView) {
    this.view = view;
  }

  setActions(actions: any) {
    this.actions = actions;

    return this;
  }

  async onShowEventList() {
    const events = await this.actions.getEvents();
    const eventsView = events.map(this.eventViewFactory.getEventView);

    this.view.showEventList(eventsView);
  }

  async onShowEventDetails(eventId: IEvent['id']) {
    const event = await this.actions.getEvent(eventId);
    const eventDetailsView = this.eventViewFactory.getEventDetailsView(event);
  
    this.view.showEventDetails({ view: eventDetailsView, action: () => this.onAction(eventId) });
  }
  
  onHideEventDetails() {
    this.view.hideEventDetails();
  }
  
  async onRemoveEvent(eventId: IEvent['id']) {
    await this.actions.removeEvent(eventId);

    this.view.removeEvent(eventId);
  }
  
  async onUpdateEvent(eventId: IEvent['id']) {
    const event = await this.actions.getEvent(eventId);
    const data = JSON.parse(event.data);
    const updatedEvent = await this.actions.updateEvent(eventId, { ...data, isRead: true });
    const element = this.eventViewFactory.getEventView(updatedEvent);

    this.view.updateEvent(eventId, element);
  }
  
  onSort() {
    
  }

  async onAction(eventId: IEvent['id']) {
    const event = await this.actions.getEvent(eventId);

    switch(event.type) {
      case EventTypes.NEWS:
        this.onUpdateEvent(eventId)
        break;
      case EventTypes.TRANSACTION:
        this.onRemoveEvent(eventId)
        break;
      default:
        break;
    }

    this.onHideEventDetails();
  }
}