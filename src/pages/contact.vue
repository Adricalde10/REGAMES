<template>
  <v-container>
    <v-card color="#1b2838" class="text-style">
      <v-row class="ma-0 pa-0">
        <!-- Columna izquierda -->
        <v-col cols="6">
          <v-img src="./REGAMES.png" width="98.7%"></v-img>
          <h1>RE:GAMES</h1>
          <br />
          <h2>HELP</h2>
          <p>
            Benvingut a la pàgina de RE:GAMES, el teu lloc de referència per a la nova actualitat del món dels videojocs.
            Aquí trobaràs notícies fresques, ressenyes detallades, i opinions dels últims títols que arriben al mercat.
            També oferim consells, guies i informació útil per a jugadors de tots els nivells. Uneix-te a la nostra comunitat
            per compartir la teva passió pels videojocs!
          </p>
          <br />
          <p>
            Si necesites buscar un joc ves a la pàgina del buscardor i en la part superior escriu el joc que desitges.
            Si prems el joc podràs veure la seva fitxa i tota la informació sobre el joc.
          </p>
          <br />
        </v-col>
        <!-- Columna derecha -->
        <v-col cols="6">
          <v-img src="./NSantorum3.png" width="100%"></v-img>
          <h1>{{ company }}</h1>
          <br />
          <div>
            <h2>ASK!</h2>
            <p>
              Per a qualsevol dubte o problema, si us plau, contacta'ns a través del correu electrònic que trobaràs a continuació.
            </p>
          </div>
          <br />
          <div class="d-flex pt-4">
            <v-icon color="#ff5c5c">mdi-phone</v-icon>
            <p class="icon-text">{{ tell }}</p>
          </div>
          <div class="d-flex pt-4">
            <v-icon color="#ff5c5c">mdi-map-marker</v-icon>
            <p class="icon-text">Sant Vicenç de Castellet c/Caseta Num:38</p>
          </div>
          <div class="d-flex pt-4">
            <v-icon color="#ff5c5c">mdi-email</v-icon>
            <p class="icon-text">ReGames@NeoSantorum.cat</p>
          </div>
          <div class="d-flex pt-4">
            <v-icon color="#ff5c5c">mdi-web</v-icon>
            <p class="icon-text">neosantorum.com</p>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // Define todas las variables reactivas dentro del setup
    const company = ref("Company NEO Santorum");
    const nom = ref("NeoSantorum");
    const tell = ref("+34 622 34 54 65");
    const contingut = ref("Lorem ipsum dolor sit amet. Nulla facilisi. Nullam nec rhoncus nunc. Nulla facilisi.");

    // Devuelve todas las variables para que estén disponibles en el template
    return { company, nom, tell, contingut };
  },
};
</script>

<style scoped>
/* Fondo y texto principal */
.text-style {
  color: #ff5c5c; /* Rojo brillante */
  padding: 20px;
  border-radius: 16px;
}

/* Fondo oscuro para el card */
.v-card {
  background-color: #1b2838 !important; /* Oscuro */
}

/* Estilo para el texto de las descripciones */
p {
  color: #ff5c5c !important; /* Rojo brillante */
}

/* Estilo para los encabezados */
h1,
h2 {
  color: #ff5c5c !important; /* Rojo brillante */
  font-weight: bold;
}

/* Estilo para los íconos */
.icon-text {
  color: #ff5c5c; /* Rojo brillante */
  margin-left: 10px;
  font-size: 16px;
}
</style>
