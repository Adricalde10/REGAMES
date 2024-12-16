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
    <v-img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dibwci4-2b47e444-46c6-4f6e-aada-448e6ee87846.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGlid2NpNC0yYjQ3ZTQ0NC00NmM2LTRmNmUtYWFkYS00NDhlNmVlODc4NDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Bl0KkrycJbIk7bxI8LWq12JCUVZlUlVPcw6h_fpcvIk" aspect-ratio="1.7" class="pb-4"></v-img>
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
                <img src="https://www.irrompibles.net/irrwp/wp-content/uploads/2024/10/sparking_zero-1.jpg" width="100%"></img>
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
                <b>DESTROZA EL CIELO</b>
                <p>
  <!-- Mostrar todo el texto en pantallas grandes -->
  <span class="d-none d-md-flex align-center">
    <div>
      <p>
        Prepárate para llevar el combate al siguiente nivel en *DRAGON BALL: Sparking! ZERO*, la nueva evolución de la legendaria serie Budokai Tenkaichi. Domina a un extenso elenco de personajes, cada uno con habilidades únicas, transformaciones asombrosas y técnicas icónicas. ¡Desata todo el poder de los guerreros más fuertes del universo DRAGON BALL y destruye todos los límites!
      </p>
    </div>
    <div>
      <img src="https://i.shgcdn.com/69ed5ba1-0c54-42fa-afb8-56174d7adef5/-/format/auto/-/preview/3000x3000/-/quality/lighter/" width="80%"/>
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

<b>ESPECTACULARES COMBATES 3D</b>
<p>
  <!-- Mostrar todo el texto en pantallas grandes -->
  <span class="d-none d-md-flex align-center flex-row-reverse">
    <div style="flex: 1; margin-left: 20px;">
      <p>
        Vive la experiencia definitiva de combates 3D con impresionantes efectos visuales que capturan la esencia del anime. Ejecuta técnicas icónicas como ataques definitivos que destruyen el campo de batalla, choques de rayos que estremecen el cielo y movimientos veloces que desafían la física. Cada pelea es un espectáculo visual y estratégico diseñado para hacerte sentir como un verdadero guerrero Z.
      </p>
    </div>
    <div style="flex: 0.6;">
      <img src="https://i.shgcdn.com/b7ba77d3-e195-4b04-ba6f-772914a72a93/-/format/auto/-/preview/3000x3000/-/quality/lighter/" width="100%" />
    </div>
  </span>

  <!-- Mostrar texto e imagen en bloque para pantallas pequeñas -->
  <span class="d-block d-md-none">
    <img src="https://i.shgcdn.com/b7ba77d3-e195-4b04-ba6f-772914a72a93/-/format/auto/-/preview/3000x3000/-/quality/lighter/" width="100%" />
    <p>
      {{ showMore
        ? "Vive combates 3D con efectos visuales impresionantes, técnicas icónicas y ataques definitivos capaces de arrasar el campo de batalla. Cada pelea es un espectáculo visual y estratégico."
        : "Vive combates 3D con efectos visuales impresionantes y ataques definitivos..."
      }}
    </p>
  </span>
</p>
<b>DESTROZA EL CIELO</b>
                <p>
  <!-- Mostrar todo el texto en pantallas grandes -->
  <span class="d-none d-md-flex align-center">
    <div>
      <p>
        Prepárate para llevar el combate al siguiente nivel en *DRAGON BALL: Sparking! ZERO*, la nueva evolución de la legendaria serie Budokai Tenkaichi. Domina a un extenso elenco de personajes, cada uno con habilidades únicas, transformaciones asombrosas y técnicas icónicas. ¡Desata todo el poder de los guerreros más fuertes del universo DRAGON BALL y destruye todos los límites!
      </p>
    </div>
    <div>
      <img src="https://i.shgcdn.com/730a7df9-670d-46a7-a3a5-fc2b95759595/-/format/auto/-/preview/3000x3000/-/quality/lighter/" width="80%"/>
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
        Dragon Ball: Sparking!
      </v-card-title>
      <v-card-subtitle class="text-center">
        <img src="https://www.irrompibles.net/irrwp/wp-content/uploads/2024/10/sparking_zero-1.jpg" width="40%"  />
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