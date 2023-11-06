<template>
  <div class="page-b">
    <!-- First screen -->
    <section class="first-screen mb-5">
      <div class="overlay"></div>
      <div class="container">
        <div class="col-xl-11">
          <h1 class="heading-title">LE RECOUVREMENT JUDICIAIRE</h1>
        </div>
      </div>
    </section>

    <div class="container">
      <section>
        <p>
          <strong>Votre</strong> <a href="#" class="_link"> recouvrement amiable</a>&nbsp;
          <strong>n’a pas abouti?</strong>
        </p>
        <p class="mt-5">
          Gayssot prend en charge vos dossiers en <strong>recouvrement judiciaire</strong> pour vos créances
          impayées en mettant à votre disposition nos experts juridiques et s’engage à vous conseiller sur
          l<strong>es actions judiciaires</strong> possibles et à suivre celles-ci pour votre compte.
        </p>
      </section>

      <section class="mt-6 a-bg">
        <h2>Le Recouvrement judiciaire</h2>
        <h3 class="mt-4">Vos besoins / nos engagements:</h3>

        <ul class="list">
          <li>Expertise juridique de votre secteur;</li>
          <li>Connaissance du droit;</li>
          <li>Optimisation de vos coûts de fonctionnement;</li>
          <li>Procédures collectives trop longues et soumises aux administrateurs</li>
          <li>Manque d’effectif pour répondre en temps et en heure aux dates butoir de l’administration.</li>
        </ul>
      </section>
    </div>

    <div class="container">
      <NosExperts />
    </div>
  </div>
</template>

<script>
import NosExperts from "@/components/shared/Nos-experts.vue";

export default {
  head: {
    title: "Recouvrement judiciaire",
  },

  components: { NosExperts },
};
</script>

<style lang="scss" scoped>
.first-screen {
  background: url("@/assets/img/cover/cover2.3.png");
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

  h1 {
    color: $white;
    bottom: 60px;
    position: absolute;
  }
}

h3 {
  font-weight: 400 !important;
}

.a-bg {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 100%;
    background: url("@/assets/img/puter.png");
    top: 0;
    right: 0;

    @include tablet-up {
      display: none;
    }
  }
}
</style>
