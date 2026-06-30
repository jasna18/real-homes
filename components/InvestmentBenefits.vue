<script setup>
const { benefits } = useSiteData()
</script>

<template>
  <section id="investment" class="section">
    <div class="container">
      <div class="section-head center">
        <div>
          <span class="eyebrow">Why Invest in UAE</span>
          <h2>An Investment Built To Outlast</h2>
        </div>
        <p class="intro">
          The United Arab Emirates is one of the world's most attractive investment
          destinations — thanks to its strategic location connecting Europe, Asia and
          Africa, a stable and diversified economy, and a genuinely business-friendly
          environment. Investors benefit from modern infrastructure, world-class
          logistics, a highly skilled international workforce, and a favorable tax
          environment with strong regulatory frameworks. Combined with its high quality
          of life and long-term economic vision, the UAE offers a secure and dynamic
          environment for both local and international investors seeking sustainable
          growth and global market access.
        </p>
      </div>
      <div class="benefits">
        <div v-for="b in benefits" :key="b.title" class="benefit">
          <div class="benefit-media">
            <img :src="b.image" :alt="b.title" loading="lazy" />
            <span class="benefit-icon">{{ b.icon }}</span>
          </div>
          <div class="benefit-body">
            <h3>{{ b.title }}</h3>
            <p>{{ b.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#investment { padding-top: 24px; padding-bottom: 48px; }
.center {
  display: grid;
  grid-template-columns: minmax(240px, 1fr) 2fr;
  align-items: start;
  gap: 48px;
  text-align: left;
}
.center .eyebrow {
  font-size: clamp(22px, 2.4vw, 30px);
  font-weight: 600;
  letter-spacing: .12em;
}
.center h2 {
  font-size: clamp(15px, 1.6vw, 20px);
  font-weight: 500;
  margin-top: 12px;
  color: var(--text-dim);
}
.intro {
  margin: 0;
  color: var(--text-dim);
  font-size: 16px;
  line-height: 1.85;
  text-align: justify;
  text-justify: inter-word;
  hyphens: auto;
}
.benefits {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 56px;
}
.benefit {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform .3s ease, box-shadow .3s ease;
}
.benefit:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 50px rgba(0, 0, 0, .18);
}
.benefit-media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}
.benefit-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .6s ease;
}
.benefit:hover .benefit-media img { transform: scale(1.06); }
.benefit-icon {
  position: absolute;
  left: 24px;
  bottom: -28px;
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border: 1px solid var(--accent);
  background: var(--bg);
  color: var(--accent);
  font-size: 22px;
}
.benefit-body {
  padding: 46px 32px 40px;
}
.benefit h3 { font-size: 24px; margin-bottom: 12px; }
.benefit p { color: var(--text-dim); font-size: 15px; line-height: 1.7; }
@media (max-width: 1100px) {
  .benefits { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 820px) {
  .center { grid-template-columns: 1fr; gap: 18px; }
}
@media (max-width: 560px) {
  .benefits { grid-template-columns: 1fr; }
}
</style>
