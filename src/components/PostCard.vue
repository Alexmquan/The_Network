<template>
  <div class="elevation-3 rounded p-4">
    <div class="row">
      <div class="col-2">
        <router-link :to="{ name: 'Profile', params: { profileId: post.creatorId } }">
          <img class="img-fluid profile-img-style" :src="post.creator.picture" :alt="post.creator.name">

        </router-link>
      </div>
      <div class="col-10 d-flex justify-content-between">
        <div>
          <h3>{{ post.creator.name }}</h3>
          <h3>{{ post.createdAt }} | graduated</h3>
        </div>
        <div><button class="btn btn-outline-danger"><i class="mdi mdi-trash-can"></i></button></div>
      </div>
      <div class="col-12">
        <p>{{ post.body }}</p>
        <img class="img-fluid" :src="post.imgUrl" alt="">
      </div>
      <div class="col-12 d-flex justify-content-end">
        <h5 @click="increaseLikes()"><i class="mdi mdi-heart"></i></h5>
        <h5>{{ post.likes.length }}</h5>
      </div>
    </div>
  </div>
</template>


<script>
import { Post } from "../models/Post.js";
import { logger } from "../utils/Logger.js";

export default {
  props: {
    post: {
      type: Post,
      required: true
    }
  },
  setup() {
    return {
      async increaseLikes() {
        try {

        } catch (error) {
          logger.log(error.message)

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