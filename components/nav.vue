<template>
  <div>
    <!-- Navigation pour ordinateur -->
    <nav class="navigation fermee" :aria-label="$t('navLabel')">
      <a href="#" @click.stop.prevent="menuClick" class="toggle">
        <font-awesome-icon icon="bars" size="2x" role="presentation" class="menu" />
        <span class="v-inv" v-html="navOpen ? $t('navCloseLabel') : $t('navOpenLabel')"></span>
      </a>
      <div>
        <nuxt-link :to="localePath('index')" class="lien1" aria-labelledby="bulle_1" :aria-hidden="navClosedString" :tabindex="navOpen ? '0': '-1'"><font-awesome-icon icon="home" size="2x" role="presentation" /><span class="v-inv" v-html="$t('home')"></span></nuxt-link>
        <nuxt-link :to="localePath('/portfolio/miseEnPage')" class="lien2" aria-labelledby="bulle_2" :aria-hidden="navClosedString" :tabindex="navOpen ? '0': '-1'"><font-awesome-icon icon="ruler-combined" size="2x" role="presentation" /><span class="v-inv" v-html="$t('miseEnPage')"></span></nuxt-link>
        <nuxt-link :to="localePath('/portfolio/branding')" class="lien3" aria-labelledby="bulle_3" :aria-hidden="navClosedString" :tabindex="navOpen ? '0': '-1'"><font-awesome-icon icon="fingerprint" size="2x" role="presentation" /><span class="v-inv" v-html="$t('branding')"></span></nuxt-link>
        <nuxt-link :to="localePath('/portfolio/typo')" class="lien4" aria-labelledby="bulle_4" :aria-hidden="navClosedString" :tabindex="navOpen ? '0': '-1'"><font-awesome-icon icon="text-height" size="2x" role="presentation" /><span class="v-inv" v-html="$t('typo')"></span></nuxt-link>
        <nuxt-link :to="localePath('/portfolio/programmation')" class="lien5" aria-labelledby="bulle_5" :aria-hidden="navClosedString" :tabindex="navOpen ? '0': '-1'"><font-awesome-icon icon="code" size="2x" role="presentation" /><span class="v-inv" v-html="$t('programmation')"></span></nuxt-link>
        <nuxt-link :to="localePath('/portfolio/illustration')" class="lien6" aria-labelledby="bulle_6" :aria-hidden="navClosedString" :tabindex="navOpen ? '0': '-1'"><font-awesome-icon icon="image" size="2x" role="presentation" /><span class="v-inv" v-html="$t('illustration')"></span></nuxt-link>
        <nuxt-link :to="localePath('/portfolio/sign')" class="lien7" aria-labelledby="bulle_7" :aria-hidden="navClosedString" :tabindex="navOpen ? '0': '-1'"><font-awesome-icon icon="map-signs" size="2x" role="presentation" /><span class="v-inv" v-html="$t('sign')"></span></nuxt-link>
      </div>
    </nav>

    <!--Bulles pour indiquer les pages--> 
    <div class="bulle bulle_1" id="bulle_1">{{ $t('home') }}</div>
    <div class="bulle bulle_2" id="bulle_2">{{ $t('miseEnPage') }}</div>
    <div class="bulle bulle_3" id="bulle_3">{{ $t('branding') }}</div>
    <div class="bulle bulle_4" id="bulle_4">{{ $t('typo') }}</div>
    <div class="bulle bulle_5" id="bulle_5">{{ $t('programmation') }}</div>
    <div class="bulle bulle_6" id="bulle_6">{{ $t('illustration') }}</div>
    <div class="bulle bulle_7" id="bulle_7">{{ $t('sign') }}</div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        bulle_Ouvert_Right: "110px",
        bulle_Ferme_Right: "90px",

        bulle_sousLienOuvertTop: "255px",
        bulle_sousLienFermeTop: "235px",

        navOpen: false,

        toutOuvert: false
      }
    },

    computed:{
      navOpenString(){
        if(this.navOpen){
          return "true";
        }
        else{
          return "false";
        }
      },
      navClosedString(){
        if(this.navOpen){
          return "false";
        }
        else{
          return "true";
        }
      }
    },

    methods: {
      menuClick(){
        if($('.navigation').hasClass("fermee")){
          if(('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0)){
            this.ouvrirMobile();
          }
          else{
            this.ouvrirDesktop();
          }
        }
        else{
          if(('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0)){
            this.fermerMobile();
          }
          else{
            this.fermerDesktop();
          }
        }
      },
      ouvrirDesktop(){
        $('.navigation').removeClass("fermee", 600, "easeOutElastic");
        $('.bulle_1, .bulle_2, .bulle_3, .bulle_4, .bulle_5, .bulle_6, .bulle_7').show();

        this.navOpen = true;
      },
      ouvrirMobile(){
        var that = this;

        $('.navigation svg.menu').animate({color: "#dddddd"}, 300);
        
        $('.navigation').removeClass("fermee", 600, "easeOutElastic", function(){
          $('.bulle_1, .bulle_2, .bulle_3, .bulle_4, .bulle_5, .bulle_6, .bulle_7').show();

          $('.bulle_1, .bulle_2, .bulle_3, .bulle_4, .bulle_5, .bulle_6, .bulle_7').each(function(index){
            $(this).delay(100*index).animate({opacity: 1, right: that.bulle_Ouvert_Right}, 150);
          }).promise().done(function(){ that.toutOuvert = true; that.navOpen = true; });
        });
      },
      fermerDesktop(){        
        $('.navigation').addClass("fermee", 600, "easeOutBounce");
        $('.bulle_1, .bulle_2, .bulle_3, .bulle_4, .bulle_5, .bulle_6, .bulle_7').hide();
        
        var that = this;
        $(document).one("click", that.fermerDesktop);

        this.navOpen = false;
      },
      fermerMobile(){
        var that = this;

        $('.navigation svg.menu').animate({color: "black"}, 300);
        
        $('.navigation').addClass("fermee", 600, "easeOutBounce", function(){
          $('.bulle_1, .bulle_2, .bulle_3, .bulle_4, .bulle_5, .bulle_6, .bulle_7').each(function(index){
            $(this).delay(100*index).animate({opacity: 0, right: that.bulle_Ferme_Right}, 150);
          }).promise().done(function(){
            $('.bulle_1, .bulle_2, .bulle_3, .bulle_4, .bulle_5, .bulle_6, .bulle_7').hide(function(){
              that.toutOuvert = false;
              that.navOpen = false;
            });
          });
        });

        $(document).one("click", that.fermerMobile);
      },
      hoverBulles(num){       
        var that = this;
        
        $('.navigation .lien' + num).hover(
          function(){
            $('.bulle_' + num).stop().animate({opacity: 1, right: that.bulle_Ouvert_Right}, 300);
          },
          function(){
            $('.bulle_' + num).stop().animate({opacity: 0, right: that.bulle_Ferme_Right}, 300);
          }
        );
      }
    },

    mounted(){
      var that = this;

      if(('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0)){
        $(document).one("click", that.fermerMobile);
      }
      else{
        $(document).one("click", that.fermerDesktop);
        
        that.hoverBulles("1");        
        that.hoverBulles("2");
        that.hoverBulles("3");
        that.hoverBulles("4");
        that.hoverBulles("5");
        that.hoverBulles("6");
        that.hoverBulles("7");
      }
    }
  }

</script>

<style lang="scss" scoped>

  /* VARIABLES */

    /* COULEURS */

  $vert: #68b32d;
  $vertFonce: #5AA91E;
  $gris: #dddddd;
  $grisFonce: #bbbbbb;
  $grisFonceFonce: #aaaaaa;
  $grisHautCTA: #333333;
  $grisHautCTAFonce: #000000;
  $noir: #000000;
  $blanc: #ffffff;

  /* MIXINS */

@mixin transition($vitesse, $easing: ease) {
	transition: all $vitesse $easing;
	-webkit-transition: all $vitesse $easing;
	-moz-transition: all $vitesse $easing;
	-o-transition: all $vitesse $easing;
	-ms-transition: all $vitesse $easing;
}

@mixin spinKeyframes($nom, $debut, $fin){
	@keyframes #{$nom} {
		0% { transform: rotate($debut); }
		100% { transform: rotate($fin); }
	}
	@-webkit-keyframes #{$nom} {
		0% { transform: rotate($debut); }
		100% { transform: rotate($fin); }
	}
	@-moz-keyframes #{$nom} {
		0% { transform: rotate($debut); }
		100% { transform: rotate($fin); }
	}
	@-o-keyframes #{$nom} {
		0% { transform: rotate($debut); }
		100% { transform: rotate($fin); }
	}
}

