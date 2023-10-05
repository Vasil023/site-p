<template>
  <div class="swiper-reviews swiper-overflow-container">
    <div class="container">
      <div class="title">Avis de nos clients</div>

      <swiper
        :slidesPerView="'auto'"
        :spaceBetween="30"
        :freeMode="true"
        :navigation="true"
        :modules="modules"
        class="mySwiper swiper-propertis swiper-container"
      >
        <swiper-slide v-for="i in 9" :key="i">
          <div class="slide-top">
            <div>
              <p>L’Oréal Paris</p>
              <span>Wilmer Alexander Directeur financier</span>
            </div>
          </div>

          <div class="slide-title">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt, explicabo.
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode, Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-overflow-container {
  overflow-x: hidden;

  .container {
    overflow: visible;
    position: relative;
  }

  .swiper-container {
    overflow: visible;
  }
}

.swiper-reviews {
  background: #eae6f4;
  padding: 60px 0 0 0;
}
.swiper {
  width: 100%;
  height: 100%;
  padding: 60px 0px 100px 0px;
}

:deep(.swiper-button-next) {
  right: 613px !important;
  top: 430px;
  color: #13023e;

  &::after {
    font-size: 25px;
  }
}

:deep(.swiper-button-prev) {
  left: 625px !important;
  top: 430px;
  color: #13023e;

  &::after {
    font-size: 25px;
  }
}

.slide-reviews {
  background: #eae6f4;
  padding: 60px 0 0 0;
}

.title {
  // margin-bottom: 60px;
  font-size: 48px;
  font-weight: 700;
  line-height: 32px;
}

.swiper-overflow-container {
  overflow-x: hidden;
  .container {
    overflow: visible;
  }
  .swiper-container {
    overflow: visible;
  }
}

.swiper-slide {
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.25);
  padding: 12px 16px;
  max-width: 295px;
}

.slide-top {
  display: flex;
  gap: 10px;

  img {
    border-radius: 50%;
    width: 66px;
    height: 67px;
  }

  p {
    font-size: rem(20);
    font-weight: 500;
    margin-bottom: 0;
  }

  span {
    font-size: rem(14);
    font-weight: 400;
  }
}

.slide-title {
  margin-top: 8px;

  p {
    font-size: rem(16);
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 1.4px;
  }
}

.box-btn {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
}
</style>
