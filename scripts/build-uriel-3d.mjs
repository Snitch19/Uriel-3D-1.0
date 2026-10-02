import fs from 'fs';

let html = fs.readFileSync('public/landing-pages/kage-canonical.html', 'utf8');

// 1. Meta & Title
html = html.replace(
  '<title>Kage — Where stillness reveals the unseen</title>',
  '<title>The Uriel Initiative — 3D Youth Technology Hub in Ekpoma, Edo State</title>'
);
html = html.replace(
  '<meta name="description" content="A five-chapter night walk through a Kyoto mountain temple. Charred cypress, lantern light and a vermilion moon, rendered live in WebGL.">',
  '<meta name="description" content="Grassroots youth technology hub providing practical software engineering, 40 dedicated workstations, uninterrupted 10kVA solar power, and live mentorship in Ekpoma, Edo State, Nigeria.">'
);

// 2. Custom CSS Styles for Uriel Initiative
const customCss = `
/* ======================== The Uriel Initiative 3D Styles ======================== */
:root {
  --uriel-orange: #EA580C;
  --uriel-orange-hover: #C2410C;
}

.uriel-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 9999px;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  background: rgba(234, 88, 12, 0.15);
  color: #FDBA74;
  border: 1px solid rgba(234, 88, 12, 0.35);
  margin-bottom: 12px;
}

.uriel-tiers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin: 28px 0 20px;
}

.tier-btn {
  position: relative;
  background: rgba(12, 16, 20, 0.85);
  border: 1px solid rgba(223, 231, 224, 0.14);
  border-radius: 12px;
  padding: 16px 18px;
  text-align: left;
  color: var(--bone);
  cursor: pointer;
  transition: all 0.22s ease;
  backdrop-filter: blur(12px);
}

.tier-btn:hover {
  border-color: rgba(234, 88, 12, 0.5);
  background: rgba(22, 28, 36, 0.95);
  transform: translateY(-2px);
}

.tier-btn--active {
  border-color: #EA580C !important;
  background: rgba(234, 88, 12, 0.16) !important;
  box-shadow: 0 0 24px rgba(234, 88, 12, 0.25);
}

.tier-btn b {
  display: block;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 4px;
  color: #FFFFFF;
}

.tier-btn span {
  display: block;
  font-size: 12px;
  color: var(--bone-dim);
  font-family: var(--font-mono, monospace);
}

.badge-pop {
  position: absolute;
  top: -8px;
  right: 12px;
  background: #EA580C;
  color: #FFFFFF !important;
  font-size: 10px !important;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 7px;
  border-radius: 9999px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.4);
}

.grid-card {
  background: rgba(10, 14, 18, 0.88);
  border: 1px solid rgba(223, 231, 224, 0.12);
  border-radius: 16px;
  padding: 22px 26px;
  backdrop-filter: blur(16px);
  margin-top: 14px;
}

.grid-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  border-bottom: 1px solid rgba(223, 231, 224, 0.08);
  padding-bottom: 16px;
  margin-bottom: 18px;
}

.grid-title {
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  display: block;
}

.grid-desc {
  font-size: 12px;
  color: var(--muted);
  margin: 4px 0 0;
}

.grid-stat {
  text-align: right;
}

.grid-stat span {
  display: block;
  font-size: 12px;
  color: var(--bone-dim);
}

.grid-stat b {
  display: block;
  font-size: 18px;
  color: #EA580C;
  font-family: var(--font-mono, monospace);
  font-weight: 700;
}

.seat-container {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 8px;
}

@media (max-width: 768px) {
  .seat-container {
    grid-template-columns: repeat(8, 1fr);
    gap: 6px;
  }
}

@media (max-width: 480px) {
  .seat-container {
    grid-template-columns: repeat(5, 1fr);
    gap: 6px;
  }
}

.seat-box {
  height: 38px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s ease;
  border: 1px solid rgba(223, 231, 224, 0.1);
  background: rgba(223, 231, 224, 0.04);
  color: var(--muted);
}

.seat-box:hover {
  border-color: rgba(234, 88, 12, 0.6);
  color: #FFFFFF;
  transform: scale(1.08);
  z-index: 2;
}

.seat-box.is-funded {
  background: #EA580C;
  border-color: #EA580C;
  color: #FFFFFF;
  box-shadow: 0 0 10px rgba(234, 88, 12, 0.4);
}

.grid-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(223, 231, 224, 0.08);
}

.grid-legend {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 12px;
  color: var(--bone-dim);
  flex-wrap: wrap;
}

.dot-funded {
  display: inline-block;
  width: 9px;
  height: 9px;
  background: #EA580C;
  border-radius: 2px;
  vertical-align: middle;
  margin-right: 4px;
}

.dot-avail {
  display: inline-block;
  width: 9px;
  height: 9px;
  background: rgba(223, 231, 224, 0.12);
  border-radius: 2px;
  vertical-align: middle;
  margin-right: 4px;
}

.unit-rate {
  color: var(--muted);
  font-family: var(--font-mono, monospace);
  font-size: 11px;
}

.cta--sponsor {
  background: #EA580C !important;
  color: #FFFFFF !important;
  border-color: #EA580C !important;
  font-weight: 700;
}

.cta--sponsor:hover {
  background: #C2410C !important;
  box-shadow: 0 0 18px rgba(234, 88, 12, 0.5) !important;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
  margin: 30px 0 24px;
}

.c-card {
  background: rgba(12, 16, 20, 0.8);
  border: 1px solid rgba(223, 231, 224, 0.12);
  border-radius: 12px;
  padding: 18px 20px;
  backdrop-filter: blur(12px);
}

.c-label {
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #EA580C;
  font-weight: 700;
  margin-bottom: 5px;
  font-family: var(--font-mono, monospace);
}

.c-card b {
  display: block;
  font-size: 15px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 3px;
}

.c-card p {
  font-size: 12px;
  color: var(--muted);
  margin: 0;
}

.contact-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.cta--ghost {
  background: rgba(223, 231, 224, 0.06) !important;
  border: 1px solid rgba(223, 231, 224, 0.15) !important;
  color: var(--bone) !important;
}

.cta--ghost:hover {
  background: rgba(223, 231, 224, 0.12) !important;
  color: #FFFFFF !important;
}
`;

