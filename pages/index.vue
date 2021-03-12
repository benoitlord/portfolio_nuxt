<template>
  <div>
    <b-row>
      <b-col>
        <h1 style="margin-bottom: 0;">Benoit Lord</h1>
        <h2 class="text-center" style="margin-bottom: 50px; font-size: 1.3em;">{{ $t('titre') }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" sm="6">
        <img class="img-fluid" src="~assets/accueil_moi_v2.jpg" :alt="(($i18n.locale === 'en') ? 'Image of ' : 'Image de ') + 'Benoit Lord'">
      </b-col>
      <b-col cols="12" sm="6" v-if="$i18n.locale === 'en'">
        <h2>Qui suis-je?</h2>
        <p>Mon premier contact avec le design graphique s’est fait lorsque j’ai commencé mes études en intégration multimédia au cégep. J’ai toujours eu un certain intérêt pour le domaine, mais c’est à ce moment que j’ai été plongé dans le design et me suis vraiment intéressé à ses nombreuses possibilités en termes de communication et d’organisation d’information.</p>
        <p>Toutefois, ce programme m’a aussi permis de découvrir un autre champ que j’affectionne beaucoup : le développement web. Le web, grâce à l’infinité des possibilités permises par la technologie, est un domaine très stimulant et intéressant pour moi et, en mettant à profit mon côté logique et mathématique bien approfondis pour apprendre très rapidement, je suis rapidement tombé en amour avec la programmation et tout au long de ma formation en multimédia, je me suis nourri de cette passion. ​​Dans le cadre de mon emploi à l'École de la fonction publique du Canada, j'ai aussi eu l'occasion de beaucoup développer ce côté, particulièrement mes compétences en développement, en travail d'équipe, en accessibilité web, et en conception d'interfaces et d'expériences utilisateurs.</p>
      </b-col>
      <b-col cols="12" sm="6" v-if="$i18n.locale === 'fr'">
        <h2>Qui suis-je?</h2>
        <p>Mon premier contact avec le design graphique s’est fait lorsque j’ai commencé mes études en intégration multimédia au cégep. J’ai toujours eu un certain intérêt pour le domaine, mais c’est à ce moment que j’ai été plongé dans le design et me suis vraiment intéressé à ses nombreuses possibilités en termes de communication et d’organisation d’information.</p>
        <p>Toutefois, ce programme m’a aussi permis de découvrir un autre champ que j’affectionne beaucoup : le développement web. Le web, grâce à l’infinité des possibilités permises par la technologie, est un domaine très stimulant et intéressant pour moi et, en mettant à profit mon côté logique et mathématique bien approfondis pour apprendre très rapidement, je suis rapidement tombé en amour avec la programmation et tout au long de ma formation en multimédia, je me suis nourri de cette passion. ​​Dans le cadre de mon emploi à l'École de la fonction publique du Canada, j'ai aussi eu l'occasion de beaucoup développer ce côté, particulièrement mes compétences en développement, en travail d'équipe, en accessibilité web, et en conception d'interfaces et d'expériences utilisateurs.</p>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="12" sm="8" class="text-center" v-if="$i18n.locale === 'en'">
        <h2>Comment est-ce que je crée mes projets?</h2>
        <p>En raison de mon penchant pour la technologie, une grande partie du travail que je fais en ce qui a trait au design se fait avec l’aide d’une multitude d’outils technologiques, le plus souvent mon ordinateur équipé de divers logiciels de prise de notes, d’idéation et de travail ainsi qu’à mon iPad et son Apple Pencil me permettant la liberté de l’écriture et du dessin à la main.</p>
        <p>Mon processus créatif, de manière générale, commence souvent par la génération d’idée. Pour ce faire, je vais habituellement faire de la recherche sur le sujet de mon projet pour ensuite créer un brainstorm ou un mindmap qui me permettra de ressortir les mots-clés, les thèmes importants et l’ambiance générale qui entoure du sujet. Par la suite, ma prochaine étape sera la création d’une série d’esquisses préliminaires afin de mettre sur papier (ou dans mon cas sur écran) les nombreuses idées qui germent dans ma tête. Parmi celles-ci je vais par la suite chercher les 1-3 qui ont le plus de potentiel afin de les pousser plus loin, en esquisses plus complètes. De ces dernières, je vais ensuite extraire le produit final.</p>
      </b-col>
      <b-col cols="12" sm="8" class="text-center" v-if="$i18n.locale === 'fr'">
        <h2>Comment est-ce que je crée mes projets?</h2>
        <p>En raison de mon penchant pour la technologie, une grande partie du travail que je fais en ce qui a trait au design se fait avec l’aide d’une multitude d’outils technologiques, le plus souvent mon ordinateur équipé de divers logiciels de prise de notes, d’idéation et de travail ainsi qu’à mon iPad et son Apple Pencil me permettant la liberté de l’écriture et du dessin à la main.</p>
        <p>Mon processus créatif, de manière générale, commence souvent par la génération d’idée. Pour ce faire, je vais habituellement faire de la recherche sur le sujet de mon projet pour ensuite créer un brainstorm ou un mindmap qui me permettra de ressortir les mots-clés, les thèmes importants et l’ambiance générale qui entoure du sujet. Par la suite, ma prochaine étape sera la création d’une série d’esquisses préliminaires afin de mettre sur papier (ou dans mon cas sur écran) les nombreuses idées qui germent dans ma tête. Parmi celles-ci je vais par la suite chercher les 1-3 qui ont le plus de potentiel afin de les pousser plus loin, en esquisses plus complètes. De ces dernières, je vais ensuite extraire le produit final.</p>
      </b-col>
    </b-row>
    <b-row class="text-center" style="margin-top: 70px;">
      <b-col v-if="$i18n.locale === 'en'">
        <p style="font-weight: 500; font-size: 1.2em;">Assez parlé de moi, </p>
        <nuxt-link :to="localePath('portfolio')" class="green-button">Venez voir mes projets&ThinSpace;!</nuxt-link>
      </b-col>
      <b-col v-if="$i18n.locale === 'fr'">
        <p style="font-weight: 500; font-size: 1.2em;">Assez parlé de moi, </p>
        <nuxt-link :to="localePath('/portfolio/miseEnPage')" class="green-button">Venez voir mes projets&ThinSpace;!</nuxt-link>
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