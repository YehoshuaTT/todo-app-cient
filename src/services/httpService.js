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
