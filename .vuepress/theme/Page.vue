<template lang=pug>
  .page
    .header
      .container
        .header_flex
          a(href="/").logo
            img(src="./assets/logo_sm.svg")
          .btns
            a.btn(:href="$page.frontmatter.regLink",v-if="$page.frontmatter.regLink") Записаться
            a.btn(:href="$page.frontmatter.callForPaper",v-if="$page.frontmatter.callForPaper") Выступить
            span.mature-only(v-if="$page.frontmatter.isMatureOnly") 18+
    .hero
      .container
        .hero-flex
          .item
            .sup {{$page.frontmatter.kind}}
            .num {{$page.frontmatter.number}}
          .item
            .date {{$page.frontmatter.date}}
            .date {{$page.frontmatter.time}}
            .place {{$page.frontmatter.place}}
    .container_agenda(v-if="$page.frontmatter.agenda")
      .container
        h2 О событии
        .agenda {{$page.frontmatter.agenda}}
    Videos(:items="eventsVideo",title="Видео с митапа")
    Galery(:gallery="eventGallery",title="Фото с митапа")
    .container_timing(v-if="$page.frontmatter.timeline && $page.frontmatter.timeline.length")
      .container
        h2 Расписание
        .schedule
          .schedule-item(v-for="(call,index) in $page.frontmatter.timeline", :key="index")
            .schedule-time {{call.time}}
            .schedule-text
              .schedule-name(v-if="call.name") {{call.name}}
              .schedule-title(v-if="call.header") {{call.header}}
              .schedule-description(v-if="call.description", v-html="call.description")
    .container_speakers(v-if="$page.frontmatter.speakers && $page.frontmatter.speakers.length")
      .container
        h2 Спикеры
        .speakers
          .speaker(v-for="(speaker,index) in $page.frontmatter.speakers", :key="index")
            .speaker_avatar
              img(:src="speaker.avatar")
            .speaker_info
              .speaker_name {{speaker.name}}
              .speaker_company {{speaker.company}}
              .speaker_bio {{speaker.bio}}
    Partners(:items="$page.frontmatter.partners", title="Партнеры этого события")
    .container_map
      .container
        h2 Как добраться
        .map_addr {{$page.frontmatter.addr}}
        iframe(:src="$page.frontmatter.map" width="100%" height="500" frameborder="1" allowfullscreen="true")
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Partners from "./Partners.vue";
  import Videos from "./Videos.vue";
  import Galery from "./Galery.vue";

  @Component({
    components: {Partners, Videos, Galery},
  })
  export default class Page extends Vue {
    get eventsVideo() {
      if (this.$page.frontmatter && this.$page.frontmatter.timeline) {
        return this.$page.frontmatter.timeline.reduce((a, b) => {
          if (b.video)
            a.push(b.video);
          return a;
        }, []);
      } else {
        return [];
      }
    }

    get eventGallery() {
      if (this.$page.frontmatter && this.$page.frontmatter.gallery) {
        return this.$page.frontmatter.gallery;
      } else {
        return null;
      }
    }
  }
</script>

<style scoped>
  .container_agenda {
    margin-bottom: 64px;
  }

  .mature-only {
    color: red;
    font-size: 3rem;
    font-weight: bold;
  }
  .speaker {
    padding-bottom: 32px;
    @media only screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: stretch;
    }

    &_avatar {
      text-align: left;
      padding-bottom: 16px;

      img {
        width: 300px;
      }
    }

    &_info {
      @media only screen and (min-width: 768px) {
        padding-left: 80px;
      }
    }

    &_name {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.5;
    }

    &_company {
      font-size: 24px;
      line-height: 1.5;
    }

    &_bio {
      line-height: 1.5;
    }
  }

  .container_timing {
    padding-bottom: 64px;
  }

  .container_speakers {
    padding-bottom: 64px;
  }

  .map_addr {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 52px;
    padding-bottom: 16px;
  }

  .schedule-item {
    padding: 32px 0;
    @media only screen and (min-width: 768px) {
      padding: 0;
      display: grid;
      grid-template-columns: 220px 1fr;
      grid-template-rows: 1fr ;
    }
  }

  .schedule-time {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 27px;
    color: #232E4B;

    @media only screen and (min-width: 768px) {
      padding: 24px 0;
      border-right: 1px solid #00BE8E;
    }
  }

  .schedule-text {

    @media only screen and (min-width: 768px) {
      padding: 16px 0 16px 40px;
    }
  }

  .schedule-title {
    font-size: 24px;
    line-height: 27px;
    color: #232E4B;
    padding: 16px 0;
  }

  .schedule-name {
    font-size: 24px;
    line-height: 27px;
    color: #232E4B;
    font-weight: bold;
    padding: 8px 0;
  }

  .schedule-description {
    font-size: 24px;
    line-height: 27px;
    color: #232E4B;
    padding: 8px 0;
  }

  .header_flex {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: flex-end;
    padding-top: 50px;

    .logo {
      flex: 0 1 auto;
      align-self: auto;
    }

    .btns {
      flex: 0 1 auto;
      align-self: auto;

      .btn {
        margin: 8px 16px;
      }
    }
  }

  .hero {
    padding: 64px 0;
  }

  .hero-flex {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: flex-start;
    @media only screen and (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }

    & > div {
      order: 0;
      flex: 0 1 auto;
      align-self: auto;
    }

    .item:nth-child(1) {
      text-align: center;
      color: #E72F24;
    }

    .item:nth-child(2) {
      @media only screen and (min-width: 768px) {
        padding-left: 78px;
      }
      @media only screen and (min-width: 1024px) {
        padding-left: 133px;
      }
      @media only screen and (min-width: 1440px) {
        padding-left: 450px;
      }
    }

    .sup {
      font-size: 96px;
      line-height: 112px;
      font-weight: bold;
    }

    .num {
      font-size: 288px;
      line-height: 337px;
      font-weight: bold;
    }

    .date {
      font-style: normal;
      font-weight: normal;
      font-size: 48px;
      line-height: 54px;
      color: #232E4B;
      padding: 16px 0;
    }

    .place {
      font-size: 48px;
      line-height: 56px;
      font-weight: bold;
      color: #232E4B;
      padding: 16px 0;
    }
  }
</style>
