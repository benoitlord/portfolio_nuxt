<template>
  <div style="margin-top: 70px;">
    <h1 style="margin-bottom: 100px;">{{ $t("illustration") }}</h1>
    <projet v-for="value, index in info" :key="index" :info="value" :invert="index % 2 != 0"></projet>
  </div>
</template>

<script>

  import projet from '~/components/projet.vue';
  
  export default {

    transition: {
      name: "pageTransition",
      mode: "out-in"
    },

    head() {
      return {
        title: this.$i18n.t("illustration") + " - Benoit Lord, " + this.$i18n.t("titre")
      }
    },

    data() {
      return {
        
      }
    },

    computed: {
      info(){
        return this.filterInfo(Object.values(this.$i18n.t('projets')), "illustration");
      }
    },

    components: {
      projet
    },

    methods: {
      filterInfo(arr, category){        
        return arr.filter(function(project){
          if(project.category == category){
            return true;
          }
          else{
            return false;
          }
        });
      }
    }
  }

</script>

<style lang="scss" scoped>
  


</style>

<i18n>

  {
    "en": {
      
    },
    "fr": {
      
    }
  }

</i18n>