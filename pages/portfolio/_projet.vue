<template>
  <div>
    <b-row align-h="center">
      <b-col cols="12" md="10">
        <h1 v-html="info.titre" style="font-size: 2.7em;"></h1>
        </b-col>
    </b-row>
    <b-row align-h="center" style="margin-bottom: 50px;">
      <b-col cols="12" md="6">
        <div v-html="info.desc" class="text-center"></div>
        <h2 v-html="info.session" style="margin-top: 50px; font-size: 1.3em; font-weight: 700;" class="text-center"></h2>
      </b-col>
    </b-row>
    <b-row class="gallery-row">
      <b-col class="gallery-image" style="margin-bottom: 15px;" v-for="value, index in info.images" :key="'image_' + index" cols="12" :md="info.imagesLayout[index]">
        <a href="#" @click.prevent.stop="lbxIndex = index; showLbx = true; openDialog(); checkImageRatio()" :title="$t('enlarge')" :aria-label="$t('enlarge')" :style="{ cursor: 'zoom-in' }"><img :src="require('~/assets/' + value)" :alt="info.imageDescs[index]"></a>
        <div class="overlay"><p class="desc" v-html="info.imageDescs[index]"></p></div>
      </b-col>
    </b-row>
    <b-row align-h="center" style="margin-top: 50px;">
      <b-col cols="12" md="6" class="text-center">
        <nuxt-link :to="localePath('/portfolio/' + info.category)" class="green-button">{{ $t("back") + $t(info.category) }}</nuxt-link>
      </b-col>
    </b-row>
      <div class="lbx" @click.prevent.stop="showLbx = false; closeDialog()" tabindex="-1" role="dialog" :aria-labelledby="showLbx? 'imgDesc': false" @keydown.esc="showLbx = false; closeDialog()" :aria-hidden="!showLbx">
        <transition name="lbxFade">
          <div class="lbx-content" role="document" v-if="showLbx">
            <a href="#" class="closeLbx" @click.prevent.stop="showLbx = false; closeDialog()" role="button"><font-awesome-icon icon="times" size="2x" role="presentation" /><span class="v-inv">{{ $t("close") }}</span></a>

            <a href="#" class="arrow-prev" @click.prevent.stop="(lbxIndex == 0) ? lbxIndex = info.images.length - 1 : lbxIndex--; checkImageRatio()" role="button"><font-awesome-icon icon="chevron-left" size="3x" role="presentation" /><span class="v-inv">{{ $t("prev") }}</span></a>
            <transition name="imageFade" mode="out-in">
              <img :src="require('~/assets/' + info.images[lbxIndex])" :alt="info.imageDescs[lbxIndex]" @click.stop :key="lbxIndex">
            </transition>
            <a href="#" class="arrow-next" @click.prevent.stop="(lbxIndex == info.images.length - 1) ? lbxIndex = 0 : lbxIndex++; checkImageRatio()" role="button"><font-awesome-icon icon="chevron-right" size="3x" role="presentation" /><span class="v-inv">{{ $t("next") }}</span></a>
            <p id="imgDesc" v-html="info.imageDescs[lbxIndex]"></p>
          </div>
        </transition>
      </div>
  </div>
</template>

