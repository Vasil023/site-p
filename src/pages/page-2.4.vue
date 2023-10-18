<template>
  <div class="page-b">
    <!-- First screen -->
    <section class="first-screen mb-5">
      <div class="overlay"></div>
      <div class="container">
        <div class="col-xl-11">
          <h1 class="heading-title">Médiation</h1>
          <p>
            Gayssot Recouvrement assure une totale transparence et fait preuve d’éthique dans ses pratiques.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <p>
          <strong
            >Le but est de garantir le maintien de la relation contractuelle avec les clients par</strong
          >
          la mise en place de protocoles transactionnels, d’échéanciers, ...
        </p>
        <p>La méthode envisagée est la pérennisation des relations contractuelles.</p>
        <p>Gayssot recouvrement, c’est <strong>le recouvrement en bonne intelligence.</strong></p>
        <p>
          <strong>La médiation professionnelle</strong> est une pratique prodiguée par Gayssot Recouvrement
          pour accompagner ses interlocuteurs dans <strong>la résolution de situation de blocage</strong> et
          notamment dans des situations d’impayés.
        </p>
        <p>
          La médiation professionnelle est avant tout une discipline qui porte sur l'étude des phénomènes
          relationnels, des composantes de la qualité relationnelle à la dégradation relationnelle.
        </p>
        <p>
          Ainsi, Gayssot Recouvrement peut vous accompagner à la conduite de vos projets relationnels avec vos
          clients, associés, fournisseurs, mais également en interne avec vos collaborateurs.
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
  components: { NosExperts },
};
</script>

<style lang="scss" scoped>
.first-screen {
  background: url("@/assets/img/cover/cover2.4.png");
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

  // h1 {
  //   color: $white;
  //   bottom: 60px;
  //   position: absolute;
  // }
}
</style>
