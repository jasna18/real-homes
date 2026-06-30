<script setup>
const { apartments, communities } = useSiteData()
const hero = 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=2000&q=80'
</script>

<template>
  <div>
    <section
      class="page-hero"
      :style="{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,.5), rgba(255,255,255,.92)), url(${hero})` }"
    >
      <div class="container">
        <span class="eyebrow">Our Portfolio</span>
        <h1>Projects</h1>
        <p>A curated collection of apartments and communities across our global footprint.</p>
      </div>
    </section>

    <ProjectsGrid
      id="apartments"
      eyebrow="Residential Apartments"
      title="Apartments"
      :projects="apartments"
    />
    <ProjectsGrid
      id="communities"
      eyebrow="Residential Communities"
      title="Communities"
      :projects="communities"
      soft
    />
  </div>
</template>

<style scoped>
.page-hero {
  background-size: cover;
  background-position: center;
  padding: 220px 0 110px;
}
.page-hero h1 { font-size: clamp(56px, 9vw, 120px); margin: 14px 0 16px; }
.page-hero p { color: var(--text-dim); font-size: 17px; max-width: 480px; }
</style>
