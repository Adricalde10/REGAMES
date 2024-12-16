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
    <body class="custom-background">

    <v-img src="https://www.pngall.com/wp-content/uploads/15/Black-Myth-Wukong-Logo-Chinese-Game-PNG.png" aspect-ratio="1.7" class="pb-4"></v-img>
    <v-col  cols="12" md="12" class="d-flex justify-center mb-2" id="si">
            <v-card class="mx-auto" elevation="5">
              <v-card-title class="font-weight-bold text-center"></v-card-title>
              <v-card-subtitle class="text-center">
               <img src="https://www.laverdad.es/loteriadenavidad/img/noticias/2016/11/582da674f417e__300x300.jpg" width="100%"></img>
               <p></p>
               <img src="https://www.laverdad.es/loteriadenavidad/img/noticias/2016/11/582da674f417e__300x300.jpg" width="100%"></img>
               <p></p>
               <img src="https://www.laverdad.es/loteriadenavidad/img/noticias/2016/11/582da674f417e__300x300.jpg" width="100%"></img>
               <p></p>
               <img src="https://www.laverdad.es/loteriadenavidad/img/noticias/2016/11/582da674f417e__300x300.jpg" width="100%"></img>
               <p></p>
               <img src="https://www.laverdad.es/loteriadenavidad/img/noticias/2016/11/582da674f417e__300x300.jpg" width="100%"></img>
              </v-card-subtitle>
            </v-card>
            <v-card class="mx-auto" max-width="70%" elevation="5">
              <v-card-title class="font-weight-bold text-center"></v-card-title>
              <v-card-subtitle class="text-center">
                <img src="https://cdn-3.expansion.mx/dims4/default/2370c90/2147483647/strip/true/crop/1152x646+0+0/resize/1800x1009!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fb0%2F93%2F8c5662344b318d7103524c3be2f6%2Fcaptura-de-pantalla-2024-09-02-a-las-9.12.38.png" width="100%"></img>
                <div class="valoracio">
                  <h2>Valoración:</h2>
                  <img src="./start5.png" width="200px" />
                </div>
                <h2>Genero:</h2>
                <p>Lucha contra</p>
                <h2>Plataformas:</h2>
                <p>PlayStation 5, PC, Xbox Series X y Serie S</p>
              </v-card-subtitle>
              
              <div class="Descripcion">
                <h1>Descripción</h1>
                <b>LA LEYENDA DEL REY MONO</b>
                <p>
  <!-- Mostrar todo el texto en pantallas grandes -->
  <span class="d-none d-md-flex align-center">
    <div>
      <p>
        Prepárate para llevar el combate al siguiente nivel en WUKONG: Ascension, la nueva evolución de los combates épicos inspirados en la leyenda del Rey Mono. Domina a Wukong en su máxima expresión, aprovechando sus habilidades únicas, transformaciones místicas y técnicas míticas. ¡Desata todo el poder del guerrero inmortal y destruye los cielos mientras enfrentas dioses, demonios y guerreros legendarios!      </p>
    </div>
    <div>
      <img src="https://m.media-amazon.com/images/I/81DzI4IsJ2L._AC_UF894,1000_QL80_.jpg" width="450px">
    </div>
  </span>

  <!-- Mostrar texto acortado en pantallas pequeñas -->
  <span class="d-block d-md-none">
    {{ showMore
      ? " Prepárate para llevar el combate al siguiente nivel en WUKONG: Ascension, la nueva evolución de los combates épicos inspirados en la leyenda del Rey Mono. Domina a Wukong en su máxima expresión, aprovechando sus habilidades únicas, transformaciones místicas y técnicas míticas. ¡Desata todo el poder del guerrero inmortal y destruye los cielos mientras enfrentas dioses, demonios y guerreros legendarios!"
      : "Prepárate para llevar el combate al siguiente nivel en WUKONG: Ascension, la nueva evolución de los combates épicos inspirados en la leyenda del Rey Mono...."
    }}
  </span>
