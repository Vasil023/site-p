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
    <section>
      <nosServices />
    </section>

    <section class="container">
      <NosExperts />
    </section>
  </div>
</template>

<script>
import nosServices from "@/components/HomePage/nos-services.vue";
import NosExperts from "@/components/shared/Nos-experts.vue";
export default {
  head: {
    title: "Nos services",
  },

  components: { nosServices, NosExperts },
};
</script>

<style lang="scss" scoped>
.first-screen {
  background: url("@/assets/img/cover/cover3.png");
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
</style>
