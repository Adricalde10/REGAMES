<template>
  <div>
    <h1>Benvingut a la Plataforma</h1>
    <form @submit.prevent="verificarCredenciales">
      <p>Usuari</p>
      <input type="text" v-model="usuari" placeholder="Introduïu el vostre usuari" />
      <p>Contrasenya</p>
      <input type="password" v-model="contrasenya" placeholder="Introduïu la vostra contrasenya" />
      <button type="submit">Entrar</button>
      <br>
      <p type="button" @click="navegarARegister">Si no esta registrat premi aqui</p>
    </form>
    <p v-if="missatge" :class="{'error': error, 'success': !error}">{{ missatge }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Variables reactivas
const usuari = ref('');
const contrasenya = ref('');
const missatge = ref('');
const error = ref(false);
const router = useRouter();




const verificarCredenciales = () => {
  const data = localStorage.getItem('usuaris');
  if (!data) {
    missatge.value = 'No hi ha usuaris registrats.';
    error.value = true;
    return;
  }

  const usuaris = JSON.parse(data);

  // Verificar si el usuario y la contraseña coinciden
  const usuarioValido = usuaris.find(
    (user) => user.usuari === usuari.value && user.contrasenya === contrasenya.value
  );

  if (usuarioValido) {
    missatge.value = 'Credencials correctes. Benvingut!';
    error.value = false;

    // Guardar toda la información del usuario autenticado
    localStorage.setItem('usuarioActual', JSON.stringify(usuarioValido));

    // Redirigir al componente de bienvenida
    router.push("/user");
  } else {
    missatge.value = 'Usuari o contrasenya incorrectes.';
    error.value = true;
  }
};


// Función para navegar a la ruta de registro
const navegarARegister = () => {
  router.push('/register');
};
</script>

<style scoped>
/* Fondo general */
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #1b2838;
  font-family: 'Arial', sans-serif;
  color: #fff;
}

/* Cabecera */
h1 {
  background-color: #ff5c5c;
  color: #1b2838;
  font-size: 2.5rem;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

/* Formulario */
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  padding: 0;
  width: 100%;
  max-width: 400px;
}

/* Campos de entrada (inputs) */
input {
  width: 100%;
  max-width: 300px;
  padding: 10px 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 8px;
  background-color: #2c3e50;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
}

/* Botón */
button {
  background-color: #ff5c5c;
  color: #1b2838;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.3s;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

button:hover {
  background-color: #e74c3c;
  transform: scale(1.05);
}

/* Mensajes */
.error {
  color: #e74c3c;
}

.success {
  color: #2ecc71;
}
</style>
