import { ref } from 'vue';

// Estado global del buscador
const search = ref('');

// Función para obtener el término actual
export function useSearch() {
  const setSearch = (value) => {
    search.value = value;
  };

  return {
    search,
    setSearch,
  };
}
