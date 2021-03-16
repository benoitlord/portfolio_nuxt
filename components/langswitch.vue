<template>
  <nuxt-link :to="switchLocalePath(otherLang)" :class="($i18n.locale === 'en' ? ['language-toggle-container', 'change'] : 'language-toggle-container')" :lang="otherLang" :aria-label="$t('label')"><span class="fr">Fr</span><div class="language-toggle fadedout"><div class="switch"></div></div><span class="en">En</span></nuxt-link>
</template>

<script>

  export default {
    data() {
      return {
        
      }
    },

    methods: {
      
    },

    computed:{
      otherLang(){
        if(this.$i18n.locale === "en"){
          return "fr";
        }
        else if(this.$i18n.locale === "fr"){
          return "en";
        }
      }
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

  @mixin spinKeyframes($nom, $debut, $fin){
    @keyframes #{$nom} {
      0% { transform: rotate($debut); }
      100% { transform: rotate($fin); }
    }
    @-webkit-keyframes #{$nom} {
      0% { transform: rotate($debut); }
      100% { transform: rotate($fin); }
    }
    @-moz-keyframes #{$nom} {
      0% { transform: rotate($debut); }
      100% { transform: rotate($fin); }
    }
    @-o-keyframes #{$nom} {
      0% { transform: rotate($debut); }
      100% { transform: rotate($fin); }
    }
  }

  @mixin spinAnimation($nom, $duree){
    animation: $nom $duree linear infinite;
    -webkit-animation: $nom $duree linear infinite;
    -moz-animation: $nom $duree linear infinite;
    -ms-animation: $nom $duree linear infinite;
    -o-animation: $nom $duree linear infinite;
  }

  .language-toggle-container{
    position: absolute;
    left: 20px;
    top: 20px;

    &:focus .language-toggle{
      outline: 1px dashed black;
    }

    .fr, .en{
      position: absolute;
      top: -3px;
      color: black;

      &:hover, &:focus{
        color: black;
      }
    }
    
    .fr{
      left: 0px;
    }
    
    .en{
      left: 65px;
    }
    
    .language-toggle{
      position: absolute;
      left: 20px;
      background-color: $gris;
      width: 40px;
      height: 15px;
      border-radius: 20%/50%;
    }
    
    .switch{
      position: absolute;
      left: 0px;
      top: -2.5px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: $vert;
      
      @include transition(0.1s);
      
      &:hover{
        background-color: $vertFonce;
      }
    }
    
    &.change .switch{
      transform: translateX(20px);
    }
    
    &.fadeout, &.fadedout{
      opacity: 0;
    }
  }

</style>

<i18n>

  {
    "en":{
      "label": "Changer au français"
    },
    "fr":{
      "label": "Switch to English"
    }
  }

</i18n>