<template>
  <div
    class="toast align-items-center"
    :class="{ show: statusShow }"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="d-flex">
      <div class="toast-body">{{ status }}</div>
      <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
    },

    statusShow: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  z-index: 100;
  top: 40px;
  left: 40%;
}
</style>
