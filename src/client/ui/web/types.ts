import { IEventView } from 'client/ui/types';

export interface IComponent {
  tpl: any;

  getNode: () => HTMLElement;
  getRawNode: () => string;
}

export type WebEventView = IComponent & IEventView;