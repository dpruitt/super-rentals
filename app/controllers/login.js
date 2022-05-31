import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class LoginController extends Controller {
  @service session;
  @service router;
  @service flashMessages;

  @tracked username;
  @tracked password;

  @action
  async authenticate() {
    try {
      await this.session.authenticate('authenticator:custom', this.username, this.password);
    } catch(error) {
      this.flashMessages.danger(error.message)
    }

    if (this.session.isAuthenticated) {
      this.router.transitionTo('/');
    }
  }
}