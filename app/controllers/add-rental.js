import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AddRentalController extends Controller {
  @service store;
  @service router;
  @service flashMessages;

  @tracked title;
  @tracked owner;
  @tracked city;
  @tracked lat;
  @tracked lng;
  @tracked category;
  @tracked image;
  @tracked bedrooms;
  @tracked description;

  @action
  async saveRental() {
    try {
      let rental = this.store.createRecord('rental', {
        title: this.title,
        owner: this.owner,
        city: this.city,
        lat: this.lat,
        lng: this.lng,
        category: this.category,
        image: this.image,
        bedrooms: this.bedrooms,
        description: this.description
      });
      await rental.save();
      this.router.transitionTo('/');
    } catch(error) {
      console.log(error);
      this.flashMessages.danger(error.message)
    }
  }

  @action
  cancel() {
    this.router.transitionTo('/');
  }
}