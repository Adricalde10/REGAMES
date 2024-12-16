<template>
  <v-app>
    <!-- Fondo personalizado -->
    <v-container class="custom-background" fluid>
      <!-- Barra de navegación superior -->
      <v-app-bar app dense color="#ff5c5c" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-text-field
          v-model="search"
          placeholder="Buscar..."
          flat
          dense
          solo-inverted
          color="white"
          @keyup.enter="searchRedirect"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-icon @click="goToLogin" style="cursor: pointer">mdi-account-circle</v-icon>
      </v-app-bar>

      <!-- Menú de navegación lateral -->
      <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
          <v-list-item-group>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              link
              :href="item.route"
              @click="drawer = false"
              class="d-flex align-center"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <!-- Contenido principal -->
      <v-main>
        <router-view />
      </v-main>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const search = ref('');
const router = useRouter();
const drawer = ref(false);

const searchRedirect = () => {
  // Redirige a la ruta del buscador, pasando el valor de búsqueda como un parámetro
  if (search.value.trim() !== '') {
    router.push({ path: '/Buscador', query: { search: search.value } });
  }
};

// Función para redirigir al login
const goToLogin = () => {
  router.push('/User'); // Cambia la ruta a la página de login
};

const items = [
  { title: 'Home', icon: 'mdi-home', route: '/' },
  { title: 'Search', icon: 'mdi-heart', route: '/Buscador' },
  { title: 'Login', icon: 'mdi-login', route: '/login' },
  { title: 'Register', icon: 'mdi-account-plus', route: '/register' },
  { title: 'User', icon: 'mdi-account', route: '/user' },
  { title: 'Contact', icon: 'mdi-chat', route: '/contact' },
];
</script>
