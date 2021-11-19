<template>
  <app-dashboard />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Dashboard from './views/Dashboard.vue';

@Options({
  components: {
    'app-dashboard': Dashboard
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  #app {}
</style>
