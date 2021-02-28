<template>
  <div class="container">
    <h3>Sign Up</h3>
    <div class="row">
      <form class="col s12" @submit.prevent="handleSubmission">
        <div class="row">
          <div class="input-field col s12">
            <input id="name" type="text" v-model="authData.name">
            <label for="name">Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="text" v-model="authData.email">
            <label for="email">E-mail</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" v-model="authData.password">
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="confirm_password" type="password" v-model="authData.password_confirmation">
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
import { defineComponent, reactive } from 'vue';

import { setAuthData } from '@/store/auth';

export default defineComponent({
  name: 'SignUp',
  setup() {
    const authData = reactive({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    });

    async function handleSubmission() {
      const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: authData.name,
          email: authData.email,
          password: authData.password,
          password_confirmation: authData.password_confirmation,
        }),
      });
      const { data } = await response.json();

      setAuthData({
        token: data.token,
        user: data.user,
      });
    }

    return {
      authData,
      handleSubmission,
    };
  },
});
</script>
