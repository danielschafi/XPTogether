<template>
  <div id="app">
    <AppHeader />
    <AppContent />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppContent
  }
};
</script>

<style>
  body {
    width: 100%;
    margin: 0;
    padding: 0; 
  }

  .AppContent {
      width: 70vw;
  }

</style>
