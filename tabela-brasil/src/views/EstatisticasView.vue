<script setup>
import { useTabelaStore } from '@/stores/tabelaStore'
const tabelaStore = useTabelaStore()
</script>

<template>
  <div>
    <h1>Estatísticas de Gols</h1>
    <div class="stats-grid">
      <div v-for="t in tabelaStore.times" :key="t.id" class="stat-card">
        <h3>{{ t.nome }}</h3>
        <p>Jogos: <strong>{{ t.jogos }}</strong></p>
        <p>Gols Marcados: <strong>{{ t.golsPro }}</strong></p>
        <p>Gols Sofridos: <strong>{{ t.golsContra }}</strong></p>
        <p>Saldo: <strong>{{ t.golsPro - t.golsContra }}</strong></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; margin-top: 20px; }
.stat-card { background: var(--bg-card); padding: 20px; border-radius: 10px; border: 1px solid #334155; }
.stat-card h3 { color: var(--verde-destaque); margin-bottom: 10px; }
</style>