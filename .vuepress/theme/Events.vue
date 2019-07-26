<template functional lang=pug>
  .content_meetups(v-if="props.items&&props.items.length",:id="props.id")
    .container
      h2 {{props.title}}
      .row-flex_list
        a.item.item_event(:href="ev.path", v-for="(ev,index) in props.items", :key="index")
          .item_name {{ev.frontmatter.kind}} {{ev.frontmatter.number}}
          .item_date {{ev.frontmatter.date}}
          .item_place {{ev.frontmatter.place}}
      .btns_row(v-if="props.callForPlace")
        a.btn(:href="props.callForPlace", target="_blank") захостить митап
</template>

<style>
  .content_meetups {
    padding-bottom: 64px;
  }

  .btns_row {
    text-align: center;
    padding-top: 16px;
  }
</style>