<template lang=pug>
  .content_meetups(v-if="gallery")
    .container
      h2 {{title}}
      .row-flex_list
        .photo_item(v-for="idx in gallery.to+1", :key="idx-1", :style="{backgroundImage:`url('${gallery.path}preview/${idx-1}.jpg')`}",@click="showLightbox(idx-1)",loading="lazy")
    .lightbox(v-if="displayLightbox", @click="displayLightbox=false")
      button.lightbox_btn(@click="pointerDecr") <
      img.fullimage(:src="`${gallery.path}${imagePointer}.jpg`")
      button.lightbox_btn(@click="pointerIncr") >
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component({
    components: {},
  })
  export default class Galery extends Vue {
    @Prop() gallery!: { [id: string]: any };
    @Prop() title!: string;
    displayLightbox: boolean = false;
    imagePointer: number = 0;

    onEscape(ev) {
      if (ev.key === "Escape") {
        this.displayLightbox = false;
      } else if (ev.key === "ArrowRight") {
        this.pointerIncr(ev);
      } else if (ev.key === "ArrowLeft") {
        this.pointerDecr(ev);
      }
    }

    mounted() {
      document.addEventListener("keyup", this.onEscape);
    }

    beforeDestroy() {
      document.removeEventListener("keyup", this.onEscape);
    }

    pointerDecr(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      if (this.imagePointer === 0)
        this.imagePointer = this.gallery.to;
      else
        this.imagePointer--;
    }

    pointerIncr(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      if (this.imagePointer === this.gallery.to)
        this.imagePointer = 0;
      else
        this.imagePointer++;
    }

    showLightbox(idx) {
      this.displayLightbox = true;
      this.imagePointer = idx;
    }
  }
</script>

<style scoped>
  .video_items {
    margin: 16px;
  }

  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);

    cursor: pointer;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .fullimage {
    max-width: 80%;
    max-height: 80%;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
  }

  .lightbox_btn {
    width: 10vw;
    height: 80vh;
    display: block;
    transition: background-color 0.4s ease;
    background: rgba(0, 0, 0, 0.0);
    border: none;
    box-shadow: none;
    border-radius: 0;
    color: #fff;
    border: none;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
  }

  .lightbox_btn:hover, .lightbox_btn:active, .lightbox_btn:focus {
    background: rgba(0, 0, 0, 0.4);
  }

  .photo_item {
    width: 128px;
    height: 128px;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    box-sizing: border-box;
  }

  .photo_item:hover, .photo_item:focus, .photo_item:active {
    border: 4px solid #00be8e;
  }
</style>
