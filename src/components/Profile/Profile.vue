<template>
  <div class="container">
    <div class="column main-content" v-if="account.displayName">
      <h1 class="is-size-1">Your account: {{account.displayName}}</h1>
      <h4 class="is-size-4">Motto: {{account.about}}</h4>
    </div>
    <character  v-if="userProfile.characters"></character>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapMutations } from 'vuex';
  import Character from './Character/Character.vue';
  import API from '../../endpointsMixin.vue';

  export default {
    name: 'Profile',
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        account: 'getAccount',
        userProfile: 'getUserProfile',
      }),
    },
    mixins: [API],
    components: {
      Character
    },
    methods: {
      ...mapMutations([
        'updateAccount',
        'updateDestinyMemberships',
        'updateLoader',
        'updateUserProfile']),
      getBungieUser() {
        this.updateLoader(true);
        this.GetMembershipDataForCurrentUser().then(res => {
            let body = res.body.Response;
            console.log('GetMembershipDataForCurrentUser', body);
            this.updateAccount(body.bungieNetUser);
            this.updateDestinyMemberships(body.destinyMemberships);
            this.fetchAllPlayerData();
          }
        )
      },
      fetchAllPlayerData() {
        Promise.all([
          this.GetDestinyManifest(),
          this.SearchDestinyPlayer(),
          this.GetPublicMilestones(),
          this.GetProfile(),
        ]).then(res => {
          console.log(res);
          this.updateUserProfile(res[3].body.Response);
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
