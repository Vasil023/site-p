<template>
  <div class="page-b">
    <!-- First screen -->
    <section class="first-screen">
      <div class="container">
        <div class="col-xl-11">
          <h1 class="heading-title">Gayssot recouvrement, spécialiste de la gestion du post client</h1>
          <p>
            Gayssot est une société créée en 2014 par deux associés qui avaient la ferme intention de
            bouleverser les codes traditionnels du recouvrement.
          </p>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <p>
          Gayssot, société à taille humaine spécialiste du poste client est un véritable games changers. Nous
          avons su briser les codes et l’image poussiéreuse des pratiques du recouvrement en misant sur la
          transparence et l’efficacité. Notre qualité et expertise de médiateur nous permettent de privilégier
          un dialogue ainsi qu’une approche amiable avec les créanciers dans la volonté de préserver les
          intérêts économiques et la relation client.
        </p>
      </div>
    </section>

    <section class="_list">
      <div class="container">
        <h3>Notre Mission</h3>
        <ul>
          <li>
            <div class="li-i"><p>Favoriser le développement personnel & collectif</p></div>
            <p>
              Nous croyons que le succès de notre entreprise repose sur l'épanouissement individuel de nos
              collaborateurs et la contribution positive que nous apportons à notre communauté.
            </p>
          </li>
          <li>
            <div class="li-i"><p>Donner du sens à notre métier</p></div>
            <p>
              Nous nous efforçons chaque jour de donner un sens profond à notre métier en aidant nos clients à
              résoudre leurs problèmes financiers avec intégrité et compassion.
            </p>
          </li>
          <li>
            <div class="li-i"><p>Ecoute & altruisme</p></div>
            <p>
              Notre approche repose sur l'écoute attentive des besoins de nos clients et notre désir sincère
              de les soutenir. L'altruisme guide chacune de nos actions, car nous sommes déterminés à faire
              une réelle différence dans la vie de ceux que nous servons.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <!-- <section>
      <div class="container">
        <div class="video"></div>
      </div>
    </section> -->

    <section class="valeurs-wrapper">
      <div class="container">
        <h3>Nos valeurs:</h3>
        <div class="valeurs-items">
          <div class="valeurs-item">RÉACTIVITÉ</div>
          <div class="valeurs-item">ÉTHIQUE</div>
          <div class="valeurs-item">EFFICIENCE</div>
          <div class="valeurs-item">CONFIANCE</div>
          <div class="valeurs-item">HUMANITÉ</div>
          <div class="valeurs-item">RESPONSABILITÉ</div>
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
    title: "A propos de nous",
  },

  components: { NosExperts },
};
</script>

<style lang="scss" scoped>
ul {
  padding-left: 0;
}
.first-screen {
  background: url("@/assets/img/cover/cover1.png");
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

._list {
  margin-top: 60px;
}

.video {
  margin-top: 60px;
  width: 100%;
  height: 698px;
  background: $purple;
}

.valeurs-wrapper {
  margin-top: 60px;
}

.valeurs-items {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 24px;
}

.valeurs-item {
  border-radius: 8px;
  background: #fff;
  box-shadow: 5px 2px 15px 0px rgba(0, 0, 0, 0.13);
  padding: 24px 32px;
  width: 400px;
  text-align: center;
  color: #3a0987;
  font-weight: 400;
  font-size: 20px;
}
</style>
