<template>
  <div class="page-b">
    <!-- First screen -->
    <section class="first-screen mb-5">
      <div class="overlay"></div>
      <div class="container">
        <div class="col-xl-11">
          <h1 class="heading-title">Rejoignez l'équipe Gayssot!</h1>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <p>
          Entreprise dynamique spécialisée dans la gestion de poste client, GAYSSOT est en fort développement,
          ainsi nous recherchons des personnes passionnées, curieuses et bien décidées à faire bouger les
          codes du recouvrement d’un marché traditionnel.
        </p>
        <p>
          Ambiance agréable, secteur de prospection vaste et très attractif. Métier valorisant et
          rémunérateur. Vos possibilités d’évolution au sein de GAYSSOT sont grandes et nous n’hésitons pas à
          former nos experts de demain!
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.first-screen {
  background: url("@/assets/img/cover/cover7.png");
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
