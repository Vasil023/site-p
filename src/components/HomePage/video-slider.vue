<template>
  <div class="swiper-reviews">
    <swiper
      :slidesPerView="'auto'"
      :spaceBetween="30"
      :freeMode="true"
      :centeredSlides="true"
      :navigation="true"
      :modules="modules"
      class="mySwiper1"
    >
      <swiper-slide>
        <div class="slide-top-video">
          <div>
            <img src="@/assets/img/video.png" alt="avatar" />
          </div>
          <div>
            <p>L’Oréal Paris</p>
            <span>Wilmer Alexander Directeur financier</span>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-top-video">
          <div>
            <img src="@/assets/img/video.png" alt="avatar" />
          </div>
          <div>
            <p>L’Oréal Paris</p>
            <span>Wilmer Alexander Directeur financier</span>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-top-video">
          <div>
            <img src="@/assets/img/video.png" alt="avatar" />
          </div>
          <div>
            <p>L’Oréal Paris</p>
            <span>Wilmer Alexander Directeur financier</span>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-top-video">
          <div>
            <img src="@/assets/img/video.png" alt="avatar" />
          </div>
          <div>
            <p>L’Oréal Paris</p>
            <span>Wilmer Alexander Directeur financier</span>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slide-top-video">
          <div>
            <img src="@/assets/img/video.png" alt="avatar" />
          </div>
          <div>
            <p>L’Oréal Paris</p>
            <span>Wilmer Alexander Directeur financier</span>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-top-video">
          <div>
            <img src="@/assets/img/video.png" alt="avatar" />
          </div>
          <div>
            <p>L’Oréal Paris</p>
            <span>Wilmer Alexander Directeur financier</span>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-top-video">
          <div>
            <img src="@/assets/img/video.png" alt="avatar" />
          </div>
          <div>
            <p>L’Oréal Paris</p>
            <span>Wilmer Alexander Directeur financier</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
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
.swiper-reviews {
  background: #eae6f4;
}
.swiper {
  padding: 100px 0;
}

:deep(.swiper-button-next) {
  right: 925px !important;
  top: 460px;
  color: #13023e;

  &::after {
    font-size: 25px;
  }
}

:deep(.swiper-button-prev) {
  left: 925px !important;
  top: 460px;
  color: #13023e;

  &::after {
    font-size: 25px;
  }
}

.slide-video {
  background: #eae6f4;
}

.swiper-slide {
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.25);
  padding: 12px 16px;
  max-width: 295px;
}

.slide-top-video {
  img {
    width: 263px;
    height: 203px;
    border-radius: 8px;
    margin-bottom: 13px;
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
</style>
