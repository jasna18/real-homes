<script setup>
defineProps({
  id: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  title: { type: String, default: '' },
  projects: { type: Array, required: true },
  soft: { type: Boolean, default: false }
})
</script>

<template>
  <section :id="id" :class="['section', { 'section-soft': soft }]">
    <div class="container">
      <div class="section-head">
        <div>
          <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
          <!-- <h2 v-if="title">{{ title }}</h2> -->
        </div>
        <NuxtLink to="/projects" class="view-all-btn">
          <span class="view-all-btn-label">View All Projects</span>
          <span class="view-all-btn-arrow" aria-hidden="true">&#8594;</span>
        </NuxtLink>
      </div>
      <div class="grid">
        <ProjectCard v-for="p in projects" :key="p.name" :project="p" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 64px 0;
}
.section-head {
  margin-bottom: 34px;
}
.eyebrow {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: .08em;
}
.view-all-btn {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: #111;
  background: var(--yellow);
  border: 1px solid var(--yellow);
  border-radius: 999px;
  padding: 9px 9px 9px 22px;
  transition: color .4s ease, border-color .4s ease;
}
.view-all-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #fff;
  transform: translateX(-101%);
  transition: transform .45s cubic-bezier(.5, 0, .2, 1);
  z-index: 0;
}
.view-all-btn:hover {
  color: #111;
  border-color: var(--line);
}
.view-all-btn:hover::before {
  transform: translateX(0);
}
.view-all-btn-label {
  position: relative;
  z-index: 1;
}
.view-all-btn-arrow {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  color: #111;
  display: grid;
  place-items: center;
  font-size: 15px;
  transition: background .4s ease, color .4s ease, transform .4s ease;
}
.view-all-btn:hover .view-all-btn-arrow {
  background: var(--yellow);
  color: #111;
  transform: translateX(3px);
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px 28px;
}
@media (max-width: 980px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
