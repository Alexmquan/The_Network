<template>
  <h2>People</h2>
  <div v-for="post in posts">
    <PostCard :post="p" />
  </div>
  <h2>Posts</h2>
</template>


<script>
import PostCard from "../components/PostCard.vue";
import { AppState } from "../AppState.js";
import { postsService } from "../services/PostsService.js";
import { profilesService } from "../services/ProfilesService.js";

export default {
  setup() {
    // const route = useRoute()

    // async function getProfilesBySearch() {
    //   try {
    //     const profileId = route.params.profileId
    //     await profilesService.getProfilesBySearchS(profileId)
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
    return {};
  },
  components: { PostCard }
}
</script>


<style lang="scss" scoped></style>