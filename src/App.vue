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
import NavBar from "@/components/NavBar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: { NavBar, TheFooter },

  watch: {
    $route() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
