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
      <p>
        Votre client ne peut plus <strong>respecter les délais de paiement</strong> qui lui incombent ? Son
        entreprise est défaillante et entre en état de <strong>cessation de paiement?</strong><br />
        Gayssot Recouvrement, expert de la gestion du poste client et du recouvrement, vous accompagne dans
        <strong>la gestion des défaillances d’entreprise</strong> auxquelles vous devez faire face!
      </p>
      <p>
        Il est important d’être vigilant et réactif pour répondre aux
        <strong>obligations légales</strong> (formalisme, délai de déclaration).
        <strong>La gestion de la défaillance d’entreprise</strong> est longue et fastidieuse. Nous prenons en
        charge la gestion de vos dossiers:
      </p>
    </section>

    <section>
      <div class="container">
        <div class="d-items d-flex">
          <div class="d-item">
            <p>Déclarations de créances</p>
          </div>
          <div class="d-item">
            <p>Gestion de l’actif</p>
          </div>
          <div class="d-item">
            <p>Négociations de contrats</p>
          </div>
          <div class="d-item">
            <p>Gestion de passif</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
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
  }

  &-item {
    padding: 16px 24px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 3px 1px 19px 0px rgba(0, 0, 0, 0.14);
    width: 400px;

    p {
      text-align: center;
      position: relative;
      margin-bottom: 0 !important;

      &::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: #7300ff;
        transform: rotate(-45deg);
        left: 65px;
        top: 8px;
      }
    }
  }
}
</style>
