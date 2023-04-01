<template>
  <div class="elevation-3 rounded p-3 my-5">
    <div class="row ">
      <div class="col-2"><img class="profile-style img-fluid"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""></div>
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
              <button class="btn btn-success">Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
export default {
  setup() {
    const editable = ref({})

    return {
      editable,
      async createPost() {
        try {

        } catch (error) {
          logger.log(error.message)
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>