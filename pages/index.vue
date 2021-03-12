<template>
  <div>
    <b-row>
      <b-col>
        <h1>Titre 1</h1>
        <h2>Titre 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac dui ipsum. Duis mollis nunc vel purus elementum ultricies. Praesent mauris est, auctor ac rhoncus a, tempus nec mi. Duis sollicitudin ligula a justo rutrum, ac pharetra tellus elementum. Cras vel rhoncus purus. Nunc aliquet varius egestas. Suspendisse blandit ultrices urna ac sollicitudin. Donec erat dolor, suscipit ac faucibus vel, condimentum ac mauris. Curabitur egestas in sapien nec faucibus.</p>
        <p>Phasellus mollis odio non turpis tempor placerat. Donec interdum lectus quis lacinia congue. Etiam vehicula ipsum at ex semper facilisis. Nullam tincidunt convallis nunc eget consectetur. Fusce sollicitudin fringilla est, eget volutpat urna suscipit eu. Aenean egestas, elit non fringilla aliquam, felis augue fermentum dolor, in posuere nulla turpis a dui. Maecenas vitae tempus purus.</p>
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
      "pageTitle" : "Home"
    },
    "fr": {
      "pageTitle" : "Accueil"
    }
  }

</i18n>