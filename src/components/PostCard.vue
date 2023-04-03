<template>
  <div class="elevation-3 rounded p-4 ms-3">
    <div class="row">
      <div class="col-2">
        <router-link :to="{ name: 'Profile', params: { profileId: post.creatorId } }">
          <img class="img-fluid profile-img-style" :src="post.creator.picture" :alt="post.creator.name">

        </router-link>
      </div>
      <div class="col-10 d-flex justify-content-between">
        <div>
          <h3>{{ post.creator.name }}</h3>
          <div class="d-flex align-items-center ">
            <h5>{{ post.createdAt }}</h5>
            <div class="ms-3" v-if="post.creator.graduated">
              <h3><img src="src\assets\img\graduate.svg" alt=""></h3>
            </div>

          </div>

        </div>
        <div v-if="account.id == post.creator.id">
          <button @click.stop="deletePost()" class="btn btn-outline-danger"><i class="mdi mdi-trash-can"></i></button>
        </div>
      </div>
      <div class="col-12">
        <p>{{ post.body }}</p>
        <img class="img-fluid" :src="post.imgUrl" alt="">
      </div>
      <div class="col-12 d-flex justify-content-end">
        <h5 class="selectable" @click="changeLikes()"><i class="mdi mdi-heart"></i></h5>
        <h5>{{ post.likes.length }}</h5>
      </div>
    </div>
  </div>
</template>


<script>
import { Post } from "../models/Post.js";
import { logger } from "../utils/Logger.js";
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";
import { router } from "../router.js";
import { useRoute, useRouter } from "vue-router";

export default {
  props: {
    post: {
      type: Post,
      required: true
    }
  },

  setup(props) {
    const route = useRoute()
    const router = useRouter();
    return {
      route,
      account: computed(() => AppState.account),


      async deletePost() {
        try {
          if (await Pop.confirm('Are you sure you want to delete this post?')) {
            const postId = props.post.id
            await postsService.deletePost(postId)

          }
        } catch (error) {
          logger.log(error.message)
          Pop.error(error.message)
        }
      },

      async changeLikes() {
        try {
          const postId = props.post.id
          await postsService.changeLikes(postId)
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
.profile-img-style {
  height: 10vh;
  width: 10vh;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}
</style>