<template>
  <v-app class="custom-background">
    <v-container>
      <!-- Contenido -->
      <v-row dense class="mt-5">
        <v-col
          v-for="game in filteredGames"
          :key="game.id"
          cols="12"
          sm="6"
          md="4"
          class="d-flex justify-center mb-2"
        >
          <v-card class="mx-auto" max-width="344" elevation="5">
            <a :href="'juego' + game.id" target="_blank">
              <v-img :src="game.image" aspect-ratio="1.7" class="pb-4"></v-img>
            </a>
            <v-card-title class="font-weight-bold text-center">{{ game.title }}</v-card-title>
            <v-card-subtitle class="text-center">
              Valoración:
              <v-rating
                :value="game.rating"
                dense
                readonly
                background-color="amber lighten-5"
                color="amber darken-2"
              ></v-rating>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute(); // Usamos la ruta actual para acceder a los parámetros de la URL

// Estado para la búsqueda, inicializado con el valor del parámetro 'search' en la URL
const search = ref(route.query.search || '');

// Datos de los juegos
const games = [
  { id: 1, title: "Dragon Ball: Sparking Zero", rating: 5, image: "https://blizzstoreperu.com/cdn/shop/files/dragon-ball-2880x1800-17419.png?v=1720407631" },
  { id: 2, title: "Elden Ring", rating: 5, image: "https://storage.googleapis.com/pod_public/1300/216712.jpg" },
  { id: 3, title: "Black Myth Wukong", rating: 4, image: "https://i.3djuegos.com/juegos/17495/black_myth_wu_kong/fotos/ficha/black_myth_wu_kong-5858054.webp" },
  { id: 4, title: "Resident Evil 3", rating: 5, image: "https://assetsio.gnwcdn.com/re2.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" },
  { id: 5, title: "Silent Hill 2 Remake", rating: 4, image: "https://image.api.playstation.com/vulcan/ap/rnd/202210/2000/WJd8SY87zp3xUnCctOrulr5F.png" },
  { id: 6, title: "God of War Ragnarok", rating: 4, image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png" },
  { id: 7, title: "Minecraft", rating: 5, image: "https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png" },
  { id: 8, title: "Call of Duty Black Ops 6", rating: 5, image: "https://i.3djuegos.com/juegos/19728/call_of_duty_black_ops_6/fotos/ficha/call_of_duty_black_ops_6-5892217.jpg" },
  { id: 9, title: "Let's Go Pikachu", rating: 5, image: "https://cdkeyprices.com/images/games/5638885/pokemon-lets-go-pikachu-desktop-logo-all.jpg" },
  { id: 10, title: "EA Sport FC 25", rating: 5, image: "https://static0.thegamerimages.com/wordpress/wp-content/uploads/sharedimages/2024/07/ea-sports-fc-25-tag-page-cover-art.jpg" },
  { id: 11, title: "Resident Evil 2 Remake", rating: 5, image: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0204/uDFoGvnMTTCLVmTwjj0njGWC.png" },
  { id: 12, title: "Dragon Ball Kakarot", rating: 5, image: "https://image.api.playstation.com/vulcan/ap/rnd/202212/1616/ebKSYAneFeVLHD7SAWP1l5TE.png" },
  { id: 13, title: "Inazuma Eleven Victory Road", rating: 5, image: "https://media.vandal.net/m/53746/inazuma-eleven-great-road-of-heroes-202011271833864_1.jpg" },
  { id: 14, title: "Mario Kart", rating: 5, image: "https://m.media-amazon.com/images/I/71C9pOGlKtL.jpg" },
  { id: 15, title: "Grand Theft Auto V", rating: 5, image: "https://assetsio.gnwcdn.com/136491544353.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" },
  { id: 16, title: "Tekken 7", rating: 5, image: "https://image.api.playstation.com/vulcan/ap/rnd/202212/2009/04S9doVJzhHa0OE8o8wax88S.png" },
  { id: 17, title: "FIFA 22", rating: 5, image: "https://howlongtobeat.com/games/98260_FIFA_22.jpg" }
];

// Filtra los juegos basándote en el término de búsqueda
const filteredGames = computed(() => {
  return games.filter(game => 
    game.title.toLowerCase().includes(search.value.toLowerCase())
  );
});

// Reaccionar a cambios en los parámetros de la URL y actualizar la búsqueda
watch(() => route.query.search, (newSearch) => {
  search.value = newSearch || '';  // Actualiza el valor de búsqueda cuando el parámetro de URL cambie
});
</script>
<style>
.custom-background {
background-image: url('./fondo-2t4hWkUDb-transformed.png');}
</style>


