<template>
  <section class="wrapper-box">
    <div class="container">
      <div class="box">
        <p>Candidature spontanée</p>
        <span
          >Trouvez votre futur emploi au sein d'une entreprise possédant<strong>
            un environnement «start up»</strong
          >
          où l’évolution interne est privilégiée.</span
        >

        <div>
          <a href="#" class="btn-yellow"> Je postule</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
:deep(.btn-yrllow) {
  width: 468px !important;

  @include phone {
    width: 100% !important;
  }
}

.wrapper-box {
  margin-top: 88px;
}
.box {
  // margin: 48px auto;
  border: 5px dashed $purple;
  border-radius: 8px;
  text-align: center;
  padding: 32px 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @include tablet-up {
    padding: 24px;
  }

  p {
    font-size: 40px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 1.4px;
  }

  span {
    display: block;
    font-size: 24px;
    font-weight: 400;
    line-height: 48px;

    a {
      color: $purple;
      font-weight: 600 !important;
      text-decoration-color: $yellow;
      text-underline-offset: 8px;
    }
  }

  @include phone {
    padding: 16px;
  }
}

.link {
  color: $purple;
  text-decoration-line: underline;
  // text-transform: lowercase;
  font-weight: 600 !important;
}
</style>
