import http from "../http-common";

class CountriesDataService {
  getAllCountries() {
    return http.get("/all");
  }
  getCountry(name) {
    return http.get(`/name/${name}`);
  }
}

export default new CountriesDataService();
