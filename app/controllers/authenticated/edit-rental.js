import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class EditRentalController extends Controller {
  @service router;
  @service flashMessages;

  @action
  async saveRental() {
    try {
      await this.model.save();
      this.router.transitionTo('/');
    } catch(error) {
      this.flashMessages.danger(error.message)
    }
  }

  @action
  cancel() {
    if(this.model.hasDirtyAttributes) {
      this.model.rollbackAttributes();
    }
    this.router.transitionTo('/');
  }
}