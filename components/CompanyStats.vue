<script setup>
const { stats } = useSiteData()
const bg = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80'

const sectionEl = ref(null)
const display = ref(stats.map(() => '0'))

function parse(value) {
  const num = parseFloat(value.replace(/[^0-9.]/g, '')) || 0
  const prefix = value.match(/^[^0-9]*/)[0]
  const suffix = value.match(/[^0-9]*$/)[0]
  const comma = value.includes(',')
  return { num, prefix, suffix, comma }
}

function fmt(n, comma) {
  const r = Math.round(n)
  return comma ? r.toLocaleString('en-US') : String(r)
}

function run() {
  const duration = 1700
  const parsed = stats.map((s) => parse(s.value))
  const start = performance.now()
  function tick(now) {
    const p = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - p, 3)
    display.value = parsed.map((ps) => ps.prefix + fmt(ps.num * eased, ps.comma) + ps.suffix)
    if (p < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  if (!import.meta.client || !sectionEl.value) return
  const obs = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        run()
        obs.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  obs.observe(sectionEl.value)
})
</script>

<template>
  <section
    ref="sectionEl"
    class="stats"
    :style="{ backgroundImage: `linear-gradient(to right, rgba(246,243,238,.97), rgba(246,243,238,.74)), url(${bg})` }"
  >
    <span class="ghost" aria-hidden="true">10</span>
    <div class="container stats-inner">
      <div class="stats-copy">
        <span class="eyebrow">Over A Decade Of Development</span>
        <h2>Building Trust, One Landmark At A Time</h2>
        <p>
          Since our first foundation stone, RealHomes has grown into a multinational developer
          delivering design-led homes at scale — on time, and to lasting standards.
        </p>
        <NuxtLink to="/projects" class="track-btn">
          <span class="track-btn-label">Our Track Record</span>
          <span class="track-btn-arrow" aria-hidden="true">&#8594;</span>
        </NuxtLink>
      </div>
      <div class="stats-grid">
        <div v-for="(s, i) in stats" :key="s.label" class="stat">
          <span class="stat-index">0{{ i + 1 }}</span>
          <span class="stat-value">{{ display[i] }}</span>
          <span class="stat-bar" aria-hidden="true"></span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  position: relative;
  background-size: cover;
  background-position: center;
  padding: 110px 0;
  overflow: hidden;
}
.ghost {
  position: absolute;
  right: -3vw;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--serif);
  font-size: 46vw;
  line-height: 1;
  font-weight: 600;
  color: rgba(160, 125, 74, .06);
  pointer-events: none;
  user-select: none;
  z-index: 0;
}
.stats-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.stats-copy .eyebrow {
  font-size: clamp(22px, 2.4vw, 30px);
  font-weight: 600;
  letter-spacing: .12em;
}
.stats-copy h2 {
  font-size: clamp(15px, 1.6vw, 20px);
  font-weight: 500;
  margin: 12px 0 20px;
  color: var(--text-dim);
}
.stats-copy p { color: var(--text-dim); font-size: 16px; max-width: 460px; margin-bottom: 32px; }
.track-btn {
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
.track-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #fff;
  transform: translateX(-101%);
  transition: transform .45s cubic-bezier(.5, 0, .2, 1);
  z-index: 0;
}
.track-btn:hover { color: #111; border-color: var(--line); }
.track-btn:hover::before { transform: translateX(0); }
.track-btn-label { position: relative; z-index: 1; }
.track-btn-arrow {
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
.track-btn:hover .track-btn-arrow { background: var(--yellow); color: #111; transform: translateX(3px); }

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.stat {
  position: relative;
  background: rgba(255, 255, 255, .72);
  backdrop-filter: blur(8px) saturate(140%);
  -webkit-backdrop-filter: blur(8px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, .8);
  border-radius: 16px;
  padding: 36px 30px 32px;
  overflow: hidden;
  transition: transform .4s ease, box-shadow .4s ease;
}
.stat:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 54px rgba(26, 23, 20, .14);
}
.stat-index {
  position: absolute;
  top: 18px;
  right: 22px;
  font-size: 12px;
  letter-spacing: .14em;
  color: var(--accent);
  opacity: .55;
}
.stat-value {
  display: block;
  font-family: var(--serif);
  font-size: clamp(38px, 4.4vw, 56px);
  color: var(--accent-soft);
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.stat-bar {
  display: block;
  width: 28px;
  height: 3px;
  background: var(--yellow);
  margin: 18px 0 14px;
  transition: width .4s ease;
}
.stat:hover .stat-bar { width: 56px; }
.stat-label {
  display: block;
  font-size: 13px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--text-dim);
}
@media (max-width: 880px) {
  .stats-inner { grid-template-columns: 1fr; gap: 44px; }
  .ghost { font-size: 80vw; opacity: .8; }
}
@media (max-width: 460px) {
  .stats-grid { grid-template-columns: 1fr; }
}
</style>
