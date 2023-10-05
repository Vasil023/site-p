<template>
  <section class="social-media-wrapper">
    <div class="container">
      <div class="social-content">
        <h2>ABONNEZ-VOUS</h2>
        <ul>
          <li>
            <a href="#">
              <img src="@/assets/img/social-icon/ulinkedin.svg" alt="linkedin" />
              <span>sur LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/img/social-icon/instagram.svg" alt="instagram" />
              <span>sur Instagram</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/img/social-icon/facebook.svg" alt="facebook" />
              <span>sur Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="back"></div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/mixin.scss";

.social-media-wrapper {
  background-image: url("@/assets/img/social-baner.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 480px;
  padding: 67px 120px;
  text-align: center;
  position: relative;

  @include phone {
    height: 100%;
    padding: 30px 0;
  }

  h2 {
    color: $white;
  }

  ul {
    padding-left: 0 !important;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 71px;

    @include phone {
      gap: 32px;
    }

    li {
      a {
        text-decoration: none;
        text-align: center;

        img {
          width: 110px;
          height: 110px;

          @include phone {
            width: 75px;
            height: 75px;
          }
        }
      }

      span {
        font-size: rem(40);
        font-weight: 500;
        line-height: 32px;
        color: $white;
        display: block;
        margin-top: 16px;

        @include phone {
          font-size: rem(30);
        }
      }
    }
  }
}

.social-content {
  z-index: 5;
  position: relative;
}

.back {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(19, 2, 62, 0.59);
  // opacity: 0.7;
  z-index: 1;
}
</style>
