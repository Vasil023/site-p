<template>
  <div class="swiper-reviews swiper-overflow-container">
    <div class="container">
      <div class="title">Avis de nos clients</div>

      <swiper
        :slidesPerView="'auto'"
        :spaceBetween="30"
        :freeMode="true"
        :navigation="{
          prevEl: prev,
          nextEl: next,
        }"
        :modules="modules"
        class="mySwiper swiper-propertis swiper-container"
      >
        <swiper-slide v-for="(item, i) in reviews" :key="i">
          <div class="slide-top">
            <div>
              <p>{{ item.name }}</p>
              <span>{{ item.label }}</span>
            </div>
          </div>

          <div class="slide-title">
            <p>
              {{ item.review }}
            </p>
          </div>
          <div class="slide-data">
            {{ item.date }}
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-btn">
        <div ref="prev" class="swiper-button-prev"></div>
        <div ref="next" class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [FreeMode, Navigation],
      prev,
      next,
    };
  },

  data() {
    return {
      reviews: [
        {
          name: "Madame Arlène Jacomo",
          label: "Responsable comptabilité clients - Société TransPloExpress",
          review:
            "Bonjour, Gayssot est une société que je recommande pour son professionnalisme et sa rigueur.Ils m'accompagnent dans le recouvrement de créances dont je n’espérais plus l’encaissement Les équipes sont sérieuses et à l’écoute. Merci",
          date: "Mai 2023",
        },
        {
          name: "Monsieur Paul Vermotant",
          label: "Directeur comptable - Société Créativie Lab",
          review:
            "Bonjour, La société Gayssot m’a réconcilié avec le monde du recouvrement. Ils ont respecté leur engagement tout en préservant le lien commercial que j’entretenais avec mes clients depuis de nombreuses années. Un savoir-faire et du tact. Bonne journée",
          date: "Mai 2023",
        },
        {
          name: "Madame Marie Frioule",
          label: "comptable - Société RevoTechnic",
          review:
            "Bonjour, Je félicite Gayssot Recouvrement pour avoir réussi là où j’avais échoué. Une expérience et une expertise qui permettent d’obtenir de très bons résultats. Excellente journée",
          date: "Juin 2023",
        },
        {
          name: "Madame Françoise Béraud",
          label: "Directrice financière - B.R.C.G  SA",
          review:
            "Bonjour, La société Gayssot m’aide à améliorer certains indicateurs financiers grâce à des opérations ponctuelles de nettoyage de ma balance âgée. Ils ont su parfaitement suppléer mon personnel manquant. J’ai pu optimiser mes résultats et gérer mes problèmes RH. Je le referai sans problème. Bien cordialement",
          date: "Juin 2023",
        },
        {
          name: "Monsieur Jean-Jacques Perron",
          label: "DSI - ETI du monde du transport & logistique",
          review:
            "Bonjour, Je tiens à féliciter les équipes Gayssot ainsi que leur infrastructure informatique qui m’ont permis d’externaliser le recouvrement en l’intégrant à mes outils internes et en supportant de très gros volumes de transactions. Professionnels et réactifs. Bravo",
          date: "Juillet 2023",
        },
        {
          name: "Madame Marie-Claude Genevais",
          label: "DAF - Acteur majeur dans le monde paramédical",
          review:
            "Bonjour, Après de nombreuses relances internes infructueuses et chronophages, nous avons décidé de sous-traiter ces tâches à un spécialiste. Nous avons bien fait de choisir la société Gayssot pour leur écoute, leur réactivité, leurs résultats et leur éthique. Nous les recommandons. Bonne journée",
          date: "Juillet 2023",
        },
        {
          name: "Monsieur Pierre Graveleux",
          label: "Dirigeant PME dans le secteur industriel",
          review:
            "Bonjour, Fragilisés par un nombre d’impayés grossissant et une relation commerciale se dégradant, nous avons fait le choix de prendre la société Gayssot pour se charger de notre recouvrement. Ils ont su trouver les solutions adéquates et épargner les relations commerciales avec mes clients. Encore merci Cordialement",
          date: "Juillet 2023",
        },
        {
          name: "Monsieur Emmanuel Fonteblois",
          label: "Credit manager - ETI dans le secteur du BTP",
          review:
            "Bonjour, L’expertise et l’adaptabilité de leurs outils informatiques satisfont l’ensemble de nos équipes internes. Une vraie collaboration entre nos équipes. Des résultats au-delà de nos espérances et une vraie diplomatie dans la tonalité. Très bonne journée!",
          date: "Juillet 2023",
        },
        {
          name: "Monsieur Bertrand Giovanni",
          label: "Dirigeant - PME dans le secteur du transport",
          review:
            "Bonjour, J’ai bénéficié, pour un dossier très sensible (gros montant de créance et client stratégique), de l’excellent travail d’un Médiateur judiciaire de chez Gayssot. Nous avons trouvé un arrangement et mes liens se sont renforcés avec mon client. Je recommande la Médiation. Bonne journée",
          date: "Août 2023",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-overflow-container {
  overflow-x: hidden;

  .container {
    overflow: visible;
    position: relative;
  }

  .swiper-container {
    overflow: visible;
  }
}

.swiper-reviews {
  background: #eae6f4;
  padding: 60px 0 0 0;
}
.swiper {
  width: 100%;
  height: 100%;
  padding: 60px 0px 100px 0px;
}

.swiper-btn {
  width: 94px;
  height: 39px;
  position: relative;
  bottom: 47px;
  left: 50%;

  @include phone {
    display: none;
  }
}

:deep(.swiper-button-next) {
  // right: 613px !important;
  // top: 430px;
  color: #13023e;

  &::after {
    font-size: 25px;
  }
}

:deep(.swiper-button-prev) {
  // left: 625px !important;
  // top: 430px;
  color: #13023e;

  &::after {
    font-size: 25px;
  }
}

.slide-reviews {
  background: #eae6f4;
  padding: 60px 0 0 0;
}

.title {
  // margin-bottom: 60px;
  font-size: 48px;
  font-weight: 700;
  line-height: 32px;

  @include phone {
    font-size: 38px;
  }
}

.swiper-overflow-container {
  overflow-x: hidden;
  .container {
    overflow: visible;
  }
  .swiper-container {
    overflow: visible;
  }
}

.swiper-slide {
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.25);
  padding: 12px 16px;
  max-width: 295px;
  height: auto;
  position: relative;
}

.slide-top {
  display: flex;
  gap: 10px;

  img {
    border-radius: 50%;
    width: 66px;
    height: 67px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 0;
  }

  span {
    font-size: rem(13);
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 1.4px;
    margin-top: 10px;
    display: block;
  }
}

.slide-title {
  margin-top: 8px;

  p {
    font-size: 16px !important;
    font-weight: 400;
    line-height: 24px !important; /* 150% */
    letter-spacing: 1.4px;
  }
}

.slide-data {
  text-align: end;
  font-size: 14px;
  color: #404040;
  letter-spacing: 1.4px;
  position: absolute;
  bottom: 12px;
  right: 12px;
}

.box-btn {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
}
</style>
