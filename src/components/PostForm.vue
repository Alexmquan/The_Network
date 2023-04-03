<template>
  <div class="elevation-3 rounded p-3 my-5">
    <div class="row ">
      <div class="col-2">
        <!-- <router-link :to="{ name: 'Profile', params: { profileId: AppState.account.id } }"> -->
        <img class="profile-img-style img-fluid" :src="account.picture" alt="">
        <!-- </router-link> -->
      </div>
      <div class="col-10">
        <div class="">
          <form @submit.prevent="createPost()" class="row">
            <div class="col-12 m-3">

              <textarea name="body" v-model="editable.body" id="body" cols="100" rows="4"
                placeholder="Share whats happening"></textarea>
            </div>
            <div>
              <label for="imgUrl" class="me-2">Add Photo Url</label>
              <input type="url" v-model="editable.imgUrl" name="imgUrl" id="imgUrl" maxlength="200">
            </div>
            <div class="d-flex justify-content-end me-5 my-3">
              <button type="submit" class="btn btn-success">Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import { Post } from "../models/Post.js";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js";
import { useRoute } from "vue-router";
import { profilesService } from "../services/ProfilesService.js";

export default {

  setup() {
    // const route = useRoute()
    const editable = ref({})

    // async function getProfileById() {
    //   try {
    //     const profileId = route.params.profileId
    //     await profilesService.getProfileById(profileId)
    //   } catch (error) {
    //     logger.error(error.message)
    //     Pop.error(error.message)
    //   }
    // }

    onMounted(() => {
      // getProfileById()

    })

    return {
      editable,
      account: computed(() => AppState.account),
      post: computed(() => AppState.posts),


      async createPost() {
        try {
          const postData = editable.value
          await postsService.createPost(postData)
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