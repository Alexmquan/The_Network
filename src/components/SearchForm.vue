<template>
  <form @submit.prevent="searchPosts()">
    <div class="">
      <input v-model="editable.query" type="text" id="search">
      <button type="submit" class="search-btn btn selectable"><i class="mdi mdi-magnify"></i></button>
    </div>
  </form>
</template>


<script>
import { postsService } from "../services/PostsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { ref } from "vue";

export default {
  setup() {
    const editable = ref({})
    return {
      editable,

      async searchPosts() {
        try {
          const query = editable.value
          logger.log('[Search Query]', query)
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