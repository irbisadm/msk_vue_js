<template lang=pug>
  .content_meetups(v-if="haveItems()")
    .container
      h2 {{title}}
      .row-flex_list
        a(:href="item.link",v-for="(item,index) in items", :key="index").item.item_link
          img(:src="item.img")
          .link_text {{item.name}}
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component({
    components: {},
  })
  export default class Partners extends Vue {
    @Prop() items!: any[];
    @Prop() title!: string;

    haveItems() {
      return this.items && this.items.length;
    }
  }
</script>

<style scoped>

</style>
