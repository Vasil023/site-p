<template>
  <main>
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
import nosServices from "@/components/HomePage/nos-services.vue";
import avantegesVue from "@/components/HomePage/avanteges-vue.vue";
import recevezVue from "@/components/HomePage/recevez-vue.vue";
import recomendationVue from "@/components/HomePage/recomendation-vue.vue";
import programmerVue from "@/components/HomePage/programmer-vue.vue";
import reviewsSlider from "@/components/HomePage/reviews-slider.vue";
import socialMedia from "@/components/HomePage/social-media.vue";

export default {
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

.programmer-two {
  padding: 60px 0;
}
</style>
