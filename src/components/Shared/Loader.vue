<template>
  <div :class="['modal', {'is-active': loader}]">
    <div class="modal-background"></div>
    <div class="modal-content ">
      <!-- Any other Bulma elements you want -->
      <pacman-loader  :color="'white'"></pacman-loader>
    </div>
  </div>
</template>

<script type="text/babel">
  import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'
  import { mapGetters } from 'vuex';
    export default {
        name: 'loader',
        data() {
            return {}
        },
      computed: {
        ...mapGetters({
          loader: 'getLoader'
        }),
      },
      components: {
        PacmanLoader
      }
    }
</script>

<style lang="scss" scoped>
  p {
    text-align: center;
    color: white;
  }

  .modal-content {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
