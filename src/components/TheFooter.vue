<template>
  <footer>
    <div class="footer-wrapper">
      <div class="container">
        <div class="row gap-sm-0 gap-5">
          <div class="col-xl-3 col-md-3">
            <div class="social-content">
              <h4>ABONNEZ-VOUS</h4>
              <ul>
                <li>
                  <a href="#">
                    <img src="@/assets/img/ulinkedin.svg" alt="linkedin" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="@/assets/img/instagram.svg" alt="instagram" />
                    <span> Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="@/assets/img/facebook.svg" alt="facebook" />
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-5 col-md-5">
            <div class="social-content">
              <h4>Gayssot Recouvrement</h4>
              <ul>
                <li>
                  <span>51 Ter Rue de Saint Cyr - 69009 LYON</span>
                </li>
                <li>
                  <!-- <span>04 78 02 97 70</span> -->
                  <a href="tel:04 78 02 97 70">+33 478 02 97 70</a>
                </li>
                <li>
                  <span>contact@gayssot-recouvrement.com </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-md-3">
            <div class="social-content">
              <h4>Des questions ?</h4>
              <ul>
                <li>
                  <router-link :to="{ name: 'NosTarifs' }">
                    <p>Prenons rdv pour échanger!</p>
                  </router-link>
                </li>
                <li>
                  <h4>Nous rejoindre ?</h4>
                </li>
                <li>
                  <router-link :to="{ name: 'Page7' }">
                    <p>On recrute!</p>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

footer {
  background: #7300ff;
  padding: 74px 0;

  h4 {
    color: $white;
  }

  ul {
    padding-left: 0 !important;
    li {
      margin-top: 24px;
    }
  }

  a {
    text-decoration: none;
  }

  img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }

  span {
    color: $white;
    font-size: rem(16);
    font-weight: 400;
  }

  p {
    color: #fbe94e;
    font-size: rem(16);
    font-weight: 500;
    line-height: 42px;
    letter-spacing: 1.4px;
    margin-bottom: 0;
  }
}

.social-content {
  a {
    color: white;
  }
}
</style>
