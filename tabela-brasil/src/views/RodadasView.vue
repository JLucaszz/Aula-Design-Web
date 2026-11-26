<script setup>
import { ref } from 'vue'
import { useTabelaStore } from '@/stores/tabelaStore'
import { useRodadasStore } from '@/stores/rodadasStore'

const tabelaStore = useTabelaStore()
const rodadasStore = useRodadasStore()

const timeAId = ref(1)
const golsA = ref(0)
const timeBId = ref(2)
const golsB = ref(0)

function registrar() {
  if (timeAId.value === timeBId.value) return alert('Selecione dois times diferentes!')
  tabelaStore.atualizarPartida(Number(timeAId.value), Number(golsA.value), Number(timeBId.value), Number(golsB.value))
  
  const mandante = tabelaStore.times.find(t => t.id === Number(timeAId.value)).nome
  const visitante = tabelaStore.times.find(t => t.id === Number(timeBId.value)).nome
  
  rodadasStore.adicionarConfronto({
    mandante, golsMandante: golsA.value, visitante, golsVisitante: golsB.value
  })
  golsA.value = 0
  golsB.value = 0
}
</script>

<template>
  <div class="grid-rodadas">
    <div class="form-box">
      <h1>Simular Partida</h1>
      <form @submit.prevent="registrar">
        <label>Mandante</label>
        <select v-model="timeAId">
          <option v-for="t in tabelaStore.times" :key="t.id" :value="t.id">{{ t.nome }}</option>
        </select>
        <input type="number" v-model="golsA" min="0" placeholder="Gols do Mandante" />

        <label>Visitante</label>
        <select v-model="timeBId">
          <option v-for="t in tabelaStore.times" :key="t.id" :value="t.id">{{ t.nome }}</option>
        </select>
        <input type="number" v-model="golsB" min="0" placeholder="Gols do Visitante" />

        <button type="submit" class="btn btn-verde">Salvar Placar</button>
      </form>
    </div>

    <div class="historico-box">
      <h2>Jogos Registrados</h2>
      <p v-if="rodadasStore.confrontos.length === 0" class="vazio">Nenhuma partida registrada ainda.</p>
      <div v-for="c in rodadasStore.confrontos" :key="c.id" class="placar-item">
        <span>{{ c.mandante }} <strong>{{ c.golsMandante }}</strong> x <strong>{{ c.golsVisitante }}</strong> {{ c.visitante }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-rodadas { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
.vazio { color: var(--texto-suave); margin-top: 10px; }
.placar-item { background: var(--bg-card); padding: 12px; border-radius: 6px; margin-top: 10px; text-align: center; }
</style>