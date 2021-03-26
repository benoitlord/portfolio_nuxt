<template>
  <a :href="link" :target="(name == 'envelope') ? '_self' : '_blank'" class="social" :title="name == 'envelope' ? $t('email') : $t('linkTo') + $t(name) + $t('profile')"><font-awesome-icon :icon="[(notBrand ? 'fas' : 'fab'), name]" size="lg" role="presentation" prefix="fab" /><span class="v-inv">{{ name == "envelope" ? $t('email') : $t('linkTo') + $t(name) + $t('profile') }}</span></a>
</template>

<script>

  export default {
    data() {
      return {
        
      }
    },

    props: {
      name: { type: String, default: "twitter" },
      link: { type: String, default: "#" },
      notBrand: { type: Boolean, default: false }
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

  .social{
    display: flex;
    background-color: $gris;
    color: $noir;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    @include transition(0.2s);

    &:hover, &:focus{
      background-color: $grisFonce;
      color: $noir;
    }
  }

</style>

<i18n>

  {
    "en":{
      "linkTo": "Link to my ",
      "profile": " profile",
      "twitter": "Twitter",
      "behance": "Behance",
      "linkedin": "LinkedIn",
      "facebook-f": "Facebook",
      "email": "Send me an email"
    },
    "fr":{
      "linkTo": "Lien vers mon profil ",
      "profile": "",
      "twitter": "Twitter",
      "behance": "Behance",
      "linkedin": "LinkedIn",
      "facebook-f": "Facebook",
      "email": "M'envoyer un courriel"
    }
  }

</i18n>