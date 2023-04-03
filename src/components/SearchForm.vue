<template>
  <form @submit.prevent="searchStuff()">
    <div>
      <input v-model="search.query" type="text" id="search">
      <button type="submit" class="search-btn btn selectable"><i class="mdi mdi-magnify"></i></button>
    </div>
  </form>
</template>


<script>
import { postsService } from "../services/PostsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { profilesService } from "../services/ProfilesService.js";

export default {
  setup() {
    const search = ref({})
    const router = useRouter();
    const route = useRoute();
    return {

      search,

      async searchStuff() {
        try {
          const currentPath = route.path;
          if (currentPath != '/search') {
            router.push({ name: 'Search' })
          }
          const query = search.value.query
          await profilesService.searchProfiles(query)
          await postsService.searchPosts(query)
        } catch (error) {
          logger.log(error.message)
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.search-btn {
  background-color: white;
  border: none;
}
</style>