<template>
  <div class="page-b">
    <!-- First screen -->
    <section class="first-screen mb-5">
      <div class="overlay"></div>
      <div class="container">
        <div class="col-xl-11">
          <h1 class="heading-title">Créances à l'international</h1>
          <p>Recouvrer vos créances à l’international</p>
        </div>
      </div>
    </section>

    <section class="container">
      <p>
        <strong>Le recouvrement de créances internationales</strong> est souvent complexe et nécessite une
        connaissance juridique ainsi qu’une expertise spécifique pour chaque pays. Les us et coutumes ainsi
        que la langue du pays visé peuvent être <strong>une barrière à l’obtention de votre argent</strong> et
        l’amélioration de votre trésorerie.
      </p>
      <p>
        <strong>Notre service de recouvrement dédié à l’international</strong> se charge pour vous de
        recouvrer vos factures non échues ou vos factures impayées auprès de vos
        <strong>débiteurs étrangers.</strong>
      </p>
      <p>Pourquoi faire appel à Gayssot pour vos créances client à l'international?</p>

      <div class="d-flex justify-content-center mt-5 pt-2 mb-5">
        <a href="#" class="btn-yellow">Contactez nous pour une estimation</a>
      </div>
      <h3 class="pe-4">
        Gayssot maîtrise parfaitement la langue, les aspects législatifs et pratiques locales des pays
        concernés
      </h3>
      <p>
        Vous bénéficiez <strong>d’un pilotage depuis la France</strong> pour le traitement de vos dossiers
        internationaux. Le fait d’avoir un relais en local nous permet de vous assurer un suivi complet des
        <strong></strong> Nous garantissons ainsi les mêmes engagements que pour un recouvrement au niveau
        national.
      </p>

      <h3 class="mt-4">Vos avantages client :</h3>
      <ul class="list">
        <li>partenaire unique et interlocuteur dédié</li>
        <li>nous intervenons auprès des débiteurs de tous pays</li>
        <li>gestionnaires multilingues</li>
      </ul>
    </section>

    <div class="container">
      <NosExperts />
    </div>
  </div>
</template>

<script>
import NosExperts from "@/components/shared/Nos-experts.vue";

export default {
  components: { NosExperts },
};
</script>

<style lang="scss" scoped>
.first-screen {
  background: url("@/assets/img/cover/cover2.7.png");
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
    bottom: 144px;
    position: absolute;
  }

  p {
    position: absolute;
    bottom: 60px;
  }
}
</style>
