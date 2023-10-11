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
              <div class="avanteges-icon"><img src="@/assets/img/avantages/3.svg" alt="icon" /></div>
              <div class="avanteges-content">
                <p>l’argent récupéré va directement survotre compte</p>
                <span
                  >Gayssot est une des rares agences de recouvrement à proposer ce service. Vous améliorez
                  immédiatement votre trésorerie.</span
                >
              </div>
            </li>
            <li class="avanteges-item">
              <div class="avanteges-icon"><img src="@/assets/img/avantages/4.svg" alt="icon" /></div>
              <div class="avanteges-content">
                <p>un conseiller ou une équipe dédiés</p>
                <span
                  >Chaque client de Gayssot a un conseiller ou une équipe dédiés. Facilement joignable par
                  téléphone, e-mail, ou sur RDV physique.</span
                >
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
        <div class="row flex-xxl-row flex-column-reverse">
          <div class="col-xl-6 col-lg-7 col-md-12">
            <ul>
              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/11.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <span
                    >Nos ressources et moyens IT modulaires permettent une connexion simple et sur-mesure
                    entre notre ERP et les applicatifs métiers de nos clients afin d’assurer des gros volumes
                    de factures ( 1 300 000 factures traitées en un an)</span
                  >
                </div>
              </li>
              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/12.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <span>
                    Notre équipe de juristes et de commissaires de justice vous accompagnent et vous
                    conseillent pendant toute la phase de recouvrement judiciaire grâce à leur expertise et à
                    notre réseau d’Huissiers et d’avocats sur toute la France.
                  </span>
                </div>
              </li>
              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/13.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <span
                    >Si le recouvrement est impossible ou infructueux, Gayssot délivre un certificat
                    d’irrécouvrabilité gratuitement, vous permettant ainsi de récupérer la TVA;</span
                  >
                </div>
              </li>
              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/14.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <span
                    >Notre Certification ISO 9001 V2015 vous garantit le plus haut niveau de la qualité ;
                  </span>
                </div>
              </li>
              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/15.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <span
                    >L’échange sécurisé de documents sur notre plateforme SaaS permet de conserver la
                    confidentialité des documents et protéger les données contre toute menace de piratage
                    informatique ;</span
                  >
                </div>
              </li>
              <li>
                <a href="#" class="btn-purple _block">moins d'avantages de Gaisot</a>
              </li>
            </ul>
          </div>

          <div class="col-xl-6 col-lg-7 col-md-12">
            <ul>
              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/5.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <span
                    >Notre logiciel de recouvrement permet de suivre en temps réel l’avancement de vos
                    dossiers et l’historique des actions menées ainsi que le montant des sommes encaissées
                  </span>
                </div>
              </li>
              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/6.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <span
                    >Des reporting réguliers et sur-mesure sont possibles en choisissant les KPI’s et la
                    fréquence souhaités.
                  </span>
                </div>
              </li>
              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/7.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <span
                    >Gayssot est une entreprise Lyonnaise dont tous les effectifs sont basés en France.</span
                  >
                </div>
              </li>
              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/8.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <span>Gayssot recouvrement couvre aussi bien la France que l’international ; </span>
                </div>
              </li>
              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/9.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <span
                    >Nous travaillons aussi bien avec des TPE que des grands groupes, pour des petites
                    créances ou pour celles de plusieurs millions d’euros ;
                  </span>
                </div>
              </li>
              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/10.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <span
                    >90% des factures sont recouvrées à l’amiable tout en préservant la relation client;</span
                  >
                </div>
              </li>
              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/11.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <span
                    >Nos ressources et moyens IT modulaires permettent une connexion simple et sur-mesure
                    entre notre ERP et les applicatifs métiers de nos clients afin d’assurer des gros volumes
                    de factures ( 1 300 000 factures traitées en un an)</span
                  >
                </div>
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
          img.style.height = "755px";
          wrapper.style.height = "755px";

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
    height: 857px;
    border-radius: 16px;
  }

  @include phone {
    margin-top: 0;
  }
}

.avanteges-wrapper {
  height: 857px;

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
