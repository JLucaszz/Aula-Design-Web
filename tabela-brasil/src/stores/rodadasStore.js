import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useRodadasStore = defineStore('rodadas', () => {
  const salvo = localStorage.getItem('tabela_brasil_confrontos')
  const confrontos = ref(salvo ? JSON.parse(salvo) : [])

  watch(confrontos, (val) => {
    localStorage.setItem('tabela_brasil_confrontos', JSON.stringify(val))
  }, { deep: true })

  function adicionarConfronto(confronto) {
    confrontos.value.unshift({ id: Date.now(), ...confronto })
  }

  return { confrontos, adicionarConfronto }
})