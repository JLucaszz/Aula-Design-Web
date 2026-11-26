<template>
  <div class="sobre">
    <h1>Sobre o Regulamento — TabelaBrasil</h1>
    <p>Simulador interativo de campeonato por pontos corridos desenvolvido para avaliação técnica.</p>
    <ul>
      <li><strong>Pontuação:</strong> Vitória vale 3 pontos, empate vale 1 ponto e derrota 0 pontos.</li>
      <li><strong>Critérios de Desempate:</strong> 1º Pontos Ganhos, 2º Número de Vitórias, 3º Saldo de Gols.</li>
      <li><strong>Arquitetura:</strong> Vue 3 + Vue Router (5 rotas) + Pinia (3 stores com persistência em LocalStorage).</li>
    </ul>
  </div>
</template>

<style scoped>
.sobre { line-height: 1.8; }
ul { margin-top: 15px; padding-left: 20px; }
</style>