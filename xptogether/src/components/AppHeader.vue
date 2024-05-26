<template>
  <header>
    <AppBanner  :imageUrl="imageUrl" :title="title"/>
    <AppNav/>
  </header>
</template>


<script>
import AppNav from './AppNav.vue';
import AppBanner from './AppBanner.vue';

export default {
  name: 'AppHeader',
  data(){
    return {
      title: "XPTogether",
      imageUrl: require("@/assets/images/banner_ultrawide.jpg")
    }
  },
  components:{
    AppNav,
    AppBanner
  }
};
</script>


<style scoped>
header {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
