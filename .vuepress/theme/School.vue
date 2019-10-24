<template lang=pug>
  .schoolpage
    .header_flex
      h1 Школа vue.js спикеров
    .container
      .about
        h2 О школе
        h2 Зачем мы это делаем
      .apply
        h2 Как начать?
      .process
        h2 Как идут занятия
      .success
        h2 Выпускники

</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    components: {},
  })
  export default class School extends Vue {

  }
</script>

<style scoped>

</style>
