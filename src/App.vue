<template>
  <Navbar />
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  },
});
</script>

<style lang="scss">
@import '~materialize-css/sass/materialize';

input:not([type]):focus:not([readonly]),
input[type=text]:not(.browser-default):focus:not([readonly]),
input[type=password]:not(.browser-default):focus:not([readonly]),
input[type=email]:not(.browser-default):focus:not([readonly]),
input[type=url]:not(.browser-default):focus:not([readonly]),
input[type=time]:not(.browser-default):focus:not([readonly]),
input[type=date]:not(.browser-default):focus:not([readonly]),
input[type=datetime]:not(.browser-default):focus:not([readonly]),
input[type=datetime-local]:not(.browser-default):focus:not([readonly]),
input[type=tel]:not(.browser-default):focus:not([readonly]),
input[type=number]:not(.browser-default):focus:not([readonly]),
input[type=search]:not(.browser-default):focus:not([readonly]),
textarea.materialize-textarea:focus:not([readonly]) {
  border-bottom-color: #37474f;
  box-shadow: 0 1px 0 0 #37474f;
}

input:not([type]):focus:not([readonly]) + label,
input[type=text]:not(.browser-default):focus:not([readonly]) + label,
input[type=password]:not(.browser-default):focus:not([readonly]) + label,
input[type=email]:not(.browser-default):focus:not([readonly]) + label,
input[type=url]:not(.browser-default):focus:not([readonly]) + label,
input[type=time]:not(.browser-default):focus:not([readonly]) + label,
input[type=date]:not(.browser-default):focus:not([readonly]) + label,
input[type=datetime]:not(.browser-default):focus:not([readonly]) + label,
input[type=datetime-local]:not(.browser-default):focus:not([readonly]) + label,
input[type=tel]:not(.browser-default):focus:not([readonly]) + label,
input[type=number]:not(.browser-default):focus:not([readonly]) + label,
input[type=search]:not(.browser-default):focus:not([readonly]) + label,
textarea.materialize-textarea:focus:not([readonly]) + label {
  color: #37474f;
}

button[type='submit'] {
  font-weight: bold;
}
</style>
