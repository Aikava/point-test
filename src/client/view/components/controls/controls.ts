import { Component } from 'client/view/base-component';
import 'client/view/components/controls/controls.scss';
import { SortDirection, SortType } from 'client/view/types';

const controlsTpl = require('client/view/components/controls/controls.hbs');

export default class Controls extends Component {
  private _sortDirection: SortDirection | null;
  private _sortType: SortType | null;

  tpl = controlsTpl;

  public set sortType(sortType: SortType | null) {
    this._sortType = sortType;
  }

  public set sortDirection(sortDirection: SortDirection | null) {
    this._sortDirection = sortDirection;
  }
}
