<template>
  <div class="container-fluid row">
    <section class="col-11" v-if="account.id">
      <PostForm />
    </section>
    <section class="col-11 my-3" v-for="p in posts" :key="p.id">
      <PostCard :post="p" />
    </section>
    <div class="col-8 text-center">
      <div class="justify-content-between d-flex">
        <h4 class="selectable" @click="changePage(newer)"><i class="mdi mdi-arrow-left"></i>Newer</h4>
        <h4 class="selectable" @click="changePage(older)">Older<i class="mdi mdi-arrow-right"></i></h4>

      </div>
    </div>

  </div>
</template>

<script>
// import { ref } from "vue";
import { postsService } from "../services/PostsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { onMounted } from "vue"
import { computed } from 'vue'
import { AppState } from "../AppState.js";

export default {
  setup() {
    async function getPosts() {
      try {
        await postsService.getPosts()
      } catch (error) {
        logger.log(error.message)
        Pop.error(error.message)
      }
    }
    onMounted(() => {
      getPosts()
    })
    return {
      posts: computed(() => AppState.posts),
      older: computed(() => AppState.older),
      newer: computed(() => AppState.newer),
      account: computed(() => AppState.account),

      async changePage(url) {
        try {
          await postsService.changePage(url)
        } catch (error) {
          logger.error(error)
          Pop.error(error.message)
        }
      }

    }
  }
}
</script>

<style scoped lang="scss">
.profile-style {
  height: 20vh;
  width: 20vh;
  border-radius: 50%;
}
</style>
