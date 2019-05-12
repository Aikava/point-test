import { IView } from 'client/ui/types';
import WebView from 'client/ui/web/web-view';

export enum Views {
  WEB = 'web'
}

const viewsMap = {
  [Views.WEB]: WebView
}

export default class ViewFactory {
  public static getView(type: Views): IView {
    return new viewsMap[type]();
  }
}