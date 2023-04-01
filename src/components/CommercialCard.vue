<template>
  <div class="commercial-card img-fluid">
    <img :src="commercial.tall" :alt="commercial.card">
  </div>
</template>


<script>
import { AppState } from "../AppState.js";
import { Commercial } from "../models/Commercial.js";

export default {
  props: {
    commercial: {
      type: Commercial,
      required: true
    }
  },
  setup() {
    return {

    }
  }
}
</script>


<style>
/* .commercial-card {} */
</style>