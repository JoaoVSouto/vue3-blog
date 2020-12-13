<template>
  <div class="row posts-list">
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Post from '@/components/Post.vue';

export default defineComponent({
  name: 'PostsList',
  components: {
    Post,
  },
});
</script>

<style lang="scss" scoped>
  .posts-list {
    margin-top: 32px;
  }
</style>
