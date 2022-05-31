import Base from 'ember-simple-auth/authenticators/base';

export default class CustomAuthenticator extends Base {
  authenticate(username, password) {
    if(username === "test" && password === "test") {
      return Promise.resolve({authenticated: true});
    } else {
      return Promise.reject(new Error("Authentication failed. There is only one true user."));
    }
  }

  restore(data) {
    if(data.authenticated === true) {
      return Promise.resolve({authenticated: true});
    } else {
      return Promise.reject();
    }
  }
}