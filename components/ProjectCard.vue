<script setup>
defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <NuxtLink to="/projects" class="card">
    <div class="card-media">
      <img :src="project.image" :alt="project.name" loading="lazy" />
    </div>
    <div class="card-body">
      <h3 class="card-name">{{ project.name }}</h3>

      <div class="card-rows">
        <span class="card-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          {{ project.location }}
        </span>

        <span class="card-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-5h6v5" />
          </svg>
          {{ project.units }}
        </span>

        <span class="card-row">
          <svg class="dirham" viewBox="0 0 32 28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="round">
            <path d="M12 5 H17 C25 5 28.5 9.5 28.5 14 C28.5 18.5 25 23 17 23 H12 V5 Z" />
            <line x1="4.5" y1="11.5" x2="20" y2="11.5" />
            <line x1="4.5" y1="16.5" x2="20" y2="16.5" />
          </svg>
          {{ project.price }}
        </span>

        <span class="card-row available">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M8.5 12.5l2.5 2.5 4.5-5" />
          </svg>
          Available
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.card {
  display: block;
  background: var(--bg-card);
  overflow: hidden;
  transition: transform .3s ease, box-shadow .3s ease;
}
.card:hover { transform: translateY(-4px); box-shadow: 0 24px 50px rgba(26, 23, 20, .12); }
.card-media {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}
.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .7s ease;
}
.card:hover .card-media img { transform: scale(1.06); }
.card-body { padding: 22px 22px 24px; }
.card-name {
  font-size: 28px;
  margin-bottom: 18px;
}
.card-rows {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 18px;
}
.card-row {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 12.5px;
  letter-spacing: .05em;
  text-transform: uppercase;
  color: var(--text-dim);
  line-height: 1.3;
}
.card-row svg {
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  color: var(--accent);
}
.card-row .dirham {
  width: 16px;
  height: 14px;
}
.card-row.available svg {
  color: #2fa84f;
}
</style>
