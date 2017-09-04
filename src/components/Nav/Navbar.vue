<template>
  <nav>
    <div class="navbar-burger" data-target="navMenu" @click="toggleNavbar">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="navbar-menu" id="navMenu">
      <div class="navbar-start">
        <!-- navbar items -->
        <a class="navbar-item">
          D2 Profiles
        </a>
        <router-link tag="a" class="navbar-item" :to="'/'" exact="" v-if="!loggedIn">Home</router-link>
        <router-link tag="a" class="navbar-item" :to="'/profile'" v-if="loggedIn">Profile</router-link>
      </div>

      <div class="navbar-end">
        <!-- navbar items -->
        <a class="navbar-item has-text-dark has-text-centered" @click="login" v-if="!loggedIn">
          Login
        </a>
        <a class="navbar-item has-text-dark has-text-centered" @click="logout" v-else>
          Logout
        </a>
        <!--<a class="navbar-item is-hoverable has-dropdown has-text-light">-->
          <!--<a class="navbar-link  has-text-centered">-->
            <!--Options-->
          <!--</a>-->
          <!--<div class="navbar-dropdown is-right has-text-dark has-text-centered">-->
            <!--&lt;!&ndash; navbar-item, navbar-divider etc. &ndash;&gt;-->

          <!--</div>-->
        <!--</a>-->
      </div>
    </div>
  </nav>

</template>

<script type="text/babel">
  import { mapMutations } from 'vuex';
  import { mapGetters } from 'vuex';
  export default {
    name: '',
    data() {
      return {
        client_id: 20967,
        response_type: '200',
        state: 'home'
      }
    },
    computed: {
      ...mapGetters({loggedIn: 'getLoggedIn'}),
    },
    methods: {
      ...mapMutations(['updateLoggedIn']),
      login() {
        window.location.href = `https://www.bungie.net/en/OAuth/Authorize?client_id=${this.client_id}&response_type=code&state=${this.state}`
      },
      logout() {
        this.updateLoggedIn(false)
        this.$router.push({name: 'Home'});
        },
      toggleNavbar() {
        let navbar = document.getElementById('navMenu');
        navbar.classList.toggle('is-active')
      }

    }
  }
</script>

<style lang="scss">
  .navbar-burger {
    span {
      color: white;
      background-color: white;
    }
    &:hover {
      color: black;
      background-color: white;
    }
  }
</style>
