<template>
  <div>
    <h1>REGISTER</h1>
    <form @submit.prevent="crearUsuario">
      <input type="text" v-model="usuari" placeholder="Introduïu el vostre usuari" />
      <input type="text" v-model="nombreReal" placeholder="Introduïu el vostre nom real" />
      <input type="date" v-model="fechaNacimiento" />
      <input type="email" v-model="correo" placeholder="Introduïu el vostre correu electrònic" />
      <input type="password" v-model="contrasenya" placeholder="Introduïu la vostra contrasenya" />
      <button type="submit">Crear Usuari</button>
    </form>
    <p v-if="missatge" :class="{'error': error, 'success': !error}">{{ missatge }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Variables reactives
const usuari = ref('');
const nombreReal = ref('');
const fechaNacimiento = ref('');
const correo = ref('');
const contrasenya = ref('');
const missatge = ref('');
const error = ref(false);
const usuaris = ref([]); // Lista de usuarios registrados

// Router
const router = useRouter(); // Instancia del router para redirigir

// Cargar usuarios del Local Storage al iniciar
onMounted(() => {
  const data = localStorage.getItem('usuaris');
  if (data) {
    usuaris.value = JSON.parse(data);
  }
});

// Función para guardar en Local Storage
const guardarEnLocalStorage = () => {
  localStorage.setItem('usuaris', JSON.stringify(usuaris.value));
};

// Validación del correo
const validarCorreo = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Función para crear un usuario
const crearUsuario = () => {
  if (!usuari.value || !nombreReal.value || !fechaNacimiento.value || !correo.value || !contrasenya.value) {
    missatge.value = 'Tots els camps són obligatoris.';
    error.value = true;
    return;
  }

  if (contrasenya.value.length < 6) {
    missatge.value = 'La contrasenya ha de tenir almenys 6 caràcters.';
    error.value = true;
    return;
  }

  if (!validarCorreo(correo.value)) {
    missatge.value = 'El correu electrònic no és vàlid.';
    error.value = true;
    return;
  }

  // Comprobar si el usuario ya existe
  const usuarioExistente = usuaris.value.find(user => user.usuari === usuari.value || user.correo === correo.value);
  if (usuarioExistente) {
    missatge.value = `L'usuari "${usuari.value}" o el correu "${correo.value}" ja existeixen. Trieu un altre nom o correu.`;
    error.value = true;
    return;
  }

  // Crear un nuevo usuario
  const nuevoUsuario = {
    usuari: usuari.value,
    nombreReal: nombreReal.value,
    fechaNacimiento: fechaNacimiento.value,
    correo: correo.value,
    contrasenya: contrasenya.value,
  };

  // Añadir usuario a la lista y guardar en Local Storage
  usuaris.value.push(nuevoUsuario);
  guardarEnLocalStorage();

  // Guardar este usuario como el usuario actual
  localStorage.setItem('usuarioActual', JSON.stringify(nuevoUsuario));

  // Mostrar alerta de éxito
  alert(`Usuari "${usuari.value}" registrat correctament!`);

  // Redirigir a la página /user
  router.push('/user');

  // Resetejar camps
  usuari.value = '';
  nombreReal.value = '';
  fechaNacimiento.value = '';
  correo.value = '';
  contrasenya.value = '';
  missatge.value = '';
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
  background-color: #1b2838; /* Fondo oscuro */
  font-family: 'Arial', sans-serif;
  color: #fff;
}

/* Cabecera */
h1 {
  background-color: #ff5c5c; /* Rojo brillante */
  color: #1b2838; /* Oscuro */
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

input {
  width: 100%;
  max-width: 300px;
  padding: 10px 15px;
  margin-bottom: 15px;
  border: none;
  border-radius: 8px;
  background-color: #2c3e50; /* Fondo gris oscuro */
  color: #fff; /* Texto blanco */
  font-size: 1rem;
  text-align: center;
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
}

input::placeholder {
  color: #ccc; /* Placeholder gris claro */
}

input:focus {
  outline: none;
  background-color: #34495e; /* Fondo un poco más claro al enfocar */
}

/* Botón */
button {
  background-color: #ff5c5c; /* Rojo brillante */
  color: #1b2838; /* Oscuro */
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
  background-color: #e74c3c; /* Rojo más oscuro al pasar el cursor */
  transform: scale(1.05); /* Aumentar tamaño al pasar el cursor */
}

button:active {
  transform: scale(1); /* Regresa al tamaño original al hacer clic */
}

/* Mensajes de éxito y error */
p.error {
  color: red; /* Mensajes de error en rojo */
}

p.success {
  color: green; /* Mensajes de éxito en verde */
}
</style>
