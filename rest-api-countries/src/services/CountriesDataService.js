import http from "../http-common";

class CountriesDataService {
  getAllCountries() {
    return http.get("/all");
  }
  getCountry(name) {
    return http.get(`/name/${name}?fullText=true`);
  }
  getCountriesByRegion(region) {
    return http.get(`/region/${region}`);
  }
  getCountriesByCodes(code) {
    return http.get(`/alpha?codes=${code}`);
  }
}

export default new CountriesDataService();
