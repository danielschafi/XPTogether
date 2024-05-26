<template>
  <div>
    <BlogPost v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { ref } from 'vue';
import BlogPost from './BlogPost.vue';

export default {
  name: 'BlogList',
  components: {
    BlogPost
  },
  setup() {
    const posts = ref([
      { id: 1, title: 'First Post', content: 'This is the first post.' },
      { id: 2, title: 'Second Post', content: 'This is the second post.' }
    ]);

    return { posts };
  }
};
</script>

<style scoped>
/* BlogList styles here */
</style>
