<template>
  <section class="recomendation">
    <div class="container">
      <div class="heading">GAYSSOT RECOUVREMENT a beaucoup d’expérience dans ces domaines :</div>

      <div class="row mt-5">
        <div class="col-xl-4 col-md-6 col-sm-6">
          <ul class="recomendation-items">
            <li class="recomendation-item">
              <img src="@/assets/img/recomendation/1.svg" alt="icon" />
              <span>Transport et logistique</span>
            </li>
            <li class="recomendation-item">
              <img src="@/assets/img/recomendation/2.svg" alt="icon" />
              <span>Bâtiment et Immobilier</span>
            </li>
            <li class="recomendation-item">
              <img src="@/assets/img/recomendation/3.svg" alt="icon" />
              <span>Santé</span>
            </li>
            <li class="recomendation-item">
              <img src="@/assets/img/recomendation/4.svg" alt="icon" />
              <span>Automobile</span>
            </li>
            <li class="recomendation-item">
              <img src="@/assets/img/recomendation/5.svg" alt="icon" />
              <span>Energie</span>
            </li>
            <li class="recomendation-item">
              <img src="@/assets/img/recomendation/6.svg" alt="icon" />
              <span>Banques et assurances</span>
            </li>
          </ul>
        </div>
        <div class="col-xl-5 d-none d-lg-none d-xl-block">
          <img src="@/assets/img/recomendation/cover.png" alt="" />
        </div>
        <div class="col-xl-3 col-md-6 col-sm-6">
          <ul class="recomendation-items">
            <li class="recomendation-item">
              <img src="@/assets/img/recomendation/7.svg" alt="icon" />
              <span>Organisations des évènements</span>
            </li>
            <li class="recomendation-item">
              <img src="@/assets/img/recomendation/8.svg" alt="icon" />
              <span>Production</span>
            </li>
            <li class="recomendation-item">
              <img src="@/assets/img/recomendation/9.svg" alt="icon" />
              <span>Sociétés de prestation de services</span>
            </li>
            <li class="recomendation-item">
              <img src="@/assets/img/recomendation/10.svg" alt="icon" />
              <span>Restauration</span>
            </li>
            <li class="recomendation-item">
              <img src="@/assets/img/recomendation/11.svg" alt="icon" />
              <span>Nettoyage industriel</span>
            </li>
            <li class="recomendation-item">
              <img src="@/assets/img/recomendation/12.svg" alt="icon" />
              <span>Et beaucoup d’autres</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/mixin.scss";

.heading {
  width: 995px;
  font-size: 40px;
  margin: 0 auto;

  @include tablet-up {
    width: 100%;
    font-size: 30px;
  }
}
.recomendation {
  background: #eae6f4;
  padding: 57px 0;
}

.recomendation-items {
  display: flex;
  flex-direction: column;
  gap: 45px;
}

.recomendation-item {
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 255px;

  img {
    width: 44px;
    height: 44px;
    margin-right: 12px;
  }

  span {
    font-size: 22px;
    font-weight: 500;
  }
}
</style>
