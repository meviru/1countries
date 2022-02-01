import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
});

class PersonListService {
  getAllPersons() {
    return http.get("/people");
  }
}

export default new PersonListService();
