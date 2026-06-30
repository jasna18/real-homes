<script setup>
const { apartments, communities } = useSiteData()

// Locations list for the Locations dropdown (names only)
const locations = [
  'Dubai', 'Abu Dhabi', 'London', 'Riyadh',
  'Doha', 'Istanbul', 'Cairo', 'Mumbai',
  'Singapore', 'New York', 'Toronto', 'Lagos',
  'Nairobi', 'Casablanca', 'Athens', 'Lisbon'
]

const open = ref(false)
const scrolled = ref(false)

const nav = [
  { label: 'Projects', mega: 'projects' },
  { label: 'Locations', mega: 'locations' },
  { label: 'Construction Updates', to: '/#updates' },
  { label: 'Investment', to: '/#investment' }
]

// Mega-menu categories for the Projects dropdown
const categories = [
  { key: 'apartments', label: 'Residential Apartments', items: apartments },
  { key: 'communities', label: 'Residential Communities', items: communities }
]
const activeCat = ref('apartments')
const activeItems = computed(
  () => categories.find((c) => c.key === activeCat.value)?.items.slice(0, 8) || []
)

// Primary links shown in the slide-in drawer
const menuLinks = [
  { label: 'About', to: '/#about' },
  { label: 'Stories', to: '/#updates' },
  { label: 'Invest', to: '/#investment' },
  { label: 'Offers', to: '/#offers' }
]

// Contact column inside the drawer
const contacts = [
  { dept: 'Customer Care', phone: '+1 800 100 2000', tel: '+18001002000' },
  { dept: 'Marketing Department', phone: '+1 800 300 4000', tel: '+18003004000' },
  { dept: 'Sales Enquiries', phone: '+1 800 500 6000', tel: '+18005006000' }
]

function onScroll() {
  scrolled.value = window.scrollY > 40
}
function close() {
  open.value = false
}
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (import.meta.client) document.body.style.overflow = ''
})
watch(open, (v) => {
  if (import.meta.client) document.body.style.overflow = v ? 'hidden' : ''
})
</script>

