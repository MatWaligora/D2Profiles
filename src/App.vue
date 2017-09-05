<template>
  <div id="app">
    <loader></loader>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script type="text/babel">
  import Navbar from './components/Nav/Navbar.vue';
  import Loader from './components/Shared/Loader.vue';
  import API from './endpointsMixin.vue';
  import { mapGetters } from 'vuex';
  import { mapMutations } from 'vuex';
  export default {
    name: 'app',
    data() {
      return {
        url: 'https://www.bungie.net/Platform',
        tokenEndpoint: 'https://www.bungie.net/Platform/App/OAuth/Token/'
      }
    },
    computed: {
      ...mapGetters({
        account: 'getAccount',
        loggedIn: 'getLoggedIn',
        client_id: 'client_id',
        client_secret: 'getClientSecret',
        apiKey: 'getApiKey'
      }),
    },
    mixins: [API],
    components: {
      Navbar,
      Loader
    },
    methods: {
      ...mapMutations([
        'updateLoggedIn'
      ]),
      getAccessToken() {
        {
          let body = `grant_type=authorization_code&code=${this.$route.query.code}&client_id=20967&client_secret=${this.client_secret}`;
          let options = {
            headers: {
              'Content-type': 'application/x-www-form-urlencoded'
            }
          };
          this.$http.post(this.tokenEndpoint, body, options).then(res => {
            window.localStorage.setItem('refreshToken', JSON.stringify(res.body.refresh_token));
            window.localStorage.setItem('accessToken', JSON.stringify(res.body.access_token));
            this.updateLoggedIn(true);
            this.$router.push({name: 'Profile'});
          }, err => {
            console.log('post response err', err);
          })
        }
      },
      refreshToken() {
        let body = `grant_type=refresh_token&refresh_token=${JSON.parse(window.localStorage.getItem('refreshToken'))}&client_id=20967&client_secret=${this.client_secret}`;
        let options = {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          }
        };
        this.$http.post(this.tokenEndpoint, body, options).then(res => {
          window.localStorage.setItem('refreshToken', JSON.stringify(res.body.refresh_token));
          window.localStorage.setItem('accessToken', JSON.stringify(res.body.access_token));
          this.updateLoggedIn(true);
          this.$router.push({name: 'Profile'});
        }, err => {
          console.log('post response err', err);
        })

      },

    },
    created() {
      if(this.$route.query.code)  {
        this.getAccessToken();
      } else if(window.localStorage.getItem('refreshToken')) {
        this.refreshToken();
      }
    }
  }
</script>

<style lang="scss">
  @import "~bulma";

  #app {
    background-color: $dark;
    min-height: 100vh;
  }

  a.navbar-item, .navbar-link {
    color: $dark-invert;
  }

  .main-content {
    color: $dark-invert;
  }

  .is-vcentered {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
