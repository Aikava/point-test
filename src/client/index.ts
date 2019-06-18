import * as Actions from 'client/actions';
import Application from 'client/app';
import WebController from 'client/view/controller';
import WebEventViewFactory from 'client/view/event-factory';
import WebView from 'client/view/view';

new Application()
.controller(new WebController())
.view(new WebView())
.factory(new WebEventViewFactory())
.actions(Actions)
.run();