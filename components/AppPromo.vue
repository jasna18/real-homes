<script setup>
const phone = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80'
</script>

<template>
  <section id="maison" class="section section-soft">
    <div class="container promo">
      <div class="promo-copy">
        <span class="eyebrow">The RealHomes App</span>
        <h2>Your Next Home, In Your Pocket</h2>
        <p>
          Browse every project, track construction progress, reserve units and manage payments —
          all from one beautifully simple app.
        </p>
        <ul class="promo-points">
          <li>Live availability & 3D floor plans</li>
          <li>Real-time construction updates</li>
          <li>Secure online reservations</li>
        </ul>
        <div class="store-buttons">
          <a href="#" class="store-btn">
            <span class="store-small">Download on the</span>
            <span class="store-big">App Store</span>
          </a>
          <a href="#" class="store-btn">
            <span class="store-small">Get it on</span>
            <span class="store-big">Google Play</span>
          </a>
        </div>
      </div>
      <div class="promo-media">
        <img :src="phone" alt="RealHomes mobile app" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.promo {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 64px;
  align-items: center;
}
.promo-copy h2 { font-size: clamp(34px, 4vw, 52px); margin: 14px 0 18px; }
.promo-copy p { color: var(--text-dim); font-size: 16px; max-width: 460px; margin-bottom: 24px; }
.promo-points {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 34px;
}
.promo-points li {
  position: relative;
  padding-left: 26px;
  color: var(--text);
  font-size: 15px;
}
.promo-points li::before {
  content: '✦';
  position: absolute;
  left: 0;
  color: var(--accent);
}
.store-buttons { display: flex; gap: 16px; flex-wrap: wrap; }
.store-btn {
  border: 1px solid var(--line);
  padding: 12px 26px;
  display: flex;
  flex-direction: column;
  transition: border-color .3s ease;
}
.store-btn:hover { border-color: var(--accent); }
.store-small { font-size: 11px; letter-spacing: .1em; color: var(--text-dim); text-transform: uppercase; }
.store-big { font-family: var(--serif); font-size: 20px; }
.promo-media {
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border: 1px solid var(--line);
}
.promo-media img { width: 100%; height: 100%; object-fit: cover; }
@media (max-width: 880px) {
  .promo { grid-template-columns: 1fr; gap: 44px; }
  .promo-media { max-width: 420px; }
}
</style>
