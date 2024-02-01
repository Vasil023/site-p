<template>
  <div class="page-b">
    <!-- First screen -->
    <section class="first-screen mb-5">
      <div class="overlay"></div>
      <div class="container">
        <div class="col-xl-11">
          <h1 class="heading-title">FORMATION GAYSSOT</h1>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <h3>Nos formations:</h3>
        <ul class="list">
          <li>Technique de recouvrement amiable</li>
          <li>Technique de recouvrement judiciaire</li>
          <li>Gestion des défaillances</li>
          <li>Gestions des appels difficiles en recouvrement</li>
        </ul>
        <p>
          Quels que soient vos besoins et objectifs, Gayssot est en mesure de dispenser des
          <strong>formations professionnelles spécifiques grâce</strong> à notre équipe de
          <strong>spécialistes qualifiés</strong> et expérimentés.
        </p>

        <h3>Formation recouvrement intra entreprise et formation inter entreprise.</h3>
        <p>
          Fort de notre expérience en gestion du poste client, Gayssot Recouvrement met à disposition des
          entreprises et de leurs salariés des formations continues permettant à leurs collaborateurs de se
          former et de se spécialiser dans ce domaine stratégique pour l’entreprise.
        </p>

        <p>
          Nous mettons en place aussi bien des <strong>formations intra entreprise sur-mesure</strong> pour
          vos équipes que des <strong>formations inter entreprises</strong> afin de former sur un aspect bien
          précis de la gestion du poste client en petits groupes.
        </p>
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
    title: "Formation",
  },

  components: { NosExperts },
};
</script>

<style lang="scss" scoped>
.first-screen {
  background: url("@/assets/img/cover/cover2.8.png");
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

h1 {
  @include phone {
    font-size: 32px !important;
    line-height: 32px !important;
  }
}
</style>
