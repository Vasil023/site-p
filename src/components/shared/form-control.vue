<template>
  <form>
    <div class="form-top">
      <slot name="heading-bold" />
      <slot name="heading-small" />
      <slot name="subtitle" />
    </div>

    <div class="form-inputs">
      <slot name="inputs" />
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  // height: 500px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.17);
  padding: 32px;

  @include phone {
    padding: 12px;
  }
}

:deep(.form-top) {
  h4 {
    text-align: center;
    line-height: 48px;
    margin-bottom: 16px;
  }
}
</style>
