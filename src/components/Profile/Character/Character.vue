<template>
  <div class="section">
    <div class="container">
      <div class="tabs">
        <ul>
          <li v-for="number in userProfile.characters.data.length"><a href="" @click="selectedCharacterIndex = number"></a></li>
        </ul>
      </div>
      <div class="columns">
        <div class="column" v-for="(character, index) in userProfile.characters.data" v-if="index === selectedCharacterIndex">
          <p class="character-data">Total playtime: {{character.minutesPlayedTotal}}</p>
          <p class="character-data" v-if="character.minutesPlayedThisSession > 0">
            This session playtime: {{character.minutesPlayedThisSession}}
          </p>
          <p class="character-data">Power: {{character.light}}</p>
          <p class="character-data">Level: {{character.baseCharacterLevel}}</p>
          <p class="character-data">Percent to next level: {{character.percentToNextLevel}}</p>
        </div>
        <div class="column">
          <h4 class="is-size-4">Inventory</h4>

        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import { mapGetters } from 'vuex';
  export default {
    name: 'Character',
    data() {
      return {
        selectedCharacterIndex: 0
      }
    },
    computed: {
      ...mapGetters({
        userProfile: 'getUserProfile',
        account: 'getAccount'
      }),
    }
  }
</script>

<style lang="scss" scoped>

</style>
