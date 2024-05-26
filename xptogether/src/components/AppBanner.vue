<template>
  <div class="app-banner">
    <img :src="imageUrl" alt="Banner Image">
    <h2 class="banner-title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "AppBanner",
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>

.app-banner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh; /* Set the height of the banner */
  overflow: hidden; /* Ensure the image overflows outside the banner */
}

.banner-image {
  position: absolute;
  display: flex;
  justify-content: center;
  
  width: 100%;
  /* height: auto; */
  /* min-height: 100%; */
  /* min-width: 100%; */
  object-fit: cover; /* Maintain the aspect ratio and cover the banner */
}

.banner-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1; /* Ensure the title is above the image */
}
</style>

