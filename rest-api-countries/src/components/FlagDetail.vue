<template>
  <div class="detail-wrap">
    <template v-if="!isLoading && countryDetail.length > 0">
      <div
        v-if="!isLoading"
        class="top-bar d-flex align-items-center justify-space-between"
      >
        <div class="top-bar__back">
          <router-link to="/" class="top-bar__back-btn">Back</router-link>
        </div>
      </div>
      <div
        class="row align-items-center"
        v-for="(country, index) in countryDetail"
        :key="index"
      >
        <div class="col-md-6 col-sm-12">
          <div class="detail-wrap__left">
            <div class="detail-wrap__img-wrap">
              <img
                :src="country.flags.svg"
                :alt="country.name.common"
                :title="country.name.common"
                class="detail-wrap__img"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="detail-wrap__right">
            <div class="flag-detail">
              <h2 class="flag-detail__name">{{ country.name.common }}</h2>
              <div class="flag-detail__info">
                <ul class="row">
                  <li class="col-md-6 col-sm-12 flag-detail__info-item">
                    <strong>Native Name: </strong>
                    <span
                      v-for="(nativeName, index) in country.name.nativeName"
                      :key="index"
                      >{{ nativeName.common + " " }}</span
                    >
                  </li>
                  <li class="col-md-6 col-sm-12 flag-detail__info-item">
                    <strong>Top Level Domain: </strong>
                    <span v-for="(tld, index) in country.tld" :key="index">{{
                      tld + " "
                    }}</span>
                  </li>
                  <li class="col-md-6 col-sm-12 flag-detail__info-item">
                    <strong>Population: </strong>
                    <span>{{ country.population }}</span>
                  </li>
                  <li class="col-md-6 col-sm-12 flag-detail__info-item">
                    <strong>Currencies: </strong>
                    <span
                      v-for="currencies in country.currencies"
                      :key="currencies.name"
                      >{{ currencies.name }}</span
                    >
                  </li>
                  <li class="col-md-6 col-sm-12 flag-detail__info-item">
                    <strong>Region: </strong>
                    <span>{{ country.region }}</span>
                  </li>
                  <li class="col-md-6 col-sm-12 flag-detail__info-item">
                    <strong>Languages: </strong>
                    <span
                      v-for="(languages, index) in country.languages"
                      :key="index"
                      >{{ languages + " " }}</span
                    >
                  </li>
                  <li class="col-md-6 col-sm-12 flag-detail__info-item">
                    <strong>Sub Region: </strong>
                    <span>{{ country.subregion }}</span>
                  </li>
                  <li class="col-md-6 col-sm-12 flag-detail__info-item">
                    <strong>Capital: </strong>
                    <span v-for="(capital, index) in country.capital" :key="index">{{
                      capital + " "
                    }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <loader v-if="isLoading"></loader>
  </div>
</template>

<script>
import Loader from "./Loader.vue";
import router from "../router";
import CountriesDataService from "../services/CountriesDataService";
export default {
  name: "FlagDetail",
  data() {
    return {
      country: "",
      isLoading: false,
      countryDetail: {},
    };
  },
  components: {
    Loader,
  },
  methods: {
    getCountryDetail(country) {
      this.isLoading = true;
      CountriesDataService.getCountry(country)
        .then((res) => {
          this.countryDetail = res.data;
        })
        .catch((e) => {
          console.log(e);
          if (e.response.status == 404) {
            router.push({
              name: "pagenotfound",
            });
          }
        })
        .finally(() => (this.isLoading = false));
    },
  },
  mounted() {
    this.country = this.$route.params.id.split("-").join(" ").toLowerCase();
    this.getCountryDetail(this.country);
  },
};
</script>
