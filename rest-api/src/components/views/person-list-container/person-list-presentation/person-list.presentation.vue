<template>
  <el-skeleton :loading="isLoading" animated>
    <template #template>
      <el-row :gutter="24">
        <el-col
          v-for="o in 6"
          :key="o"
          :xl="4"
          :lg="6"
          :md="8"
          :sm="12"
          class="mb-2"
        >
          <div class="d-flex align-items-center">
            <el-skeleton-item
              variant="image"
              style="
                width: 42px;
                flex: 0 0 42px;
                height: 42px;
                border-radius: 50%;
              "
            />
            <div class="flex-grow-1">
              <el-skeleton-item
                variant="text"
                class="ml-2"
                style="width: 30%"
              />
              <br />
              <el-skeleton-item
                variant="text"
                class="ml-2 mt-2"
                style="width: 70%"
              />
            </div>
          </div>
          <div style="padding: 14px">
            <div
              style="
                display: flex;
                align-items: center;
                justify-items: space-between;
                margin-top: 16px;
                height: 16px;
              "
            >
              <el-skeleton-item variant="text" style="margin-right: 16px" />
              <el-skeleton-item variant="text" style="width: 30%" />
            </div>
            <div
              style="
                display: flex;
                align-items: center;
                justify-items: space-between;
                margin-top: 16px;
                height: 16px;
              "
            >
              <el-skeleton-item variant="text" style="width: 30%" />
              <el-skeleton-item variant="text" style="margin-left: 16px" />
            </div>
            <el-skeleton-item
              variant="square"
              class="mt-3"
              style="height: 50px"
            />
          </div>
        </el-col>
      </el-row>
    </template>
    <template #default>
      <el-row :gutter="24">
        <template v-if="personLists.length > 0">
          <el-col
            :xl="4"
            :lg="6"
            :md="8"
            :sm="12"
            v-for="person in personLists"
            :key="person._id"
          >
            <el-card class="box-card mb-4">
              <template #header>
                <div class="card-header">
                  <div class="d-flex align-items-center">
                    <el-avatar
                      :size="42"
                      style="flex: 0 0 42px"
                      :src="person.picture"
                    ></el-avatar>
                    <div class="d-flex flex-column ml-2">
                      <span class="mb-1">{{ person.name }}</span>
                      <el-tag size="small">
                        <el-link
                          type="primary"
                          :underline="false"
                          :href="`mailto:${person.email}`"
                        >
                          {{ person.email }}
                        </el-link>
                      </el-tag>
                    </div>
                  </div>
                </div>
              </template>
              <div class="text item">
                <div class="address mb-3">
                  <p>{{ person.address }}</p>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <router-link
                    :to="`/person/edit/${person._id}`"
                    class="button"
                  >
                    <el-button type="primary">Edit</el-button>
                  </router-link>
                  <el-button class="ml-2" type="danger">Delete</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </template>
      </el-row>
    </template>
  </el-skeleton>
</template>

<script>
export default {
  name: "PersonListPresentation",
  props: ["persons"],
  emits: ["getPersons"],
  data() {
    return {
      personLists: [],
      isLoading: true,
    };
  },
  watch: {
    persons(newValue) {
      if (newValue.length) {
        this.personLists = newValue;
        this.isLoading = false;
      }
    },
  },
  created() {
    this.$emit("getPersons");
  },
};
</script>
