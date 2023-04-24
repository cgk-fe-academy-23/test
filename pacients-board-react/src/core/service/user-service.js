//makes api call for user info
import {httpClient} from "../http/client.js";

class UserServiceClass {
  #isUserLoggedIn =window.localStorage.getItem("isUserLoggedIn") === 'true';

  setIsUserLoggedIn(isUserLoggedIn) {
    this.#isUserLoggedIn = isUserLoggedIn;
    window.localStorage.setItem("isUserLoggedIn", this.#isUserLoggedIn);
  }

  isUserLoggedIn() {
    return this.#isUserLoggedIn;
  }
  async getUser() {
    try {
      return await httpClient.get("/user");
    } catch (e) {
      console.error(e);
    }
  }

  async get404() {
    try {
      const data = await httpClient.get("/userrs");
      return data[0];
    } catch (e) {
      console.error(e);
    }
  }

  async createPost() {
    try {
      return await httpClient.post("/posts", {
        title: "foo",
        body: "bar",
        userId: 100,
      });
    } catch (e) {
      console.error(e);
    }
  }

  async login() {
    try {
      return await httpClient.post("/public/auth/login", {
        username: "bianca@gmail.com",
        password: "bianca123",
      });
    } catch (e) {
      return false;
    }
  }
}

export const UserService = new UserServiceClass();
