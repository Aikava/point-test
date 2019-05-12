import ViewFactory, { Views } from 'client/ui/view-factory';
import * as Repository from 'client/repository';

(async function main() {
  const view = ViewFactory.getView(Views.WEB);
  const events = await Repository.loadEvents();

  view.showEventList(events);
})();