html = html.replace('</style>', customCss + '\n</style>');

// 3. 3D Wordmark in JavaScript
html = html.replace("const word = 'KAGE', gl = [];", "const word = 'URIEL', gl = [];");
html = html.replace("m.font = '600 ' + SZ + 'px Wordmark, sans-serif';", "m.font = '700 ' + SZ + 'px Onest, sans-serif';");

// 4. Section tooltip names
html = html.replace(
  "const names = ['The Hidden Gate', 'The Sanmon', 'Still Gardens', 'Sacred Craft', 'Afterlight', 'Colophon'];",
  "const names = ['Overview', 'Infrastructure', 'Facilities', 'Curriculum', 'Sponsorship', 'Contact'];"
);

// 5. Replace Body Content (Preloader to before /.page)
const p1 = html.indexOf('<!-- ============================================================ preloader -->');
const p2 = html.indexOf('<!-- /.page -->');

const newBody = `<!-- ============================================================ preloader -->
<div id="pre">
  <div class="pre-in">
    <div class="pre-mark">
      <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <circle cx="22" cy="22" r="18" fill="#EA580C" fill-opacity=".95"/>
        <path d="M14 26C15 28 18 30 22 30C26 30 29 28 30 26M22 12V22" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="pre-jp jp" style="letter-spacing:0.18em; font-family:var(--font-display); font-weight:700;">THE URIEL INITIATIVE</div>
    <div class="pre-bar"><i id="pre-fill" style="background:#EA580C;"></i></div>
    <div class="pre-meta">
      <span>Initializing Ekpoma Youth Tech Facility</span><b><span id="pre-pct">0</span>%</b>
    </div>
  </div>
</div>

<!-- ============================================================ nav -->
<header class="nav" id="nav">
  <a class="brand" href="#hero" data-cursor>
    <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <circle cx="22" cy="22" r="18" fill="#EA580C" fill-opacity=".95"/>
      <path d="M14 26C15 28 18 30 22 30C26 30 29 28 30 26M22 12V22" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
    </svg>
    <span class="brand-tx"><b>THE URIEL INITIATIVE</b><i>EKPOMA • EDO STATE</i></span>
  </a>
  <nav class="nav-links" id="navlinks">
    <a class="nav-link" href="#gate" data-cursor><span>Infrastructure</span><span class="alt">40 Desks</span></a>
    <a class="nav-link" href="#pathways" data-cursor><span>Facilities</span><span class="alt">Solar Lab</span></a>
    <a class="nav-link" href="#lessons" data-cursor><span>Curriculum</span><span class="alt">Mentorship</span></a>
    <a class="nav-link" href="#sponsorship" data-cursor><span>Sponsorship</span><span class="alt">40 Seats</span></a>
    <a class="nav-link" href="#contact" data-cursor><span>Contact</span><span class="alt">Hub Visit</span></a>
  </nav>
  <button class="nav-burger" aria-label="Menu" data-cursor><i></i><i></i></button>
</header>

<div class="page" id="top">

<!-- ============================================================ hero -->
<section class="hero" id="hero" data-cam="0">
  <div class="hero-top">
    <div class="eyebrow" data-rv="fade">
      <span class="dot" style="background:#EA580C;"></span> Ekpoma, Edo State • 40 Workstations • 10kVA Solar
    </div>
    <h1 class="display h-hero">
      <span class="mask-line"><span>Tech literacy</span></span>
      <span class="mask-line"><span>in Edo State,</span></span>
      <span class="mask-line"><span style="color:#EA580C;">starting with Ekpoma.</span></span>
    </h1>
    <p class="hero-sub body" data-rv="up">
      Equipping local university students with 40 dedicated computer workstations, continuous 10kVA solar electricity,
      Starlink satellite internet, and hands-on software engineering mentorship.
    </p>
  </div>
  <div class="hero-spacer"></div>
  <div class="hero-foot">
    <div class="hero-cue" data-rv="fade">
      <span>Scroll to explore</span><span class="track"><i></i></span>
    </div>
    <div class="chapters" id="chips">
      <div class="chip" data-chip="0" data-rv="up" data-cursor>
        <span class="num">01</span>
        <span class="tx"><b>40 Terminals</b><p>Dedicated Core i7 setups with dual 1080p IPS displays &amp; NVMe storage.</p></span>
      </div>
      <div class="chip" data-chip="1" data-rv="up" data-cursor>
        <span class="num">02</span>
        <span class="tx"><b>10kVA Solar</b><p>99.8% uptime with 15kWh LiFePO4 battery bank, eliminating grid blackouts.</p></span>
      </div>
      <div class="chip" data-chip="2" data-rv="up" data-cursor>
        <span class="num">03</span>
        <span class="tx"><b>Starlink Link</b><p>Low-latency satellite internet for GitHub pushes &amp; remote pair programming.</p></span>
      </div>
      <div class="chip" data-chip="3" data-rv="up" data-cursor>
        <span class="num">04</span>
        <span class="tx"><b>Mentorship</b><p>4 years of youth development with 100+ graduates placed in engineering.</p></span>
      </div>
    </div>
  </div>

  <a class="peek" href="#pathways" data-view="3" data-rv="fade" data-cursor aria-label="Preview: Workstation Lab">
    <span class="peek-fr" data-frame></span>
    <span class="peek-play"><svg viewBox="0 0 22 22" fill="none"><path d="M8 5.6 16.4 11 8 16.4z" fill="#dfe7e0"/></svg></span>
    <span class="peek-cap"><b>40 Desks</b><i>Workstation Lab — Ekpoma Hub</i></span>
  </a>

  <div class="word-fb" aria-hidden="true">URIEL</div>

  <div class="hero-side" data-rv="up">
    <span class="v" style="letter-spacing:0.2em; font-family:var(--font-mono); font-size:11px; text-transform:uppercase;">EKPOMA • 40 SEATS • SOLAR</span>
  </div>
</section>

<!-- ============================================================ chapter I -->
<section class="sec" id="gate" data-cam="1">
  <div class="fg" data-fg="gate" aria-hidden="true">
    <span class="fg-el fg-wall" data-fg-in="left">
      <img src="secret-pathways-assets/foreground/png/temple-wall.webp" alt="" width="1536" height="884" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-pine" data-fg-in="right">
      <img src="secret-pathways-assets/foreground/png/pine-tree.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
  </div>

  <div class="sec-head" data-rv="fade">
    <span class="k"><b>01</b> — Core Infrastructure</span><span class="rule"></span><span class="k">HUB ENTRANCE</span>
  </div>

  <div class="story">
    <h2 class="display h-sec" data-rv="up">Dedicated compute, unbroken solar power, real mentorship.</h2>
    <div class="story-body body-lg" data-rv="up">
      <p>
        The greatest obstacle facing computer science and software students in Ekpoma is not intelligence or ambition — it is infrastructure. Frequent power grid collapses and lack of dedicated hardware keep students from learning modern full-stack engineering.
      </p>
      <p>
        The Uriel Initiative solves this at the root. We provide 40 dedicated personal computer workstations powered by a 10kVA hybrid solar lithium microgrid and low-latency Starlink satellite internet, backed by continuous live mentorship.
      </p>
    </div>
    <div class="story-stat" data-rv="up">
      <span class="num" style="color:#EA580C;">99.8%</span>
      <span class="sub">Solar uptime throughout municipal blackouts</span>
    </div>
  </div>
</section>

<!-- ============================================================ chapter II -->
<section class="sec" id="pathways" data-cam="2">
  <div class="fg" data-fg="pathways" aria-hidden="true">
    <span class="fg-el fg-lantern" data-fg-in="left">
      <img src="secret-pathways-assets/foreground/png/stone-lantern.webp" alt="" width="1024" height="1499" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-bush" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/garden-bush.webp" alt="" width="1717" height="876" loading="lazy" decoding="async">
    </span>
  </div>

  <div class="sec-head" data-rv="fade">
    <span class="k"><b>02</b> — Hub Facilities</span><span class="rule"></span><span class="k">LAB &amp; POWER</span>
  </div>

  <div class="cards" id="cards">
    <article class="card" data-rv="up" data-view="0" data-cursor>
      <div class="card-fr" data-frame>
        <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
        <i class="glow" style="--gx:80.2%; --gy:23.9%; --gr:22%; --gt:6.1s; --gt2:9.7s; --gc1:rgba(234,88,12,.50); --gc2:rgba(194,65,12,.24)"></i>
        <div class="card-lab"><b>Workstations</b><span>40 Desks</span></div>
      </div>
      <div class="card-meta"><span>Dual IPS monitors &amp; NVMe build</span><span>01 / 03</span></div>
    </article>
    <article class="card" data-rv="up" data-view="1" data-cursor>
      <div class="card-fr" data-frame>
        <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
        <i class="glow glow--flame" style="--gx:70.5%; --gy:47.2%; --gr:14%; --gt:3.7s; --gt2:5.3s; --gc1:rgba(255,198,124,.62); --gc2:rgba(234,88,12,.30)"></i>
        <div class="card-lab"><b>Solar Microgrid</b><span>10kVA Lithium</span></div>
      </div>
      <div class="card-meta"><span>Zero-blackout power bank</span><span>02 / 03</span></div>
    </article>
    <article class="card" data-rv="up" data-view="2" data-cursor>
      <div class="card-fr" data-frame>
        <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
        <i class="glow" style="--gx:48.0%; --gy:16.8%; --gr:20%; --gt:7.3s; --gt2:11.2s; --gc1:rgba(255,138,104,.52); --gc2:rgba(208,54,36,.24)"></i>
        <div class="card-lab"><b>Mentorship</b><span>Live Coaching</span></div>
      </div>
      <div class="card-meta"><span>Code reviews &amp; career coaching</span><span>03 / 03</span></div>
    </article>
  </div>
</section>

<!-- ============================================================ chapter III -->
<section class="sec" id="lessons" data-cam="3">
  <div class="fg" data-fg="lessons" aria-hidden="true">
    <span class="fg-el fg-wall fg-el--flip" data-fg-in="right">
      <img src="secret-pathways-assets/foreground/png/temple-wall.webp" alt="" width="1536" height="884" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-stones" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/basalt-stones.webp" alt="" width="1536" height="996" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
  </div>

  <div class="sec-head" data-rv="fade">
    <span class="k"><b>03</b> — Curriculum Pillars</span><span class="rule"></span><span class="k">METHODOLOGY</span>
  </div>

  <div class="cur-head">
    <h2 class="display h-sec" data-rv="up">Five pillars. Four years. 100+ graduates placed.</h2>
    <p class="body-lg" data-rv="up">
      Our curriculum is practical, intensive, and designed for real-world employment. Students build full-stack web architectures, manage git repos, and ship live software.
    </p>
  </div>

  <div class="cur" id="cur">
    <div class="les" data-les="0" data-cursor>
      <span class="k">01</span>
      <h3>Dedicated Hardware Allocation</h3>
      <p>No desk sharing or time slots. Each student has their own workstation reserved throughout their cohort.</p>
      <span class="t">Workstations</span><i class="bar"></i>
    </div>
    <div class="les" data-les="1" data-cursor>
      <span class="k">02</span>
      <h3>Unbroken Solar Continuity</h3>
      <p>10kVA solar hybrid system with 15kWh LiFePO4 batteries ensures coding never stops when the city grid drops.</p>
      <span class="t">Solar 99.8%</span><i class="bar"></i>
    </div>
    <div class="les" data-les="2" data-cursor>
      <span class="k">03</span>
      <h3>Starlink Satellite Uplink</h3>
      <p>High-speed, low-latency satellite internet for rapid cloud builds, container pulls, and remote pair-programming.</p>
      <span class="t">Satellite</span><i class="bar"></i>
    </div>
    <div class="les" data-les="3" data-cursor>
      <span class="k">04</span>
      <h3>Full-Stack Production Stack</h3>
      <p>TypeScript, React, Node.js, Python, PostgreSQL, REST/GraphQL APIs, Git workflows, and cloud deployments.</p>
      <span class="t">Engineering</span><i class="bar"></i>
    </div>
    <div class="les" data-les="4" data-cursor>
      <span class="k">05</span>
      <h3>Career Placement &amp; Mentorship</h3>
      <p>Technical resume coaching, GitHub portfolio reviews, mock interviews, and direct placement into remote roles.</p>
      <span class="t">100+ Alumni</span><i class="bar"></i>
    </div>
  </div>
</section>

<!-- ============================================================ chapter IV: Sponsorship -->
<section class="sec" id="sponsorship" data-cam="4">
  <div class="fg" data-fg="eternity" aria-hidden="true">
    <span class="fg-el fg-hill" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/hill.webp" alt="" width="1774" height="887" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-ruins" data-fg-in="left">
      <img src="secret-pathways-assets/foreground/png/shrine-ruins.webp" alt="" width="1536" height="1001" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
  </div>

  <div class="sec-head" data-rv="fade">
    <span class="k"><b>04</b> — Workstation Capacity Grid</span><span class="rule"></span><span class="k">40 SEATS</span>
  </div>

  <div class="cur-head">
    <h2 class="display h-sec" data-rv="up">Sponsor Ekpoma's Next Generation of Software Engineers.</h2>
    <p class="body-lg" data-rv="up">
      Empower talented students with guaranteed workstation compute, 10kVA solar power, and Starlink connectivity.
      Select an established cohort tier or customize your seat sponsorship below.
    </p>
  </div>

  <!-- Interactive Tier Buttons -->
  <div class="uriel-tiers" data-rv="up">
    <button class="tier-btn" data-seats="5" data-name="Bronze Tier (5 seats)" data-price="₦3,500,000">
      <b>Bronze Tier</b>
      <span>5 Seats • ₦3.5M/yr</span>
    </button>
    <button class="tier-btn" data-seats="10" data-name="Silver Tier (10 seats)" data-price="₦6,500,000">
      <b>Silver Tier</b>
      <span>10 Seats • ₦6.5M/yr</span>
    </button>
    <button class="tier-btn tier-btn--active" data-seats="20" data-name="Gold Tier (20 seats)" data-price="₦12,000,000">
      <span class="badge-pop">Popular</span>
      <b>Gold Tier</b>
      <span>20 Seats • ₦12.0M/yr</span>
    </button>
    <button class="tier-btn" data-seats="40" data-name="Platinum Tier (40 seats)" data-price="₦20,000,000">
      <b>Platinum Tier</b>
      <span>40 Seats • ₦20.0M/yr</span>
    </button>
  </div>

  <!-- Capacity Grid & Calculator -->
  <div class="grid-card" data-rv="up">
    <div class="grid-header">
      <div>
        <span class="grid-title">40-Seat Hub Capacity Grid</span>
        <p class="grid-desc">Click individual seats or select a tier above.</p>
      </div>
      <div class="grid-stat">
        <span id="tier-display-name">Gold Tier (20 seats)</span>
        <b id="tier-display-price">₦12,000,000 / year</b>
      </div>
    </div>

    <!-- 40 Seat Buttons -->
    <div class="seat-container" id="seat-container"></div>

    <div class="grid-foot">
      <div class="grid-legend">
        <span><i class="dot-funded"></i> <b id="funded-count">20</b> Funded</span>
        <span><i class="dot-avail"></i> <b id="avail-count">20</b> Available</span>
        <span class="unit-rate">₦250,000 / seat / yr</span>
      </div>
      <a class="cta cta--sponsor" id="sponsor-whatsapp-btn" href="https://wa.me/2348105990786?text=Hello%20Will%20Osezele%2C%20I%20would%20like%20to%20sponsor%20the%20Gold%20Tier%20(20%20seats)%20at%20The%20Uriel%20Initiative." target="_blank" rel="noopener noreferrer">
        <i></i><span>Sponsor on WhatsApp</span>
        <svg viewBox="0 0 14 14" fill="none" width="13" height="13"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- ============================================================ chapter V: Contact & Hub Visits -->
<section class="sec fin" id="contact" data-cam="5">
  <div class="fg" data-fg="foot" aria-hidden="true">
    <span class="fg-el fg-bush" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/garden-bush.webp" alt="" width="1717" height="876" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-stones" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/basalt-stones.webp" alt="" width="1536" height="996" loading="lazy" decoding="async">
    </span>
  </div>

  <div class="eyebrow" data-rv="fade">Chapter 05 — Leadership &amp; Facility Visits</div>
  <h2 class="display" data-rv="up">Connect with Hub Leadership</h2>
  <p class="body-lg" data-rv="up">
    Meet founder and hub director Will Osezele. Schedule an on-site facility visit in Ekpoma,
    meet our current student engineers, and inspect our solar microgrid in person.
  </p>

  <div class="contact-cards" data-rv="up">
    <div class="c-card">
      <span class="c-label">Hub Director</span>
      <b>Will Osezele</b>
      <p>Founder &amp; Engineering Lead</p>
    </div>
    <div class="c-card">
      <span class="c-label">Facility Location</span>
      <b>Ekpoma, Edo State</b>
      <p>Near Ambrose Alli University</p>
    </div>
    <div class="c-card">
      <span class="c-label">Direct WhatsApp Desk</span>
      <b>+234 810 599 0786</b>
      <p>Instant Sponsor Communication</p>
    </div>
    <div class="c-card">
      <span class="c-label">Official Email</span>
      <b>contact@urielinitiative.org</b>
      <p>Partnerships &amp; Inquiries</p>
    </div>
  </div>

  <div class="contact-actions" data-rv="fade">
    <a class="cta" href="https://wa.me/2348105990786?text=Hello%20Will%2C%20I%20would%20like%20to%20learn%20more%20about%20The%20Uriel%20Initiative%20and%20schedule%20a%20hub%20visit." target="_blank" rel="noopener noreferrer" data-cursor>
      <i></i><span>Chat with Director on WhatsApp</span>
      <svg viewBox="0 0 14 14" fill="none" width="13" height="13"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg>
    </a>
    <a class="cta cta--ghost" href="#hero" data-cursor>
      <span>Back to Top ↑</span>
    </a>
  </div>

  <!-- Footer -->
  <footer class="foot" style="margin-top:60px; padding-top:40px; border-top:1px solid rgba(223,231,224,0.12);">
    <div class="foot-grid">
      <div class="foot-brand">
        <svg viewBox="0 0 44 44" fill="none" width="36" height="36" aria-hidden="true">
          <circle cx="22" cy="22" r="18" fill="#EA580C" />
          <path d="M14 26C15 28 18 30 22 30C26 30 29 28 30 26M22 12V22" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
        <p>The Uriel Initiative — Grassroots youth technology hub providing dedicated workstations, continuous 10kVA solar power, and software engineering mentorship in Ekpoma, Edo State, Nigeria.</p>
      </div>
      <div>
        <h4>Infrastructure</h4>
        <ul>
          <li><a href="#gate" data-cursor>40 Workstations</a></li>
          <li><a href="#pathways" data-cursor>10kVA Solar Grid</a></li>
          <li><a href="#lessons" data-cursor>Starlink Satellite</a></li>
          <li><a href="#lessons" data-cursor>Software Coaching</a></li>
        </ul>
      </div>
      <div>
        <h4>Sponsorship</h4>
        <ul>
          <li><a href="#sponsorship" data-cursor>Bronze (5 Seats)</a></li>
          <li><a href="#sponsorship" data-cursor>Silver (10 Seats)</a></li>
          <li><a href="#sponsorship" data-cursor>Gold (20 Seats)</a></li>
          <li><a href="#sponsorship" data-cursor>Platinum (40 Seats)</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li><a href="#contact" data-cursor>Will Osezele</a></li>
          <li><a href="#contact" data-cursor>Ekpoma, Edo State</a></li>
          <li><a href="https://wa.me/2348105990786" target="_blank" data-cursor>WhatsApp Desk</a></li>
          <li><a href="#contact" data-cursor>Hub Visit</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-base">
      <span>© 2025 The Uriel Initiative. Ekpoma Campus Technology Facility.</span>
      <span>40 Terminals · 10kVA Solar · Starlink · Mentorship</span>
      <span>Real-time Three.js &amp; WebGL</span>
    </div>
  </footer>
</section>
`;

