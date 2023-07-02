import axios from "axios";

export default class HttpService {
  static async login(registerOrLogin, user) {
    const response = await axios.post(`auth/${registerOrLogin}/`, user);
    console.log(response);
    if (response.status === 200) return true;
    else return false;
  }

  static async register() {}
}
