<template>
  <div class="page-b">
    <!-- First screen -->
    <section class="first-screen mb-5">
      <div class="overlay"></div>
      <div class="container">
        <div class="col-xl-11">
          <h1 class="heading-title">Gestion des défaillances</h1>
        </div>
      </div>
    </section>

    <section class="container">
      <p class="pe-5">
        Votre client ne peut plus <strong>respecter les délais de paiement</strong> qui lui incombent ? Son
        entreprise est défaillante et entre en état de <strong>cessation de paiement?</strong><br />
        Gayssot Recouvrement, expert de la gestion du poste client et du recouvrement, vous accompagne dans
        <strong>la gestion des défaillances d’entreprise</strong> auxquelles vous devez faire face!
      </p>
      <p class="pe-5">
        Il est important d’être vigilant et réactif pour répondre aux
        <strong>obligations légales</strong> (formalisme, délai de déclaration).
        <strong>La gestion de la défaillance d’entreprise</strong> est longue et fastidieuse. Nous prenons en
        charge la gestion de vos dossiers:
      </p>
    </section>

    <section>
      <div class="container">
        <div class="d-items d-flex justify-content-center flex-wrap mt-5 pt-4">
          <div class="d-item">
            <p>
              <span>Déclarations de créances</span>
            </p>
          </div>
          <div class="d-item">
            <p><span>Gestion de l’actif</span></p>
          </div>
          <div class="d-item">
            <p>
              <span>Négociations de contrats</span>
            </p>
          </div>
          <div class="d-item">
            <p>
              <span>Gestion de passif</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-5 pt-3">
      <div class="container">
        <h3>Pourquoi faire appel à Gayssot Recouvrement pour votre gestion des défaillances d’entreprise?</h3>
        <p>
          La réactivité et l’expertise de notre cabinet face aux obligations légales vous permettront d’éviter
          la forclusion. Vous économiserez du temps et recentrerez vos ressources sur des activités à plus
          forte rentabilité. Grâce à son expertise dans
          <a href="#" class="_link">la gestion du poste client,</a> notre cabinet de recouvrement peut
          également vous accompagner dans la gestion de ce poste stratégique pour améliorer votre santé
          financière, anticiper le risque client et savoir faire face à ce risque.
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
    title: "Gestion des défaillances",
  },

  components: { NosExperts },
};
</script>

<style lang="scss" scoped>
.first-screen {
  background: url("@/assets/img/cover/cover2.5.png");
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

.d {
  &-items {
    width: 880px;
    margin: 0 auto;
    gap: 24px;

    @include tablet-up {
      width: 100%;
    }
  }

  &-item {
    padding: 16px 24px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 3px 1px 19px 0px rgba(0, 0, 0, 0.14);
    width: 400px;

    p {
      text-align: center;
      margin-bottom: 0 !important;

      span {
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background: #7300ff;
          transform: rotate(-45deg);
          left: -20px;
          top: 5px;
        }
      }
    }
  }
}
</style>
