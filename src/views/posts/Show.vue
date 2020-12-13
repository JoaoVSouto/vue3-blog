<template>
  <div class="container">
    <h1>Post title</h1>
    <time>
      <i class="far fa-clock"></i>
      23/11/2020 08:42:23
    </time>
    <span>
      <i class="fas fa-user"></i>
      Posted by <strong>Fulano</strong>
    </span>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur at
      blanditiis modi illum! Ad voluptatum sunt similique eligendi sequi. Maxime
      blanditiis, quos accusamus repellendus molestias quae fugiat. Delectus,
      blanditiis quasi.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShowPost',
  components: {
  },
});
</script>

<style lang="scss" scoped>
span {
  margin-left: 8px;
}

strong {
  font-weight: bold;
  font-style: italic;
}
</style>
