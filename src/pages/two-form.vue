<template>
  <section class="page">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-md-10 col-lg-10 col-sm-12 offset-xl-2">
          <FormControl>
            <template #heading-small>
              <h5>Un conseiller vous contactera rapidement</h5>
            </template>

            <template #inputs>
              <v-select
                class="new-styles"
                :options="books"
                label="title"
                placeholder="Le montant total des créances (factures impayés)"
              >
                <template #open-indicator="{ attributes }">
                  <span v-bind="attributes"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 10L12 15L17 10H7Z" fill="black" />
                    </svg>
                  </span>
                </template>
              </v-select>
              <v-select
                class="new-styles"
                :options="books"
                label="title"
                placeholder="Le nombre des créances"
              >
                <template #open-indicator="{ attributes }">
                  <span v-bind="attributes"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 10L12 15L17 10H7Z" fill="black" />
                    </svg>
                  </span>
                </template>
              </v-select>
              <v-select
                class="new-styles"
                :options="books"
                label="title"
                placeholder="L’ancienneté des créances"
              >
                <template #open-indicator="{ attributes }">
                  <span v-bind="attributes"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 10L12 15L17 10H7Z" fill="black" />
                    </svg>
                  </span>
                </template>
              </v-select>

              <v-select
                class="new-styles"
                :options="books"
                label="title"
                placeholder="Géolocalisation des débiteurs"
              >
                <template #open-indicator="{ attributes }">
                  <span v-bind="attributes"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 10L12 15L17 10H7Z" fill="black" />
                    </svg>
                  </span>
                </template>
              </v-select>

              <v-select
                class="new-styles"
                :options="books"
                label="title"
                placeholder="Vos impayés concernent majoritairement"
              >
                <template #open-indicator="{ attributes }">
                  <span v-bind="attributes"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 10L12 15L17 10H7Z" fill="black" />
                    </svg>
                  </span>
                </template>
              </v-select>

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
                    <img src="@/assets/img/form-icon/email.svg" alt="" />
                  </div>
                  <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="E-mail" />
                </div>
              </div>

              <div class="row g-3">
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-text">
                      <img src="@/assets/img/form-icon/3.svg" alt="" />
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="autoSizingInputGroup"
                      placeholder="Téléphone"
                    />
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
                      placeholder="Code postale"
                    />
                  </div>
                </div>
              </div>

              <div class="mt-4">
                <button class="btn-yellow _block">Obtenir un devis</button>
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

  data() {
    return {
      books: [
        { title: "Old Man's War" },
        { title: "The Lock Artist" },
        { title: "HTML5" },
        { title: "Right Ho Jeeves" },
        { title: "The Code of the Wooster" },
        { title: "Thank You Jeeves" },
      ],
    };
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
</style>
