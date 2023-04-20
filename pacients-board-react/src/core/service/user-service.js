//makes api call for user info
import { httpClient } from "../http/client.js";

class UserServiceClass {
  async getUser() {
    try {
      const data = await httpClient.get("/users");
      return data[0];
    } catch (e) {
      console.error(e);
    }
  }

  async getUser404() {
    try {
      const data = await httpClient.get("/userrs");
      return data[0];
    } catch (e) {
      console.error(e);
    }
  }

  async get403() {
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