<template>
  <header :class="['header', { scrolled, open }]">
    <div class="header-inner container">
      <NuxtLink to="/" class="brand" @click="open = false">
        <span class="brand-mark">RH</span>
        <span class="brand-name">REALHOMES</span>
      </NuxtLink>

      <nav class="nav-desktop">
        <ul>
          <li v-for="item in nav" :key="item.label" class="nav-item">
            <NuxtLink v-if="item.to" :to="item.to" class="nav-link">{{ item.label }}</NuxtLink>
            <template v-else>
              <span class="nav-link has-children">{{ item.label }}</span>

              <div v-if="item.mega === 'projects'" class="mega">
                <div class="mega-inner">
                  <aside class="mega-cats">
                    <button
                      v-for="c in categories"
                      :key="c.key"
                      :class="['mega-cat', { active: activeCat === c.key }]"
                      @mouseenter="activeCat = c.key"
                    >
                      <span class="mega-cat-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
                             stroke="currentColor" stroke-width="1.6">
                          <rect x="3" y="3" width="8" height="18" rx="1" />
                          <rect x="13" y="9" width="8" height="12" rx="1" />
                          <line x1="6" y1="7" x2="8" y2="7" />
                          <line x1="6" y1="11" x2="8" y2="11" />
                          <line x1="16" y1="13" x2="18" y2="13" />
                        </svg>
                      </span>
                      <span class="mega-cat-label">{{ c.label }}</span>
                      <span class="mega-cat-arrow">&#8594;</span>
                    </button>
                  </aside>

                  <div class="mega-grid-wrap">
                    <div class="mega-grid">
                      <NuxtLink
                        v-for="p in activeItems"
                        :key="p.name"
                        to="/projects"
                        class="mega-card"
                      >
                        <span class="mega-thumb">
                          <img :src="p.image" :alt="p.name" loading="lazy" />
                        </span>
                        <span class="mega-name">{{ p.name }}</span>
                        <span class="mega-price">
                          <svg class="dirham" viewBox="0 0 32 28" fill="none" stroke="currentColor"
                               stroke-width="3" stroke-linecap="square" stroke-linejoin="round" aria-label="AED">
                            <path d="M12 5 H17 C25 5 28.5 9.5 28.5 14 C28.5 18.5 25 23 17 23 H12 V5 Z" />
                            <line x1="4.5" y1="11.5" x2="20" y2="11.5" />
                            <line x1="4.5" y1="16.5" x2="20" y2="16.5" />
                          </svg>
                          <span>{{ p.price }}</span>
                        </span>
                      </NuxtLink>
                    </div>
                    <NuxtLink to="/projects" class="mega-more">
                      View More <span class="mega-more-arrow">&#8594;</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <div v-else-if="item.mega === 'locations'" class="mega mega-loc">
                <div class="mega-inner mega-loc-inner">
                  <div class="loc-grid">
                    <NuxtLink
                      v-for="l in locations"
                      :key="l"
                      to="/projects"
                      class="loc-link"
                    >
                      {{ l }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </template>
          </li>
        </ul>
      </nav>

      <div class="header-actions">
        <button class="burger" :aria-expanded="open" aria-label="Menu" @click="open = !open">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <transition name="fade">
      <div v-if="open" class="drawer-backdrop" @click="close" />
    </transition>

    <transition name="drawer">
      <aside v-if="open" class="drawer" role="dialog" aria-modal="true">
        <div class="drawer-head">
          <NuxtLink to="/" class="brand" @click="close">
            <span class="brand-mark">RH</span>
            <span class="brand-name">REALHOMES</span>
          </NuxtLink>
          <button class="drawer-close" aria-label="Close menu" @click="close">&times;</button>
        </div>

        <div class="drawer-body">
          <nav class="drawer-nav">
            <NuxtLink
              v-for="l in menuLinks"
              :key="l.label"
              :to="l.to"
              class="drawer-link"
              @click="close"
            >
              <span>{{ l.label }}</span>
              <span class="drawer-link-arrow" aria-hidden="true">&#8594;</span>
            </NuxtLink>
          </nav>

          <div class="drawer-contact">
            <h4>Contact Us</h4>
            <div class="contact-list">
              <a
                v-for="c in contacts"
                :key="c.dept"
                :href="`tel:${c.tel}`"
                class="contact-card"
              >
                <span class="contact-text">
                  <span class="contact-dept">{{ c.dept }}</span>
                  <span class="contact-phone">{{ c.phone }}</span>
                </span>
                <span class="contact-arrow" aria-hidden="true">&#8594;</span>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </transition>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding-top: 0;
  transition: padding .4s ease;
}
.header.scrolled {
  padding-top: 16px;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 84px;
  border: 1px solid transparent;
  transition: height .4s ease, max-width .4s ease, background .4s ease,
              border-color .4s ease, border-radius .4s ease, box-shadow .4s ease;
}
.header.scrolled .header-inner {
  height: 64px;
  max-width: 1240px;
  width: calc(100% - 48px);
  margin: 0 auto;
  background: rgba(255, 255, 255, .82);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, .75);
  border-radius: 999px;
  box-shadow: 0 14px 44px rgba(26, 23, 20, .12);
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand-mark {
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: .04em;
  border: 1px solid var(--yellow);
  color: var(--yellow);
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
}
.brand-name {
  font-size: 16px;
  letter-spacing: .34em;
  font-weight: 700;
  color: #000;
}
.nav-desktop ul {
  display: flex;
  gap: 38px;
}
.nav-item {
  position: relative;
}
.nav-link {
  font-size: 13px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--text);
  cursor: pointer;
}
.nav-link:hover {
  color: var(--accent);
}
.has-children::after {
  content: ' \25BE';
  font-size: 9px;
  color: var(--accent);
}
/* Projects mega-menu (glass panel) */
.mega {
  position: fixed;
  top: 85px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  width: calc(100% - 48px);
  max-width: 1280px;
  z-index: 105;
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s ease, transform .3s ease, visibility .3s;
}
.mega::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: -30px;
  height: 30px;
}
.nav-item:hover .mega {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}
/* At top (not scrolled): attach flush under the full-width header */
.header:not(.scrolled) .mega {
  top: 89px;
  left: 0;
  right: 0;
  width: 100%;
  max-width: none;
  transform: translateX(0) translateY(10px);
}
.header:not(.scrolled) .nav-item:hover .mega {
  transform: translateX(0) translateY(0);
}
.header:not(.scrolled) .mega-inner {
  border-radius: 22px;
}
.mega-inner {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 36px;
  background: rgba(255, 255, 255, .88);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, .75);
  border-radius: 20px;
  box-shadow: 0 30px 70px rgba(26, 23, 20, .18);
  padding: 26px 30px 30px;
}
.mega-cats {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.mega-cat {
  display: flex;
  align-items: center;
  gap: 16px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 14px;
  padding: 16px 18px;
  cursor: pointer;
  text-align: left;
  transition: background .25s ease, border-color .25s ease, box-shadow .25s ease;
}
.mega-cat.active {
  background: #fff;
  border-color: var(--line);
  box-shadow: 0 10px 30px rgba(26, 23, 20, .08);
}
.mega-cat-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: var(--yellow);
  color: #111;
}
.mega-cat-label {
  flex: 1;
  font-size: 14px;
  letter-spacing: .03em;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--text);
}
.mega-cat-arrow {
  color: var(--text);
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity .25s ease, transform .25s ease;
}
.mega-cat.active .mega-cat-arrow {
  opacity: 1;
  transform: translateX(0);
}
.mega-grid-wrap {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.mega-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px 18px;
}
.mega-card {
  display: block;
}
.mega-thumb {
  display: block;
  aspect-ratio: 16 / 11;
  border-radius: 12px;
  overflow: hidden;
}
.mega-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s ease;
}
.mega-card:hover .mega-thumb img {
  transform: scale(1.06);
}
.mega-name {
  display: block;
  margin-top: 10px;
  font-size: 14px;
  letter-spacing: .03em;
  color: var(--text);
}
.mega-card:hover .mega-name {
  color: var(--accent-soft);
}
.mega-price {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 4px;
  font-size: 12px;
  letter-spacing: .03em;
  color: var(--accent);
}
.mega-price .dirham {
  width: 13px;
  height: 11px;
  flex-shrink: 0;
}
.mega-more {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  font-size: 12px;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--text);
  border: 1px solid var(--yellow);
  border-radius: 999px;
  padding: 8px 8px 8px 22px;
}
.mega-more:hover {
  background: var(--yellow);
}
.mega-more-arrow {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--yellow);
  color: #111;
  display: grid;
  place-items: center;
}
/* Locations mega — full width, short height */
.mega-loc {
  left: 0;
  right: 0;
  width: 100%;
  max-width: none;
  transform: translateX(0) translateY(10px);
}
.nav-item:hover .mega-loc {
  transform: translateX(0) translateY(0);
}
.header:not(.scrolled) .mega-loc {
  left: 0;
  right: 0;
  transform: translateX(0) translateY(10px);
}
.header:not(.scrolled) .nav-item:hover .mega-loc {
  transform: translateX(0) translateY(0);
}
.mega-loc-inner {
  display: block;
  padding: 30px clamp(24px, 5vw, 72px);
  border-radius: 0 0 22px 22px;
}
.header:not(.scrolled) .mega-loc-inner {
  border-radius: 0 0 22px 22px;
}
.loc-grid {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px 40px;
}
.loc-link {
  display: block;
  padding: 12px 0;
  font-size: 15px;
  letter-spacing: .04em;
  color: var(--text);
  border-bottom: 1px solid var(--line);
  transition: color .25s ease, padding-left .25s ease;
}
.loc-link:hover {
  color: var(--yellow);
  padding-left: 8px;
}

