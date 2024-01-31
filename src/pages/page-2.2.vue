<template>
  <div class="page-b">
    <!-- First screen -->
    <section class="first-screen mb-5">
      <div class="overlay"></div>
      <div class="container">
        <div class="col-xl-11">
          <h1 class="heading-title">RECOUVREMENT AMIABLE POUR LA GESTION DE VOS IMPAYÉS</h1>
          <p>
            Gayssot se charge du recouvrement amiable de vos factures impayées tout en préservant votre
            relation client !
          </p>
        </div>
      </div>
    </section>

    <section class="p-bold">
      <div class="container">
        <p>Vous n’arrivez pas à vous faire payer vos factures clients?</p>
        <p>
          Votre entreprise fait face à des difficultés financières dues à des factures non réglées par vos
          clients?
        </p>
        <p>Gayssot propose son expertise en recouvrement amiable.</p>
      </div>
    </section>

    <section class="r-list mt-5 pt-3">
      <div class="container">
        <h3 class="pb-3">Deux options:</h3>
        <h5>Le recouvrement amiable en marque blanche</h5>

        <ul>
          <li>Le principe du mimétisme de vos process tel un “caméléon”;</li>
          <li>La relance commerciale en votre nom;</li>
          <li>Adaptation du discours et de l’image de votre société en fonction de vos indications.</li>
        </ul>
      </div>
    </section>

    <section class="r-list pt-3">
      <div class="container">
        <h5>Le recouvrement amiable en nom propre</h5>

        <ul>
          <li>La création d’un choc psychologique auprès du débiteur et un changement de phase;</li>
          <li>Adaptation de nos process aux typologies de dossiers, de débiteurs…</li>
        </ul>
      </div>
    </section>

    <section class="r-list mt-5 pt-3">
      <div class="container">
        <h3>Vos besoins / nos engagements:</h3>

        <ul>
          <li>Baisse du délai moyen de paiement;</li>
          <li>Optimisation de votre trésorerie;</li>
          <li>Economie de votre temps pour développer des activités plus rentables;</li>
          <li>Préserver la relation client / fournisseur.</li>
        </ul>

        <div class="p-bold">
          <p class="mt-5 pe-2">
            Votre recouvrement amiable n’a pas abouti? Gayssot prend en charge vos dossiers en
            <a href="#" class="_link"> recouvrement judiciaire. </a>
          </p>
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
    title: "Recouvrement amiable",
  },

  components: { NosExperts },
};
</script>

<style lang="scss" scoped>
.first-screen {
  background: url("@/assets/img/cover/cover2.2.png");
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
}

.r-list {
  h3 {
    font-weight: 400;
    text-decoration: underline;
    text-underline-offset: 10px;
  }

  ul {
    padding-left: 0 !important;

    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      font-size: 18px;
      line-height: 40px;
      font-weight: 400;

      &::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: #7300ff;
        transform: rotate(-45deg);
        left: 0;
        top: 15px;
      }
    }
  }
}
</style>
