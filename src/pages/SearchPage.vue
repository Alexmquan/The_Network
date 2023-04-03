<template>
  <h2>People</h2>
  <div v-for="profile in profiles">
    <ProfileCard :profile="profile" />
  </div>
  <h2>Posts</h2>
  <div v-for="p in posts">
    <PostCard :post="p" />
  </div>
</template>


<script>
import PostCard from "../components/PostCard.vue";
import { AppState } from "../AppState.js";
import { postsService } from "../services/PostsService.js";
import { profilesService } from "../services/ProfilesService.js";
import { computed } from "vue";

export default {
  setup() {
    // const route = useRoute()

    // async function getProfilesBySearch() {
    //   try {
    //     const profileId = route.params.profileId
    //     await profilesService.getProfilesBySearch(profileId)
    //   } catch (error) {
    //     logger.error(error.message)
    //     Pop.error(error.message)
    //   }
    // }

    // async function getPostsBySearch() {
    //   try {
    //     const profileId = route.params.profileId
    //     logger.log('[Get postby id]', profileId)
    //     await postsService.getPostsBySearch({ creatorId: profileId })
    //   } catch (error) {
    //     logger.log(error.message)
    //     Pop.error(error.message)
    //   }
    // }

    // onMounted(() => {
    //   getProfileById()
    //   getPostsByProfileId()
    // })
    return {
      posts: computed(() => AppState.posts),
      profiles: computed(() => AppState.searchProfiles)
    };
  },
  components: { PostCard }
}
</script>


<style lang="scss" scoped></style>