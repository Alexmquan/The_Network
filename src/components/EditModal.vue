<template>
  <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">

        <div class="modal-header header-style">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Profile</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="editAccount()">

          <div class="modal-body row">
            <div class="col-12 cover-img">
              <label for="coverImg">Cover Image URL</label>
              <input type="url" v-model="editable.coverImg" name="coverImg" class="form-control" id="coverImg"
                placeholder="coverImg url..." maxlength="150">
            </div>
            <div class="col-7">
              <h2>{{ account.name }}</h2>
            </div>
            <div class="col-5">
              <label for="github">Github</label>
              <input type="url" v-model="editable.github" name="github" class="form-control" id="github"
                placeholder="url..." maxlength="100">
            </div>

            <div class="col-7">
              <label for="picture">Profile Image</label>
              <input type="url" v-model="editable.picture" name="picture" class="form-control" id="picture"
                placeholder="url..." maxlength="150">
            </div>
            <div class="col-5">
              <label for="linkedin">LinkedIn</label>
              <input type="url" v-model="editable.linkedin" name="linkedin" class="form-control" id="linkedin"
                placeholder="url..." maxlength="100">
            </div>


            <div class="col-5 ">
              <label for="class">Attending Class</label>
              <input type="text" v-model="editable.class" name="class" class="form-control" id="class" placeholder="class"
                maxlength="150">
            </div>
            <div class="col-2 d-flex ">
              <label for="graduated">Graduated</label>
              <input type="checkbox" v-model="editable.graduated" name="graduated" class="" id="graduated">
            </div>
            <div class="col-5">
              <label for="resume">Resume</label>
              <input type="url" v-model="editable.resume" name="resume" class="form-control" id="resume"
                placeholder="url..." maxlength="100">
            </div>
            <div class="col-12">
              <label for="bio">Bio</label>
              <input type="text" v-model="editable.bio" name="bio" class="form-control" id="bio"
                placeholder="Tell us about yourself" maxlength="1000">
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" data-bs-dismiss="modal" class="btn btn-primary">Edit Account</button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>


<script>
import { watchEffect, computed } from "vue";
import { AppState } from "../AppState.js";
import { ref } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { accountService } from "../services/AccountService.js";

export default {
  setup() {
    const editable = ref({})

    watchEffect(() => {
      if (AppState.account.id) {
        editable.value = { ...AppState.account }
      }
    })
    return {
      editable,
      account: computed(() => AppState.account),

      async editAccount() {
        try {
          const edits = editable.value
          await accountService.editAccount(edits)
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
.header-style {
  background-color: #ca9229;
  height: 8vh;
}

.cover-img {
  background-image: url();
}
</style>