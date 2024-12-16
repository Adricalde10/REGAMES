<template>
  <v-container class="profile-container">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="profile-card" elevation="10">
          <!-- Avatar y datos del usuario -->
          <v-row class="user-info" align="center">
            <v-avatar size="64" class="user-avatar">
              <span class="user-initial">{{ usuarioActual.charAt(0).toUpperCase() }}</span>
            </v-avatar>
            <v-col>
              <div class="user-details">
                <p class="user-label">Nom d'usuari</p>
                <p class="user-name">{{ usuarioActual }}</p>
                <p class="user-label">Nom real</p>
                <p class="user-real-name">{{ nombreReal }}</p>
                <p class="user-label">Correu electrònic</p>
                <p class="user-email">{{ emailUsuario }}</p>
                <p class="user-label">Data de naixement</p>
                <p class="user-birthdate">{{ fechaNacimiento }}</p>
              </div>
            </v-col>
          </v-row>

          <!-- Juegos favoritos -->
          <v-carousel class="favorite-games-carousel" show-arrows-on-hover>
            <v-carousel-item
              v-for="(juego, index) in juegosFavoritos"
              :key="index"
              @click="irAJuego(juego.link)"
            >
              <div class="game-card">
                <img :src="juego.imagen" alt="Game cover" class="game-cover" />
                <p class="game-title">{{ juego.nombre }}</p>
                <p class="game-rating">Valoració: ⭐⭐⭐⭐⭐</p>
              </div>
            </v-carousel-item>
          </v-carousel>

          <!-- Botón para cerrar sesión -->
          <v-card-actions>
            <v-btn color="error" @click="cerrarSesion" class="logout-button">
              Tancar Sessió
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

// Variables reactivas
const usuarioActual = ref("");
const nombreReal = ref("");
const fechaNacimiento = ref("");
const emailUsuario = ref("");
const juegosFavoritos = ref([
  {
    nombre: "Dragon Ball: Sparking!",
    imagen: "https://blizzstoreperu.com/cdn/shop/files/dragon-ball-2880x1800-17419.png?v=1720407631",
    link: "/juego1", // Ruta para Dragon Ball
  },
  {
    nombre: "Elden Ring",
    imagen: "https://storage.googleapis.com/pod_public/1300/216712.jpg",
    link: "/juego2", // Ruta para Elden Ring
  },
]);

const router = useRouter();

// Cargar el usuario actual al montar el componente
onMounted(() => {
  const data = JSON.parse(localStorage.getItem("usuarioActual"));
  if (data) {
    usuarioActual.value = data.usuari;
    nombreReal.value = data.nombreReal;
    fechaNacimiento.value = data.fechaNacimiento;
    emailUsuario.value = data.correo;
  } else {
    // Redirigir al login si no hay datos de usuario
    router.push("/login");
  }
});

// Función para cerrar sesión
const cerrarSesion = () => {
  localStorage.removeItem("usuarioActual");
  router.push("/login");
};

// Función para redirigir a la página del juego
const irAJuego = (ruta) => {
  router.push(ruta);
};
</script>

<style scoped>
.profile-container {
  padding: 20px;
  background-color: #1b2838; /* Fondo oscuro */
  min-height: 100vh;
  color: #ffffff; /* Texto blanco */
}

.profile-card {
  padding: 20px;
  border-radius: 16px;
  background-color: #2c3e50; /* Fondo gris oscuro */
}

.user-info {
  text-align: center;
  margin-bottom: 20px;
}

.user-avatar {
  background-color: #1976d2; /* Azul */
  color: #ffffff; /* Blanco */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
}

.user-details {
  text-align: left;
  margin-left: 10px;
}

.user-label {
  margin: 0;
  font-size: 14px;
  color: #ff5c5c; /* Texto rojo */
}

.user-name,
.user-real-name,
.user-email,
.user-birthdate {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff; /* Blanco */
}

.favorite-games-carousel {
  margin-top: 20px;
}

.game-card {
  text-align: center;
  padding: 10px;
  cursor: pointer;
}

.game-card:hover {
  transform: scale(1.05);
  transition: transform 0.2s;
}

.game-cover {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.game-title {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff; /* Blanco */
}

.game-rating {
  margin: 0;
  font-size: 14px;
  color: #ff5c5c; /* Texto rojo */
}

.logout-button {
  margin-top: 20px;
  width: 100%;
  color: white;
}
</style>
