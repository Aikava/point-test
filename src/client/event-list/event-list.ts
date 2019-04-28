import EventListView from 'client/event-list/event-list-view';
import { IBaseEvent, INewsEvent } from 'client/events';
import ClickEvent = JQuery.ClickEvent;

interface IEventListParams {
  onShowEventDetails?: (params?: any) => null;
}

interface IEventById { [key: string]: IBaseEvent; }

export default class EventList {
  private className: string = 'event-list';
  private events: IEventById  = {};
  private view: EventListView;
  private onShowEventDetails: IEventListParams['onShowEventDetails'];

  constructor({ onShowEventDetails }: IEventListParams = {}) {
    this.onShowEventDetails = onShowEventDetails;
    this.view = new EventListView();

    this.addListeners();
  }

  addListeners() {
    this.view.node.addEventListener('click', this.onClick.bind(this));
  }

  onClick(event: ClickEvent) {
    const target = event.target;
    const eventDiv = target.closest('.event');
    if (eventDiv) {
        this.showEventDetails(eventDiv);
    }

  }

  getNode() {
    return this.view.node;
  }

  update(events: Array<IBaseEvent>) {
    const elements = events.map(event => event.getRawNode());

    this
      .getNode()
      .innerHTML = elements.join('');
  }

  push(event: IBaseEvent | Array<IBaseEvent>) {
    if (Array.isArray(event)) {
      const eventsById = event.reduce((acc: IEventById, event: IBaseEvent) => {
        acc[event.id] = event;

        return acc;
      }, {});
      this.events = {
        ...this.events,
        ...eventsById
      };
    } else {
      this.events[event.id] = event;
    }

    this.update(Object.values(this.events));
  }

  showEventDetails(eventDiv: HTMLElement) {
    const id = eventDiv.dataset['id'];
    const event = this.events[id];

    this.onShowEventDetails && this.onShowEventDetails({ event, id });
  }

  updateEvent(id: number, data: INewsEvent) {
    const eventElement = this.getNode().querySelector(`.event[data-id="${id}"]`);
    const event = this.events[id];
    event.data.isRead = data.isRead;
    eventElement.outerHTML = event.getRawNode();
  }

  removeEvent(id: number) {
    const event = this.getNode().querySelector(`.event[data-id="${id}"]`);

    event.remove();
  }

  sortBy(sort: any) {
    const sorted = Object.values(this.events).sort(sort);

    this.update(sorted);
  }
}
