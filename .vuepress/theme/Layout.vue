<template lang=pug>
  .page
    Home(v-if="$page.frontmatter.home")
    School(v-else-if="$page.frontmatter.school")
    Page(v-else)
    Footer
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Home from "./Home.vue";
  import Footer from "./Footer.vue";
  import Page from "./Page.vue";
  import School from "./School.vue";

  @Component({
    components: {School, Home, Footer, Page},
  })
  export default class Layout extends Vue {

  }
</script>

<style src="./styles/reset.css"></style>
<style>
  @import url('https://fonts.googleapis.com/css?family=PT+Mono&display=swap&subset=cyrillic-ext');

  :root {
    font-family: 'PT Mono', monospace;
    color: #232E4B;
  }

  .container {
    width: 98%;
    margin: 0 auto;
    @media only screen and (min-width: 540px) {
      width: 80%;
    }
    @media only screen and (min-width: 768px) {
      width: 98%;
      max-width: 768px;
    }
    @media only screen and (min-width: 1024px) {
      width: 98%;
      max-width: 1024px;
    }
    @media only screen and (min-width: 1440px) {
      width: 98%;
      max-width: 1440px;
    }
  }

  .row-flex {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: flex-start;

    &_content {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 64px 0;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      @media only screen and (min-width: 1024px) {
        flex-wrap: nowrap;
        justify-content: space-between;
        align-content: stretch;
      }

      & .item {
        max-width: 100%;
        padding: 32px 0;
        @media only screen and (min-width: 1024px) {
          max-width: 45%;
        }
      }
    }

    &__space {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: stretch;
      align-items: flex-start;

      & .item {
        flex: 0 0 auto;
        align-self: auto;
      }
    }

    &__center {
      align-items: center;
    }

    & .item-min {
      flex: 0 1 auto;
      align-self: auto;
    }

    & .item-max {
      flex: 1 0 auto;
      align-self: auto;
    }
  }

  .btn {
    border-radius: 0;
    box-shadow: none;
    background: none;
    border: 1px solid #232E4B;
    color: #232E4B;
    text-decoration: none;
    padding: 16px 28px;
    line-height: 1;
    display: inline-block;
    position: relative;

    &:focus {
      background: #00BE8E;
      outline: 0;
      color: #fff;
    }

    &:hover {
      background: #00BE8E;
      transform: translate(-3px, -3px);
      color: #fff;
      box-shadow: 3px 3px 0px 0px #fff, 3px 3px 0px 1px #232E4B;

    }

    &_inversed {
      color: #fff;
      border: 1px solid #fff;

      &:focus {
        background: #00BE8E;
        outline: 0;
      }

      &:hover {
        background: #00BE8E;
        transform: translate(-3px, -3px);
        box-shadow: 3px 3px 0px 0px #232E4B, 3px 3px 0px 1px #fff;

      }
    }

  }

  h2 {
    font-size: 48px;
    padding: 0 0 42px 0;
    line-height: 56px;
    font-weight: bold;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 37px;
    line-height: 52px;
  }

  .row-flex_list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: flex-start;

    .item {
      flex: 0 1 auto;
      align-self: auto;
      width: calc(100% - 32px);
      margin: 8px;
      text-decoration: none;
      font-size: 24px;
      line-height: 27px;
      position: relative;
      color: #232E4B;
      @media only screen and (min-width: 768px) {
        width: calc(33% - 16px);
      }
      @media only screen and (min-width: 1024px) {
        width: calc(33% - 16px);
      }
      @media only screen and (min-width: 1440px) {
        width: calc(25% - 16px);
      }

      &_link {
        height: 250px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-content: stretch;
        align-items: center;
        @media only screen and (min-width: 540px) {
          width: calc(50% - 16px);;
        }
        @media only screen and (min-width: 768px) {
          width: calc(25% - 16px);
        }
        @media only screen and (min-width: 1024px) {
          width: calc(20% - 16px);
        }
        @media only screen and (min-width: 1440px) {
          width: calc(20% - 16px);
        }
        text-align: center;

        img {
          max-width: 100%;
          max-height: 200px;
          flex: 0 1 auto;
          align-self: auto;
        }

        .link_text {
          text-align: center;
          padding-top: 16px;
          flex: 0 1 auto;
          align-self: auto;
        }
      }

      &_name {
        text-align: center;
        color: #E72F24;
        flex: 0 1 auto;
        align-self: auto;
      }

      &_date {
        flex: 0 1 auto;
        align-self: auto;
      }

      &_place {
        flex: 0 1 auto;
        align-self: auto;
        text-align: center;
      }

      &_event {
        border: 1px solid #232E4B;
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        height: 320px;
        border-radius: 16px;

        &:hover, &:focus {
          &:before {
            position: absolute;
            top: -4px;
            left: 4px;
            border-radius: 16px;
            width: 100%;
            height: 100%;
            z-index: 30;
            background-color: #00BE8E;
            content: "";
            background-image: url("./assets/msk_vue_eye.svg");
            background-repeat: no-repeat;
            background-position: center center;
          }

          &:after {
            content: "смотреть";
            position: absolute;
            bottom: 90px;
            font-size: 24px;
            line-height: 28px;
            text-align: center;

            color: #FFFFFF;
            z-index: 31;
          }
        }
      }

    }
  }
</style>
