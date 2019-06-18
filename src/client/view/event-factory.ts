import { IEvent, EventTypes } from 'client/types';
import { removeEvent, updateEvent } from 'client/actions';
import { IEventViewFactory } from 'client/view/types';

import * as newsEvent from 'client/view/components/events/news-event/news-event';
import * as transactionEvent from 'client/view/components/events/transaction-event/transaction-event';

const eventViewTypes = {
  [EventTypes.NEWS]: newsEvent,
  [EventTypes.TRANSACTION]: transactionEvent
}

export default class WebEventViewFactory extends IEventViewFactory {
  public getEventView(event: IEvent) {
    const eventData = JSON.parse(event.data);

    return eventViewTypes[event.type].event({ ...event, ...eventData });
  }

  public getEventDetailsView(event: IEvent) {
    const eventData = JSON.parse(event.data);

    return eventViewTypes[event.type].eventDetails({ ...event, ...eventData })
  }
}