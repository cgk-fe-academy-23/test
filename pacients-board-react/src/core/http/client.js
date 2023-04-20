class HttpClient {
  #basePath = "https://jsonplaceholder.typicode.com";
  async #fetch(resource, config) {
    const url = `${this.#basePath + resource}`;
    try {
      const response = await fetch(url, config);
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject({ reason: response.statusText });
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }
  get(resource) {
    const getConfig = { method: "GET" };
    return this.#fetch(resource, getConfig);
  }

  post(resource, data) {
    const postConfig = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    };
    return this.#fetch(resource, postConfig);
  }

  put(resource, data) {
    const putConfig = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    return this.#fetch(resource, putConfig);
  }

  delete(resource, data) {
    const deleteConfig = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    return this.#fetch(resource, deleteConfig);
  }
}

export const httpClient = new HttpClient();
