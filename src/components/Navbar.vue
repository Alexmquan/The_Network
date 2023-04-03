<template>
  <nav class="navbar navbar-expand-lg nav-style px-3 d-flex justify-content-between">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <div class="d-flex justify-content-start align-items-center">
        <img alt="logo" src="../assets/img/Network.svg" height="45" />
        <h1 class="ps-2">The Network</h1>
      </div>
    </router-link>


    <div class="d-flex align-items-center">
      <div>
        <SearchForm />
      </div>
      <div class="ms-4">
        <Login />
      </div>
    </div>

  </nav>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
.nav-style {
  background-color: #ca9229;
}

a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
