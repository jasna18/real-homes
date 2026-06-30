<script setup>
const { stories } = useSiteData()
</script>

<template>
  <section id="updates" class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="eyebrow">Stories & Updates</span>
          <h2>From The Newsroom</h2>
        </div>
        <NuxtLink to="/projects" class="link-underline">All Stories</NuxtLink>
      </div>
      <div class="stories">
        <article v-for="s in stories" :key="s.title" class="story">
          <div class="story-media">
            <img :src="s.image" :alt="s.title" loading="lazy" />
          </div>
          <div class="story-body">
            <div class="story-meta">
              <span class="story-tag">{{ s.tag }}</span>
              <span class="story-date">{{ s.date }}</span>
            </div>
            <h3>{{ s.title }}</h3>
            <span class="link-underline">Read More</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.story { cursor: pointer; }
.story-media {
  aspect-ratio: 16 / 11;
  overflow: hidden;
  margin-bottom: 22px;
}
.story-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .7s ease;
}
.story:hover .story-media img { transform: scale(1.05); }
.story-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 14px;
}
.story-tag {
  font-size: 11px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--accent);
}
.story-date { font-size: 13px; color: var(--text-dim); }
.story h3 { font-size: 25px; margin-bottom: 18px; }
@media (max-width: 980px) {
  .stories { grid-template-columns: 1fr; max-width: 560px; }
}
</style>