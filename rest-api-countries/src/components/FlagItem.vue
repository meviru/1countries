<template>
  <div class="flag-item" @click="openFlagDetails(countryItem.name.common)">
    <div class="flag-item__img-wrap">
      <img
        class="flag-item__img"
        :src="countryItem.flags.svg"
        :alt="countryItem.name.common"
        :title="countryItem.name.common"
      />
    </div>
    <div class="flag-item__info">
      <h2 class="flag-item__name">{{ countryItem.name.common }}</h2>
      <ul class="flag-item__detail">
        <li class="flag-item__detail-item">
          <strong>Population: </strong>{{ countryItem.population }}
        </li>
        <li class="flag-item__detail-item">
          <strong>Region: </strong>{{ countryItem.region }}
        </li>
        <li class="flag-item__detail-item">
          <strong>Capital: </strong>
          <template v-for="capital in countryItem.capital">{{
            capital + " "
          }}</template>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import router from "../router";

export default {
  name: "FlagItem",
  data() {
    return {};
  },
  props: ["countryItem"],
  methods: {
    openFlagDetails(name) {
      router.push({
        path: `details/${name.split(" ").join("-").toLowerCase()}`,
      });
    },
  },
};
</script>
