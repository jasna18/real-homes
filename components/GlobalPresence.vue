<script setup>
const { presence } = useSiteData()
</script>

<template>
  <section id="locations" class="section section-soft">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="eyebrow">Our Global Presence</span>
          <h2>RealHomes Operates In 9+ Countries</h2>
        </div>
        <NuxtLink to="/projects" class="explore-btn">
          <span class="explore-btn-label">View All Locations</span>
          <span class="explore-btn-arrow" aria-hidden="true">&#8594;</span>
        </NuxtLink>
      </div>
      <div class="presence-grid">
        <NuxtLink
          v-for="p in presence"
          :key="p.country"
          to="/projects"
          class="presence-card"
          :style="{ backgroundImage: `linear-gradient(to top, rgba(255,255,255,.94), rgba(255,255,255,.1)), url(${p.image})` }"
        >
          <div class="presence-body">
            <span class="presence-count">{{ p.projects }} Projects</span>
            <h3>{{ p.country }}</h3>
            <span class="presence-explore">Explore →</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
#locations { padding-top: 56px; }
.head-note { max-width: 360px; color: var(--text-dim); font-size: 15px; }
.section-head .eyebrow {
  font-size: clamp(22px, 2.4vw, 30px);
  font-weight: 600;
  letter-spacing: .12em;
}
.section-head h2 {
  font-size: clamp(15px, 1.6vw, 20px);
  font-weight: 500;
  margin-top: 12px;
  color: var(--text-dim);
}
.explore-btn {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
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
.explore-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #fff;
  transform: translateX(-101%);
  transition: transform .45s cubic-bezier(.5, 0, .2, 1);
  z-index: 0;
}
.explore-btn:hover {
  color: #111;
  border-color: var(--line);
}
.explore-btn:hover::before {
  transform: translateX(0);
}
.explore-btn-label {
  position: relative;
  z-index: 1;
}
.explore-btn-arrow {
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
.explore-btn:hover .explore-btn-arrow {
  background: var(--yellow);
  color: #111;
  transform: translateX(3px);
}
.presence-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.presence-card {
  position: relative;
  height: 320px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  border: 1px solid var(--line);
  transition: transform .4s ease;
}
.presence-card:hover { transform: translateY(-4px); }
.presence-body { padding: 30px; }
.presence-count {
  font-size: 12px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--accent);
}
.presence-body h3 { font-size: 30px; margin: 8px 0 14px; }
.presence-explore {
  font-size: 13px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--text-dim);
}
.presence-card:hover .presence-explore { color: var(--text); }
@media (max-width: 980px) {
  .presence-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .presence-grid { grid-template-columns: 1fr; }
}
</style>
