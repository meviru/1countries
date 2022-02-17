<template>
  <person-list-presentation
    :persons="personsList"
    @getPersons="getPersonsList"
  ></person-list-presentation>
</template>

<script>
import { useToast } from "vue-toastification";
import PersonListPresentation from "./person-list-presentation/person-list.presentation.vue";
import PersonListService from "../../services/person-list.service";

export default {
  name: "PersonListContainer",
  components: {
    PersonListPresentation,
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      personsList: [],
    };
  },
  methods: {
    async getPersonsList() {
      let triesCounter = 1;
      while (triesCounter <= 3) {
        try {
          const personsListResponse = await PersonListService.getAllPersons();
          if (personsListResponse.data) {
            this.personsList = personsListResponse.data;
            break;
          }
        } catch (e) {
          this.toast.error("Oops! We ran into some problem.");
          console.log(e);
        }
        triesCounter++;
      }
    },
  },
};
</script>
