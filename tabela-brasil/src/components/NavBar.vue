<template>
  <header class="navbar">
    <div class="logo-area">
      <span>Tabela<strong>Brasil</strong></span>
    </div>
    <nav class="links">
      <RouterLink to="/">Classificação</RouterLink>
      <RouterLink to="/rodadas">Rodadas</RouterLink>
      <RouterLink to="/estatisticas">Estatísticas</RouterLink>
      <RouterLink to="/favoritos">Meu Time</RouterLink>
      <RouterLink to="/sobre">Sobre</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navbar { background-color: var(--bg-card); padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--verde-destaque); }
.logo-area { font-size: 1.3rem; }
.links { display: flex; gap: 20px; }
.links a { color: var(--texto-claro); text-decoration: none; font-weight: 500; }
.links a.router-link-active { color: var(--verde-destaque); font-weight: bold; }
</style>