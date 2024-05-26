<template>
  <div>
    <b-row>
      <b-col
        v-for="experience in experiences"
        :key="experience.id"
        cols="12" md="4"
      >
        <b-card
          :title="experience.title"
          :img-src="experience.image"
          img-alt="experience.title"
          img-top
        >
          <p class="card-text">{{ experience.description }}</p>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { supabase } from '@/supabase' // Adjust the path if necessary

export default {
  name: 'AppContent',
  data() {
    return {
      experiences: []
    };
  },
  async mounted() {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')

    if (error) {
      console.error('Error fetching data:', error)
    } else {
      this.experiences = data
    }
  }
}
</script>

<style>
.card-text {
  margin-bottom: 1rem;
}
</style>




<style scoped>
.content{
  
  background-color: blueviolet
}
</style>

<!-- 

[{
          imgSrc: 'https://via.placeholder.com/800x400',
          title: 'Outdoor Boulder',
          description: 'Tripp zum Magic Woods gleich hinter Chur, jeder ist willkommen. ',
          buttonLink: '#'
      },{
          imgSrc: 'https://via.placeholder.com/800x400',
          title: 'Dungeons and Dragons one shot',
          description: 'One shot adventure für 5 personen, Charakter stufe 5 bitte mitbringen ',
          buttonLink: '#'
      },
      {
          imgSrc: 'https://via.placeholder.com/800x400',
          title: 'Grillabend und Bier',
          description: 'Steht im titel :D Für getränke ist gesorgt, bringt gute laune mit.',
          buttonLink: '#'
      },
      {
          imgSrc: 'https://via.placeholder.com/800x400',
          title: 'Grillabend und Bier',
          description: 'Steht im titel :D Für getränke ist gesorgt, bringt gute laune mit.',
          buttonLink: '#'
      },
      {
          imgSrc: 'https://via.placeholder.com/800x400',
          title: 'Grillabend und Bier',
          description: 'Steht im titel :D Für getränke ist gesorgt, bringt gute laune mit.',
          buttonLink: '#'
      },
      {
          imgSrc: 'https://via.placeholder.com/800x400',
          title: 'Grillabend und Bier',
          description: 'Steht im titel :D Für getränke ist gesorgt, bringt gute laune mit.',
          buttonLink: '#'
      }
      ] -->