html = html.slice(0, p1) + newBody + html.slice(p2);

// 6. Add wireSeatGrid script inside the master script
const wireSeatGridCode = `
function wireSeatGrid() {
  const container = document.getElementById("seat-container");
  if (!container) return;

  let currentSeats = 20;

  function renderSeats(fundedCount) {
    container.innerHTML = "";
    for (let i = 1; i <= 40; i++) {
      const box = document.createElement("button");
      box.className = "seat-box" + (i <= fundedCount ? " is-funded" : "");
      box.textContent = i < 10 ? "0" + i : "" + i;
      box.title = "Workstation " + (i < 10 ? "0" + i : i) + (i <= fundedCount ? " (Funded)" : " (Available)");
      box.setAttribute("type", "button");
      box.setAttribute("data-cursor", "");
      box.addEventListener("click", () => {
        setSeats(i, "Custom (" + i + " seats)", "₦" + (i * 250000).toLocaleString() + " / year");
      });
      container.appendChild(box);
    }
    const fundedEl = document.getElementById("funded-count");
    const availEl = document.getElementById("avail-count");
    if (fundedEl) fundedEl.textContent = fundedCount;
    if (availEl) availEl.textContent = 40 - fundedCount;
  }

  function setSeats(count, name, price) {
    currentSeats = count;
    renderSeats(count);

    const nameEl = document.getElementById("tier-display-name");
    const priceEl = document.getElementById("tier-display-price");
    if (nameEl) nameEl.textContent = name;
    if (priceEl) priceEl.textContent = price;

    const whatsappBtn = document.getElementById("sponsor-whatsapp-btn");
    if (whatsappBtn) {
      const text = encodeURIComponent("Hello Will Osezele, I would like to sponsor " + name + " (" + count + " workstations) at The Uriel Initiative in Ekpoma.");
      whatsappBtn.href = "https://wa.me/2348105990786?text=" + text;
    }

    document.querySelectorAll(".tier-btn").forEach(btn => {
      btn.classList.toggle("tier-btn--active", +btn.dataset.seats === count);
    });
  }

  document.querySelectorAll(".tier-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setSeats(+btn.dataset.seats, btn.dataset.name, btn.dataset.price + " / year");
    });
  });

  renderSeats(currentSeats);

  window.addEventListener('message', (e) => {
    if (e.data && e.data.type === 'NAVIGATE' && e.data.hash) {
      const t = document.querySelector(e.data.hash);
      if (t) {
        window.scrollTo({ top: (e.data.hash === '#hero' || e.data.hash === '#top') ? 0 : t.offsetTop - 40, behavior: 'smooth' });
      }
    }
  });
}
`;

html = html.replace('function start() {', wireSeatGridCode + '\nfunction start() {\n  wireSeatGrid();');

fs.writeFileSync('public/landing-pages/kage.html', html, 'utf8');
console.log('Successfully wrote transformed public/landing-pages/kage.html. Size:', html.length);
