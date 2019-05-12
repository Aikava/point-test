import $ from 'jquery';
import 'client/ui/web/components/news-event/news-event.scss';
import { IEventView } from 'client/ui/types';

const tpl = require('client/ui/web/components/news-event/news-event.hbs');

export default function (data: IEventView): HTMLElement {
  return $(tpl(data))[0];
}
