<template>
  <person-form-presentation></person-form-presentation>
</template>

<script>
import PersonFormPresentation from "./person-form-presentation/person-form.presentation.vue";
export default {
  name: "PersonFormContainer",
  components: {
    PersonFormPresentation,
  },
};
</script>
