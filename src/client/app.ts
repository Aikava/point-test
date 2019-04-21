import EventList from 'client/event-list/event-list';
import Controls from 'client/controls/controls';
import LightBox from 'client/light-box/light-box';
import { IBaseEvent, INewsEvent, NewsEvent, TransactionEvent } from 'client/events';
import { sortDate, sortType } from 'client/iib/utils';
import { loadEvents, removeEvent, updateEvent } from 'client/actions';
import { IBaseEventView } from './events/base-event/base-event-view';

const dataToEventsType: { [key: string]: typeof NewsEvent | typeof TransactionEvent} = {
  'transaction': TransactionEvent,
  'news': NewsEvent
};

const fieldToSort: { [key: string]: any } = {
  type: sortType.bind(null ),
  date: sortDate.bind(null )
};


export default class App {
  private mountPoint: HTMLElement;
  private eventList: EventList;
  private lightBox: LightBox;
  private controls: Controls;

  private eventTypeToAction: { [key: string]: any} = {
    'transaction': this.removeEvent.bind(this),
    'news': this.updateEvent.bind(this)
  };

  constructor(mountPoint: HTMLElement) {
    this.mountPoint = mountPoint;
    this.eventList = new EventList({
      onShowEventDetails: this.showEventDetails.bind(this)
    });
    this.lightBox = new LightBox({
      onAction: this.onLightBoxAction.bind(this)
    });
    this.controls = new Controls({
      onSortByDate: this.sortBy.bind(this, 'date'),
      onSortByType: this.sortBy.bind(this, 'type')
    });
  }

  showEventDetails(event: IBaseEvent, id: number) {
    this.lightBox.show(event.eventView, id);
  }

  onLightBoxAction({ event, id }: IBaseEventView) {
    // @ts-ignore
    const { type } = event;
    const action = this.eventTypeToAction[type];

    action(id, event);
  }

  removeEvent(id: number) {
    removeEvent(id)
      .then((result: any) => {

        this.eventList.removeEvent(id);
        this.lightBox.hide();
      })
      .catch(alert);
  }

  updateEvent(id: number, event: INewsEvent) {
    updateEvent(id, { ...event, isRead: true })
      .then(result => {

        this.eventList.updateEvent(id, { ...event, isRead: true });
        this.lightBox.hide();
      })
      .catch(alert);
  }

  sortBy(field: string, direction: boolean) {
    const dir = direction ? 1 : -1;
    this.eventList.sortBy(fieldToSort[field].bind(null, dir));
  }

  async loadEvents() {
    const events = await loadEvents();
    const elements = events.reduce((acc: any, event: any) => {
      const eventConstructor = dataToEventsType[event.type];

      if (eventConstructor) {
        acc.push(new eventConstructor(event));
      }

      return acc;
    }, []);

    this.eventList.push(elements);
  }

  run() {
    this.mountPoint.append(this.controls.getNode(), this.eventList.getNode(), this.lightBox.getNode());

    this.loadEvents();
  }
}
