import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

const timesIniciais = [
  { id: 1, nome: 'Palmeiras', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0 },
  { id: 2, nome: 'Flamengo', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0 },
  { id: 3, nome: 'Atlético-MG', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0 },
  { id: 4, nome: 'São Paulo', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0 },
  { id: 5, nome: 'Fluminense', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0 },
  { id: 6, nome: 'Internacional', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0 },
  { id: 7, nome: 'Grêmio', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0 },
  { id: 8, nome: 'Botafogo', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0 }
]

export const useTabelaStore = defineStore('tabela', () => {
  const dadosSalvos = localStorage.getItem('tabela_brasil_dados')
  const times = ref(dadosSalvos ? JSON.parse(dadosSalvos) : timesIniciais)

  watch(times, (novosValores) => {
    localStorage.setItem('tabela_brasil_dados', JSON.stringify(novosValores))
  }, { deep: true })

  function atualizarPartida(idA, golsA, idB, golsB) {
    const timeA = times.value.find(t => t.id === idA)
    const timeB = times.value.find(t => t.id === idB)

    if (!timeA || !timeB) return

    timeA.jogos++
    timeB.jogos++
    timeA.golsPro += golsA
    timeA.golsContra += golsB
    timeB.golsPro += golsB
    timeB.golsContra += golsA

    if (golsA > golsB) {
      timeA.vitorias++
      timeA.pontos += 3
      timeB.derrotas++
    } else if (golsA < golsB) {
      timeB.vitorias++
      timeB.pontos += 3
      timeA.derrotas++
    } else {
      timeA.empates++
      timeA.pontos++
      timeB.empates++
      timeB.pontos++
    }
  }

  function resetarTabela() {
    times.value = JSON.parse(JSON.stringify(timesIniciais))
    localStorage.removeItem('tabela_brasil_dados')
  }

  return { times, atualizarPartida, resetarTabela }
})