<template lang=pug>
  .homepage
    .hero
      .container
        .row-flex__space
          .item.homelogo
            img(src="./assets/logo_bw.svg")
          .item
            .text_logo msk
              br
              | vue
              br
              | .js
          .item
            .hero_btns
              a.btn.btn_inversed(href="#events",v-if="activeEvents&&activeEvents.length") события
              a.btn.btn_inversed(:href="$page.frontmatter.callForPaper",target="_blank") стать спикером
            .hero_text Сообщество неравнодушных к технологии Vue.js разработчиков

    .content_about
      .container
        .row-flex_content
          .item
            h2 О нас
            Content(custom)
            a.btn-tg(href="https://t.me/msk_vue_js", target="_blank") #msk_vue_js
            a.btn-chanel(href="https://www.youtube.com/channel/UCp4bYTGrxZ27ifRxm29U5ow", target="_blank") YouTube канал
          .item.sticker_item
            img(src="./assets/art.code.vue.svg")
    Events(:items="activeEvents",title="Ближайшие события",:callForPlace="$page.frontmatter.callForPlace", id="events")
    Events(:items="endedEvents",title="Прошедшие события (здесь лежат видео и фото)")
    Videos(:items="eventsVideo",title="Видео с митапов",id="videos")
    Partners(:items="$page.frontmatter.partners", title="С этими классными компаниями мы дружим")
    Partners(:items="$page.frontmatter.artifacts", title="Полка с медийными артефактами")
    .orgs
      .container
        h2 Организаторы
        .org_list
          .org
            img(src="/orgs/sheko.jpg")
            .org_name Игорь Шеко
            .org_tg @irbisadm
          .org
            img(src="/orgs/stolbova.jpg")
            .org_name Елена Столбова
            .org_tg @AlcaZeltser
          .org
            img(src="/orgs/litvintseva.jpg")
            .org_name Елена Литвинцева
            .org_tg @lemonlenni
          .org
            img(src="/orgs/leushina.jpg")
            .org_name Дарья Леушина
            .org_tg @darileushina
    .content_meetups
      .container
        h2 Контакты
        a.maillink(href="mailto:hello@msk-vuejs.ru") hello@msk-vuejs.ru
    .tentacles
      .container
        h2 No mental tentacles allowed!


</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Partners from './Partners.vue';
  import Events from './Events.vue';
  import Videos from './Videos.vue';

  @Component({
    components: {Partners, Events, Videos},
  })
  export default class Home extends Vue {
    get activeEvents() {
      const events: any[] = this['$site'].pages.filter(i => i.path.indexOf('/events/') !== -1);
      const activeEvents = events.filter(ev => {
        if (ev.frontmatter && ev.frontmatter.timestamp) {
          return (ev.frontmatter.timestamp > (new Date()).getTime() / 1000);
        }
        return false;
      }).sort(this.sortByDate);
      return activeEvents || [];
    }

    get endedEvents() {
      const events: any[] = this['$site'].pages.filter(i => i.path.indexOf('/events/') !== -1);
      const endedEvents = events.filter(ev => {
        if (ev.frontmatter && ev.frontmatter.date) {
          return (ev.frontmatter.timestamp <= (new Date()).getTime() / 1000);
        }
        return false;
      }).sort(this.sortByDateDesc);
      return endedEvents || [];
    }

    sortByDate(a, b): number {
      const parsedDateA = a.frontmatter.date.split('.').reverse().join('');
      const parsedDateB = b.frontmatter.date.split('.').reverse().join('');
      if (parsedDateA === parsedDateB) return 0;
      if (parsedDateA > parsedDateB) return 1;
      return -1;
    }

    get eventsVideo() {
      const events: any[] = this["$site"].pages.filter(i => i.path.indexOf("/events/") !== -1).sort(this.sortByDate);
      const videos = events.reduce((videoList, ev) => {
        if (ev.frontmatter && ev.frontmatter.timeline) {
          return videoList.concat(ev.frontmatter.timeline.reduce((a, b) => {
            if (b.video)
              a.push(b.video);
            return a;
          }, []));
        } else {
          return videoList;
        }
      }, []);
      return videos;
    }

    sortByDateDesc(a, b): number {
      return this.sortByDate(a, b) * -1;
    }
  }
</script>

<style scoped>
  .maillink {
    margin-top: 32px;
    font-size: 32px;
    color: #232E4B;

    &:hover, &:focus, &:active {
      text-decoration: none;
      color: #232E4B;
    }
  }

  .btns_row {
    text-align: center;
    padding-top: 32px;

    .btn {
      margin: 0 8px;
    }
  }

  .content_meetups {
    padding-bottom: 64px;
  }

  .hero {
    width: 100%;
    position: relative;
    padding: 80px 0 8px 0;
    background: #00BE8E;
    background: linear-gradient(180deg, rgba(35, 46, 75, 1) 0%, rgba(35, 46, 75, 1) 250px, rgba(0, 190, 142, 1) 250px,
    rgba(0, 190, 142, 1) 100%);

    &_menu {
      margin: 16px -16px 0 -16px;

      a {
        display: inline-block;
        padding: 16px;
        color: #fff;
        text-decoration: none;

        &:hover, &:active, &:focus {
          text-decoration: underline;
        }
      }
    }
    &_btns {
      height: 130px;
      padding-top: 80px;

      .btn {
        margin-right: 32px;
      }
    }

    &_text {
      line-height: 54px;
      font-weight: bold;
      color: #FFFFFF;
      width: 80vw;
      font-size: 32px;
      @media only screen and (min-width: 1024px) {
        width: 400px;
        font-size: 48px;

      }
      @media only screen and (min-width: 1440px) {
        padding-right: 144px;
      }
      @media only screen and (min-width: 540px) {
        font-size: 48px;
      }
    }
  }

  .text_logo {
    color: #fff;
    font-size: 144px;
    line-height: 161px;
    font-weight: bold;
    align-items: center;
  }

  .homelogo {
    padding: 37px 40px 0 0;
    display: none;
    @media only screen and (min-width: 540px) {
      display: block;
    }
  }

  .sticker_item {
    text-align: center;
    min-width: 40%;
  }

  .btn-tg {
    text-decoration: none;
    font-size: 24px;
    line-height: 28px;
    color: #232E4B;
    background: url('./assets/tg_btn.svg') no-repeat;
    display: block;
    margin-top: 32px;
    height: 40px;
    background-position: 0 0;
    padding-top: 12px;
    padding-left: 88px;

    &:hover {
      text-decoration: underline;
    }
  }

  .btn-chanel {
    text-decoration: none;
    font-size: 24px;
    line-height: 28px;
    color: #232E4B;
    display: block;
    margin-top: 32px;
    height: 40px;
    background: url('./assets/youtube.svg') no-repeat;
    background-position: 0 0;
    padding-top: 12px;
    padding-left: 88px;


    &:hover {
      text-decoration: underline;
    }
  }

  .tentacles {
    text-align: center;
  }

  .org_list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: flex-start;
    margin: 0 -16px;
    padding: 0 0 64px 0;
  }

  .org {
    flex: 0 1 auto;
    align-self: auto;
    padding: 16px;

    & img {
      width: 300px;
      height: 300px;
    }

    &_name {
      font-size: 20px;
      padding: 8px 0;
    }
  }
</style>
