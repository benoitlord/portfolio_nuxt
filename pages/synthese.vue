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
        <p v-if="$i18n.locale === 'fr'">Réalisé dans le cadre du cours «&ThinSpace;Graphisme synthèse II&nbsp;: recherche et innovation&ThinSpace;» du baccalauréat en design graphique de l’École multidisciplinaire de l’image de l’Université du Québec en Outaouais, ce projet se veut une application concrète des notions apprises tout au long du programme. Il a aussi comme objectif de favoriser l’innovation en permettant d’explorer un sujet dans un angle nouveau et d’utiliser le graphisme afin d’améliorer un aspect de la société.</p>
      </b-col>
    </b-row>
    <b-row align-v="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="7" lg="6">
        <h2 style="margin-bottom: 30px;" class="number-title"><span class="number">1</span> Recherche/Analyse</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim iure sed assumenda alias voluptate, blanditiis et expedita deserunt iusto maxime. Velit repudiandae ut porro repellendus voluptatum tempore eveniet ipsa! A qui porro repellat alias temporibus ex iure tenetur optio incidunt quisquam sit nemo doloribus facere aliquam debitis iusto, assumenda magni dolorum? Sit consectetur fugit nostrum quis delectus dolore distinctio saepe unde minus provident? Quam earum iusto perferendis cupiditate doloribus ullam. Debitis nesciunt quam cum harum ipsam facere, quibusdam quia eligendi aliquam perferendis in exercitationem dolore voluptatum. Amet id illo nam adipisci alias. Quod alias error qui inventore eius, tenetur maiores?</p>
      </b-col>
      <b-col cols="12" md="5" lg="6">
        <figure class="figure">
          <img class="figure-img img-fluid" src="https://picsum.photos/700/500" :alt="$t('captionBelow')" aria-labelledby="img-caption_1" />
          <figcaption class="figure-caption" id="img-caption_1">{{ (($i18n.locale === 'en') ? "Lorem ipsum dolor sit amet consectetur adipisicing." : "Lorem ipsum dolor sit amet consectetur adipisicing." )}}</figcaption>
        </figure>
      </b-col>
    </b-row>
    <b-row align-v="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="7" lg="5" order-md="last">
        <h2 style="margin-bottom: 30px;" class="number-title"><span class="number">2</span> Affiche informative</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim iure sed assumenda alias voluptate, blanditiis et expedita deserunt iusto maxime. Velit repudiandae ut porro repellendus voluptatum tempore eveniet ipsa! A qui porro repellat alias temporibus ex iure tenetur optio incidunt quisquam sit nemo doloribus facere aliquam debitis iusto, assumenda magni dolorum? Sit consectetur fugit nostrum quis delectus dolore distinctio saepe unde minus provident? Quam earum iusto perferendis cupiditate doloribus ullam. Debitis nesciunt quam cum harum ipsam facere, quibusdam quia eligendi aliquam perferendis in exercitationem dolore voluptatum. Amet id illo nam adipisci alias. Quod alias error qui inventore eius, tenetur maiores?</p>
      </b-col>
      <b-col cols="12" md="5" lg="7">
        <figure class="figure">
          <img class="figure-img img-fluid box-shadow" src="~assets/synthese_affiche-informative.png" :alt="$t('captionBelow')" aria-labelledby="img-caption_2" />
          <figcaption class="figure-caption" id="img-caption_2">{{ (($i18n.locale === 'en') ? "Lorem ipsum dolor sit amet consectetur adipisicing." : "Version finale de l'affiche informative" )}}</figcaption>
        </figure>
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
        <figure class="figure">
          <img class="figure-img img-fluid" src="~assets/synthese_post-it-notation.png" :alt="$t('captionBelow')" aria-labelledby="img-caption_3" />
          <figcaption class="figure-caption" id="img-caption_3">{{ (($i18n.locale === 'en') ? "Lorem ipsum dolor sit amet consectetur adipisicing." : "Planification des solutions pour la notation" )}}</figcaption>
        </figure>
      </b-col>
      <b-col cols="12" md="6" style="margin-top: 30px;">
        <figure class="figure">
          <img class="figure-img img-fluid box-shadow" src="~assets/synthese_esquisse_notation.jpg" :alt="$t('captionBelow')" aria-labelledby="img-caption_4" />
          <figcaption class="figure-caption" id="img-caption_4">{{ (($i18n.locale === 'en') ? "Lorem ipsum dolor sit amet consectetur adipisicing." : "Esquisse préliminaire de la notation" )}}</figcaption>
        </figure>
      </b-col>
      <b-col cols="12" md="6" style="margin-top: 30px;">
        <figure class="figure">
          <img class="figure-img img-fluid box-shadow" src="~assets/synthese_esquisse-partition.png" :alt="$t('captionBelow')" aria-labelledby="img-caption_5" />
          <figcaption class="figure-caption" id="img-caption_5">{{ (($i18n.locale === 'en') ? "Lorem ipsum dolor sit amet consectetur adipisicing." : "Premier test de partition" )}}</figcaption>
        </figure>
      </b-col>
    </b-row>
    <b-row align-v="center" align-h="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="10" lg="8" class="text-center">
        <h3>Création du guide explicatif</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim iure sed assumenda alias voluptate, blanditiis et expedita deserunt iusto maxime. Velit repudiandae ut porro repellendus voluptatum tempore eveniet ipsa! A qui porro repellat alias temporibus ex iure tenetur optio incidunt quisquam sit nemo doloribus facere aliquam debitis iusto, assumenda magni dolorum? Sit consectetur fugit nostrum quis delectus dolore distinctio saepe unde minus provident? Quam earum iusto perferendis cupiditate doloribus ullam. Debitis nesciunt quam cum harum ipsam facere, quibusdam quia eligendi aliquam perferendis in exercitationem dolore voluptatum. Amet id illo nam adipisci alias. Quod alias error qui inventore eius, tenetur maiores?</p>
      </b-col>
      <b-col cols="12">
        <figure class="figure" style="width: 100%;">
          <div id="adobe-dc-view" class="box-shadow figure-img" style="width: 100%; margin-top: 30px;"  aria-labelledby="img-caption_6"></div>
          <figcaption class="figure-caption" id="img-caption_6">{{ (($i18n.locale === 'en') ? "Lorem ipsum dolor sit amet consectetur adipisicing." : "Version finale du guide explicatif" )}}</figcaption>
        </figure>
      </b-col>
    </b-row>
    <b-row align-v="center" align-h="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="10" lg="8" class="text-center">
        <h3>Création d'exemples de partitions</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim iure sed assumenda alias voluptate, blanditiis et expedita deserunt iusto maxime. Velit repudiandae ut porro repellendus voluptatum tempore eveniet ipsa! A qui porro repellat alias temporibus ex iure tenetur optio incidunt quisquam sit nemo doloribus facere aliquam debitis iusto, assumenda magni dolorum? Sit consectetur fugit nostrum quis delectus dolore distinctio saepe unde minus provident? Quam earum iusto perferendis cupiditate doloribus ullam. Debitis nesciunt quam cum harum ipsam facere, quibusdam quia eligendi aliquam perferendis in exercitationem dolore voluptatum. Amet id illo nam adipisci alias. Quod alias error qui inventore eius, tenetur maiores?</p>
      </b-col>
      <b-col cols="12" md="6">
        <figure class="figure">
          <img class="figure-img img-fluid" src="~assets/synthese_menuet-bach.png" :alt="$t('captionBelow')" aria-labelledby="img-caption_7" />
          <figcaption class="figure-caption" id="img-caption_7" v-html="(($i18n.locale === 'en') ? 'Lorem ipsum dolor sit amet consectetur adipisicing.' : 'Premier exemple de partition transformée&nbsp;: <em>Menuet</em>, de Johann Sebastian Bach')"></figcaption>
        </figure>
      </b-col>
      <b-col cols="12" md="6">
        <figure class="figure">
          <img class="figure-img img-fluid" src="~assets/synthese_imagine.png" :alt="$t('captionBelow')" aria-labelledby="img-caption_8" />
          <figcaption class="figure-caption" id="img-caption_8" v-html="(($i18n.locale === 'en') ? 'Lorem ipsum dolor sit amet consectetur adipisicing.' : 'Deuxième exemple de partition transformée&nbsp;: <em lang=\'en\'>Imagine</em>, de John Lennon')"></figcaption>
        </figure>
      </b-col>
    </b-row>
    <b-row align-v="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="6" lg="5">
        <h3>Conception de l'affiche explicative pour la notation</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim iure sed assumenda alias voluptate, blanditiis et expedita deserunt iusto maxime. Velit repudiandae ut porro repellendus voluptatum tempore eveniet ipsa! A qui porro repellat alias temporibus ex iure tenetur optio incidunt quisquam sit nemo doloribus facere aliquam debitis iusto, assumenda magni dolorum? Sit consectetur fugit nostrum quis delectus dolore distinctio saepe unde minus provident? Quam earum iusto perferendis cupiditate doloribus ullam. Debitis nesciunt quam cum harum ipsam facere, quibusdam quia eligendi aliquam perferendis in exercitationem dolore voluptatum. Amet id illo nam adipisci alias. Quod alias error qui inventore eius, tenetur maiores?</p>
      </b-col>
      <b-col cols="12" md="6" lg="7">
        <figure class="figure">
          <img class="figure-img img-fluid box-shadow" src="~assets/synthese_affiche-explicative.png" :alt="$t('captionBelow')" aria-labelledby="img-caption_9" />
          <figcaption class="figure-caption" id="img-caption_9">{{ (($i18n.locale === 'en') ? "Lorem ipsum dolor sit amet consectetur adipisicing." : "Version finale de l'affiche explicative pour la notation" )}}</figcaption>
        </figure>
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
          content:{ location: { url: "/guide_2021-04-09.pdf" } },
          metaData:{ fileName: "Guide explicatif de la notation musicale graphique" }
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

  .box-shadow{
    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.05);
  }

</style>

<i18n>

  {
    "en": {
      "pageTitle" : "Synthesis Project in Graphic Design",
      "captionBelow": "Caption follows the image"
    },
    "fr": {
      "pageTitle" : "Projet synthèse en design graphique",
      "captionBelow": "La légende suit l'image"
    }
  }

</i18n>