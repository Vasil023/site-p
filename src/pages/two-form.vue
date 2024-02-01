<template>
  <section class="page">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-md-10 col-lg-10 col-sm-12 offset-xl-2">
          <AppSnackbar :status="status" :statusShow="statusShow" />
          <form ref="form" @submit.prevent="sendEmail">
            <FormControl>
              <template #heading-small>
                <h5>Un conseiller vous contactera rapidement</h5>
              </template>

              <template #inputs>
                <v-select
                  class="new-styles"
                  :options="one"
                  label="title"
                  placeholder="Le montant total des créances (factures impayés)"
                  name="montant"
                  v-model="form.oneSelect"
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
                  :options="two"
                  label="title"
                  placeholder="Le nombre des créances"
                  name="nombre"
                  v-model="form.twoSelect"
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
                  :options="three"
                  label="title"
                  placeholder="L’ancienneté des créances"
                  v-model="form.threeSelect"
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
                  :options="geo"
                  label="title"
                  placeholder="Géolocalisation des débiteurs"
                  v-model="form.geoSelect"
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
                  :options="five"
                  label="title"
                  placeholder="Vos impayés concernent majoritairement"
                  v-model="form.fiveSelect"
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
                  :options="four"
                  label="title"
                  placeholder="L’ancienneté des créances"
                  v-model="form.fourSelect"
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
                      <input
                        type="text"
                        class="form-control"
                        id="autoSizingInputGroup"
                        placeholder="Nom*"
                        v-model="form.firstName"
                      />
                    </div>
                  </div>

                  <div class="col">
                    <div class="input-group">
                      <div class="input-group-text">
                        <img src="@/assets/img/form-icon/1.svg" alt="" />
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="autoSizingInputGroup"
                        placeholder="Prénom*"
                        v-model="form.lastName"
                      />
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="input-group">
                    <div class="input-group-text">
                      <img src="@/assets/img/form-icon/email.svg" alt="" />
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="autoSizingInputGroup"
                      placeholder="E-mail"
                      v-model="form.email"
                    />
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
                        v-model="form.phone"
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
                        v-model="form.code"
                      />
                    </div>
                  </div>
                </div>

                <div class="mt-4">
                  <button @click="sendEmail" class="btn-yellow _block">Obtenir un devis</button>
                </div>
              </template>
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from "@emailjs/browser";

import FormControl from "@/components/shared/form-control.vue";
import AppSnackbar from "@/components/shared/app-snackbar.vue";

export default {
  head: {
    title: "Audit",
  },

  components: { FormControl, AppSnackbar },

  data() {
    return {
      form: {
        oneSelect: "",
        twoSelect: "",
        threeSelect: "",
        fourSelect: "",
        fiveSelect: "",
        geoSelect: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        code: "",
      },

      status: "",
      statusShow: false,

      one: [
        { title: "100 – 2000 euros" },
        { title: "2000 – 5000 euros" },
        { title: "5000 – 15000 euros" },
        { title: "15000 – 30 000 euros" },
        { title: "30 000 – 50 000 euros" },
        { title: "50 000 – 100 000 euros" },
        { title: "100 000 – 200 000 euros" },
        { title: "200 000 - 500 000 euros" },
        { title: "500 000 - 1 000 000 euros" },
        { title: "1 000 000 euros +" },
      ],
      two: [
        { title: "1 à 4" },
        { title: "5 à 10" },
        { title: "11 à 30" },
        { title: "31 à 50" },
        { title: "50 à 100" },
        { title: "100 +" },
      ],
      three: [
        { title: "1 à 4" },
        { title: "5 à 10" },
        { title: "11 à 30" },
        { title: "50 à 100" },
        { title: "100 +" },
      ],
      four: [
        { title: "1 à 45 jours" },
        { title: "45 jours à 6 mois" },
        { title: "6 mois – 1 an" },
        { title: "plus que 1 an" },
      ],
      five: [
        { title: "Des particuliers" },
        { title: "Des professionnels" },
        { title: "Autant des particuliers que des professionnels" },
      ],
      geo: [{ title: "France" }, { title: "Europe" }, { title: "Monde Entier" }],
    };
  },

  methods: {
    async sendEmail() {
      // const isFormCorrect = await this.v$.$validate();

      emailjs.send("service_tj0w17k", "template_lozntqd", this.form, "3GWjYFwkLF6J2iUTs").then(
        () => {
          this.status = "Succses";
          this.statusShow = true;

          setTimeout(() => {
            (this.form.oneSelect = ""),
              (this.form.twoSelect = ""),
              (this.form.threeSelect = ""),
              (this.form.fourSelect = ""),
              (this.form.fiveSelect = ""),
              (this.form.geoSelect = ""),
              (this.form.lastName = ""),
              (this.form.firstName = ""),
              (this.form.email = ""),
              (this.form.phone = ""),
              (this.form.code = "");
          }, 1000);
        },
        () => {
          this.status = "Failed...";
          this.statusShow = true;
        }
      );
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
</style>
