<template>
  <div class="col s12 m6">
    <div class="card blue-grey darken-3">
      <div class="card-content white-text">
        <span class="card-title">Card Title</span>
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
      <div class="card-action" title="View post">
        <RouterLink to="/posts/show/1">
          <i class="fa fa-eye"></i>
        </RouterLink>
        <RouterLink to="/posts/edit/1" title="Edit post">
          <i class="fas fa-edit"></i>
        </RouterLink>
        <a href="#" title="Delete post">
          <i class="fas fa-trash-alt"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Post',
  components: {
  },
});
</script>

<style lang="scss">

</style>
