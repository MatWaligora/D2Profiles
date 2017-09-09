<template>
  <div class="section">
    <div class="container">
      <h4 class="is-size-4">Characters</h4>
      <div class="tabs is-large">
        <ul>
          <li :class="[{'is-active': selectedCharacterKey === key}]" v-for="(character, key, index) in characters">
            <a  @click="selectedCharacterKey = key">
            {{classTypes[character.classType]}}
          </a>
          </li>
        </ul>
      </div>
      <div class="columns">
        <div class="column" v-for="(character, key, index) in characters" v-if="key === selectedCharacterKey">
          <h5 class="is-size-5">
            {{classTypes[character.classType]}}
          </h5>
          <p class="character-data">Total playtime: {{(character.minutesPlayedTotal / 60).toFixed(0)}} hours {{(character.minutesPlayedTotal % 60)}} minutes</p>
          <p class="character-data" v-if="character.minutesPlayedThisSession > 0">
            Last session playtime: {{character.minutesPlayedThisSession}}
          </p>
          <p class="character-data">Power: {{character.light}}</p>
          <p class="character-data">Level: {{character.baseCharacterLevel}}</p>
        </div>
        <div class="column">
          <h4 class="is-size-4">Inventory</h4>
          <inventory :items="characterInventory" v-if="selectedCharacterKey != ''"></inventory>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import { mapGetters } from 'vuex';
  import Inventory from './Inventory/Inventory.vue';
  export default {
    name: 'Character',
    data() {
      return {
        selectedCharacterKey: '',
        classTypes: {
          0: 'Warlock',
          1: 'Hunter',
          2: 'Titan',
        }
      }
    },
    components: {
      Inventory
    },
    computed: {
      ...mapGetters({
        userProfile: 'getUserProfile',
      }),
      characters() {
        return this.userProfile.characters.data;
      },
      characterInventory() {
        return this.userProfile.characterInventories.data[this.selectedCharacterKey].items;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section {
    color: white;
  }

  .list-item {
    cursor: pointer;
    padding: 10px;
  }
</style>
