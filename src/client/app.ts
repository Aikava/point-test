import { AbstractController, AbstractView, IEventViewFactory } from 'client/view/types';

export default class Application {
  private _controller: AbstractController;
  private _view: AbstractView;
  private _factory: IEventViewFactory;
  private _actions: any;

  controller(controller: AbstractController) {
    this._controller = controller;

    return this;
  }

  view(view: AbstractView) {
    this._view = view;

    return this;
  }

  factory(factory: IEventViewFactory) {
    this._factory = factory;

    return this;
  }

  actions(actions: any) {
    this._actions = actions;

    return this;
  }

  async run() {
    this._view.setController(this._controller);
    this._controller.setView(this._view);
    this._controller.setActions(this._actions);

    this._controller.onShowEventList();
  }
}