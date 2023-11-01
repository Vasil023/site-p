<template>
  <div class="form-top">
    <slot name="heading-bold" />
    <slot name="heading-small" />
    <slot name="subtitle" />
  </div>

  <div class="form-inputs">
    <slot name="inputs" />
  </div>
</template>

<script>
export default {};
</script>
