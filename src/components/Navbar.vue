<template>
  <nav>
    <div class="nav-wrapper blue-grey darken-4">
      <div class="container">
        <RouterLink to="/" class="brand-logo">
          <div class="logo-wrapper">
            <img
              src="../assets/criminals-removebg-preview.png"
              alt="Prison Eloi's gang"
            >
          </div>
          Prison Eloi's Blog
        </RouterLink>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <RouterLink to="/posts/create">Create post</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li>
            <a class="dropdown-trigger" href="#!" data-target="dropdown1">
              Eloi
              <i class="fas fa-chevron-down"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <ul id="dropdown1" class="dropdown-content">
    <!-- <li><a href="#">one</a></li>
    <li><a href="#">two</a></li>
    <li class="divider"></li> -->
    <li>
      <a>
        Logout
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Dropdown } from 'materialize-css';

export default defineComponent({
  name: 'Navbar',
  components: {
  },
  mounted() {
    const elems = document.querySelectorAll('.dropdown-trigger');
    Dropdown.init(elems, {});
  },
});
</script>

<style lang="scss" scoped>
  .brand-logo {
    display: flex;
    justify-content: center;
    align-items: center;

    .logo-wrapper {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 16px;

      img {
        width: 56px;
        height: 56px;
        object-fit: cover;
        border-radius: 50%;
        transform: translate(13px, 10px) scale(1.8);
      }
    }
  }

  .dropdown-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;

    i {
      margin-left: 4px;
      transform: scale(0.6);
    }
  }
</style>
