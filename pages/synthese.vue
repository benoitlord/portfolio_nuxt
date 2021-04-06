<template>
  <div>
    
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
        title: this.$i18n.t("pageTitle") + " - Benoit Lord, " + this.$i18n.t("titre")
      }
    },

    data() {
      return {
        
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
      "pageTitle" : "Synthesis Project in Graphic Design"
    },
    "fr": {
      "pageTitle" : "Projet synthèse en design graphique"
    }
  }

</i18n>