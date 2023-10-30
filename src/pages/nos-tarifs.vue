<template>
  <section class="page">
    <div class="container">
      <div class="row flex-column-reverse flex-lg-row">
        <div class="col-xl-6 col-md-12 col-lg-6 mt-4 mt-lg-0 nos-tarif-content">
          <h3>Des solutions <span>GAYSSOT</span> qui s’adaptent à vos besoins</h3>
          <p>
            Vous souhaitez échanger avec l’un de nos conseillers sur vos problématiques, obtenir des conseils
            personnalisés pour enfin obtenir au plus bref délai le règlement de vos impayées ?
          </p>
          <p>
            Vous pensez à faire appel à un Credit Manager externalisé pour la gestion de votre poste clients ?
          </p>
          <ul>
            <li>
              <div class="li-i"><p>Faites-vous payer rapidement</p></div>
              <p>et augmentez la trésorerie de votre entreprise</p>
            </li>
            <li>
              <div class="li-i"><p>Réduisez le DSO</p></div>
              <p>et optimisez le BFR</p>
            </li>
            <li>
              <div class="li-i">
                <p>
                  en recourant à un Credit Manager externalisé (de GAYSSOT) pour la gestion de votre poste
                  clients
                </p>
              </div>
              <p>et planifiez l’avenir avec sérénité</p>
            </li>
            <li>
              <div class="li-i"><p>Gagnez du temps pour votre activité principale</p></div>
              <p>
                en recourant à un Credit Manager externalisé (de GAYSSOT) pour la gestion de votre poste
                clients
              </p>
            </li>
          </ul>
          <h4>Vos avantages client avec <span>GAYSSOT:</span></h4>
          <ul class="list">
            <li>Partenaire unique et interlocuteur dédié à votre entreprise;</li>
            <li>Nous intervenons auprès des débiteurs de tous pays;</li>
            <li>Honoraire basé sur le mérite (honoraires uniquement sur encaissements);</li>
            <li>Aucune ouverture de frais de dossier.</li>
          </ul>
          <button @click="loadMore" id="load-more-btn" class="btn-purple _block">
            Voir plus d’avantages de GAYSSOT
          </button>

          <!-- Load more -->
          <div class="load-more__block">
            <h5>Les AVANTAGES de <span>GAYSSOT Recouvrement</span></h5>
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

              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/7.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <p>Une équipe dédiée</p>
                  <span
                    >Une équipe dédiée et connue par vos équipes interne, toujours joignable et à votre
                    écoute.
                  </span>
                </div>
              </li>

              <li class="avanteges-item">
                <div class="avanteges-icon"><img src="@/assets/img/avantages/15.svg" alt="icon" /></div>
                <div class="avanteges-content">
                  <p>Des reportings et process sur mesure</p>
                  <span
                    >Nous sommes fortement attachés à la performance et à la qualité du recouvrement sur les
                    périmètres qui nous sont confiés en améliorant au quotidien nos process. Nous répondons
                    aux besoins immédiats de reporting avec l’accès aux tableaux de bord mis à jour en temps
                    réel.
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
                <button class="btn-purple _block">moins d'avantages de Gaisot</button>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-xl-5 col-md-12 col-lg-5 offset-xl-1 bg">
          <FormControl>
            <template #heading-bold>
              <h4>Vous souhaitez en savoir plus sur nos tarifs et notre accompagnement?</h4>
            </template>
            <template #subtitle>
              <p>
                Un conseiller vous rappellera au plus vite pour comprendre vos besoins et répondre à toutes
                vos questions.
              </p>
            </template>
            <template #inputs>
              <div class="row g-3">
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-text">
                      <img src="@/assets/img/form-icon/1.svg" alt="" />
                    </div>
                    <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Nom*" />
                  </div>
                </div>

                <div class="col">
                  <div class="input-group">
                    <div class="input-group-text">
                      <img src="@/assets/img/form-icon/1.svg" alt="" />
                    </div>
                    <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Prénom*" />
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="input-group">
                  <div class="input-group-text">
                    <img src="@/assets/img/form-icon/2.svg" alt="" />
                  </div>
                  <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Société*" />
                </div>
              </div>

              <div class="row g-3">
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-text">
                      <img src="@/assets/img/form-icon/email.svg" alt="" />
                    </div>
                    <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="E-mail*" />
                  </div>
                </div>

                <div class="col">
                  <div class="input-group">
                    <div class="input-group-text">
                      <img src="@/assets/img/form-icon/3.svg" alt="" />
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="autoSizingInputGroup"
                      placeholder="Téléphone*"
                    />
                  </div>
                </div>
              </div>

              <div class="row g-3">
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-text">
                      <img src="@/assets/img/form-icon/4.svg" alt="" />
                    </div>
                    <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Ville*" />
                  </div>
                </div>

                <div class="col">
                  <div class="input-group">
                    <div class="input-group-text">
                      <img src="@/assets/img/form-icon/5.svg" alt="" />
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="autoSizingInputGroup"
                      placeholder="Code postale*"
                    />
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="7"
                  placeholder="Description de la société et de vos besoins au niveau
du recouvrement."
                ></textarea>
              </div>

              <div class="mt-4">
                <button class="btn-yellow _block">découvrir nos offres</button>
              </div>
            </template>
          </FormControl>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FormControl from "@/components/shared/form-control.vue";

export default {
  components: { FormControl },

  methods: {
    loadMore() {
      let loadMoreBtn = document.querySelector("#load-more-btn"),
        items = document.querySelector(".load-more__block");

      console.log("click", loadMoreBtn);

      loadMoreBtn.onclick = (e) => {
        e.preventDefault();
        items.style.display = "block";
        loadMoreBtn.style.display = "none";
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  &::after {
    content: "";
    width: 40%;
    background: url("@/assets/img/puter.png");
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;

    @include phone {
      display: none;
    }
  }
}

ul {
  padding-left: 0;
  margin-top: 16px;
  margin-bottom: 24px;

  li {
    margin-top: 16px;
  }
}

.nos-tarif-content > h3,
.nos-tarif-content > h4,
.nos-tarif-content > h5 {
  color: $purple;
}

span {
  color: $yellow;
}

.load-more__block {
  margin-top: 27px;
  display: none;
}

.avanteges-item {
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  gap: 24px;
  padding: 16px 24px 16px 24px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(180, 180, 180, 0.5);

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

  // &:hover {
  //   box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.25);
  // }
}
</style>