@media (max-width: 1180px) {
  .mega { display: none; }
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 18px;
}
.burger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.burger span {
  width: 24px;
  height: 1.5px;
  background: var(--text);
  transition: .3s;
}
/* Slide-in drawer */
.drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(26, 23, 20, .45);
  backdrop-filter: blur(2px);
  z-index: 110;
}
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background: var(--bg);
  box-shadow: -30px 0 80px rgba(26, 23, 20, .18);
  z-index: 120;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.drawer-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 26px 48px;
  border-bottom: 1px solid var(--line);
}
.drawer-head .brand-name {
  font-weight: 700;
}
.drawer-close {
  background: none;
  border: none;
  color: var(--yellow);
  font-size: 40px;
  line-height: 1;
  cursor: pointer;
  padding: 0 4px;
  transition: transform .3s ease, opacity .3s ease;
}
.drawer-close:hover {
  transform: rotate(90deg);
  opacity: .8;
}
.drawer-body {
  flex: 1;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 80px;
  padding: 36px 48px 56px;
  align-content: start;
}
.drawer-nav {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.drawer-link {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  width: fit-content;
  font-family: var(--serif);
  font-size: clamp(24px, 3vw, 34px);
  line-height: 1.3;
  color: var(--text);
  padding: 2px 0;
  transition: color .25s ease;
}
.drawer-link:hover {
  color: var(--yellow);
}
.drawer-link-arrow {
  font-family: var(--sans);
  font-size: .7em;
  color: #000;
  opacity: 1;
  transition: transform .25s ease, color .25s ease;
}
.drawer-link:hover .drawer-link-arrow {
  transform: translateX(6px);
  color: var(--yellow);
}
.drawer-contact {
  border-left: 1px solid var(--line);
  padding-left: 48px;
}
.drawer-contact h4 {
  font-family: var(--sans);
  font-size: 18px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 30px;
  font-weight: 500;
}
.contact-card {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  max-width: 320px;
  background: var(--yellow);
  color: #111;
  border: 1px solid var(--yellow);
  border-radius: 6px;
  padding: 10px 10px 10px 18px;
  margin-bottom: 12px;
  transition: color .4s ease, border-color .4s ease;
}
.contact-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #fff;
  transform: translateX(-100%);
  transition: transform .45s cubic-bezier(.5, 0, .2, 1);
  z-index: 0;
}
.contact-card:hover {
  color: var(--text);
  border-color: var(--line);
}
.contact-card:hover::before {
  transform: translateX(0);
}
.contact-text {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.contact-dept {
  font-size: 10px;
  letter-spacing: .1em;
  text-transform: uppercase;
  opacity: .85;
}
.contact-phone {
  font-family: var(--serif);
  font-size: 19px;
  line-height: 1;
}
.contact-arrow {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff;
  color: #111;
  display: grid;
  place-items: center;
  font-size: 16px;
  transition: background .4s ease, color .4s ease, transform .4s ease;
}
.contact-card:hover .contact-arrow {
  background: var(--yellow);
  color: #111;
  transform: translateX(4px);
}

.fade-enter-active, .fade-leave-active { transition: opacity .3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.drawer-enter-active, .drawer-leave-active { transition: transform .42s cubic-bezier(.5, 0, .2, 1); }
.drawer-enter-from, .drawer-leave-to { transform: translateX(100%); }

@media (max-width: 1080px) {
  .nav-desktop { display: none; }
}
@media (max-width: 680px) {
  .drawer-head { padding: 22px 26px; }
  .drawer-body {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 36px 20px;
    align-content: start;
  }
  /* Links centered in the middle */
  .drawer-nav {
    align-items: center;
    text-align: center;
  }
  .drawer-link {
    justify-content: center;
  }
  /* Contact section centered */
  .drawer-contact {
    border-left: none;
    border-top: 1px solid var(--line);
    padding-left: 0;
    padding-top: 30px;
    text-align: center;
  }
  /* 3 boxes: 2 in a row, 1 centered below */
  .contact-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .contact-card {
    max-width: none;
    margin-bottom: 0;
    gap: 8px;
    padding: 8px 8px 8px 12px;
  }
  .contact-card:last-child {
    grid-column: 1 / -1;
    justify-self: center;
    width: 100%;
    max-width: calc(50% - 6px);
  }
  .contact-dept { font-size: 8px; }
  .contact-phone { font-size: 13px; }
  .contact-arrow {
    width: 28px;
    height: 28px;
    font-size: 13px;
  }
}
</style>
