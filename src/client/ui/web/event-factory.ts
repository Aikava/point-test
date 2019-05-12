import { IEvent, EventTypes } from 'client/types';
import { IEventViewFactory, IEventView } from 'client/ui/types';
import newsEvent from 'client/ui/web/components/news-event';
import transactionEvent from 'client/ui/web/components/transaction-event';



const eventTypes: {[key: string ]: (data: IEventView) => HTMLElement } = {
  [EventTypes.NEWS]: newsEvent,
  [EventTypes.TRANSACTION]: transactionEvent
}

export default class WebEventViewFactory {
  public static GetEventView(event: IEvent): HTMLElement {
    const eventData = JSON.parse(event.data);

    return eventTypes[event.type]({ ...event, ...eventData});
  }
}