<script setup>
const useful = ['About Us', 'Investment', 'Contact', 'FAQ', 'Privacy Policy', 'Terms & Conditions']
const locations = ['Dubai', 'Abu Dhabi', 'London', 'Riyadh', 'Doha', 'Istanbul', 'Cairo', 'Mumbai', 'Singapore', 'New York', 'Toronto', 'Lagos', 'Nairobi', 'Casablanca', 'Athens']
const socials = ['Facebook', 'LinkedIn', 'Instagram', 'YouTube']
const email = ref('')
</script>

<template>
  <footer class="footer" id="contact">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand">
            <span class="brand-mark">RH</span>
            <span class="brand-name">REALHOMES</span>
          </div>
          <p class="footer-tagline">
            Crafting iconic residential apartments and master-planned communities
            for a life beyond expectation.
          </p>
          <div class="socials">
            <a v-for="s in socials" :key="s" href="#" class="social">{{ s[0] }}</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Useful Links</h4>
          <ul>
            <li v-for="u in useful" :key="u"><a href="#" class="footer-link">{{ u }}</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Locations</h4>
          <ul class="loc-grid">
            <li v-for="l in locations" :key="l"><a href="#" class="footer-link">{{ l }}</a></li>
          </ul>
        </div>

        <div class="footer-col footer-news">
          <h4>Newsletter</h4>
          <p>Subscribe for new launches, investment insights and exclusive offers.</p>
          <form class="news-form" @submit.prevent>
            <input v-model="email" type="email" placeholder="Your email address" />
            <button type="submit" class="btn btn-solid">Subscribe</button>
          </form>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} RealHomes Development. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  /* Amber-on-earthy-green theme — overrides the global light vars for all children */
  --line: rgba(226, 164, 55, .20);
  --text: #f4efe2;
  --text-dim: rgba(244, 239, 226, .60);
  --accent: #e2a437;
  position: relative;
  background:
    radial-gradient(120% 90% at 85% 0%, rgba(226, 164, 55, .10), transparent 60%),
    linear-gradient(180deg, #182520 0%, #121b17 100%);
  border-top: 2px solid var(--accent);
  padding: 84px 0 32px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.4fr 1.4fr;
  gap: 48px;
  padding-bottom: 56px;
  border-bottom: 1px solid var(--line);
}
.brand { display: flex; align-items: center; gap: 12px; }
.brand-mark {
  font-family: var(--serif);
  font-size: 20px;
  border: 1px solid var(--accent);
  color: var(--accent);
  width: 40px; height: 40px;
  display: grid; place-items: center;
}
.brand-name { font-size: 15px; letter-spacing: .32em; }
.footer-tagline {
  color: var(--text-dim);
  font-size: 14px;
  max-width: 320px;
  margin: 24px 0;
}
.socials { display: flex; gap: 12px; }
.social {
  width: 38px; height: 38px;
  border: 1px solid var(--line);
  display: grid; place-items: center;
  font-size: 13px;
  color: var(--text-dim);
}
.social:hover { border-color: var(--accent); color: var(--accent); }
.footer-col h4 {
  font-family: var(--sans);
  font-size: 12px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 22px;
  font-weight: 500;
}
.footer-col ul { display: flex; flex-direction: column; gap: 12px; }
.loc-grid {
  display: grid !important;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
}
.footer-link { font-size: 14px; color: var(--text-dim); }
.footer-link:hover { color: var(--text); }
.footer-news p { color: var(--text-dim); font-size: 14px; margin-bottom: 18px; }
.news-form { display: flex; flex-direction: column; gap: 12px; }
.news-form input {
  background: transparent;
  border: 1px solid var(--line);
  padding: 14px 16px;
  color: var(--text);
  font-family: var(--sans);
  font-size: 14px;
}
.news-form input:focus { outline: none; border-color: var(--accent); }
.news-form .btn-solid {
  background: var(--accent);
  border-color: var(--accent);
  color: #1b140a;
  font-weight: 500;
  transition: background .3s ease, border-color .3s ease, transform .3s ease;
}
.news-form .btn-solid:hover {
  background: #f0b955;
  border-color: #f0b955;
  transform: translateY(-2px);
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 28px;
}
.footer-bottom p { color: var(--text-dim); font-size: 13px; }
.footer-bottom-links { display: flex; gap: 24px; }
.footer-bottom-links a { font-size: 13px; color: var(--text-dim); }
.footer-bottom-links a:hover { color: var(--accent); }
@media (max-width: 980px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
}
@media (max-width: 560px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; gap: 16px; }
}
</style>
