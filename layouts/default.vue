<template>
  <!-- @back="() => null" -->
  <div>
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Weathery"
    />
    <a-layout-content><nuxt class="content" /> </a-layout-content>

    <a-layout-footer>Weathery</a-layout-footer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped >
.content {
  height: calc(100vh - 69px);
}
</style>