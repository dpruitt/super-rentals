import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AddRentalRoute extends Route {
  @service store;

  resetController(controller) {
    controller.rental = this.store.createRecord('rental');
  }
}