<template>
  <el-table :data="personLists">
    <el-table-column prop="name" label="Name">
      <template v-slot="scope">
        <div class="d-flex align-items-center">
          <el-image
            class="rounded-circle"
            :src="scope.row.picture"
            :fit="cover"
          >
          </el-image>
          <span class="ml-2">{{ scope.row.name }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column />
  </el-table>
</template>

<script>
export default {
  name: "PersonListPresentation",
  props: ["persons"],
  emits: ["getPersons"],
  data() {
    return {
      personLists: [],
    };
  },
  watch: {
    persons(newValue) {
      if (newValue.length) {
        this.personLists = newValue;
      }
    },
  },
  created() {
    this.$emit("getPersons");
  },
};
</script>
