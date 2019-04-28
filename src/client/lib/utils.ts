import moment from 'moment';
import { IBaseEvent } from '../events';


export function sortType(dir: boolean, { type: prevType }: IBaseEvent, { type: currType }: IBaseEvent) {
  return currType === prevType ? 0 : currType > prevType ? dir : -dir;
}

export function sortDate(dir: Boolean, { data: { date: prevDate }  }: any, { data: { date: currDate } }: any) {
  return moment(currDate).isSame(prevDate) ?
    0 :
    moment(currDate).isSameOrAfter(prevDate) ? dir : -dir;
}
