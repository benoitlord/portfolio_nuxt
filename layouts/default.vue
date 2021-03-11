<template>
  <div>
    <langswitch />
    <b-container>
      <b-row align-h="center">
        <b-col cols="4" sm="2" md="1">
          <nuxt-link :to="localePath('/')"><img @mouseover="logoHover = true" @mouseleave="logoHover = false" class="img-fluid" alt="Logo" :src="require('~/assets/logo_' + (logoHover ? 'couleur' : 'nb') + '.png')" /></nuxt-link>
        </b-col>
      </b-row>
    </b-container>
    <navigation />
    <b-container>
      <Nuxt />
    </b-container>
  </div>
</template>

<script>

  import navigation from '~/components/nav';
  import langswitch from '~/components/langswitch';


  export default {
    data() {
      return {
        logoHover: false
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
