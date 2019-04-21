import ControlsView from 'client/controls/controls-view';

interface IControlsParams {
  onSortByDate?: (direction: any) => null;
  onSortByType?: (direction: any) => null;
}

export default class Controls {
  private view: ControlsView;
  private sortByDateInput: HTMLInputElement;
  private sortByTypeInput: HTMLInputElement;
  private params: IControlsParams;

  constructor(params: IControlsParams = {}) {
    this.params = params;
    this.view = new ControlsView();
    this.sortByDateInput = this.getNode().getElementsByClassName('sort-by-date')[0];
    this.sortByTypeInput = this.getNode().getElementsByClassName('sort-by-type')[0];
    this.addListeners();
  }

  addListeners() {
    this.sortByDateInput.addEventListener('click', this.sortByDate.bind(this));
    this.sortByTypeInput.addEventListener('click', this.sortByType.bind(this));
  }

  sortByDate() {
    const { onSortByDate } = this.params;
    const direction = this.sortByDateInput.checked;

    onSortByDate && onSortByDate(direction);
  }

  sortByType() {
    const { onSortByType } = this.params;
    const direction = this.sortByTypeInput.checked;

    onSortByType && onSortByType(direction);
  }

  getNode() {
    return this.view.getNode();
  }
}
