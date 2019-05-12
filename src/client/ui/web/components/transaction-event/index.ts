import $ from 'jquery';
import 'client/ui/web/components/transaction-event/transaction-event.scss';
import { IEventView } from 'client/ui/types';

const tpl = require('client/ui/web/components/transaction-event/transaction-event.hbs');

export default function (data: IEventView): HTMLElement {
  return $(tpl(data))[0];
}
