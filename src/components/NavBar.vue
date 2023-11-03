<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/img/logo.png" alt="" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gayssot
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link :to="{ name: 'Page1' }" class="dropdown-item">À propos de nous</router-link>
                </li>
                <li><router-link :to="{ name: 'Page4' }" class="dropdown-item">RSE</router-link></li>
                <!-- <li><a class="dropdown-item" href="#">Conseils & Info</a></li> -->
                <li>
                  <router-link :to="{ name: 'Page7' }" class="dropdown-item">Offres d’emploi</router-link>
                </li>
              </ul>
            </li>

            <!-- <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Page2' }">Nos services</router-link>
            </li> -->
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" :to="{ name: 'Page2' }" role="button">
                Nos services
              </router-link>
              <ul class="dropdown-menu">
                <li>
                  <router-link :to="{ name: 'Page21' }" class="dropdown-item"
                    >Pré-relance commerciale</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'Page22' }" class="dropdown-item"
                    >Recouvrement amiable</router-link
                  >
                </li>

                <li>
                  <router-link :to="{ name: 'Page24' }" class="dropdown-item">Médiation</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Page23' }" class="dropdown-item"
                    >Recouvrement judiciaire</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'Page25' }" class="dropdown-item"
                    >Gestion des défaillances</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'Page26' }" class="dropdown-item">Audit & Conseils</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Page27' }" class="dropdown-item"
                    >Créances à l'international</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'Page28' }" class="dropdown-item">Formation</router-link>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/nos-tarifs">Nos Tarifs</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'faq' }">FAQ </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/page-2-2">Espace client </router-link>
            </li>
          </ul>
          <div class="d-flex gap-3" role="search">
            <a href="#" class="btn-purple">Payer en ligne</a>
            <router-link :to="{ name: 'TwoForm' }" class="btn-yellow">Devis gratuit</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      const menu = document.querySelector(".collapse");

      menu.classList.remove("show");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
nav {
  background: #eae6f4;
}

.navbar {
  // padding: 23px 0;
  background: #eae6f4 !important;
  border-bottom: 2px solid rgba(255, 255, 255, 0.55);
}

.navbar-brand {
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    height: 100%;
    background: $black;
    right: -10px;
    top: 0;
  }
}

.navbar-nav {
  margin-left: 20px !important;
  // width: 668px !important;
  // overflow: hidden !important;
}

.nav-link {
  padding-right: 0 !important;
  color: $black !important;
  font-weight: 500 !important;
  font-size: 12px !important;
  line-height: 16.002px !important; /* 114.3% */
  letter-spacing: 1.4px !important;
}

.dropdown-menu {
  background: #eae6f4 !important;
  border: none !important;
}

.dropdown-item {
  color: #4a4a4a !important;
  font-size: 16px !important;
  font-style: normal !important;
  font-weight: 400 !important;
}

.dropdown-toggle::after {
  display: none;
}

.dropdown:hover .dropdown-menu {
  display: block !important;
  margin-top: 0 !important; /* remove the gap so it doesn't close */
}
</style>
