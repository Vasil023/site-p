<template>
  <main class="page">
    <!-- First screen -->
    <section class="first-screen">
      <div class="overlay"></div>
      <div class="container">
        <div class="first-screen-content col-xl-11">
          <h1 class="heading-title">
            Déléguez vos pré-relances et vos relances de factures impayées,concentrez-vous sur vos tâches À
            valeur ajoutée
          </h1>
          <p>
            Faites-vous payer en phase amiable en 60 jours jusqu’à 90% de vos factures impayées grâce à
            GAYSSOT RECOUVREMENT
          </p>
        </div>

        <a href="#" class="btn-yellow">DEMANDEZ UN AUDIT</a>
      </div>
    </section>

    <!-- Nos services -->
    <section class="services">
      <div class="container">
        <h3>NOS SERVICES RECOUVREMENT</h3>

        <ul class="gap-5 flex-wrap col-xl-10 justify-content-center offset-xl-1 services-items">
          <li class="services-item">
            <a href="#" class="services-item-link">
              <img src="@/assets/img/nos-services/1.svg" alt="icon" />
              <p>Pré-relance commerciale</p>
            </a>
          </li>
          <li class="services-item">
            <a href="#" class="services-item-link">
              <img src="@/assets/img/nos-services/2.svg" alt="icon" />
              <p>Recouvrement amiable</p>
            </a>
          </li>
          <li class="services-item">
            <a href="#" class="services-item-link">
              <img src="@/assets/img/nos-services/3.svg" alt="icon" />
              <p>Recouvrement judiciaire</p>
            </a>
          </li>
          <li class="services-item">
            <a href="#" class="services-item-link">
              <img src="@/assets/img/nos-services/4.svg" alt="icon" />
              <p>Médiation</p>
            </a>
          </li>
          <li class="services-item">
            <a href="#" class="services-item-link">
              <img src="@/assets/img/nos-services/5.svg" alt="icon" />
              <p>Gestion des défaillances</p>
            </a>
          </li>
          <li class="services-item">
            <a href="#" class="services-item-link">
              <img src="@/assets/img/nos-services/6.svg" alt="icon" />
              <p>Audit et Conseils</p>
            </a>
          </li>
          <li class="services-item">
            <a href="#" class="services-item-link">
              <img src="@/assets/img/nos-services/7.svg" alt="icon" />
              <p>Créances à l’international</p>
            </a>
          </li>
          <li class="services-item">
            <a href="#" class="services-item-link">
              <img src="@/assets/img/nos-services/8.svg" alt="icon" />
              <p>Formation</p>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Les AVANTAGES de GAYSSOT Recouvrement -->
    <avantegesVue />

    <!-- recevezVue -->
    <recevezVue />

    <!-- recomendationVue -->
    <recomendationVue />

    <!-- programmerVue -->
    <programmerVue />

    <!-- reviewsSlider -->
    <reviewsSlider />

    <!-- Vous -->
    <section>
      <div class="programmer-two">
        <div class="container">
          <div class="_border vous">
            <div class="heading">Vous avez une question?</div>
            <div class="subtitle _border-bottom">
              Contactez-nous à l’aide de <strong>notre formulaire de contact</strong>
            </div>
            <div class="subtitle">ou en nous appelant au</div>

            <div class="phone">
              <img src="@/assets/img/phone.svg" alt="phone" />
              <a href="tel:04 78 02 97 70">04 78 02 97 70</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- socialMedia -->
    <socialMedia />
  </main>
</template>

<script>
import avantegesVue from "@/components/HomePage/avanteges-vue.vue";
import recevezVue from "@/components/HomePage/recevez-vue.vue";
import recomendationVue from "@/components/HomePage/recomendation-vue.vue";
import programmerVue from "@/components/HomePage/programmer-vue.vue";
import reviewsSlider from "@/components/HomePage/reviews-slider.vue";
import socialMedia from "@/components/HomePage/social-media.vue";

export default {
  components: {
    avantegesVue,
    recevezVue,
    recomendationVue,
    programmerVue,
    reviewsSlider,
    socialMedia,
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/mixin.scss";

.first-screen {
  background: url("@/assets/img/cover.png");
  background-color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: calc(100vh - 63px);
  min-height: 600px;
  position: relative;
  display: flex;
  align-items: center;

  &-content {
    position: relative;
    padding-left: 18px;

    &::before {
      content: "";
      position: absolute;
      width: 7px;
      height: 100%;
      background-color: $white;
      border-radius: 11px;
      left: 0;
      top: 0;
    }
  }

  h1 {
    color: #fff;
    font-size: 56px !important;
    font-weight: 700 !important;
    line-height: 84px !important;
  }

  p {
    color: $white;
    font-size: 36px;
    font-weight: 400;
    line-height: 42px;
    margin-top: 25px;
  }

  a {
    position: relative;
    margin-top: 73px;
    z-index: 5;
  }
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.63;
  z-index: 1;
}

.first-screen-content {
  position: relative;
  z-index: 5;
}

// Nos services
.services {
  background: $purple;
  padding: 84px 0 80px 0;

  h3 {
    color: $white;
    text-align: center;
  }
}

.services-items {
  list-style-type: none;
  display: flex;
  margin-top: 40px;
}

.services-item {
  background-color: $white;
  border-radius: 8px;
  padding: 24px;
  width: 210px;

  @include phone {
    width: 100%;
  }

  &:hover {
    background-color: #309;
    box-shadow: 12px 20px 17px 0px rgba(0, 0, 0, 0.25);

    img {
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(313deg)
        brightness(102%) contrast(104%);
    }

    p {
      color: $white;
    }
  }
}

.services-item-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  p {
    text-align: center;
    color: $black;
    font-size: rem(16);
    font-weight: 600;
    line-height: 24px; /* 150% */
    letter-spacing: 1.6px;
    text-transform: uppercase;
    margin-top: 16px;
  }
}

._border {
  border-width: 5px;
  border-style: dashed;
  border-color: #3a0987;
  padding: 67px 35px 67px 35px;
  text-align: center;

  .btn-yellow {
    margin-top: 60px;
  }

  @include phone {
    padding: 47px 16px 47px 16px;

    .btn-yellow {
      margin-top: 30px;
    }
  }
}

.programmer-two {
  padding: 60px 0;
}
</style>
