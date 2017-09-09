<template>
  <div class="section">

  </div>
</template>

<script type="text/babel">
  import { mapGetters } from 'vuex';
  import EndpointsMixin from '../../../../endpointsMixin.vue';
  export default {
    name: 'Character',
    mixins: [EndpointsMixin],
    data() {
      return {

      }
    },
    props: {
      items: {
        type: Array,
        required: true
      }
    },

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
