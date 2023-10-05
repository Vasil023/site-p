<template>
  <section class="recevez">
    <div class="container">
      <div class="recevez-top">
        <h2>Recevez un audit gratuit de votre poste clients</h2>
        <p>
          GAYSSOT est là pour vous accompagner dans la gestion de votre poste clients et vous propose un audit
          gratuit sans aucun engagement
        </p>
      </div>

      <div class="recevez-list">
        <div class="recevez-list-item">
          <img src="@/assets/img/recevez/1.svg" alt="icon" />
          <p>Diagnostic de vos processus</p>
        </div>
        <div class="recevez-list-item">
          <img src="@/assets/img/recevez/2.svg" alt="icon" />
          <p>Qualification de votre encours clients</p>
        </div>
        <div class="recevez-list-item">
          <img src="@/assets/img/recevez/3.svg" alt="icon" />
          <p>Recommandations et plan d'action</p>
        </div>
        <div class="recevez-list-item">
          <img src="@/assets/img/recevez/4.svg" alt="icon" />
          <p>Estimation des gains potentiels de trésorerie</p>
        </div>
      </div>
      <div class="recevez-btn">
        <a href="#" class="btn-yellow">Demander un devis</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/mixin.scss";
.recevez {
  padding: 80px 0;

  p {
    font-size: 32px;
    line-height: 44px;
  }

  &-top {
    text-align: center;

    h2 {
      width: 768px;
      margin: 0 auto;
      margin-bottom: 32px;
    }
  }

  @include phone {
    margin-top: 30px;
  }
}

.recevez-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 80px;

  &-item {
    text-align: center;
    max-width: 180px;

    p {
      font-size: 24px;
      font-weight: 700;
      line-height: 30px;
      margin-top: 16px;

      @include phone {
        font-size: 16px;
      }
    }

    @include phone {
      max-width: 100%;
    }
  }

  @include phone {
    margin-top: 0px;
    padding-top: 40px;
    justify-content: center;
  }
}

.recevez-list-item:not(:last-child) {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 75px;
    height: 60px;
    background: url(@/assets/img/recevez/arrow.svg);
    right: -140px;
    top: 20%;
  }

  @include tablet-larg {
    &::after {
      display: none;
    }
  }
}

.recevez-btn {
  text-align: center;
  margin-top: 112px;

  @include phone {
    margin-top: 50px;
  }
}
</style>
