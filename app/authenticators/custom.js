import Base from 'ember-simple-auth/authenticators/base';

export default class CustomAuthenticator extends Base {
  authenticate(username, password) {
    if(username === "test" && password === "test") {
      return Promise.resolve();
    } else {
      return Promise.reject(new Error("Authentication failed. There is only one true user."));
    }
  }
}