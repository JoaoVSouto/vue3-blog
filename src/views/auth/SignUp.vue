<template>
  <div class="container">
    <h3>Sign Up</h3>
    <div class="row">
      <form class="col s12" @submit.prevent="handleSubmission">
        <div class="row">
          <div class="input-field col s12">
            <input id="name" type="text" v-model="name" />
            <label for="name">Name</label>
            <span class="helper-text">{{ nameError }}</span>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" v-model="email" />
            <label for="email">E-mail</label>
            <span class="helper-text">{{ emailError }}</span>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" v-model="password" />
            <label for="password">Password</label>
            <span class="helper-text">{{ passwordError }}</span>
          </div>
        </div>
        <div class="row last-row">
          <div class="input-field col s12">
            <input
              id="confirm_password"
              type="password"
              v-model="passwordConfirmation"
            />
            <label for="confirm_password">Confirm password</label>
            <span class="helper-text">{{ passwordConfirmationError }}</span>
          </div>
        </div>
        <button
          class="btn waves-effect waves-light orange accent-2"
          type="submit"
          name="action"
        >
          Register
          <i class="fas fa-user-plus"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useToast } from 'vue-toastification';
import { useField, useForm } from 'vee-validate';
import * as Yup from 'yup';

import { setAuthData } from '@/store/auth';

export default defineComponent({
  name: 'SignUp',
  setup() {
    const schema = Yup.object({
      name: Yup.string()
        .required('Name is required')
        .min(2, 'Name has to have at least 2 characters'),
      email: Yup.string()
        .required('Email is required')
        .email('Type a valid email'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password has to have a minimum of 6 characters'),
      password_confirmation: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match',
      ),
    });

    const { validate } = useForm({
      validationSchema: schema,
    });

    const toast = useToast();

    const { value: name, errorMessage: nameError } = useField('name');
    const { value: email, errorMessage: emailError } = useField('email');
    const { value: password, errorMessage: passwordError } = useField(
      'password',
    );
    const {
      value: passwordConfirmation,
      errorMessage: passwordConfirmationError,
    } = useField('password_confirmation');

    async function handleSubmission() {
      try {
        const { valid } = await validate();

        if (!valid) {
          return;
        }

        const response = await fetch(
          'http://localhost:8000/api/auth/register',
          {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              password,
              password_confirmation: passwordConfirmation,
            }),
          },
        );
        const { data } = await response.json();

        setAuthData({
          token: data.token,
          user: data.user,
        });

        toast.success('🎉 User created successfully!');
      } catch {
        toast.error('Error while creating the account. Please, try again.');
      }
    }

    return {
      name,
      nameError,
      email,
      emailError,
      password,
      passwordError,
      passwordConfirmation,
      passwordConfirmationError,
      handleSubmission,
    };
  },
});
</script>

<style lang="scss" scoped>
  .helper-text {
    color: #f44336;
  }

  .last-row {
    margin-bottom: 0;
  }
</style>
