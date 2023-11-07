<template>
  <main>
    <!-- First screen -->
    <section class="first-screen">
      <div class="overlay"></div>
      <div class="container">
        <div class="first-screen-content col-xl-12">
          <h1 class="heading-title">
            Déléguez vos pré-relances et vos relances de factures impayées, concentrez-vous sur vos tâches à
            valeur ajoutée
          </h1>
          <p>
            Faites-vous payer à l’amiable jusqu'à 90% de vos factures impayées grâce à GAYSSOT RECOUVREMENT
          </p>
        </div>

        <router-link :to="{ name: 'TwoForm' }" class="btn-yellow">demander un devis</router-link>
      </div>
    </section>

    <!-- nosServices -->
    <nosServices />

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
            <div class="subtitle">
              Contactez-nous à l’aide de <br />
              <router-link :to="{ name: 'NosTarifs' }">
                <strong class="_border-bottom">notre formulaire de contact</strong>
              </router-link>
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
import nosServices from "@/components/HomePage/nos-services.vue";
import avantegesVue from "@/components/HomePage/avanteges-vue.vue";
import recevezVue from "@/components/HomePage/recevez-vue.vue";
import recomendationVue from "@/components/HomePage/recomendation-vue.vue";
import programmerVue from "@/components/HomePage/programmer-vue.vue";
import reviewsSlider from "@/components/HomePage/reviews-slider.vue";
import socialMedia from "@/components/HomePage/social-media.vue";

export default {
  head: {
    title: "Gayssot",
  },

  components: {
    nosServices,
    avantegesVue,
    recevezVue,
    recomendationVue,
    programmerVue,
    reviewsSlider,
    socialMedia,
  },
};
</script>

<style lang="scss" scoped>
.first-screen {
  background: url("@/assets/img/cover/cover.png");
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
  position: relative;

  p {
    line-height: 42px;
    font-weight: 300;
    // padding-right: 150px;
    letter-spacing: 1.6px;
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

.subtitle {
  strong {
    color: $black;
  }

  a {
    text-decoration: none;
  }
}

.programmer-two {
  padding: 60px 0;
}
</style>
