<template>
  <section class="wrapper-box">
    <div class="box">
      <p>Nos experts sont là pour vous aider</p>
      <span>Contactez-nous à l’aide de </span>
      <router-link :to="{ name: 'NosTarifs' }">
        <span class="link">notre formulaire de contact</span>
      </router-link>
      <span>ou en nous appelant au <a href="tel:04 78 02 97 70">04 78 02 97 70</a></span>
      <div class="d-flex gap-2 justify-content-center flex-wrap">
        <span>Vous pouvez aussi </span>
        <router-link class="btn-yellow" to="/">fixer un rendez-vous</router-link>
        <span>avec nos commerciaux </span>
      </div>
      <span>à l’heure qui vous convient</span>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
