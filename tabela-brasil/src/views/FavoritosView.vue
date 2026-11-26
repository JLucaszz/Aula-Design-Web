<script setup>
import { computed } from 'vue'
import { useTabelaStore } from '@/stores/tabelaStore'
import { useFavoritosStore } from '@/stores/favoritosStore'
import TimeCard from '@/components/TimeCard.vue'

const tabelaStore = useTabelaStore()
const favStore = useFavoritosStore()

const meusTimes = computed(() => tabelaStore.times.filter(t => favStore.isFavorito(t.id)))
</script>

<template>
  <div>
    <h1>Meus Times Favoritos</h1>
    <p v-if="meusTimes.length === 0" class="vazio">Nenhum time favoritado na classificação.</p>
    <div class="lista" v-else>
      <TimeCard v-for="(time, index) in meusTimes" :key="time.id" :time="time" :posicao="index + 1" />
    </div>
  </div>
</template>

<style scoped>
.vazio { margin-top: 20px; color: var(--texto-suave); }
.lista { margin-top: 20px; display: flex; flex-direction: column; gap: 8px; }
</style>