@mixin spinAnimation($nom, $duree){
	animation: $nom $duree linear infinite;
	-webkit-animation: $nom $duree linear infinite;
	-moz-animation: $nom $duree linear infinite;
	-ms-animation: $nom $duree linear infinite;
	-o-animation: $nom $duree linear infinite;
}

  /* CSS POUR LA NAVIGATION */

  /* Navigation ordinateur */

      /* Mise en forme globale */

  .navigation{
    position: absolute;
    right: 20px;
    top: 20px;
    background-color: $vert;
    box-shadow:0px 3px 10px rgba(0, 0, 0, 0.4);
    z-index: 100000;
    overflow: hidden;
    border-bottom: 5px solid $gris;
    
    &.fermee{
      height: 72px;
      overflow: hidden;
    }

    svg{
      margin: 20px;
    }

    svg:not(.menu){
      margin : 20px 20px 20px 15px;
    }

    .menu{
      color:$noir;
      
      @include transition(0.2s);
    }

    .menu:hover{
      color: $gris;
      cursor: pointer;
    }

    a:not(.toggle){
      margin: 0;
      display : block;
      color: $noir;
      text-decoration : none;
      border-left: 5px solid transparent;
      width: 72px;
      
      @include transition(0.3s);
      
      &.nuxt-link-exact-active{
        border-left: 5px solid #48930d;
      }

      &:hover{
        color : $gris;
        border-left: 5px solid $gris;
      }
    }

    ul{
      margin: 0;
    }

    li{
      list-style : none;
    }
  }

      /* Pour le sous-menu */

  .sous-liens{
    display:none;
    z-index: 0;
    position: fixed;
    right: 20px;
    top: 171px;
    width: 264px;
    //width: 0px;
    height: 72px;
    
    /*&:after{
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      box-shadow: -4px 3px 10px rgba(0, 0, 0, 0.3);
      opacity: 0;
      
      @include transition(0.3s);
    }
    
    &.shadow:after{
      opacity: 1;
    }*/
    
    a:not(.toggle){
      position: fixed;
      top: 171px;
      right: 20px;
      background-color:$vertFonce; 
      color: $noir;
      border-bottom: 5px solid transparent;
      display:block;
      z-index:1;
      margin:0;
      text-decoration: none;
      width: 72px;
      height: 72px;
      
      @include transition(0.3s);
      
      svg{
        margin: 20px 20px 15px 20px;
      }

      &:hover{
        border-bottom: 5px solid $gris;
        color: $gris;
      }
    }
  }

      /* Bulles pour indiquer les pages */

  .bulle{
    background-color: $vert;
    padding: 10px;
    display: none;
    position: absolute;
    opacity: 0;
    text-align: center;
    border-bottom: 5px solid $gris;
    box-shadow:0px 2px 5px rgba(0, 0, 0, 0.3);
    z-index: 2;
    font-weight: 500;
    
    &::after{
      content:"";
      position: absolute;
      width: 0;
      height: 0;
    }
  }

  .bulle_1{
    width: 80px;
    right: 90px;
    top: 110px;
    
    &::after{
      left:100%;
      top: 10px;
      border-top: 10px solid transparent;
      border-left: 15px solid $vert;
      border-bottom: 10px solid transparent;
    }
  }

  .bulle_2{
    width: 120px;
    right: 90px;
    top: 185px;
    
    &::after{
      left:100%;
      top: 10px;
      border-top: 10px solid transparent;
      border-left: 15px solid $vert;
      border-bottom: 10px solid transparent;
    }
  }

  /*.bulle_2-1{
    width: 140px;
    right: 75px;
    top: 235px;
    
    &::after{
      left:60%;
      top: -14px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 15px solid $vert;
    }
  }

  .bulle_2-2{
    width: 150px;
    right: 100px;
    top: 235px;
    
    &::after{
      left:40%;
      top: -14px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 15px solid $vert;
    }
  }

  .bulle_2-3{
    width: 105px;
    right: 193px;
    top: 235px;
    
    &::after{
      left:40%;
      top: -14px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 15px solid $vert;
    }
  }

  .bulle_2-4{
    width: 85px;
    right: 280px;
    top: 235px;
    
    &::after{
      left:40%;
      top: -14px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 15px solid $vert;
    }
  }*/

  .bulle_3{
    width: 160px;
    right: 90px;
    top: 260px;
    
    &::after{
      left:100%;
      top: 10px;
      border-top: 10px solid transparent;
      border-left: 15px solid $vert;
      border-bottom: 10px solid transparent;
    }
  }

  .bulle_4{
    width: 120px;
    right: 88px;
    top: 340px;
    
    &::after{
      left:100%;
      top: 10px;
      border-top: 10px solid transparent;
      border-left: 15px solid $vert;
      border-bottom: 10px solid transparent;
    }
  }

  .bulle_5{
    width: 140px;
    right: 90px;
    top: 415px;
    
    &::after{
      left:100%;
      top: 10px;
      border-top: 10px solid transparent;
      border-left: 15px solid $vert;
      border-bottom: 10px solid transparent;
    }
  }

  .bulle_6{
    width: 100px;
    right: 90px;
    top: 485px;
    
    &::after{
      left:100%;
      top: 10px;
      border-top: 10px solid transparent;
      border-left: 15px solid $vert;
      border-bottom: 10px solid transparent;
    }
  }

  .bulle_7{
    width: 110px;
    right: 90px;
    top: 560px;
    
    &::after{
      left:100%;
      top: 10px;
      border-top: 10px solid transparent;
      border-left: 15px solid $vert;
      border-bottom: 10px solid transparent;
    }
  }

  html[lang="en"] .bulle_2{
    width: 80px;
  }
  html[lang="en"] .bulle_3{
    width: 90px;
  }
  html[lang="en"] .bulle_7{
    width: 100px;
  }

</style>

<i18n>

  {
    "en":{
      "navLabel": "Navigation Menu",
      "navOpenLabel": "Expand navigation menu",
      "navCloseLabel": "Collapse navigation menu"
    },
    "fr":{
      "navLabel": "Menu de navigation",
      "navOpenLabel": "Ouvrir le menu de navigation",
      "navCloseLabel": "Fermer le menu de navigation"
    }
  }

</i18n>