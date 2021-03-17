<template>
  <div>
    <nuxt-link :to="localePath('/portfolio/' + info.id)" class="projet">
      <b-row v-if="!invert">
        <b-col cols="12" md="8" class="thumbnail-container">
          <img :src="require('~/assets/' + info.thumbnail)" class="thumbnail" alt="">
          <div class="overlay"></div>
        </b-col>
        <b-col cols="12" md="4" class="infos">
          <h2 v-html="info.titre"></h2>
          <h3 v-html="info.session"></h3>
        </b-col>
      </b-row>
      <b-row v-if="invert">
        <b-col cols="12" md="4" class="infos">
          <h2 v-html="info.titre"></h2>
          <h3 v-html="info.session"></h3>
        </b-col>
        <b-col ccols="12" md="8" class="thumbnail-container">
          <img :src="require('~/assets/' + info.thumbnail)" class="thumbnail" alt="">
          <div class="overlay"></div>
        </b-col>
      </b-row>
    </nuxt-link>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        
      }
    },

    props:{
      info: { type: Object, default: function () { return {} } },
      invert: { type: Boolean, default: false }
    },

    methods: {
      
    }

  }

</script>

<style lang="scss" scoped>

  /* VARIABLES */

    /* COULEURS */

  $vert: #68b32d;
  $vertFonce: #5AA91E;
  $gris: #dddddd;
  $grisFonce: #bbbbbb;
  $grisFonceFonce: #aaaaaa;
  $grisHautCTA: #333333;
  $grisHautCTAFonce: #000000;
  $noir: #000000;
  $blanc: #ffffff;

  /* MIXINS */

  @mixin transition($vitesse, $easing: ease) {
    transition: all $vitesse $easing;
    -webkit-transition: all $vitesse $easing;
    -moz-transition: all $vitesse $easing;
    -o-transition: all $vitesse $easing;
    -ms-transition: all $vitesse $easing;
  }

  .projet{
    background: none;
    color: #222;
    text-decoration: none;

    &:hover,&:focus{
      .infos{
        background-color: #333;

        h2{
          color: white;
        }
        h3{
          color: #ddd;
        }
      }
      .thumbnail-container .overlay{
        background-color: rgba(0, 0, 0, 0.5);
      }
    }

    .row{
      height: 600px;
    }

    .thumbnail-container{
      display: flex;
      padding: 0;
      align-items: center;
      align-content: center;
      justify-content: center;
      flex-flow: row wrap;
      overflow: hidden;

      .thumbnail{
        position: absolute;
        flex: 0 0 auto;
        width: 125%;
      }
      .overlay{
        flex: 0 0 auto;
        width: 100%;
        height: 600px;
        background-color: rgba(0, 0, 0, 0.1);
        z-index: 1;
        @include transition(0.3s);
      }
    }

    .infos{
      background-color: $gris;
      display: flex;
      align-items: center;
      align-content: center;
      flex-flow: row wrap;
      @include transition(0.3s);

      h2{
        text-align: center;
        @include transition(0.3s);
        margin-bottom: 15px;
        flex: 0 0 100%;
      }
      h3{
        font-size: 1em;
        color: #555;
        text-align: center;
        @include transition(0.3s);
        flex: 0 0 100%;
      }
    }
  }

</style>

<i18n>

  {
    "en":{
      
    },
    "fr":{
      
    }
  }

</i18n>