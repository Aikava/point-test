import { loadEvents, removeEvent, updateEvent } from 'client/actions';
import Controls from 'client/controls/controls';
import EventList from 'client/event-list/event-list';
import { NewsEvent, TransactionEvent } from 'client/events';
import { sortDate, sortType } from 'client/lib/utils';
import LightBox from 'client/light-box/light-box';
import { EventTypes, IBaseEventView, IEvents} from 'client/types';

const dataToEventsType: { [key: string]: typeof NewsEvent | typeof TransactionEvent } = {
  [EventTypes.TRANSACTION]: TransactionEvent,
  [EventTypes.NEWS]: NewsEvent
};

const fieldToSort: { [key: string]: any } = {
  date: sortDate.bind(null ),
  type: sortType.bind(null )
};

export default class App {
  private mountPoint: HTMLElement;
  private eventList: EventList;
  private lightBox: LightBox;
  private controls: Controls;

  private eventTypeToAction: { [key: string]: any} = {
    [EventTypes.TRANSACTION]: this.removeEvent.bind(this),
    [EventTypes.NEWS]: this.updateEvent.bind(this)
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

  public run() {
    this.mountPoint.append(this.controls.getNode(), this.eventList.getNode(), this.lightBox.getNode());

    this.loadEvents();
  }

  private showEventDetails(params?: any) {
    const { event, id } = params;
    this.lightBox.show(event.eventView, id);
  }

  private onLightBoxAction({ event, id }: IBaseEventView<IEvents>) {
    const { type } = event;
    const action = this.eventTypeToAction[type];

    action(id, event);
  }

  private removeEvent(id: number) {
    removeEvent(id)
      .then(() => {
        this.eventList.removeEvent(id);
        this.lightBox.hide();
      })
      .catch(alert);
  }

  private updateEvent(id: number, event: IEvents) {
    updateEvent(id, { ...event, isRead: true })
      .then(() => {

        this.eventList.updateEvent(id, { ...event, isRead: true });
        this.lightBox.hide();
      })
      .catch(alert);
  }

  private sortBy(field: string, direction: boolean) {
    const dir = direction ? 1 : -1;
    this.eventList.sortBy(fieldToSort[field].bind(null, dir));
  }

  private async loadEvents() {
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
}
