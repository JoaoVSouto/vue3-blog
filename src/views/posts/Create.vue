<template>
  <div class="container">
    <h3>Create post</h3>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="title" type="text">
            <label for="title">Title</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="content" class="materialize-textarea"></textarea>
            <label for="content">Content</label>
          </div>
        </div>
        <button class="btn waves-effect waves-light orange accent-2" type="submit" name="action">
          Publish
          <i class="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CreatePost',
  components: {
  },
});
</script>
