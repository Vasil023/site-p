<template>
  <div>
    <nav class="navbar navbar-expand-xxl bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="@/assets/img/logo.png" alt="" />
        </a>
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
            <li class="nav-item">
              <router-link class="nav-link" to="/">Gayssot </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/questions">Nos services</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/nos-tarifs">Nos Tarifs</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/form">RSE </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/page-1">Actualités </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/page-2">FAQ </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/page-2-1">Offres d’emploi </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/page-2-2">Espace client </router-link>
            </li>
          </ul>
          <form class="d-flex gap-3" role="search">
            <a href="#" class="btn-purple">Payer en ligne</a>
            <a href="#" class="btn-yellow">Devis gratuit</a>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
nav {
  background: #eae6f4;
}

.navbar {
  padding: 23px 0;
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
  width: 668px !important;
  overflow: hidden !important;
}

.nav-link {
  padding-right: 0 !important;
  color: $black !important;
  font-weight: 500 !important;
  font-size: 12px !important;
  line-height: 16.002px !important; /* 114.3% */
  letter-spacing: 1.4px !important;
}
</style>
