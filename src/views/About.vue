<template>
  <div class="container">
    <h1>About</h1>
    <div class="img-wrapper z-depth-2">
      <img
        src="../assets/criminals-removebg-preview.png"
        alt="Prison Eloi's gang"
      >
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      aliquid dignissimos consectetur ullam ab, odio quos saepe facilis sed
      voluptatibus, nostrum eos nulla. Dolore cupiditate amet mollitia distinctio!
      Aperiam architecto voluptate numquam fugit corporis quibusdam quo eum iste a dicta!
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
  components: {
  },
});
</script>

<style lang="scss" scoped>
  .img-wrapper {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    width: 400px;
    height: 400px;

    img {
      width: 300px;
      height: 300px;
      object-fit: cover;
      border-radius: 50%;
      transform: translate(74px, 15px) scale(1.8);
    }
  }

  p {
    margin-top: 32px;
  }
</style>
