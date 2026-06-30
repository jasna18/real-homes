<script setup>
const { hero } = useSiteData()
const active = ref(0)
let timer

function go(i) { active.value = (i + hero.length) % hero.length }
function next() { go(active.value + 1) }

const current = computed(() => hero[active.value])
const secondary = computed(() => hero[(active.value + 1) % hero.length])

onMounted(() => { timer = setInterval(next, 6000) })
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section class="hero">
    <div class="hero-stage">
      <!-- Wide oval banner image with the roof protruding ~10px on top -->
      <div class="hero-frame">
        <div class="hero-main">
          <transition name="cross" mode="out-in">
            <img :key="secondary.name" :src="secondary.image" :alt="secondary.name" />
          </transition>
        </div>
        <div class="hero-roof" aria-hidden="true">
          <img :src="secondary.image" alt="" />
        </div>

        <!-- Round picture with content, fully inside the banner -->
        <div class="hero-circle hero-circle-right">
          <transition name="cross" mode="out-in">
            <img :key="current.name" :src="current.image" :alt="current.name" />
          </transition>
          <span class="hero-scrim" />
          <transition name="rise" mode="out-in">
            <div :key="current.name" class="hero-content">
              <span class="hero-loc">{{ current.location }}</span>
              <h1>{{ current.name }}</h1>
              <p class="hero-tag">{{ current.tagline }}</p>
              <NuxtLink to="/projects" class="hero-explore">
                <span>Explore</span>
                <span class="hero-explore-arrow">&#8594;</span>
              </NuxtLink>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Floating action buttons -->
    <div class="hero-float">
      <a href="#contact" class="float-btn" aria-label="Chat">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6">
          <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z"/>
        </svg>
      </a>
      <a href="tel:+18001002000" class="float-btn" aria-label="Call">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.7 3a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1-1.3a2 2 0 0 1 2.1-.4c1 .3 2 .6 3 .7a2 2 0 0 1 1.8 2z"/>
        </svg>
      </a>
      <a href="#contact" class="float-btn" aria-label="Message">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6">
          <path d="M4 4h16v12H7l-3 3V4z"/>
        </svg>
      </a>
    </div>

    <!-- Slide switcher -->
    <div class="hero-nav">
      <button
        v-for="(s, i) in hero"
        :key="s.name"
        :class="['hero-dot', { on: i === active }]"
        :aria-label="s.name"
        @click="go(i)"
      />
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background: var(--bg);
  min-height: 100vh;
  padding-top: 84px;
  overflow: hidden;
}
.hero-stage {
  position: relative;
  height: calc(100vh - 84px);
  min-height: 560px;
  max-width: 1560px;
  margin: 0 auto;
}
.hero-frame {
  position: absolute;
  top: 10px;
  left: 16px;
  right: 16px;
  height: calc(100% - 44px);
}
.hero-main {
  position: absolute;
  inset: 0;
  border-radius: 46% 46% 46% 46% / 32% 32% 42% 42%;
  overflow: hidden;
}
.hero-main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* Roof slice that rises ~10px above the oval's top edge */
.hero-roof {
  position: absolute;
  left: 0;
  right: 0;
  top: -10px;
  height: 100%;
  pointer-events: none;
  clip-path: inset(0 33% 74% 33% round 70px 70px 0 0);
  -webkit-mask: linear-gradient(to bottom, #000 72%, transparent 100%);
  mask: linear-gradient(to bottom, #000 72%, transparent 100%);
}
.hero-roof img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-circle {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  overflow: hidden;
}
.hero-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-circle-right {
  right: 7%;
  height: min(80%, 520px);
  aspect-ratio: 1 / 1;
  box-shadow: 0 30px 70px rgba(26, 23, 20, .35);
}
.hero-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(10, 10, 10, .15) 30%, rgba(10, 10, 10, .72) 100%);
}
.hero-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 16%;
  color: #fff;
}
.hero-loc {
  background: #fff;
  color: var(--accent);
  font-size: 12px;
  letter-spacing: .16em;
  text-transform: uppercase;
  font-weight: 500;
  padding: 7px 18px;
  border-radius: 999px;
  margin-bottom: 22px;
}
.hero-content h1 {
  font-size: clamp(34px, 4.2vw, 60px);
  letter-spacing: .02em;
  text-transform: uppercase;
  line-height: 1;
}
.hero-tag {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(15px, 1.8vw, 22px);
  text-transform: uppercase;
  letter-spacing: .04em;
  margin: 10px 0 26px;
}
.hero-explore {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  background: #fff;
  color: var(--text);
  font-size: 13px;
  letter-spacing: .18em;
  text-transform: uppercase;
  padding: 8px 8px 8px 26px;
  border-radius: 999px;
}
.hero-explore-arrow {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--yellow);
  color: #111;
  display: grid;
  place-items: center;
  font-size: 18px;
  transition: transform .3s ease;
}
.hero-explore:hover .hero-explore-arrow {
  transform: translateX(4px);
}
.hero-float {
  position: absolute;
  top: 50%;
  right: 22px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 14px;
  z-index: 5;
}
.float-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f0ece5;
  color: var(--text);
  display: grid;
  place-items: center;
  transition: background .3s ease, color .3s ease;
}
.float-btn:hover {
  background: var(--yellow);
  color: #111;
}
.hero-nav {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 5;
}
.hero-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: var(--line);
  cursor: pointer;
  transition: background .3s ease, transform .3s ease;
}
.hero-dot.on {
  background: var(--yellow);
  transform: scale(1.3);
}

.cross-enter-active, .cross-leave-active { transition: opacity .6s ease; }
.cross-enter-from, .cross-leave-to { opacity: 0; }
.rise-enter-active { transition: opacity .5s ease, transform .5s ease; }
.rise-enter-from { opacity: 0; transform: translateY(16px); }
.rise-leave-active { transition: opacity .3s ease; }
.rise-leave-to { opacity: 0; }

@media (max-width: 900px) {
  .hero-main {
    border-radius: 44% 44% 44% 44% / 20% 20% 24% 24%;
  }
  .hero-circle-right {
    right: 50%;
    transform: translate(50%, -50%);
    height: min(74%, 78vw, 440px);
    width: auto;
  }
  .hero-content { padding: 0 14%; align-items: center; text-align: center; }
  .hero-float { right: 14px; }
}
</style>
