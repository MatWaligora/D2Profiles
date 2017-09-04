<template>
  <div class="container">
    <div class="column main-content" v-if="profile.displayName">
      <h1 class="is-size-1">Your profile: {{profile.displayName}}</h1>
      <h4 class="is-size-4">Motto: {{profile.about}}</h4>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapMutations } from 'vuex';

  import API from '../../endpointsMixin.vue';

  export default {
    name: 'Profile',
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({profile: 'getProfile'}),
    },
    mixins: [API],
    methods: {
      ...mapMutations(['updateProfile', 'updateDestinyMemberships', 'updateLoader']),
      getBungieUser() {
        this.updateLoader(true);
        this.GetMembershipDataForCurrentUser().then(res => {
            let body = res.body.Response;
            console.log('GetMembershipDataForCurrentUser', body);
            this.updateProfile(body.bungieNetUser);
            this.updateDestinyMemberships(body.destinyMemberships);
            this.fetchAllPlayerData();
          }
        )
      },
      fetchAllPlayerData() {
        Promise.all([
          this.GetDestinyManifest(),
          this.SearchDestinyPlayer(),
          this.GetProfile()
        ]).then(res => {
          console.log(res);
          this.updateLoader(false);
        });
      }
    },
    mounted() {
      this.getBungieUser();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 @import "../../../node_modules/bulma/sass/utilities/variables";

</style>
