<template>
  <person-list-presentation
    :persons="personsList"
    @getPersons="getPersonsList"
  ></person-list-presentation>
</template>

<script>
import PersonListPresentation from "./person-list-presentation/person-list.presentation.vue";
import PersonListService from "../../services/person-list.service";

export default {
  name: "PersonListContainer",
  components: {
    PersonListPresentation,
  },
  data() {
    return {
      personsList: [],
    };
  },
  methods: {
    async getPersonsList() {
      try {
        const personsListResponse = await PersonListService.getAllPersons();
        if (personsListResponse.data) {
          this.personsList = personsListResponse.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
