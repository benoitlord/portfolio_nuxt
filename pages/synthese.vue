<template>
  <div>
    <b-row>
      <b-col>
        <h1>{{ $t('pageTitle') }}</h1>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="12" md="10" class="text-center" v-if="$i18n.locale === 'en'">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui velit aliquam a, eum unde iusto ullam non numquam. Veritatis nulla fuga eius odit quibusdam est, deserunt dicta sit in ducimus suscipit sunt minima sint voluptatem atque exercitationem alias! Obcaecati saepe voluptates pariatur! Sed, praesentium maiores eius molestias et suscipit explicabo esse molestiae fugit modi dolor enim neque saepe sequi quos in perspiciatis, quis nesciunt magni! Aliquid quis eos atque tempore?</p>
      </b-col>
      <b-col cols="12" md="10" class="text-center" v-if="$i18n.locale === 'fr'">
        <h2>Contexte du projet</h2>
        <p>Réalisé dans le cadre du cours «&ThinSpace;Graphisme synthèse II&nbsp;: recherche et innovation&ThinSpace;» du baccalauréat en design graphique de l’École multidisciplinaire de l’image de l’Université du Québec en Outaouais, ce projet se veut une application concrète des notions apprises tout au long du programme. Il a aussi comme objectif de favoriser l’innovation en permettant d’explorer un sujet dans un angle nouveau et d’utiliser le graphisme afin d’améliorer un aspect de la société.</p>
        <h2>But du projet</h2>
        <p>Le but de ce projet est de tenter de renouveler la façon d’écrire la musique afin de remédier à un problème de longue date. En effet, les partitions de musique ont depuis presque toujours eu la même allure : une feuille blanche avec des lignes de portée, des notes et des inscriptions noires, toujours dessinée de la même manière. De plus, l’apprentissage de la musique est souvent compliqué pour les débutants en raison de cette notation très technique qui prend du temps à comprendre et maîtriser et n’est pas très représentative visuellement.</p>
        <p>Le premier objectif pour remédier à cela est de créer une nouvelle version de la notation musicale traditionnelle dont le but premier serait de rendre plus accessible, pour les débutants, l’apprentissage de la musique grâce à un système de notation plus visuel qui permet de saisir plus facilement l’aspect d’une pièce de musique, ainsi que ses notes, son rythme, ses nuances, etc.</p>
        <p>Une autre approches est d’explorer comment intégrer divers éléments visuels afin de dynamiser la mise en page et ainsi exprimer l’esprit de la musique écrite tout en rendant plus riche et attrayante les pages. Ce projet explore ainsi comment intégrer différents aspect du design graphique dans l’écriture de la musique et la création de partitions et de livres de musique.</p>
      </b-col>
    </b-row>
    <b-row align-v="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="7" lg="6">
        <h2 style="margin-bottom: 30px;" class="number-title"><span class="number">1</span> Recherche/Analyse</h2>
        <p v-if="$i18n.locale === 'en'">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, obcaecati! Neque culpa pariatur aliquam deserunt consequuntur nobis nam, fugit quibusdam dolore reprehenderit soluta corporis inventore debitis eligendi alias voluptatibus id optio? Quis placeat quas assumenda qui sunt voluptates consectetur reiciendis.</p>
        <p v-if="$i18n.locale === 'fr'">La premère étape dans la réalisation de mon projet fût d'effectuer une recherche approfondies autour du sujet et des expérimentations déjà réalisée dans le domaine. J'ai aussi commencé à jeter les bases de ma notation graphique en relevant la liste des éléments que je devrais créer afin d'obtenir une notation musicale qui contient tous les éléments nécessaires pour représenter correctement des pièces musicales.</p>
      </b-col>
      <b-col cols="12" md="5" lg="6">
        <figure class="figure">
          <img class="figure-img img-fluid box-shadow" src="~assets/synthese_recherche.png" :alt="$t('captionBelow')" aria-labelledby="img-caption_1" />
          <figcaption class="figure-caption" id="img-caption_1">{{ (($i18n.locale === 'en') ? "Lorem ipsum dolor sit amet consectetur adipisicing." : "Brainstorm pour la recherche des éléments de notation" )}}</figcaption>
        </figure>
      </b-col>
    </b-row>
    <b-row align-v="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="7" lg="5" order-md="last">
        <h2 style="margin-bottom: 30px;" class="number-title"><span class="number">2</span> Affiche informative</h2>
        <p v-if="$i18n.locale === 'en'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias asperiores ea, voluptatem non ipsam itaque ducimus deleniti, temporibus voluptates est libero quia fugit reprehenderit suscipit, quaerat aperiam? Voluptas, maxime! Nam.</p>
        <p v-if="$i18n.locale === 'fr'">La prochaine phase de mon projet a été de réaliser une affiche informative qui a pour but de retracer l'histoire de la notation musicale et des éléments des différents systèmes de notation de l'Histoire. Elle montre aussi les quelques récentes expérimentations semblables à la mienne réalisées par diverses personnes.</p>
      </b-col>
      <b-col cols="12" md="5" lg="7">
        <figure class="figure">
          <img class="figure-img img-fluid box-shadow" src="~assets/synthese_affiche-informative.png" :alt="$t('captionBelow')" aria-labelledby="img-caption_2" />
          <figcaption class="figure-caption" id="img-caption_2">{{ (($i18n.locale === 'en') ? "Lorem ipsum dolor sit amet consectetur adipisicing." : "Version finale de l'affiche informative" )}}</figcaption>
        </figure>
      </b-col>
    </b-row>
    <b-row align-v="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="10" lg="8">
        <h2 style="margin-bottom: 30px;" class="number-title"><span class="number">3</span> Projet</h2>
        <div v-if="$i18n.locale === 'en'">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, voluptatibus tenetur aliquam ab molestiae tempore.</p>
          <ul>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, laudantium!</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, quidem?</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste.</li>
          </ul>
        </div>
        <div v-if="$i18n.locale === 'fr'">
          <p>Suite à tout cela, je me suis lancé dans la réalisation concrète de mon projet. Les étapes que j'ai suivies sont les suivantes&nbsp;:</p>
          <ul>
            <li>Élaborer les solutions graphiques qui composent la notation</li>
            <li>Créer le guide explicatif et une image graphique autour du tout</li>
            <li>Développer un système pour les éléments graphiques autour de la partition</li>
            <li>Réaliser des exemples de partitions transformées</li>
            <li>Créer une affiche explicative sur les avantages de la notation</li>
          </ul>
        </div>
      </b-col>
    </b-row>
    <b-row align-v="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="6" lg="5">
        <h3>Développement de la notation</h3>
        <p v-if="$i18n.locale === 'en'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dolor. Quidem odio, libero eius officiis quod odit suscipit magni accusamus at qui fuga reprehenderit rem aut aliquam soluta dolor minima exercitationem ea optio quos. Natus!</p>
        <p v-if="$i18n.locale === 'fr'">Pour élaborer ma notation musicale, j'ai tout d'abord utilisé la liste d'éléments à représenter que j'avais produite lors de ma recherche et je l'ai séparée en trois grandes catégories d'éléments&nbsp;: La hauteur des notes, le rythme et l'expression. J'ai ensuite commencé à associer à chaque élément une solution graphique pour finalement mettre le tout en commun sur une partition commune.</p>
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
        <p v-if="$i18n.locale === 'en'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illum a neque iure perspiciatis quae voluptates, ab itaque error sint nam commodi reprehenderit consectetur dolores quos! Quam sit modi illum illo ea obcaecati temporibus aut nisi omnis a non tempora, rerum ratione eos. Quae aspernatur explicabo expedita modi saepe vitae!</p>
        <p v-if="$i18n.locale === 'fr'">Ma prochaine étape a été de mettre en page le guide explicatif qui permettra aux utilisateurs de comprendre l'utilisation de ma notation. J'ai donc aussi en même temps commencé à développer une image graphique qui permet d'identifier mon projet, comme une sorte d'image de marque. Pour expliquer en détail le fonctionnement de la notation, j'ai choisi de réutiliser les trois grandes catégories d'éléments énumérées précédemment et de construire progressivement la notation en ajoutant une à la fois les solutions que j'ai développées.</p>
      </b-col>
      <b-col cols="12">
        <figure class="figure" style="width: 100%;">
          <div id="adobe-dc-view" class="box-shadow figure-img" style="width: 100%; margin-top: 30px;"  aria-labelledby="img-caption_6"></div>
          <figcaption class="figure-caption" id="img-caption_6">{{ (($i18n.locale === 'en') ? "Lorem ipsum dolor sit amet consectetur adipisicing." : "Version finale du guide explicatif" )}}</figcaption>
        </figure>
      </b-col>
    </b-row>
    <b-row align-v="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="6" lg="5">
        <h3>Développement du système d'éléments graphiques</h3>
        <p v-if="$i18n.locale === 'en'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dolor. Quidem odio, libero eius officiis quod odit suscipit magni accusamus at qui fuga reprehenderit rem aut aliquam soluta dolor minima exercitationem ea optio quos. Natus!</p>
        <p v-if="$i18n.locale === 'fr'">J'ai ensuite commencé à élaborer le système permettant d'ajouter des éléments de mise en page autour de la paritions pour dynamiser le tout exprimer visuellement l'atmosphère d'une pièce.</p>
      </b-col>
      <b-col cols="12" md="6" lg="7">
        <figure class="figure">
          <img class="figure-img img-fluid" src="~assets/synthese_mep.png" :alt="$t('captionBelow')" aria-labelledby="img-caption_7" />
          <figcaption class="figure-caption" id="img-caption_7">{{ (($i18n.locale === 'en') ? "Lorem ipsum dolor sit amet consectetur adipisicing." : "Exemple du système d'éléments de mise en page" )}}</figcaption>
        </figure>
      </b-col>
    </b-row>
    <b-row align-v="center" align-h="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="10" lg="8" class="text-center">
        <h3>Création d'exemples de partitions</h3>
        <p v-if="$i18n.locale === 'en'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod necessitatibus, odit delectus facere ab laudantium, optio voluptate, aspernatur a rem? Eius earum ducimus dolores?</p>
        <p v-if="$i18n.locale === 'fr'">Ensuite, je me suis affairé à créer des exemples de partitions qui mettent en valeur la notation que j'ai conçue. Pour ce faire, j'ai choisi deux pièces connues, dans deux styles différents afin d'offrir une familiarité au lecteur.</p>
      </b-col>
      <b-col cols="12" md="6">
        <figure class="figure">
          <img class="figure-img img-fluid" src="~assets/synthese_menuet-bach.png" :alt="$t('captionBelow')" aria-labelledby="img-caption_8" />
          <figcaption class="figure-caption" id="img-caption_8" v-html="(($i18n.locale === 'en') ? 'Lorem ipsum dolor sit amet consectetur adipisicing.' : 'Premier exemple de partition transformée&nbsp;: <em>Menuet</em>, de Johann Sebastian Bach')"></figcaption>
        </figure>
      </b-col>
      <b-col cols="12" md="6">
        <figure class="figure">
          <img class="figure-img img-fluid" src="~assets/synthese_imagine.png" :alt="$t('captionBelow')" aria-labelledby="img-caption_9" />
          <figcaption class="figure-caption" id="img-caption_9" v-html="(($i18n.locale === 'en') ? 'Lorem ipsum dolor sit amet consectetur adipisicing.' : 'Deuxième exemple de partition transformée&nbsp;: <em lang=\'en\'>Imagine</em>, de John Lennon')"></figcaption>
        </figure>
      </b-col>
    </b-row>
    <b-row align-v="center" style="margin-top: 100px; margin-bottom: 100px;">
      <b-col cols="12" md="6" lg="5">
        <h3>Conception d'une affiche montrant les avantages de la notation</h3>
        <p>Finalement, je me suis lancé dans le création d'une affiche qui permet de récapituler les grands avantages du système de notation que j'ai créé.</p>
      </b-col>
      <b-col cols="12" md="6" lg="7">
        <figure class="figure">
          <img class="figure-img img-fluid" src="~assets/synthese_affiche-explicative.png" :alt="$t('captionBelow')" aria-labelledby="img-caption_10" />
          <figcaption class="figure-caption" id="img-caption_10">{{ (($i18n.locale === 'en') ? "Lorem ipsum dolor sit amet consectetur adipisicing." : "Version finale de l'affiche explicative" )}}</figcaption>
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