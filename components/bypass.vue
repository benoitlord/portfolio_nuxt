<!-- Bypass Blocks -->
<template>
  <div class="invSkip" role="navigation" :aria-label="$t('bypass')">
      <a href="#mainContent" class="skipToMain">{{$t('skipToMain')}}</a>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        
      }
    },
  }

</script>

<style scoped lang="scss">

  .invSkip {
    position: fixed;
    left: 20%;
    top: 0;
    z-index: 1000;

    .skipToMain{
      &, &:hover {
        left: 0;
        position: absolute;
        text-align: center;
        top: 10px;
        width: 100%;
        color: #fff;
        background-color: #000;
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        margin: 0;
        overflow: hidden;
        position: absolute;
        width: 1px;
      }
      &:focus {
        clip: rect(auto, auto, auto, auto);
        height: inherit;
        margin: inherit;
        overflow: inherit;
        position: static;
        width: inherit;
      }
    }
  }

</style>

<i18n>

  {
    "en": {
      "bypass": "Bypass blocks",
      "skipToMain": "Skip to main content"
    },
    "fr": {
      "bypass": "Blocs de contournement",
      "skipToMain": "Passer au contenu principal"
    }
  }

</i18n>
