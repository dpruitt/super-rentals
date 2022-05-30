import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AddRentalController extends Controller {
  @service store;
  @service router;
  @service flashMessages;

  @tracked rental = this.store.createRecord('rental');

  @action
  async saveRental() {
    try {
      await this.rental.save();
      this.router.transitionTo('/');
    } catch(error) {
      console.log(error);
      this.flashMessages.danger(error.message)
    }
  }
}