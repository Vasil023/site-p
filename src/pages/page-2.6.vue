<template>
  <div class="page-b">
    <!-- First screen -->
    <section class="first-screen mb-5">
      <div class="overlay"></div>
      <div class="container">
        <div class="col-xl-11">
          <h1 class="heading-title">Audit & conseils</h1>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <p>
          Gayssot vous accompagne dans la gestion de votre poste clients par l<strong
            >a mise en place d’audit qualité gratuit et de conseils en performance.</strong
          >
        </p>
        <p>
          La performance du poste clients dépend en grande partie de l’organisation interne dans l’entreprise.
        </p>

        <div class="content">
          <h3 class="pe-4">NOTRE ZONE D’INTERVENTION POUR LA GESTION DE VOTRE POSTE CLIENTS</h3>

          <p>
            Avec toujours pour objectif d'améliorer la santé financière de votre entreprise par une meilleure
            gestion du poste clients, Gayssot vous conseille sur
            <strong
              >la mise en place de procédures et de process modulables et adaptables en collaboration avec vos
              équipes.</strong
            >
          </p>

          <p>
            Notre intervention a pour vocation de <strong>réduire les délais de paiements</strong> de vos
            factures et de garantir une
            <strong>bonne gestion du recouvrement dans votre entreprise</strong> tout en préservant
            <strong>l’image de votre entreprise.</strong>
          </p>

          <div>
            <h3>Nos spécialistes performance du poste clients interviennent sur les points suivants:</h3>

            <ul class="list">
              <li>Définition de la zone d’action de votre poste clients</li>
              <li>
                Collaboration avec le DAF / Responsable ADV pour établir un plan durable et des actions
                systématiques
              </li>
              <li>Mise en place de rapports et d’indicateurs visant à assurer un suivi régulier</li>
            </ul>
          </div>
        </div>
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
    title: "Audit conseils",
  },

  components: { NosExperts },
};
</script>

<style lang="scss" scoped>
.first-screen {
  background: url("@/assets/img/cover/cover2.6.png");
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
</style>
