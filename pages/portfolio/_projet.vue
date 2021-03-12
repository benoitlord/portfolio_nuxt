<template>
  <div>
    <h1>{{ info.titre }}</h1>
    <b-row>
      <b-col>
        <div v-html="info.desc"></div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  
  export default {
    head() {
      return {
        title: this.$i18n.t("pageTitle") + " - Benoit Lord, " + this.$i18n.t("titre")
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
  


</style>

<i18n>

  {
    "en": {
      "pageTitle" : "Portfolio"
    },
    "fr": {
      "pageTitle" : "Portfolio"
    }
  }

</i18n>