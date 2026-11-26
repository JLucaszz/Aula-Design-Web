import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useFavoritosStore = defineStore('favoritos', () => {
  const salvo = localStorage.getItem('tabela_brasil_favoritos')
  const favoritos = ref(salvo ? JSON.parse(salvo) : [])

  watch(favoritos, (val) => {
    localStorage.setItem('tabela_brasil_favoritos', JSON.stringify(val))
  }, { deep: true })

  function alternarFavorito(id) {
    const index = favoritos.value.indexOf(id)
    if (index >= 0) {
      favoritos.value.splice(index, 1)
    } else {
      favoritos.value.push(id)
    }
  }

  function isFavorito(id) {
    return favoritos.value.includes(id)
  }

  return { favoritos, alternarFavorito, isFavorito }
})