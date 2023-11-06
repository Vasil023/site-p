<template>
  <div class="page-b">
    <!-- First screen -->
    <section class="first-screen mb-5">
      <div class="overlay"></div>
      <div class="container">
        <div class="col-xl-11">
          <h1 class="heading-title">RSE</h1>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <p>
          Dans sa volonté d’intégrer
          <strong>la RSE à l’ensemble de sa stratégie, GAYSSOT recouvrement</strong> a adhéré
          <strong>au Pacte Mondial des nations unies</strong> sur le fondement d’un engagement volontaire
          construit sur la base de Dix principes, issus des textes fondamentaux des Nations Unies, à respecter
          en matière de droits humains, de droit du travail, d’environnement et de lutte contre la corruption.
        </p>
        <p>
          Cet engagement volontaire en matière de RSE permet d’aligner le monde économique français avec
          l’Agenda 2030 et les Objectifs de développement durable de l’ONU.
        </p>
        <p>
          Gayssot détient également <strong>la Certification Etablissement Eco-responsable</strong> délivrée
          par <strong>la société Solutri</strong> qui atteste que GAYSSOT s’inscrit dans une démarche de
          développement durable en valorisant ses déchets de bureau.
        </p>
        <p>
          <strong>La Charte de la diversité</strong> à laquelle Gayssot a souscrit est un engagement proposé à
          tout employeur, qui souhaite par une démarche volontariste, agir en faveur de la diversité et
          dépasser ainsi le cadre légal et juridique de la lutte contre les discriminations.
        </p>
        <p>
          Gayssot est fière de présenter une mixité ethnique forte ,d’avoir 8% de salariés handicapés, 9% de
          salariés étrangers et une forte représentativité des femmes (72% des employés).
        </p>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="rse-img d-flex flex-column flex-md-row justify-content-sm-between mt-5 pt-4 mb-5">
          <img src="@/assets/img/RSE/1.png" alt="" />
          <img src="@/assets/img/RSE/2.png" alt="" />
          <img src="@/assets/img/RSE/3.png" alt="" />
          <img src="@/assets/img/RSE/4.png" alt="" />
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
    title: "RSE",
  },

  components: { NosExperts },
};
</script>

<style lang="scss" scoped>
.first-screen {
  background: url("@/assets/img/cover/cover4.1.png");
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

.rse-img {
  img {
    object-fit: contain;
    aspect-ratio: 3/2;
  }

  @include phone {
    width: 320px;
    margin: 0 auto;
  }
}
</style>
