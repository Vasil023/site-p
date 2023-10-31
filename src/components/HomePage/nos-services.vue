<template>
  <!-- Nos services -->
  <section class="services">
    <div class="container">
      <h3>NOS SERVICES RECOUVREMENT</h3>

      <ul class="gap-5 flex-wrap col-xl-10 justify-content-center offset-xl-1 services-items">
        <li class="services-item">
          <router-link :to="{ name: 'Page21' }" class="services-item-link">
            <img src="@/assets/img/nos-services/1.svg" alt="icon" />
            <p>Pré-relance commerciale</p>
          </router-link>
        </li>
        <li class="services-item">
          <router-link :to="{ name: 'Page22' }" class="services-item-link">
            <img src="@/assets/img/nos-services/2.svg" alt="icon" />
            <p>Recouvrement amiable</p>
          </router-link>
        </li>
        <li class="services-item">
          <router-link :to="{ name: 'Page24' }" class="services-item-link">
            <img src="@/assets/img/nos-services/3.svg" alt="icon" />
            <p>Recouvrement judiciaire</p>
          </router-link>
        </li>
        <li class="services-item">
          <router-link :to="{ name: 'Page23' }" class="services-item-link">
            <img src="@/assets/img/nos-services/4.svg" alt="icon" />
            <p>Médiation</p>
          </router-link>
        </li>
        <li class="services-item">
          <router-link :to="{ name: 'Page25' }" class="services-item-link">
            <img src="@/assets/img/nos-services/5.svg" alt="icon" />
            <p>Gestion des défaillances</p>
          </router-link>
        </li>
        <li class="services-item">
          <router-link :to="{ name: 'Page26' }" class="services-item-link">
            <img src="@/assets/img/nos-services/6.svg" alt="icon" />
            <p>Audit et Conseils</p>
          </router-link>
        </li>
        <li class="services-item">
          <router-link :to="{ name: 'Page27' }" class="services-item-link">
            <img src="@/assets/img/nos-services/7.svg" alt="icon" />
            <p>Créances à l’international</p>
          </router-link>
        </li>
        <li class="services-item">
          <router-link :to="{ name: 'Page28' }" class="services-item-link">
            <img src="@/assets/img/nos-services/8.svg" alt="icon" />
            <p>Formation</p>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/mixin.scss";

ul {
  padding-left: 0 !important;
}
// Nos services
.services {
  background: $purple;
  padding: 84px 0 80px 0;

  h3 {
    color: $white;
    text-align: center;
  }
}

.services-items {
  list-style-type: none;
  display: flex;
  margin-top: 40px;
}

.services-item {
  background-color: $white;
  border-radius: 8px;
  padding: 24px;
  width: 210px;

  @include phone {
    width: 100%;
  }

  &:hover {
    // background-color: #309;
    box-shadow: 12px 20px 17px 0px rgba(0, 0, 0, 0.25);

    // img {
    //   filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(313deg)
    //     brightness(102%) contrast(104%);
    // }

    // p {
    //   color: $white;
    // }
  }
}

.services-item-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  p {
    text-align: center;
    color: $black;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px; /* 150% */
    letter-spacing: 1.6px;
    text-transform: uppercase;
    margin-top: 16px;
  }
}
</style>
