<script>
export default {
  data() {
    return {
      showMore: false, // Controla si se muestra el texto completo en pantallas pequeñas
    };
  },
};
</script>
<template>
    <v-img src="https://logos-world.net/wp-content/uploads/2023/09/Elden-Ring-Logo.png" aspect-ratio="1.7" class="pb-4"></v-img>
    <v-col cols="12" md="12" class="d-flex justify-center mb-2" id="si">
      <v-card class="mx-auto" elevation="5">
        <v-card-title class="font-weight-bold text-center"></v-card-title>
        <v-card-subtitle class="text-center">
          <!-- Imágenes repetidas -->
          <img
            v-for="(image, index) in 5"
            :key="index"
            src="https://www.laverdad.es/loteriadenavidad/img/noticias/2016/11/582da674f417e__300x300.jpg"
            width="100%"
          />
        </v-card-subtitle>
      </v-card>
  
      <v-card class="mx-auto" max-width="70%" elevation="5">
        <v-card-title class="font-weight-bold text-center"></v-card-title>
        <v-card-subtitle class="text-center">
          <img
            src="https://image.api.playstation.com/vulcan/img/rnd/202111/0506/hcFeWRVGHYK72uOw6Mn6f4Ms.jpg"
            width="100%"
          />
          <div class="valoracio">
            <h2>Valoración:</h2>
            <img src="./start5.png" width="200px" />
          </div>
          <h2>Género:</h2>
          <p>Rol</p>
          <h2>Plataformas:</h2>
          <p>PlayStation 4,PlayStation 5, PC, Xbox One ,Xbox Series X y Serie S</p>
        </v-card-subtitle>
  
        <div class="Descripcion">
          <h1>Descripción:</h1>
          <h1><b>La Orden Dorada está rota.</b></h1>
          <p>
            <span class="d-none d-md-flex align-center">
              <div>
                <p>
                    Recorre las Tierras Intermedias, un nuevo mundo de fantasía ideado por Hidetaka Miyazaki, creador de la exitosa serie de videojuegos DARK SOULS, y por George R. R. Martin, autor de Canción de hielo y fuego, la serie de fantasía superventas según The New York Times. 
                </p>
                <br>
                <p>Desvela los misterios del poder del Círculo de Elden. Enfréntate a criaturas temibles y conoce a adversarios con pasados tumultuosos y personajes con sus propias motivaciones para ayudarte a avanzar o complicarte las cosas. </p>
              </div>
                <video loop muted autoplay>
                  <source
                    src="https://static.bandainamcoent.eu/video/eldenring-kf-01-animated-new.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://static.bandainamcoent.eu/video/eldenring-kf-01-animated-new.mp4"
                    type="video/mp4"
                  />
                </video>
            </span>
  
            <span class="d-block d-md-none">
              {{ showMore
                ? "Prepárate para llevar el combate al siguiente nivel..."
                : "Prepárate para llevar el combate al siguiente nivel en DRAGON BALL: Sparking! ZERO..." }}
            </span>
          </p>
          <!--2 Texto-->
        <h1><b>Explora el mundo de las Tierras Intermedias</b></h1>
  <!-- Mostrar todo el texto en pantallas grandes -->
  <span class="d-none d-md-flex align-center flex-row-reverse">
    <div style="flex: 1; margin-left: 20px;">
      <p>
        ELDEN RING ofrece vastos parajes de fantasía y sombrías e intricadas mazmorras que están conectadas de forma fluida y sin interrupciones.      </p>
        <br>
        <p>Recorre este impresionante mundo a pie o a caballo, en solitario u online con otros jugadores. Sumérgete en las verdes llanuras, en los pantanos agobiantes, en las montañas tortuosas, en unos castillos que no auguran nada bueno y en otros parajes majestuosos. Todo ello, a una escala nunca antes vista en un juego de FromSoftware. </p>
    </div>
    <div style="flex: 0.5;" class="video1">
        <video loop muted autoplay class="video1">
                  <source
                    src="https://static.bandainamcoent.eu/video/eldenring-kf-02-animated-new.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://static.bandainamcoent.eu/video/eldenring-kf-02-animated-new.mp4"
                    type="video/mp4"
                  />
                </video>
    </div>
  </span>
  <h1><b>Un sistema de juego que definirá el género</b></h1>
          <p>
            <span class="d-none d-md-flex align-center">
              <div>
                <p>
                  Crea a tu propio personaje en este refinado juego de rol y acción de FromSoftware y define tu estilo de juego a partir del amplio abanico de armas, poderes mágicos y habilidades que encontrarás a lo largo y ancho del mundo.                </p>
                <br>
                <p>Ve de cabeza al combate, usa el sigilo para acabar con los enemigos uno a uno o pide ayuda a tus aliados. Tendrás muchas opciones a tu disposición, tanto a la hora de explorar como de saltar al combate. </p>
              </div>
                <video loop muted autoplay>
                  <source
                    src="https://static.bandainamcoent.eu/video/eldenring-kf-03-animated-new.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://static.bandainamcoent.eu/video/eldenring-kf-03-animated-new.mp4"
                    type="video/mp4"
                  />
                </video>
            </span>

  <!-- Mostrar texto e imagen en bloque para pantallas pequeñas -->
  <span class="d-block d-md-none">
    <video loop muted autoplay>
                  <source
                    src="https://static.bandainamcoent.eu/video/eldenring-kf-01-animated-new.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://static.bandainamcoent.eu/video/eldenring-kf-01-animated-new.mp4"
                    type="video/mp4"
                  />
                </video> <p>
      {{ showMore
        ? "Recorre las Tierras Intermedias, un nuevo mundo de fantasía ideado por Hidetaka Miyazaki, creador de la exitosa serie de videojuegos DARK SOULS, y por George R. R. Martin, autor de Canción de hielo y fuego, la serie de fantasía superventas según The New York Times."
        : "Recorre las Tierras Intermedias, un nuevo mundo de fantasía ideado por Hidetaka Miyazaki, creador de la exitosa serie de videojuegos DARK SOULS, y por ..."
      }}
    </p>
  </span>
</p>
          <!-- Botón para texto expandido -->
          <v-btn
            small
            text
            color="primary"
            class="d-block d-md-none"
            @click="showMore = !showMore"
          >
            {{ showMore ? "Mostrar menos" : "Mostrar más" }}
          </v-btn>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" md="12" class="d-flex justify-center mb-2">
    <v-card class="mx-auto" elevation="5">
      <!-- Detalles del juego -->
      <v-card-title class="font-weight-bold text-center">
        Elden Ring
      </v-card-title>
      <v-card-subtitle class="text-center">
        <img src="https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2024/6/4/g3nqorgwndom5g5po5nq/elden-ring-shadow-of-the-erdtree-ilustracion" width="30%"  />
      </v-card-subtitle>
      <!-- Botón de agregar a favoritos -->
      <v-card-actions>
        <v-btn 
          color="primary" 
          @click="agregarAFavoritos" 
          class="d-block mx-auto"
        >
          Agregar a Favoritos
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>

  </template>
<style>
h2 {
  text-align: center;
  font-size: 250%;
}
.valoracio {
  display: flex;
  justify-content: center;
}
.Descripcion {
  text-align: start;
  margin-top: 10%;
}
#si {
  justify-content: center;
  display: flex;
}
video {
  width: 50%;
  object-fit: cover;
}
.video1{
  width: 110%;
}
</style>
  