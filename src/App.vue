<template>
  <div>
    <div>
      <NavBar />
    </div>
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import NavBar from "@/components/NavBar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: { NavBar, TheFooter },

  methods: {
    sendEmail() {
      emailjs.sendForm("service_tj0w17k", "template_snasdo4", this.$refs.form, "3GWjYFwkLF6J2iUTs").then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    },
  },
};
</script>
