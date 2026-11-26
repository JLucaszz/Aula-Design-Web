<script setup>
import { useFavoritosStore } from '@/stores/favoritosStore'
defineProps({ time: Object, posicao: Number })
const favStore = useFavoritosStore()
</script>

<template>
  <div class="linha-time">
    <span class="pos">{{ posicao }}°</span>
    <span class="nome">{{ time.nome }}</span>
    <span>{{ time.jogos }}</span>
    <span>{{ time.vitorias }}</span>
    <span>{{ time.empates }}</span>
    <span>{{ time.derrotas }}</span>
    <span>{{ time.golsPro - time.golsContra }}</span>
    <span class="pts"><strong>{{ time.pontos }}</strong></span>
    <button class="btn btn-neutro" @click="favStore.alternarFavorito(time.id)">
      {{ favStore.isFavorito(time.id) ? '★' : '☆' }}
    </button>
  </div>
</template>

<style scoped>
.linha-time { display: grid; grid-template-columns: 40px 2fr repeat(6, 1fr) 50px; align-items: center; background: var(--bg-card); padding: 12px 15px; border-radius: 6px; border-bottom: 1px solid #334155; }
.pos, .pts { font-weight: bold; color: var(--verde-destaque); }
</style>