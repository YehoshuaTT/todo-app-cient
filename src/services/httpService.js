import axios from "axios";

class HttpService {
  static async login(registerOrLogin, user) {
    try {
      const response = await axios.post(`/auth/${registerOrLogin}/`, user);
      console.log(response);
      if (response.status === 200) return true;
    } catch (error) {
      return false;
    }
  }

  static async autorized() {
    try {
      const { data } = await axios.post(`/auth/loggedcheck`);

      if (data) return data;
      else return null;
    } catch (error) {
      return false;
    }
  }
}

class ListService {
  static async index() {
    try {
      const { data } = await axios.get(`/lists`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async Show(listId) {
    try {
      const { data } = await axios.get(`/lists/${listId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async create(listInfo) {
    try {
      const { data } = await axios.post(`/lists`, listInfo);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async update(listId, update) {
    try {
      const { data } = await axios.put(`/lists/${listId}`, update);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async delete(listId) {
    try {
      const { data } = await axios.delete(`/lists/${listId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async addTodo(listId, todo) {
    try {
      const { data } = await axios.post(`/lists/${listId}/todos`, todo);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  static async toggle(listId, todoId) {
    try {
      const { data } = await axios.put(`/lists/${listId}/todos${todoId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

class TodoService {
  static async index() {
    try {
      const { data } = await axios.get(`/todos`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async show(todoId) {
    try {
      const { data } = await axios.get(`/todos/${todoId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async create(todoInfo) {
    try {
      const { data } = await axios.post(`/todos`, todoInfo);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async update(todoId, update) {
    try {
      const { data } = await axios.put(`/todos/${todoId}`, update);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async delete(todoId) {
    try {
      const { data } = await axios.delete(`/todos/${todoId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async toggle(todoId) {
    try {
      return await axios.put(`/todos/${todoId}/toggle`);
    } catch (error) {
      console.log(error);
    }
  }
}

class CategoryService {
  static async index() {
    try {
      const { data } = await axios.get(`/categories`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async show(categoryId) {
    try {
      const { data } = await axios.get(`/categories/${categoryId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async create(categoryInfo) {
    try {
      const { data } = await axios.post(`/categories`, categoryInfo);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async update(categoryId, update) {
    try {
      const { data } = await axios.put(`/categories/${categoryId}`, update);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async delete(categoryId) {
    try {
      const { data } = await axios.delete(`/categories/${categoryId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
export { ListService, CategoryService, TodoService, HttpService };
