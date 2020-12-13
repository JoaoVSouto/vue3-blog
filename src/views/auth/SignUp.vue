<template>
  <div class="container">
    <h3>Sign Up</h3>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="name" type="text">
            <label for="name">Name</label>
          </div>
        </div>
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
        <div class="row">
          <div class="input-field col s12">
            <input id="confirm_password" type="password">
            <label for="confirm_password">Confirm password</label>
          </div>
        </div>
        <button class="btn waves-effect waves-light orange accent-2" type="submit" name="action">
          Register
          <i class="fas fa-user-plus"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignUp',
  components: {
  },
});
</script>
