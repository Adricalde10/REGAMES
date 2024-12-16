<template>
    <v-container>
        <v-card color="blue">
            <v-row class="ma-0 pa-0">
                <v-col cols="6">
                    <v-img src="./REGAMES.png" width="98.7%" ></v-img>
                    <h1>RE:GAMES</h1>
                    <br>
                    <h2>HELP</h2>
                    <p>
                    Benvingut a la pàgina de RE:GAMES, el teu lloc de referència per a la nova actualitat del món dels videojocs. 
                    Aquí trobaràs notícies fresques, ressenyes detallades, i opinions dels últims títols que arriben al mercat. 
                    També oferim consells, guies i informació útil per a jugadors de tots els nivells. Uneix-te a la nostra comunitat 
                    per compartir la teva passió pels videojocs!
                    </p>
                    <br>
                    <p>
                        Si necesites buscar un joc ves a la pagina del buscardor i en la part superior escriu el joc que desitges.
                        Si prems el joc podras veure la seva fitxa i tota la informació sobre el joc.
                    </p>
                    <br>
                </v-col>
                <v-col cols="6">
                    <v-img src="./NSantorum3.png" width="100%"></v-img>
                    <h1>Company NEO Santorum</h1>
                    <br>
                    <div>
                        <h2>ASK!</h2>
                        <p>
                        Per a qualsevol dubte o problema, si us plau, contacta'ns a través del correu electrònic que trobaràs a continuació.
                        </p>
                    
                    </div>
                    <br>
                    <div class="d-flex pt-4">
                        <v-icon>mdi-phone</v-icon>
                        <p>+34 622 34 54</p>
                    </div>
                    <div class="d-flex pt-4">
                        <v-icon>mdi-map-marker</v-icon>
                        <p>Sant Vicenç de Castellet c/Caseta Num:38 </p>
                    </div>
                    <div class="d-flex pt-4">
                        <v-icon>mdi-email</v-icon>
                        <p>ReGames@NeoSantorum.cat</p>
                    </div>
                    <div class="d-flex pt-4">
                        <v-icon>mdi-web</v-icon>
                        <p>neosantorum.com</p>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // Define todas las variables reactivas dentro del setup
    const company = ref('Company NEO Santorum');
    const nom = ref('NeoSantorum');
    const tell = ref('+34 622 34 54 65');
    const contingut = ref('Lorem ipsum dolor sit amet. Nulla facilisi. Nullam nec rhoncus nunc. Nulla facilisi.');

    // Devuelve todas las variables para que estén disponibles en el template
    return { company, nom, tell, contingut };
  },
};
</script>
