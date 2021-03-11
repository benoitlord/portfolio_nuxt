<template>
  <div>
    <langswitch />
    <navigation />
    <Nuxt />
  </div>
</template>

<script>

  import navigation from '~/components/nav';
  import langswitch from '~/components/langswitch';


  export default {
    data() {
      return {
        
      }
    },

    components: {
      navigation,
      langswitch
    },

    methods: {
      
    }
  }

</script>

<style lang="scss">



</style>
