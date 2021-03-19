<template>
  <div>
    <b-row align-h="center">
      <b-col cols="12" md="10">
        <h1 v-html="info.titre"></h1>
        </b-col>
    </b-row>
    <b-row align-h="center" style="margin-bottom: 50px;">
      <b-col cols="12" md="6">
        <div v-html="info.desc" class="text-center"></div>
        <p v-html="info.session" style="margin-top: 50px; font-size: 1.3em; font-weight: 700;" class="text-center"></p>
      </b-col>
    </b-row>
    <b-row class="gallery-row">
      <b-col class="gallery-image" style="margin-bottom: 15px;" v-for="value, index in info.images" :key="'image_' + index" cols="12" :md="info.imagesLayout[index]">
        <img :src="require('~/assets/' + value)" alt="">
      </b-col>
    </b-row>
    <b-row align-h="center" style="margin-top: 50px;">
      <b-col cols="12" md="6" class="text-center">
        <nuxt-link :to="localePath('/portfolio/' + info.category)" class="green-button">{{ $t("back") + $t(info.category) }}</nuxt-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>

  export default {
    head() {
      return {
        title: this.info.titre + " - Benoit Lord, " + this.$i18n.t("titre")
      }
    },

    async asyncData({ params }) {
      const projet = params.projet // When calling /abc the slug will be "abc"
      return { projet }
    },

    data() {
      return {
        
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
      
    }
  }

</script>

<style lang="scss" scoped>

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

    img{
      flex: 0 0 auto;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    /*&:not(.col-md-12){
      @media (min-width: 768px){
        height: 200px;
      }
      @media (min-width: 992px){
        height: 300px;
      }
      @media (min-width: 1200px){
        height: 450px;
      }
    }*/
  }

</style>

<i18n>

  {
    "en": {
      "back": "Back to "
    },
    "fr": {
      "back": "Retour à "
    }
  }

</i18n>