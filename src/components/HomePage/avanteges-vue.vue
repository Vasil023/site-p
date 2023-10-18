<template>
  <section class="avanteges">
    <div class="container">
      <div class="row avanteges-wrapper">
        <div class="col-xl-6 col-lg-5 d-none d-lg-block d-xl-block">
          <img class="avanteges-img" src="@/assets/img/2.png" alt="" />
        </div>
        <div class="col-xl-6 col-lg-7 col-md-12 pt-4">
          <h3>Les AVANTAGES de GAYSSOT Recouvrement</h3>

          <ul class="avanteges-items">
            <li class="avanteges-item">
              <div class="avanteges-icon"><img src="@/assets/img/avantages/1.svg" alt="icon" /></div>
              <div class="avanteges-content">
                <p>90% recouvré à l’amiable</p>
                <span
                  >90% des factures sont recouvrées à l’amiable tout en préservant la relation client;</span
                >
              </div>
            </li>
            <li class="avanteges-item">
              <div class="avanteges-icon"><img src="@/assets/img/avantages/2.svg" alt="icon" /></div>
              <div class="avanteges-content">
                <p>0 frais de dossier</p>
                <span>Nous appliquons un taux d’honoraire % uniquement sur les sommes encaissées;</span>
              </div>
            </li>
            <li class="avanteges-item">
              <div class="avanteges-icon"><img src="@/assets/img/avantages/10.svg" alt="icon" /></div>
              <div class="avanteges-content">
                <p>Un logiciel propriétaire</p>
                <span
                  >Propriétaire et éditeur de notre outil de recouvrement, notre savoir-faire métier allié à
                  notre compétence technologique permet d’agir avec flexibilité et rapidité afin de vous
                  proposer toujours plus d’innovation dans les méthodes de recouvrement.
                </span>
              </div>
            </li>
            <li class="avanteges-item">
              <div class="avanteges-icon"><img src="@/assets/img/avantages/11.svg" alt="icon" /></div>
              <div class="avanteges-content">
                <p>Une expertise juridique et judiciaire</p>
                <span
                  >Une équipe interne de juristes, médiateur professionnel et un réseau de partenaires
                  (avocats, huissiers, cabinets d’investigation).
                </span>
              </div>
            </li>
            <li id="load-more-btn">
              <button @click="loadMore" class="btn-yellow _block">Les autres avantages de Gayssot</button>
            </li>
          </ul>
        </div>
      </div>

      <!-- Load more block -->
      <div class="load-more-block">
        <div class="row flex-xxl-row flex-column">
          <div class="col-xl-6 col-lg-7 col-md-12">
            <ul>
              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/15.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <p>Des reportings et process sur mesure</p>
                  <span
                    >Nos ressources et moyens IT modulaires permettent une connexion simple et sur-mesure
                    entre notre ERP et les applicatifs métiers de nos clients afin d’assurer des gros volumes
                    de factures ( 1 300 000 factures traitées en un an)</span
                  >
                </div>
              </li>
              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/7.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <p>Une équipe dédiée</p>
                  <span>
                    Une équipe dédiée et connue par vos équipes interne, toujours joignable et à votre écoute.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div class="col-xl-6 col-lg-7 col-md-12">
            <ul>
              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/3.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <p>Un compte bancaire dédié</p>
                  <span
                    >Les sommes recouvrées sont automatiquement versées sur votre compte bancaire afin
                    d’optimiser votre DSO.
                  </span>
                </div>
              </li>
              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/8.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <p>Une entreprise Lyonnaise, une influence mondiale</p>
                  <span
                    >Gayssot, une entreprise Lyonnaise, dont tous les effectifs sont basés en France,
                    intervient également à l’international.
                  </span>
                </div>
              </li>
              <li>
                <a href="#" class="btn-purple _block">moins d'avantages de Gaisot</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    loadMore() {
      let loadMoreBtn = document.querySelector("#load-more-btn"),
        items = document.querySelector(".load-more-block"),
        img = document.querySelector(".avanteges-img"),
        wrapper = document.querySelector(".avanteges-wrapper");

      if (loadMoreBtn) {
        loadMoreBtn.onclick = (e) => {
          e.preventDefault();
          items.style.display = "block";
          img.style.height = "736px";
          wrapper.style.height = "736px";

          loadMoreBtn.style.display = "none";
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/mixin.scss";

h3 {
  font-size: 44px;
  font-weight: 600;

  @include phone {
    font-size: 35px;
  }
}

ul {
  padding-left: 0 !important;
}

.avanteges {
  margin-top: 150px;
  background: #eae6f4;
  padding-bottom: 60px;

  img {
    width: 100%;
    height: 833px;
    border-radius: 16px;
  }

  @include phone {
    margin-top: 0;
  }
}

.avanteges-wrapper {
  height: 833px;

  @include tablet-up {
    height: 100% !important;
  }
}

.avanteges-items {
  margin-top: 14px;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @include tablet-up {
    height: 100% !important;
  }
}

.avanteges-item {
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  gap: 24px;
  padding: 16px 24px 16px 24px;
  margin-bottom: 16px;

  p {
    margin-bottom: 4px;
    color: $black;
    font-size: 24px;
    font-weight: 600;
  }

  span {
    color: #282828;
    font-size: 16px;
    font-weight: 400;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 1.6px;
  }

  img {
    width: 60px;
    height: 60px;
  }

  .btn-yellow {
    display: block;
    text-align: center;
    margin-top: 10px;
  }

  &:hover {
    box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.25);
  }
}

.load-more-block {
  margin-top: 16px;
  display: none;
}

#load-more-btn {
  margin-top: 32px;
}
</style>
