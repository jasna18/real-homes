<template>
  <div class="site">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style>
.site {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
}
</style>
