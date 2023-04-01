<template>
  <div class="container-fluid row">
    <section class="col-11">
      <PostForm />
    </section>
    <section class="col-11 my-3" v-for="p in posts">
      <PostCard :post="p" />
    </section>

  </div>
</template>

//TODO - Working on importing profilesPage. Just add getProfileId and need to add to service file still. May need to do other things still..
<script>
import { useRoute } from "vue-router";
import { profilesService } from "../services/ProfilesService.js";


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
    onMounted(() => {
      getProfileById()
    })
    return {}
  }
}
</script>


<style lang="scss" scoped></style>