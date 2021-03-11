<template>
  <div>
    <!-- Navigation pour ordinateur -->
    <nav class="navigation fermee">
      <a href="#" @click.stop.prevent="menuClick" class="toggle">
        <font-awesome-icon icon="bars" size="2x" role="presentation" class="menu" />
      </a>
      <div>
        <nuxt-link :to="localePath('index')" class="lien1" aria-labelledby="bulle_1"><font-awesome-icon icon="home" size="2x" role="presentation" /><span class="v-inv" v-html="$t('home')"></span></nuxt-link>
        <nuxt-link :to="localePath('portfolio')" class="lien2" aria-labelledby="bulle_2"><font-awesome-icon icon="book" size="2x" role="presentation" /><span class="v-inv" v-html="$t('portfolio')"></span></nuxt-link>
        <nuxt-link :to="localePath('contact')" class="lien3" aria-labelledby="bulle_3"><font-awesome-icon icon="envelope" size="2x" role="presentation" /><span class="v-inv" v-html="$t('contact')"></span></nuxt-link>
        <nuxt-link :to="localePath('services')" class="lien4" aria-labelledby="bulle_4"><font-awesome-icon icon="thumbs-up" size="2x" role="presentation" /><span class="v-inv" v-html="$t('services')"></span></nuxt-link>
        <nuxt-link :to="localePath('competences')" class="lien5" aria-labelledby="bulle_5"><font-awesome-icon icon="chart-pie" size="2x" role="presentation" /><span class="v-inv" v-html="$t('competences')"></span></nuxt-link>
      </div>
    </nav>

    <!-- Div contenant les liens du sous-menu -->
    <div class="sous-liens">
      <nuxt-link :to="localePath('portfolio')" class="lien2-1" aria-labelledby="bulle_2-1"><font-awesome-icon icon="code" size="2x" role="presentation" /><span class="v-inv" v-html="$t('programmation')"></span></nuxt-link>
      <nuxt-link :to="localePath('portfolio')" class="lien2-2" aria-labelledby="bulle_2-2"><font-awesome-icon icon="object-group" size="2x" role="presentation" /><span class="v-inv" v-html="$t('design')"></span></nuxt-link>
      <nuxt-link :to="localePath('portfolio')" class="lien2-3" aria-labelledby="bulle_2-3"><font-awesome-icon icon="pencil-alt" size="2x" role="presentation" /><span class="v-inv" v-html="$t('illustrations')"></span></nuxt-link>
      <nuxt-link :to="localePath('portfolio')" class="lien2-4" aria-labelledby="bulle_2-4"><font-awesome-icon icon="image" size="2x" role="presentation" /><span class="v-inv" v-html="$t('autre')"></span></nuxt-link>
    </div>

    <!--Bulles pour indiquer les pages--> 
    <div class="bulle bulle_1" id="bulle_1">{{ $t('home') }}</div>
    <div class="bulle bulle_2" id="bulle_2">{{ $t('portfolio') }}</div>
    <div class="bulle bulle_2-1" id="bulle_2-1"> {{ $t('programmation') }}</div>
    <div class="bulle bulle_2-2" id="bulle_2-2">{{ $t('design') }}</div>
    <div class="bulle bulle_2-3" id="bulle_2-3">{{ $t('illustrations') }}</div>
    <div class="bulle bulle_2-4" id="bulle_2-4">{{ $t('autre') }}</div>
    <div class="bulle bulle_3" id="bulle_3">{{ $t('contact') }}</div>
    <div class="bulle bulle_4" id="bulle_4">{{ $t('services') }}</div>
    <div class="bulle bulle_5" id="bulle_5">{{ $t('competences') }}</div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        bulle_Ouvert_Right: "110px",
        bulle_Ferme_Right: "90px",

        bulle_2_Ouvert_Right: "384px",
        bulle_2_Ferme_Right: "374px",

        bulle_sousLienOuvertTop: "255px",
        bulle_sousLienFermeTop: "235px",

        lien2_1_Ouvert_Right: "90px",
        lien2_2_Ouvert_Right: "150px",
        lien2_3_Ouvert_Right: "210px",
        lien2_4_Ouvert_Right: "282px",
        sousLien_Ferme_Right: "20px",

        //Mobile
        lien2_0_Ouvert_Right_Mobile: "90px",
        lien2_1_Ouvert_Right_Mobile: "134px",
        lien2_2_Ouvert_Right_Mobile: "178px",
        lien2_3_Ouvert_Right_Mobile: "220px",
        lien2_4_Ouvert_Right_Mobile: "264px",
        sousLien_Ferme_Right_Mobile: "20px",

        bulle_Ouvert_RightMobile: "110px",
        bulle_Ferme_RightMobile: "100px",

        bulle_2_sousMenuOuvert_RightMobile: "335px"
      }
    },

    methods: {
      menuClick(){
        if($('.navigation').hasClass("fermee")){
          this.ouvrirDesktop();
        }
        else{
          this.fermerDesktop();
        }
      },
      submenuClick(){
        var that = this;

        $('.sous-liens').stop().hide(50).removeClass("shadow").animate({width: "0px"}, 300);
        $('.lien2-1').mouseout().stop().animate({right: that.sousLien_Ferme_Right}, 50);
        $('.lien2-2').mouseout().stop().animate({right: that.sousLien_Ferme_Right}, 50);
        $('.lien2-3').mouseout().stop().animate({right: that.sousLien_Ferme_Right}, 50);
        $('.lien2-4').mouseout().stop().animate({right: that.sousLien_Ferme_Right}, 50);
      },



      ouvrirDesktop(){
        $('.navigation').removeClass("fermee", 600, "easeOutElastic");
        $('.bulle_1, .bulle_2, .bulle_2-1, .bulle_2-2, .bulle_2-3, .bulle_2-4, .bulle_3, .bulle_4, .bulle_5').show();
      },
      fermerDesktop(){        
        $('.navigation').addClass("fermee", 600, "easeOutBounce");
        $('.bulle_1, .bulle_2, .bulle_2-1, .bulle_2-2, .bulle_2-3, .bulle_2-4, .bulle_3, .bulle_4, .bulle_5').hide();
        
        var that = this;
        $(document).one("click", that.fermerDesktop);
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
      },
      hoverBullesSousLiens(num){   
        var that = this;
        
        $('.lien' + num).hover(
          function(){
            $('.bulle_' + num).stop().animate({opacity: 1, top: that.bulle_sousLienOuvertTop}, 300);
          },
          function(){
            $('.bulle_' + num).stop().animate({opacity: 0, top: that.bulle_sousLienFermeTop}, 300);
          }
        );
      }
    },

    mounted(){
      var that = this;
      $(document).one("click", that.fermerDesktop);

      //Afficher les bulles et les sous-menu au survol
      if($(window).width() > 1366){
        that.hoverBulles("1");
		
        $('.navigation .lien2, .lien2-1, .lien2-2, .lien2-3, .lien2-4, .sous-liens').hover(
          function(){
            $('.bulle_2').stop().animate({opacity: 1, right: that.bulle_2_Ouvert_Right}, 300);
          },
          function(){
            $('.bulle_2').stop().animate({opacity: 0, right: that.bulle_2_Ferme_Right}, 300);
          }
        );
        that.hoverBullesSousLiens("2-1");
        that.hoverBullesSousLiens("2-2");
        that.hoverBullesSousLiens("2-3");
        that.hoverBullesSousLiens("2-4");
        
        that.hoverBulles("3");
        that.hoverBulles("4");
        that.hoverBulles("5");

        $('.lien2, .lien2-1, .lien2-2, .lien2-3, .lien2-4, .sous-liens').hover(
          function(){
            $('.sous-liens').stop().show();
            $('.lien2-1').stop().animate({right: that.lien2_1_Ouvert_Right}, 50, 'swing');
            $('.lien2-2').stop().animate({right: that.lien2_2_Ouvert_Right}, 50, 'swing');
            $('.lien2-3').stop().animate({right: that.lien2_3_Ouvert_Right}, 50, 'swing');
            $('.lien2-4').stop().animate({right: that.lien2_4_Ouvert_Right}, 50, 'swing');
          },
          function(){
            $('.sous-liens').stop().hide(300)/*.removeClass("shadow").animate({width: "0px"}, 300)*/;
            $('.lien2-1').stop().animate({right: that.sousLien_Ferme_Right}, 50);
            $('.lien2-2').stop().animate({right: that.sousLien_Ferme_Right}, 50);
            $('.lien2-3').stop().animate({right: that.sousLien_Ferme_Right}, 50);
            $('.lien2-4').stop().animate({right: that.sousLien_Ferme_Right}, 50);
          }
        );
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
    position: fixed;
    right: 20px;
    top: 20px;
    background-color: $vert;
    box-shadow:0px 3px 10px rgba(0, 0, 0, 0.4);
    z-index: 1;
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
      
      &.nuxt-link-active{
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
    position: fixed;
    opacity: 0;
    text-align: center;
    border-bottom: 5px solid $gris;
      box-shadow:0px 2px 5px rgba(0, 0, 0, 0.3);
    z-index: 2;
    
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
    width: 80px;
    right: 374px;
    top: 185px;
    
    &::after{
      left:100%;
      top: 10px;
      border-top: 10px solid transparent;
      border-left: 15px solid $vert;
      border-bottom: 10px solid transparent;
    }
  }

  .bulle_2-1{
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
  }

  .bulle_3{
    width: 120px;
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
    width: 160px;
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

</style>

<i18n>

  {
    "en":{
      "home": "Home",
      "portfolio": "Portfolio",
      "programmation": "Programming",
      "design": "Graphic design",
      "illustrations": "Illustrations",
      "autre": "Others",
      "contact": "Contact Me",
      "services": "My Services",
      "competences": "My Skills"
    },
    "fr":{
      "home": "Accueil",
      "portfolio": "Portfolio",
      "programmation": "Programmation",
      "design": "Design graphique",
      "illustrations": "Illustrations",
      "autre": "Autres",
      "contact": "Me contacter",
      "services": "Mes services",
      "competences": "Mes compétences"
    }
  }

</i18n>