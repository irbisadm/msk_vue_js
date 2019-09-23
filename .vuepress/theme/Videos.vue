<template lang=pug>
  .content_meetups(v-if="items&&items.length")
    .container
      h2 {{title}}
      .row-flex_list
        .video_items(v-for="(item,key) in items", :key="key")
          a(:href="`https://youtu.be/${item}`", :style="{backgroundImage:`url('https://img.youtube.com/vi/${item}/hqdefault.jpg')`}", target="_blank")
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component({
    components: {},
  })
  export default class Videos extends Vue {
    @Prop() items!: any[];
    @Prop() title!: string;
  }
</script>

<style scoped>
  .video_items {
    margin: 16px;
  }

  .video_items a {
    width: 448px;
    height: 252px;
    display: block;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
</style>
