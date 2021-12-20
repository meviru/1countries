import http from "../http-common";

class CountriesDataService {
  getAllCountries() {
    return http.get("/all");
  }
  getCountry(name) {
    return http.get(`/name/${name}`);
  }
  getCountriesByRegion(region) {
    return http.get(`/region/${region}`);
  }
}

export default new CountriesDataService();
