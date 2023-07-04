import axios from "axios";

export default class HttpService {
  static async login(registerOrLogin, user) {
    try {
      console.log(user);
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
  static async listsIndex() {
    try {
      const { data } = await axios.get(`/lists`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async listShow(listId) {
    try {
      const { data } = await axios.get(`/lists/${listId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async listCreate(listInfo) {
    try {
      const { data } = await axios.post(`/lists`, listInfo);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async listsUpdate(listId, update) {
    try {
      const { data } = await axios.put(`/lists/${listId}`, update);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async listDelete(listId) {
    try {
      const { data } = await axios.delete(`/lists/${listId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async listAddTodo(listId, todo) {
    try {
      const { data } = await axios.post(`/lists/${listId}/todos`, todo);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  static async listToggle(listId, todoId) {
    try {
      const { data } = await axios.put(`/lists/${listId}/todos${todoId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

class TodoService {
  static async todosIndex() {
    try {
      const { data } = await axios.get(`/todos`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async todoShow(todoId) {
    try {
      const { data } = await axios.get(`/todos/${todoId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async todoCreate(todoInfo) {
    try {
      const { data } = await axios.post(`/todos`, todoInfo);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async todoUpdate(todoId, update) {
    try {
      const { data } = await axios.put(`/todos/${todoId}`, update);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async todoDelete(todoId) {
    try {
      const { data } = await axios.delete(`/todos/${todoId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async todoToggle(todoId) {
    try {
      const { data } = await axios.put(`/todos/${todoId}/toggle`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

class CategoryService {
  static async categoryIndex() {
    try {
      const { data } = await axios.get(`/categories`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async categoryShow(categoryId) {
    try {
      const { data } = await axios.get(`/categories/${categoryId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async categoryCreate(categoryInfo) {
    try {
      const { data } = await axios.post(`/categories`, categoryInfo);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async categoryUpdate(categoryId, update) {
    try {
      const { data } = await axios.put(`/categories/${categoryId}`, update);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async categoryDelete(categoryId) {
    try {
      const { data } = await axios.delete(`/categories/${categoryId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = { ListService, CategoryService, TodoService };
