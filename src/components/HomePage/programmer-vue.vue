<template>
  <section>
    <div class="programmer">
      <div class="container">
        <div class="_border">
          <div class="title">
            <strong>PROGRAMMER</strong> 15 min de rendez-vous <strong>EN LIGNE</strong> avec nous et obtenez
            les réponses à toutes vos questions
          </div>
          <a href="#" class="btn-yellow">Prendre un rendez-vous</a>
        </div>
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

.programmer {
  padding: 180px 0;

  @include phone {
    padding: 80px 0;
  }
}

._border {
  border-width: 5px;
  border-style: dashed;
  border-color: #3a0987;
  padding: 67px 35px 67px 35px;
  text-align: center;

  .btn-yellow {
    margin-top: 60px;
  }

  @include phone {
    padding: 47px 16px 47px 16px;

    .btn-yellow {
      margin-top: 30px;
    }
  }
}

.title {
  font-size: 36px;
  font-weight: 500;
  line-height: 60px;
}
</style>
