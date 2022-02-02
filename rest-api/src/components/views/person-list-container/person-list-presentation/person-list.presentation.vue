<template>
  <el-table :data="personLists" v-if="personLists.length">
    <el-table-column prop="name" label="Name" width="300">
      <template v-slot="scope">
        <div class="d-flex align-items-center">
          <el-avatar :size="40" :src="scope.row.picture"></el-avatar>
          <div class="ml-2">
            <p class="mb-0">{{ scope.row.name }}</p>
            <el-link :underline="false" :href="`mailto:${scope.row.email}`">
              <el-tag size="small">{{ scope.row.email }}</el-tag>
            </el-link>
          </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="address" label="Address" />
    <el-table-column prop="phone" label="Phone" />
    <el-table-column label="Action">
      <template v-slot="scope">
        <el-link :underline="false" :href="`person/edit/${scope.row._id}`">
          <el-icon :size="20">
            <svg
              t="1639990532110"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="12171"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="200"
              height="200"
              data-v-042ca774=""
            >
              <path
                d="M199.04 672.64l193.984 112 224-387.968-193.92-112-224 388.032z m-23.872 60.16l32.896 148.288 144.896-45.696-177.792-102.592zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936-383.936 665.088h0.064l-248.448 78.336-56.448-254.336z m384 254.272v-64h448v64h-448z"
                p-id="12172"
              ></path>
            </svg>
          </el-icon>
        </el-link>
      </template>
    </el-table-column>
  </el-table>
  <el-skeleton v-else :rows="5" animated />
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
