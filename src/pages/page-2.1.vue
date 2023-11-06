<template>
  <div class="page-b">
    <!-- First screen -->
    <section class="first-screen">
      <div class="container">
        <div class="col-xl-11">
          <h2 class="heading-title">La pré-relance commerciale</h2>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <p>
          Gayssot Recouvrement, vous propose de prendre en charge – en marque blanche, c'est-à-dire en votre
          nom – <strong>la pré-relance commerciale de vos factures.</strong><br />
          Ainsi, vous réduisez les risques <strong>de retards de paiement</strong> et vous recentrez vos
          ressources sur des activités à plus forte rentabilité.<br />
          L’expérience montre qu’il faut agir le plus tôt possible et avec souplesse tout en préservant la
          relation client.
        </p>
      </div>
    </section>

    <section class="benefices">
      <div class="container">
        <h3>Bénéfices</h3>
        <div class="benefices-items d-flex flex-wrap gap-sm-2 gap-3 justify-content-between">
          <div class="benefices-item">
            <div class="benefices-item__icon">
              <img src="@/assets/img/benefices/3.svg" alt="" />
            </div>
            <div class="benefices-item__title">
              <h5>Plus de trésorerie</h5>
              <p>Amélioration moyenne du DSO de 25%</p>
            </div>
          </div>
          <div class="benefices-item">
            <div class="benefices-item__icon">
              <img src="@/assets/img/benefices/2.svg" alt="" />
            </div>
            <div class="benefices-item__title">
              <h5>Moins d'impayés</h5>
              <p>Amélioration du délai de détection et résolution des litiges de 30%</p>
            </div>
          </div>
          <div class="benefices-item">
            <div class="benefices-item__icon">
              <img src="@/assets/img/benefices/1.svg" alt="" />
            </div>
            <div class="benefices-item__title">
              <h5>Plus de satisfaction</h5>
              <p>Résolution de 98% des dossiers clients avant procédure contentieuse</p>
            </div>
          </div>
        </div>

        <p class="mt-5">Essayez <strong>la pré-relance commerciale</strong> avec Gayssot!</p>
      </div>
    </section>

    <div class="container">
      <NosExperts />
    </div>
  </div>
</template>

<script>
import NosExperts from "@/components/shared/Nos-experts.vue";
export default {
  head: {
    title: "Pré relance commerciale",
  },

  components: { NosExperts },
};
</script>

<style lang="scss" scoped>
.first-screen {
  background: url("@/assets/img/cover/cover4.png");
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

  h2 {
    color: $white;
    bottom: 60px;
    position: absolute;
  }
}

.benefices {
  margin-top: 60px;

  h3 {
    font-weight: 500;
    margin-bottom: 34px;
  }

  &-item {
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 3px 28px 0px rgba(0, 0, 0, 0.15);
    max-width: 364px;
    width: 364px;
    text-align: center;
    padding: 24px;

    @include phone {
      max-width: 100%;
      width: 100%;
    }

    &__icon {
      margin-bottom: 16px;
    }
  }
}
</style>
