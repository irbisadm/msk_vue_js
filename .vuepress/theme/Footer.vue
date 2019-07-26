<template lang=pug>
  footer
    img(src="./assets/mskvuesticker2.png")
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    components: {},
  })
  export default class Footer extends Vue {

  }
</script>

<style scoped>
  footer {
    text-align: center;
    padding: 64px 0;
  }
</style>
