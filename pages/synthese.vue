<template>
  <div>
    <b-row>
      <b-col>
        <h1>{{ $t('pageTitle') }}</h1>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="12" md="10" class="text-center">
        <p v-if="$i18n.locale === 'en'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui velit aliquam a, eum unde iusto ullam non numquam. Veritatis nulla fuga eius odit quibusdam est, deserunt dicta sit in ducimus suscipit sunt minima sint voluptatem atque exercitationem alias! Obcaecati saepe voluptates pariatur! Sed, praesentium maiores eius molestias et suscipit explicabo esse molestiae fugit modi dolor enim neque saepe sequi quos in perspiciatis, quis nesciunt magni! Aliquid quis eos atque tempore?</p>
        <p v-if="$i18n.locale === 'fr'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui velit aliquam a, eum unde iusto ullam non numquam. Veritatis nulla fuga eius odit quibusdam est, deserunt dicta sit in ducimus suscipit sunt minima sint voluptatem atque exercitationem alias! Obcaecati saepe voluptates pariatur! Sed, praesentium maiores eius molestias et suscipit explicabo esse molestiae fugit modi dolor enim neque saepe sequi quos in perspiciatis, quis nesciunt magni! Aliquid quis eos atque tempore?</p>
      </b-col>
    </b-row>
    <b-row align-v="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="7" lg="6">
        <h2 style="margin-bottom: 30px;" class="number-title"><span class="number">1</span> Recherche/Analyse</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim iure sed assumenda alias voluptate, blanditiis et expedita deserunt iusto maxime. Velit repudiandae ut porro repellendus voluptatum tempore eveniet ipsa! A qui porro repellat alias temporibus ex iure tenetur optio incidunt quisquam sit nemo doloribus facere aliquam debitis iusto, assumenda magni dolorum? Sit consectetur fugit nostrum quis delectus dolore distinctio saepe unde minus provident? Quam earum iusto perferendis cupiditate doloribus ullam. Debitis nesciunt quam cum harum ipsam facere, quibusdam quia eligendi aliquam perferendis in exercitationem dolore voluptatum. Amet id illo nam adipisci alias. Quod alias error qui inventore eius, tenetur maiores?</p>
      </b-col>
      <b-col cols="12" md="5" lg="6">
        <img class="img-fluid" src="https://picsum.photos/700/500" alt="" />
      </b-col>
    </b-row>
    <b-row align-v="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="7" lg="5" order-md="last">
        <h2 style="margin-bottom: 30px;" class="number-title"><span class="number">2</span> Affiche informative</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim iure sed assumenda alias voluptate, blanditiis et expedita deserunt iusto maxime. Velit repudiandae ut porro repellendus voluptatum tempore eveniet ipsa! A qui porro repellat alias temporibus ex iure tenetur optio incidunt quisquam sit nemo doloribus facere aliquam debitis iusto, assumenda magni dolorum? Sit consectetur fugit nostrum quis delectus dolore distinctio saepe unde minus provident? Quam earum iusto perferendis cupiditate doloribus ullam. Debitis nesciunt quam cum harum ipsam facere, quibusdam quia eligendi aliquam perferendis in exercitationem dolore voluptatum. Amet id illo nam adipisci alias. Quod alias error qui inventore eius, tenetur maiores?</p>
      </b-col>
      <b-col cols="12" md="5" lg="7">
        <img class="img-fluid" src="https://picsum.photos/700/900" alt="" />
      </b-col>
    </b-row>
    <b-row align-v="center" align-h="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="10" lg="8" class="text-center">
        <h2 style="margin-bottom: 30px;" class="number-title"><span class="number">3</span> Projet</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim iure sed assumenda alias voluptate, blanditiis et expedita deserunt iusto maxime. Velit repudiandae ut porro repellendus voluptatum tempore eveniet ipsa! A qui porro repellat alias temporibus ex iure tenetur optio incidunt quisquam sit nemo doloribus facere aliquam debitis iusto, assumenda magni dolorum?</p>
      </b-col>
    </b-row>
    <b-row align-v="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="6" lg="5">
        <h3>Développement de la notation</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim iure sed assumenda alias voluptate, blanditiis et expedita deserunt iusto maxime. Velit repudiandae ut porro repellendus voluptatum tempore eveniet ipsa! A qui porro repellat alias temporibus ex iure tenetur optio incidunt quisquam sit nemo doloribus facere aliquam debitis iusto, assumenda magni dolorum? Sit consectetur fugit nostrum quis delectus dolore distinctio saepe unde minus provident? Quam earum iusto perferendis cupiditate doloribus ullam. Debitis nesciunt quam cum harum ipsam facere, quibusdam quia eligendi aliquam perferendis in exercitationem dolore voluptatum. Amet id illo nam adipisci alias. Quod alias error qui inventore eius, tenetur maiores?</p>
      </b-col>
      <b-col cols="12" md="6" lg="7">
        <img class="img-fluid" src="https://picsum.photos/700/500" alt="" />
      </b-col>
    </b-row>
    <b-row align-v="center" align-h="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="10" lg="8" class="text-center">
        <h3>Création du guide explicatif</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim iure sed assumenda alias voluptate, blanditiis et expedita deserunt iusto maxime. Velit repudiandae ut porro repellendus voluptatum tempore eveniet ipsa! A qui porro repellat alias temporibus ex iure tenetur optio incidunt quisquam sit nemo doloribus facere aliquam debitis iusto, assumenda magni dolorum? Sit consectetur fugit nostrum quis delectus dolore distinctio saepe unde minus provident? Quam earum iusto perferendis cupiditate doloribus ullam. Debitis nesciunt quam cum harum ipsam facere, quibusdam quia eligendi aliquam perferendis in exercitationem dolore voluptatum. Amet id illo nam adipisci alias. Quod alias error qui inventore eius, tenetur maiores?</p>
      </b-col>
      <b-col cols="12">
        <div id="adobe-dc-view" style="width: 100%; margin-top: 30px;"></div>
      </b-col>
    </b-row>
    <b-row align-v="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="6" lg="5">
        <h3>Conception de l'affiche informative pour la notation</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim iure sed assumenda alias voluptate, blanditiis et expedita deserunt iusto maxime. Velit repudiandae ut porro repellendus voluptatum tempore eveniet ipsa! A qui porro repellat alias temporibus ex iure tenetur optio incidunt quisquam sit nemo doloribus facere aliquam debitis iusto, assumenda magni dolorum? Sit consectetur fugit nostrum quis delectus dolore distinctio saepe unde minus provident? Quam earum iusto perferendis cupiditate doloribus ullam. Debitis nesciunt quam cum harum ipsam facere, quibusdam quia eligendi aliquam perferendis in exercitationem dolore voluptatum. Amet id illo nam adipisci alias. Quod alias error qui inventore eius, tenetur maiores?</p>
      </b-col>
      <b-col cols="12" md="6" lg="7">
        <img class="img-fluid" src="https://picsum.photos/700/900" alt="" />
      </b-col>
    </b-row>
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
        title: this.$i18n.t("pageTitle") + " - Benoit Lord, " + this.$i18n.t("titre"),
        script: [
          { src: "https://documentcloud.adobe.com/view-sdk/main.js" }
        ]
      }
    },

    data() {
      return {
        
      }
    },

    components: {
      
    },

    methods: {
      setPDFHeight(){
        var width = $("#adobe-dc-view").outerWidth();
        var height = width * 10.8333 / 16.25;
        $("#adobe-dc-view").css({ height: height });
      }
    },

    mounted(){
      this.setPDFHeight();
      var that = this;
      $(window).on("resize", function(){
        that.setPDFHeight();
      });

      document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
        var adobeDCView = new AdobeDC.View({ clientId: "16f2a1cd95ee44bc90dc8b16d04be388", divId: "adobe-dc-view" });
        adobeDCView.previewFile({
          content:{ location: { url: "/guide_2021-04-02.pdf" } },
          metaData:{ fileName: "guide_2021-04-02.pdf" }
        }, { embedMode: "SIZED_CONTAINER", showDownloadPDF: false, showPrintPDF: false, showAnnotationTools: false, showLeftHandPanel: false });
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
  
  .number{
    background-color: $vert;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: inline-block;
    font-size: 0.9em;
    line-height: 60px;
    text-align: center;

    @media(min-width: 768px){
      font-size: 1.1em;
      width: 70px;
      height: 70px;
      line-height: 70px;
    }
  }

  @media(max-width: 767.9px){
    .number-title{
      font-size: 1.6rem;
    }
    img.img-fluid{
      margin-top: 10px;
    }
  }

  #adobe-dc-view{
    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.05);
  }

</style>

<i18n>

  {
    "en": {
      "pageTitle" : "Synthesis Project in Graphic Design"
    },
    "fr": {
      "pageTitle" : "Projet synthèse en design graphique"
    }
  }

</i18n>