</p>

<b>UN MUNDO DE MITOS Y PODER</b>
<p>
  <!-- Mostrar todo el texto en pantallas grandes -->
  <span class="d-none d-md-flex align-center flex-row-reverse">
    <div style="flex: 1; margin-left: 20px;">
      <p>
        Explora vastos paisajes inspirados en los cuentos de Viaje al Oeste, desde majestuosos templos celestiales hasta oscuros reinos infernales. Enfrenta desafíos colosales, resuelve enigmas ancestrales y derrota enemigos que pondrán a prueba tu astucia y fuerza. Cada victoria te llevará un paso más cerca de convertirte en una leyenda inmortal.      </p>
    </div>
    <div style="flex: 0.6;">
      <img src="https://i.blogs.es/c64337/esta-es-la-extension-del-mapa-de-black-myth-wukong-un-territorio-casi-tan-grande-como-el-de-sekiro/1200_800.jpeg" width="100%" />
    </div>
  </span>

  <!-- Mostrar texto e imagen en bloque para pantallas pequeñas -->
  <span class="d-block d-md-none">
    <img src="https://i.blogs.es/c64337/esta-es-la-extension-del-mapa-de-black-myth-wukong-un-territorio-casi-tan-grande-como-el-de-sekiro/1200_800.jpeg" width="100%" />
    <p>
      {{ showMore
        ? "Vive combates 3D con efectos visuales impresionantes, técnicas icónicas y ataques definitivos capaces de arrasar el campo de batalla. Cada pelea es un espectáculo visual y estratégico."
        : "Vive combates 3D con efectos visuales impresionantes y ataques definitivos..."
      }}
    </p>
  </span>
</p>
<b>CONVIÉRTETE EN UNA LEYENDA</b>
                <p>
  <!-- Mostrar todo el texto en pantallas grandes -->
  <span class="d-none d-md-flex align-center">
    <div>
      <p>
        Domina el arte del combate, descubre secretos ocultos y enfrenta a poderosos adversarios en una historia épica de redención, desafío y gloria. En WUKONG: Ascension, los cielos no son el límite... son solo el comienzo.      </p>
    </div>
    <div>
      <img src="https://ordenpixel.com/wp-content/uploads/2024/11/Black-Myth-Wukong-Portada.jpg" width="80%"/>
    </div>
  </span>

  <!-- Mostrar texto acortado en pantallas pequeñas -->
  <span class="d-block d-md-none">
    {{ showMore
      ? "Prepárate para llevar el combate al siguiente nivel en DRAGON BALL: Sparking! ZERO. Domina a un extenso elenco de personajes, cada uno con habilidades únicas, transformaciones asombrosas y técnicas icónicas. ¡Desata todo el poder de los guerreros más fuertes del universo DRAGON BALL!"
      : "Prepárate para llevar el combate al siguiente nivel en DRAGON BALL: Sparking! ZERO..."
    }}
  </span>
</p>



            <!-- Botón solo visible en pantallas pequeñas -->
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
        LA LEYENDA DEL REY MONO
      </v-card-title>
      <v-card-subtitle class="text-center">
        <img src="https://cdn-3.expansion.mx/dims4/default/2370c90/2147483647/strip/true/crop/1152x646+0+0/resize/1800x1009!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fb0%2F93%2F8c5662344b318d7103524c3be2f6%2Fcaptura-de-pantalla-2024-09-02-a-las-9.12.38.png" width="30%"  />
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
    </body>
</template>
<style>
h2{
  text-align:center;
  font-size: 250%;
}
.valoracio{
  display: flex;
  justify-content: center;
}
.Descripcion{
  text-align: start;
  margin-top: 10%;
}
#si{
    justify-content: center;
    display: flex;
}
.custom-background {
  background-image: url('fondo-2t4hWkUDb-transformed.png');
  background-position: center;
  background-size: cover;
  min-height: 100%;
} 
</style>