<template>
  <div class="container-fluid row">
    <section class="col-11 elevation-3 m-4 rounded">
      <div class="row">
        <div class="col-12 position-relative">
          <img class="cover-img" :src="profile?.coverImg"
            alt="https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80">
          <img class="position-absolute profile-style" :src="profile?.picture" alt="">
          <img v-if="profile?.graduated" class="position-absolute graduate-style" src="src\assets\img\graduate.svg"
            alt="">
        </div>
        <div class="col-12 d-flex justify-content-end pt-3">
          <img v-if="profile?.github" @click.prevent="select(profile?.github)" class="px-1 selectable"
            src="src\assets\img\github.svg" alt="Github">
          <img v-if="profile?.linkedin" @click.prevent="select(profile?.linkedin)" class="px-1 selectable"
            src="src\assets\img\linkedin.svg" alt="linkedIn">
          <img v-if="profile?.resume" @click.prevent="select(profile?.resume)" class=" px-1 selectable"
            src="src\assets\img\Resume.svg" alt="Resume">
        </div>
        <div class="col-12 mt-4">
          <h4>{{ profile?.class }}</h4>
          <h2 class="font-weight-bold">{{ profile?.name }}</h2>
          <p>{{ profile?.bio ? profile?.bio : "Here is the bio that shows up when the profile user is silly" }}
          </p>
        </div>
        <div class="col-12 d-flex justify-content-end mb-3" v-if="account.id == profile?.id">
          <button type="button" class="btn btn-outline-success" data-bs-toggle="modal"
            data-bs-target="#editModal">edit</button>
        </div>

      </div>
    </section>
    <section v-if="account.id == profile?.id" class="col-11">
      <PostForm />
    </section>
    <section class="col-11 my-3" v-for="p in posts">
      <PostCard :post="p" />
    </section>

  </div>
  <EditModal />
</template>


<script>
import { useRoute } from "vue-router";
import { profilesService } from "../services/ProfilesService.js";
import { AppState } from "../AppState.js";
import { computed, onMounted } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";


export default {


  setup() {
    const route = useRoute()

    async function getProfileById() {
      try {
        const profileId = route.params.profileId
        await profilesService.getProfileById(profileId)
      } catch (error) {
        logger.error(error.message)
        Pop.error(error.message)
      }
    }

    async function getPostsByProfileId() {
      try {
        const profileId = route.params.profileId
        logger.log('[Get postby id]', profileId)
        await postsService.getPostsByProfileId({ creatorId: profileId })
      } catch (error) {
        logger.log(error.message)
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getProfileById()
      getPostsByProfileId()
    })
    return {
      route,
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
      profile: computed(() => AppState.activeProfile),

      select(url) {
        logger.log('[url]', url)
        if (url == this.profile?.github) {
          window.location.href = this.profile?.github
        }
        if (url == this.profile?.linkedin) {
          window.location.href = this.profile?.linkedin
        }
        if (url == this.profile?.resume) {
          window.location.href = this.profile?.resume
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.cover-img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  object-position: center;
}

.profile-style {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  bottom: -45px;
  left: 2vw;
}

.graduate-style {
  height: 3.5vh;
  width: 3.5vh;
  border: 2px black solid;
  border-radius: 50%;
  bottom: -45px;
  left: 5.5vw;
}
</style>