<template>
  <section id="about" class="section story">
    <div class="container story-grid">
      <div class="story-visual">
        <span class="rings" aria-hidden="true" />
        <div class="story-logo">
          <span class="story-mark">RH</span>
        </div>
      </div>

      <div class="story-copy">
        <h2>RealHomes Group</h2>
        <p class="story-sub">Own your story</p>
        <p class="story-text">
          We are RealHomes. Founded in 2010 and headquartered in Abu Dhabi, we build
          residences and integrated communities across the UAE and beyond. Our vision is to
          create a world where owning your space isn't for the privileged few, but a choice
          that belongs to everyone.
        </p>
        <NuxtLink to="/projects" class="story-btn">
          <span>Our Story</span>
          <span class="story-btn-arrow" aria-hidden="true">&#8594;</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.story-visual {
  position: relative;
  min-height: 420px;
  display: grid;
  place-items: center;
}
.rings {
  position: absolute;
  inset: -10% -6%;
  background: repeating-radial-gradient(
    circle at 56% 50%,
    rgba(26, 23, 20, 0) 0 16px,
    rgba(26, 23, 20, .06) 16px 17px
  );
  -webkit-mask: radial-gradient(circle at 56% 50%, #000 55%, transparent 78%);
  mask: radial-gradient(circle at 56% 50%, #000 55%, transparent 78%);
}
.story-logo {
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
}
.story-mark {
  font-family: var(--serif);
  font-weight: 700;
  font-size: clamp(84px, 12vw, 168px);
  line-height: .9;
  letter-spacing: -.02em;
  color: #111;
}
.story-dot {
  width: clamp(36px, 4.6vw, 66px);
  height: clamp(36px, 4.6vw, 66px);
  border-radius: 50%;
  background: var(--yellow);
}
.story-copy h2 {
  font-family: var(--sans);
  font-weight: 700;
  font-size: clamp(20px, 3vw, 36px);
  letter-spacing: .01em;
  text-transform: uppercase;
  color: var(--text);
  line-height: 1.05;
}
.story-sub {
  font-family: var(--serif);
  font-size: clamp(22px, 2.4vw, 32px);
  color: var(--text-dim);
  margin: 6px 0 26px;
}
.story-text {
  font-size: 16px;
  color: var(--text-dim);
  max-width: 540px;
  margin-bottom: 36px;
}
.story-btn {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 16px;
  background: var(--yellow);
  color: #111;
  border: 1px solid var(--yellow);
  border-radius: 999px;
  padding: 9px 9px 9px 28px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .18em;
  text-transform: uppercase;
  transition: border-color .4s ease;
}
.story-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #fff;
  transform: translateX(-100%);
  transition: transform .45s cubic-bezier(.5, 0, .2, 1);
  z-index: 0;
}
.story-btn:hover::before {
  transform: translateX(0);
}
.story-btn > span {
  position: relative;
  z-index: 1;
}
.story-btn-arrow {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #fff;
  color: #111;
  display: grid;
  place-items: center;
  font-size: 18px;
  transition: transform .3s ease, background .4s ease;
}
.story-btn:hover .story-btn-arrow {
  transform: translateX(4px);
  background: var(--yellow);
}
@media (max-width: 880px) {
  .story-grid { grid-template-columns: 1fr; gap: 30px; }
  .story-visual { min-height: 300px; }
}
</style>
