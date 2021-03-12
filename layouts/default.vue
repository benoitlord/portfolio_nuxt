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
    <b-container fluid tag="footer">
      <b-row align-h="center" style="margin-bottom: 25px;">
          <b-col cols="10" sm="6" md="4" class="social-icons">
            <social name="twitter" link="https://twitter.com/tiben234"></social>
            <social name="behance" link="https://www.behance.net/benoitlord98"></social>
            <social name="linkedin" link="http://www.linkedin.com/in/benoit-lord"></social>
            <social name="facebook-f" link="https://www.facebook.com/tiben234"></social>
            <social name="envelope" :notBrand="true" link="mailto:info@benoit-lord.ca"></social>
          </b-col>
      </b-row>
      <b-row align-h="center">
          <b-col cols="10" sm="6" md="4">
            <p class="text-center">&copy;&nbsp;Benoit Lord, 2021</p>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

  import navigation from '~/components/nav';
  import langswitch from '~/components/langswitch';


  export default {
    head() {
      return {
        htmlAttrs: { lang: this.$i18n.locale},
        title: "Benoit Lord, " + this.$i18n.t("titre")
      }
    },

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

  .social-icons{
    display: flex;
    justify-content: center;
    margin-top: 70px;

    .social:not(last-child){
      margin-right: 10px;
    }
  }

</style>
