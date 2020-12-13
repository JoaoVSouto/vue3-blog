<template>
  <div class="container">
    <h3>Sign In</h3>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="text">
            <label for="email">E-mail</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password">
            <label for="password">Password</label>
          </div>
        </div>
        <button class="btn waves-effect waves-light orange accent-2" type="submit" name="action">
          Login
          <i class="fas fa-sign-in-alt"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignIn',
  components: {
  },
});
</script>
