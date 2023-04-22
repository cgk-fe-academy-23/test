//makes api call for user info
import { httpClient } from "../http/client.js";

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
      const data = await httpClient.get("/users");
      return data[0];
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
      const response = await httpClient.post("/posts", {
        title: "foo",
        body: "bar",
        userId: 100,
      });
      return !!response;
    } catch (e) {
      return false;
    }
  }
}

export const UserService = new UserServiceClass();
