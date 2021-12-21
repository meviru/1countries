<template>
  <div class="flags-wrapper">
    <div
      v-if="!isLoading"
      class="top-bar d-flex align-items-center justify-space-between"
    >
      <div class="top-bar__search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="top-bar__search-icon"
          viewBox="0 0 512 512"
        >
          <title>Search</title>
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M338.29 338.29L448 448"
          />
        </svg>
        <input
          type="text"
          name="search"
          v-model="searchText"
          @keyup.enter="onEnter(searchText)"
          class="input-element"
          placeholder="Search for a country..."
        />
      </div>
      <div class="top-bar__filter">
        <div class="filter-select" @click="openRegionDropdown">
          {{ selectedRegionOption }}
        </div>
        <ul class="filter-dropdown" :class="{ open: isDropdownOpen }">
          <li
            class="filter-dropdown__item"
            v-for="(region, index) in regions"
            :key="index"
            @click="filterByRegion(region)"
          >
            {{ region }}
          </li>
        </ul>
      </div>
    </div>

    <div class="flags" v-if="!isLoading">
      <div class="row">
        <div
          class="col-md-3"
          v-for="(country, index) in countries"
          :key="index"
        >
          <flag-item :country-item="country"></flag-item>
        </div>
      </div>
    </div>
    <loader v-if="isLoading"></loader>
  </div>
</template>

<script>
import FlagItem from "./FlagItem.vue";
import Loader from "./Loader.vue";
import CountriesDataService from "../services/CountriesDataService";

export default {
  name: "FlagsList",
  data() {
    return {
      isDropdownOpen: false,
      isLoading: false,
      countries: [],
      regions: [],
      selectedRegion: "",
      searchText: "",
    };
  },
  computed: {
    selectedRegionOption: function () {
      return this.selectedRegion == ""
        ? "Filter by Region"
        : this.selectedRegion;
    },
  },
  components: {
    FlagItem,
    Loader,
  },
  methods: {
    getCountries() {
      this.isLoading = true;
      CountriesDataService.getAllCountries()
        .then((res) => {
          this.countries = res.data;
          this.getRegions(this.countries);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => (this.isLoading = false));
    },
    getRegions(countries) {
      countries.forEach((country) => {
        this.regions.push(country.region);
      });
      this.regions = this.regions
        .filter((x, i, a) => a.indexOf(x) === i)
        .sort();
    },
    openRegionDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    onEnter(searchText) {
      if (searchText.trim() != "") {
        this.isLoading = true;
        CountriesDataService.getCountry(searchText)
          .then((res) => {
            this.countries = res.data;
          })
          .catch((e) => {
            console.log(e);
          })
          .finally(() => {
            this.isLoading = false;
          });
      }
    },
    filterByRegion(region) {
      this.isDropdownOpen = false;
      if (this.selectedRegion != region) {
        this.isLoading = true;
        this.selectedRegion = region;
        CountriesDataService.getCountriesByRegion(region)
          .then((res) => {
            this.countries = res.data;
          })
          .catch((e) => {
            console.log(e);
          })
          .finally(() => {
            this.isLoading = false;
          });
      }
    },
  },
  mounted() {
    this.getCountries();
  },
};
</script>
