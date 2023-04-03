<template>
  <header>
    <Navbar />
  </header>
  <main>
    <section class="row">
      <div class="col-9">
        <router-view />
      </div>
      <div class="col-2 ">
        <div class="ads-style my-5" v-for="c in commercials">
          <CommercialCard :commercial="c" />
        </div>
      </div>
    </section>



  </main>
  <footer class="">

  </footer>
</template>

<script>
import { onMounted } from "vue"
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import { commercialsService } from "./services/CommercialsService.js"
import { logger } from "./utils/Logger.js"
import Pop from "./utils/Pop.js"


export default {
  setup() {
    async function getCommercials() {
      try {
        await commercialsService.getCommercials()
      } catch (error) {
        logger.error(error.message)
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getCommercials()
    })
    return {
      commercials: computed(() => AppState.commercials),
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

body {
  font-family: 'Ubuntu', sans-serif;
}

.ads-style {
  width: 50px
}

:root {
  --main-height: calc(100vh - 32px - 64px);
}


// footer {}
</style>
