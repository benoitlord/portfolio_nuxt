<template>
  <!-- Bouton pour remonter en haut de la page -->
  <div role="complementary">
    <a id="bouton-haut" :class="visible ? 'visible' : ''" href="#" @click.prevent.stop="backTopTopClicked"><font-awesome-icon icon="chevron-up" size="lg" role="presentation" /><span class="v-inv" v-html="$t('label')"></span></a>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        visible: false
      }
    },

    methods: {
      backTopTopClicked(){
		    $('body, html').animate({scrollTop: 0}, 1000, "easeOutQuint");
      }
    },

    mounted(){
      var that = this;

      setInterval(function(){
        if($(window).scrollTop() > 500){
          that.visible = true;
        }
        else{
          that.visible = false;
        }
      }, 50);
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

  /* Bouton haut */
    
    #bouton-haut{
        position: fixed;
        bottom: 50px;
        right: 0px;
        padding: 10px 12px;
        background-color: $vert;
        font-size: 1.7em;
        border-bottom: 5px solid $gris;
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
        transform: translateX(60px);
        color: $gris!important;
        z-index: 1000;
        
        transition: color 0.2s, transform 0.3s, background-color 0.2s;
        -webkit-transition: color 0.2s, transform 0.3s, background-color 0.2s;
        -moz-transition: color 0.2s, transform 0.3s, background-color 0.2s;
        -o-transition: color 0.2s, transform 0.3s, background-color 0.2s;
        -ms-transition: color 0.2s, transform 0.3s, background-color 0.2s;
        
        &:hover{
            color: $gris;
            cursor: pointer;
        }
        
        &.visible{
            transform: translateX(0px);
        }

        &:hover, &:focus{
          background-color: darken($vert, 5%);
        }
    }

</style>

<i18n>

  {
    "en":{
      "label": "Scroll to the top of the page"
    },
    "fr":{
      "label": "Retourner au haut de la page"
    }
  }

</i18n>