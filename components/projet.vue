<template>
  <div>
    <nuxt-link :to="localePath('/portfolio/' + info.id)" :class="info.thumbnailPortrait ? ['projet', 'portrait'] : ['projet']">
      <b-row>
        <b-col cols="12" :md="info.thumbnailPortrait ? 4 : 7" :lg="info.thumbnailPortrait ? 4 : 8" :class="{ 'thumbnail-container': true, 'order-md-last': invert, 'alignTopLeft': info.thumbnailAlignTopLeft } ">
          <img :src="require('~/assets/' + info.thumbnail)" class="thumbnail" alt="">
          <div class="overlay"></div>
        </b-col>
        <b-col cols="12" :md="info.thumbnailPortrait ? 8 : 5" :lg="info.thumbnailPortrait ? 8 : 4" class="infos">
          <h2 v-html="info.titre"></h2>
          <h3 v-html="info.session"></h3>
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
      margin-bottom: 15px;

      @media (max-width: 767.9px){
        padding-left: 15px;
        padding-right: 15px;
      }
      @media (min-width: 768px){
        height: 300px;
      }
      @media (min-width: 992px){
        height: 450px;
      }
      @media (min-width: 1200px){
        height: 550px;
      }
    }

    .thumbnail-container{
      display: flex;
      padding: 0;
      align-items: center;
      align-content: center;
      justify-content: center;
      flex-flow: row wrap;
      overflow: hidden;

      &.alignTopLeft{
        justify-content: flex-start;
        align-items: flex-start;
      }

      .thumbnail{
        position: absolute;
        flex: 0 0 auto;
      }
      .overlay{
        flex: 0 0 auto;
        width: 100%;
        height: 220px;
        background-color: rgba(0, 0, 0, 0.1);
        z-index: 1;
        @include transition(0.3s);

        @media (min-width: 576px){
          height: 350px;
        }
        @media (min-width: 768px){
          height: 300px;
        }
        @media (min-width: 992px){
          height: 450px;
        }
        @media (min-width: 1200px){
          height: 550px;
        }
      }
    }

    .infos{
      background-color: $gris;
      display: flex;
      align-items: center;
      align-content: center;
      flex-flow: row wrap;
      @include transition(0.3s);

      @media (max-width: 767.9px){
        padding-top: 50px;
        padding-bottom: 50px;
      }

      h2{
        text-align: center;
        @include transition(0.3s);
        margin-bottom: 15px;
        flex: 0 0 100%;

        @media (max-width: 575.9px){
          font-size: 1.5em;
        }
      }
      h3{
        font-size: 0.8em;
        color: #444;
        text-align: center;
        @include transition(0.3s);
        flex: 0 0 100%;

        @media (min-width: 576px){
          font-size: 1em;
        }
      }
    }
  }

  .projet:not(.portrait){
    .thumbnail{
      width: 115%;
    }
  }
  .projet.portrait{
    .row{
      @media (min-width: 768px) and (max-width: 991.9px){
        height: 340px;
      }
    }

    .overlay{
      @media (max-width: 449.9px){
        height: 400px;
      }
      @media (min-width: 450px) and (max-width: 499.9px){
        height: 550px;
      }
      @media (min-width: 500px) and (max-width: 575.9px){
        height: 650px;
      }
      @media (min-width: 576px) and (max-width: 767.9px){
        height: 730px;
      }
      @media (min-width: 768px) and (max-width: 991.9px){
        height: 340px;
      }
    }

    .thumbnail{
      width: 100%;
      height: 100%;
      object-fit: cover;
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