<script>

  export default {

    transition: {
      name: "pageTransition",
      mode: "out-in"
    },

    head() {
      return {
        title: this.stripHTML(this.info.titre) + " - Benoit Lord, " + this.$i18n.t("titre")
      }
    },

    async asyncData({ params }) {
      const projet = params.projet // When calling /abc the slug will be "abc"
      return { projet }
    },

    data() {
      return {
        lbxIndex: 0,
        showLbx: false,
        modalNodes: [],
        nonModalNodes: []
      }
    },

    computed:{
      info(){
        return this.$i18n.t('projets.' + this.projet);
      }
    },

    components: {
      
    },

    methods: {
      openDialog() {    
        this.modalNodes = Array.from( document.querySelectorAll('.lbx *') );

        // by only finding elements that do not have tabindex="-1" we ensure we don't
        // corrupt the previous state of the element if a modal was already open
        this.nonModalNodes = document.querySelectorAll('body *:not(.lbx):not([tabindex="-1"])');

        for (var i = 0; i < this.nonModalNodes.length; i++) {
          var node = this.nonModalNodes[i];

          if (!this.modalNodes.includes(node)) {

            // save the previous tabindex state so we can restore it on close
            node._prevTabindex = node.getAttribute('tabindex');
            node.setAttribute('tabindex', -1);

            // tabindex=-1 does not prevent the mouse from focusing the node (which
            // would show a focus outline around the element). prevent this by disabling
            // outline styles while the modal is open
            // @see https://www.sitepoint.com/when-do-elements-take-the-focus/
            node.style.outline = 'none';
          }
        }

        //Lock Scroll
        this.disableScroll();

        setTimeout(function(){
          $(".lbx-content .closeLbx")[0].focus();
        }, 300);
      },
      closeDialog() {
        // close the modal and restore tabindex
        document.body.style.overflow = null;

        // restore or remove tabindex from nodes
        for (var i = 0; i < this.nonModalNodes.length; i++) {
          var node = this.nonModalNodes[i];
          if (node._prevTabindex) {
            node.setAttribute('tabindex', node._prevTabindex);
            node._prevTabindex = null;
          }
          else {
            node.removeAttribute('tabindex');
          }
          node.style.outline = null;
        }

        //Unlock Scroll
        this.enableScroll()
      },
      disableScroll() {
        // Get the current page scroll position
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
      },
      enableScroll() {
        window.onscroll = function() {};
      },
      checkImageRatio(){
        setInterval(function(){
          if($(".lbx-content img").height() > $(".lbx-content img").width()){
            $(".lbx-content").addClass("vertical");
          }
          else{
            $(".lbx-content").removeClass("vertical");
          }
        }, 200);
      },
      stripHTML(value) {
        var div = document.createElement("div");
        div.innerHTML = value;
        var text = div.textContent || div.innerText || "";
        return text;
      }
    },

    mounted(){
      $(".gallery-image a").hover(
        function(){
          $(this).siblings(".overlay").addClass("show");
        },
        function(){
          $(this).siblings(".overlay").removeClass("show");
        }
      );

      $(".gallery-image a").focus(function(){
        $(this).siblings(".overlay").addClass("show");
      });
      $(".gallery-image a").blur(function(){
        $(this).siblings(".overlay").removeClass("show");
      });
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

  .gallery-row{
    margin-left: -7.5px;
    margin-right: -7.5px;
  }
  
  .gallery-image{
    display: flex;
    padding-left: 7.5px;
    padding-right: 7.5px;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-flow: row wrap;
    overflow: hidden;

    a{
      object-fit: cover;
      flex: 0 0 auto;
      width: 100%;
      height: 100%;
    }
    img{
      object-fit: cover;
      flex: 0 0 auto;
      width: 100%;
      height: 100%;
    }
  }

  .lbx-content{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100000;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    cursor: zoom-out;

    @include transition(0.2s);
    &.lbxFade-enter{
      background-color: rgba(0, 0, 0, 0);
    }
    &.lbxFade-enter-to{
      background-color: rgba(0, 0, 0, 0.5);
    }
    &.lbxFade-leave{
      background-color: rgba(0, 0, 0, 0.5);
    }
    &.lbxFade-leave-to{
      background-color: rgba(0, 0, 0, 0);
    }

    &.lbxFade-enter img{
      transform: scale(0.95);
      opacity: 0;
    }
    &.lbxFade-enter-to img{
      transform: scale(1);
      opacity: 1;
    }
    &.lbxFade-leave img{
      transform: scale(1);
      opacity: 1;
    }
    &.lbxFade-leave-to img{
      transform: scale(0.95);
      opacity: 0;
    }

    &.vertical img{
      width: 60%;

      @media(min-width: 768px){
        width: 45%;
      }
      @media(min-width: 1200px){
        width: 30%;
      }
    }
    &.vertical .arrow-prev, &.vertical .arrow-next{
      width: 20%;

      @media(min-width: 768px){
        width: 27.5%;
      }
      @media(min-width: 1200px){
        width: 35%;
      }
    }

    img{
      width: 70%;
      flex: 0 0 auto;
      cursor: initial;

      transition: opacity 0.2s, transform 0.2s;
      -webkit-transition: opacity 0.2s, transform 0.2s;
      -moz-transition: opacity 0.2s, transform 0.2s;
      -o-transition: opacity 0.2s, transform 0.2s;
      -ms-transition: opacity 0.2s, transform 0.2s;

      @media(min-width: 1200px){
        width: 60%;
      }

      &.imageFade-enter{
        opacity: 0;
      }
      &.imageFade-enter-to{
        opacity: 1;
      }
      &.imageFade-leave{
        opacity: 1;
      }
      &.imageFade-leave-to{
        opacity: 0;
      }
    }
    .arrow-prev, .arrow-next{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: white;

      transition: color 0.2s;
      -webkit-transition: color 0.2s;
      -moz-transition: color 0.2s;
      -o-transition: color 0.2s;
      -ms-transition: color 0.2s;

      flex: 0 0 auto;
      width: 15%;

      @media(min-width: 1200px){
        width: 20%;
      }

      &:hover, &:focus{
        color: #bbb;
      }
    }
    .closeLbx{
      position: absolute;
      left: 20px;
      top: 20px;
      color: white;
      @include transition(0.2s);

      &:hover, &:focus{
        color: #bbb;
      }
    }
    p{
      position: absolute;
      bottom: 0px;
      color: white;
      text-align: center;
      font-weight: 500;
      font-size: 1.2em;
      background-color: black;
      padding: 5px;
      border-radius: 10px;

      width: 300px;
      left: calc(50% - 150px);

      @media(min-width: 768px){
        width: 500px;
        left: calc(50% - 250px);
      }
      @media(min-width: 992px){
        width: 600px;
        left: calc(50% - 300px);
      }
    }
  }

  .overlay{
    position: absolute;
    left: 7.5px;
    top: 0;
    right: 7.5px;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    pointer-events: none;

    @include transition(0.2s);

    &.show{
      background-color: rgba(0, 0, 0, 0.5);

      .desc{
        opacity: 1;
      }
    }

    .desc{
      position: absolute;
      width: 90%;
      left: 5%;
      bottom: 0;
      text-align: center;
      font-size: 0.8em;
      color: white;
      opacity: 0;
    }
  }

</style>

<i18n>

  {
    "en": {
      "back": "Back to ",
      "prev": "Show previous image",
      "next": "Show next image",

      "enlarge": "Enlarge image",
      "close": "Close overlay (escape key)"
    },
    "fr": {
      "back": "Retour à ",
      "prev": "Afficher l'image précédente",
      "next": "Afficher l'image suivante",

      "enlarge": "Agrandir l'image",
      "close": "Fermer la fenêtre superposée (touche d'échappement)"
    }
  }

</i18n>