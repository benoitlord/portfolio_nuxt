<template>
  <div style="margin-top: 70px;">
    <projet v-for="value, index in info" :key="index" :info="value" :invert="index % 2 != 0"></projet>
  </div>
</template>

<script>

  import projet from '~/components/projet.vue';
  
  export default {
    head() {
      return {
        title: this.$i18n.t("programmation") + " - Benoit Lord, " + this.$i18n.t("titre")
      }
    },

    data() {
      return {
        
      }
    },

    computed: {
      info(){
        return this.filterInfo(Object.values(this.$i18n.t('projets')), "programmation");
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