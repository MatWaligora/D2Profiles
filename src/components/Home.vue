<template>
    <div class="container">
      <div class="columns is-centered is-vcentered">
        <div class="column is-one-third main-content">
          <h1 class="is-size-5-touch is-size-3-widescreen has-text-centered">You haven't logged in yet</h1>
          <div class="column ">
            <div class="columns is-centered">
              <button class="button is-white is-medium-tou " @click="login">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/babel">
  import { mapGetters } from 'vuex';

  export default {
    name: 'home',
    data() {
      return {
        client_id: 20967,
        response_type: '200',
        state: 'home'
      }
    },
    computed: {
      ...mapGetters({
        loggedIn: 'getLoggedIn',
      }),
    },
    methods: {
      login() {
        window.location.href = `https://www.bungie.net/en/OAuth/Authorize?client_id=${this.client_id}&response_type=code&state=${this.state}`
      }
    }
  }
</script>

<style lang="scss">
  button.button {
    display: block;
    margin: 10px auto;
  }
</style>
