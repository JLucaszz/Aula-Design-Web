<script setup>
import { computed } from 'vue'
import { useTabelaStore } from '@/stores/tabelaStore'
import TimeCard from '@/components/TimeCard.vue'

const tabelaStore = useTabelaStore()

const timesOrdenados = computed(() => {
  return [...tabelaStore.times].sort((a, b) => {
    if (b.pontos !== a.pontos) return b.pontos - a.pontos
    if (b.vitorias !== a.vitorias) return b.vitorias - a.vitorias
    return (b.golsPro - b.golsContra) - (a.golsPro - a.golsContra)
  })
})
</script>

<template>
  <div>
    <div class="topo-home">
      <h1>Classificação Geral</h1>
      <button class="btn btn-neutro" @click="tabelaStore.resetarTabela()">Zerar Campeonato</button>
    </div>

    <div class="cabecalho-tabela">
      <span>Pos</span>
      <span>Clube</span>
      <span>J</span>
      <span>V</span>
      <span>E</span>
      <span>D</span>
      <span>SG</span>
      <span>Pts</span>
      <span>Fav</span>
    </div>

    <div class="lista">
      <TimeCard 
        v-for="(time, index) in timesOrdenados" 
        :key="time.id" 
        :time="time" 
        :posicao="index + 1" 
      />
    </div>
  </div>
</template>

<style scoped>
.topo-home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.cabecalho-tabela {
  display: grid;
  grid-template-columns: 40px 2fr repeat(6, 1fr) 50px;
  padding: 10px 15px;
  font-weight: bold;
  color: var(--texto-suave);
}

.lista {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>