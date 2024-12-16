<template>
  <v-app>
    <!-- Fondo personalizado -->
    <v-container class="custom-background" fluid>

      <!-- Contenido principal -->
      <v-main>
        <v-container fluid>
          <v-row>
            <!-- Barra lateral izquierda -->
            <v-col cols="3" class="pa-2">
              <v-list>
                <v-list-item v-for="(item, index) in sidebarItems" :key="index">
                  <v-card outlined>
                    <v-img :src="item.image" height="100%"></v-img>
                    <v-card-subtitle class="text-center">{{ item.title }}</v-card-subtitle>
                    <img src="./start5.png" width="100%" />
                  </v-card>
                </v-list-item>
              </v-list>
            </v-col>

            <!-- Noticias destacadas -->
            <v-col cols="6" class="pa-2">
              <v-row>
                <v-col cols="12" class="mb-4">
                  <v-card color="blue-grey darken-2" class="pa-4" outlined>
                    <v-card-title class="white--text">
                      Noticias Destacadas
                    </v-card-title>
                    <v-card-text class="white--text">
                      El tráiler de GTA 6 ya ha superado los 200 millones de reproducciones en el canal de Youtube de Rockstar.
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" class="mb-4">
                  <v-card outlined>
                    <v-img
                      src="https://blizzstoreperu.com/cdn/shop/files/dragon-ball-2880x1800-17419.png?v=1720407631"
                      height="150%"
                    ></v-img>
                    <v-card-subtitle class="pa-2">
                      Requisitos mínimos y recomendados Dragon Ball Sparking! ZERO
                    </v-card-subtitle>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card outlined>
                    <v-img
                      src="https://media.vandal.net/m/53746/inazuma-eleven-great-road-of-heroes-202011271833864_1.jpg"
                      height="100%"
                    ></v-img>
                    <v-card-text class="pa-2">
                      Inazuma Eleven: Victory Road confirma que finalmente no
                      llegará en 2024 y retrasa a junio de 2025.
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card outlined>
                    <v-img
                      src="https://assetsio.gnwcdn.com/re2.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
                      height="100%"
                    ></v-img>
                    <v-card-text class="pa-2">
                      Resident Evil 3 rescatando su jugo original 25 años después.
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>

            <!-- Barra lateral derecha -->
            <v-col cols="3" class="pa-2">
              <v-list>
                <v-list-item>
                  <v-card outlined>
                    <v-img
                      src="https://www.laverdad.es/loteriadenavidad/img/noticias/2016/11/582da674f417e__300x300.jpg"
                      height="150%"
                    ></v-img>
                  </v-card>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref, provide } from 'vue';

const search = ref('');
provide('search', search);

const drawer = ref(false);
const items = [
  { title: 'Home', icon: 'mdi-home', route: '/' },
  { title: 'Columnes', icon: 'mdi-pillar', route: '/columnes' },
  { title: 'Fitxa', icon: 'mdi-file-document', route: '/fitxa' },
  { title: 'Login', icon: 'mdi-login', route: '/login' },
  { title: 'Register', icon: 'mdi-account-plus', route: '/register' },
  { title: 'User', icon: 'mdi-account', route: '/user' },
  { title: 'Contact', icon: 'mdi-chat', route: '/contact' },
];

const sidebarItems = [
  { image: 'https://storage.googleapis.com/pod_public/1300/216712.jpg', title: 'Elden Ring', rating: 5 },
  { image: 'https://assetsio.gnwcdn.com/re2.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp', title: 'Resident Evil 3', rating: 4 },
  { image: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png', title: 'God of War', rating: 5 },
  { image: 'https://cdkeyprices.com/images/games/5638885/pokemon-lets-go-pikachu-desktop-logo-all.jpg', title: "Let's Go Pikachu", rating: 5 },
  { image: 'https://assetsio.gnwcdn.com/136491544353.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp', title: 'Grand theft Auto V', rating: 4 },
  { image: 'https://static0.thegamerimages.com/wordpress/wp-content/uploads/sharedimages/2024/07/ea-sports-fc-25-tag-page-cover-art.jpg', title: 'EA Sport FC 25', rating: 5 },
];
</script>

<style scoped>
/* Fondo personalizado */
.custom-background {
  background-image: url('fondo-2t4hWkUDb-transformed.png');
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}
</style>
