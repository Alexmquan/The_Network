<template>
  <section class="col-11 elevation-3 m-4 rounded">
    <div class="row card-style d-flex align-items-center">
      <div class="col-2 ">
        <img class="profile-style ms-5" :src="profile?.picture" alt="">
      </div>
      <div class="col-10 mt-4">
        <h4>{{ profile?.class }}</h4>
        <h2 class="font-weight-bold">{{ profile?.name }}</h2>
      </div>
    </div>
  </section>
</template>


<script>

import { Profile } from "../models/Account.js";


export default {
  props: {
    profile: {
      type: Profile,
      required: true
    }
  },
  setup() {
    // const route = useRoute()

    return {}
  }
}
</script>


<style lang="scss" scoped>
.profile-style {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;

}

.card-style {
  height: 20vh;
}
</style>