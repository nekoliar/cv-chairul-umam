<template>
  <section id="hero" class="min-h-screen flex items-center pt-[72px] overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 lg:px-12 py-20 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Left: Text Content -->
        <div class="flex flex-col gap-6 order-2 lg:order-1">
          <!-- Status Badge -->
          <div
            class="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full border border-brand-primary/20 bg-brand-primary/5"
            :style="animationStyle(0)"
          >
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span class="text-xs font-semibold text-brand-primary tracking-wide uppercase">
              {{ cv.personal.badge }}
            </span>
          </div>

          <!-- Name Heading -->
          <h1
            class="font-display text-5xl lg:text-6xl font-bold leading-tight text-ink"
            :style="animationStyle(1)"
          >
            {{ cv.personal.name }}
          </h1>

          <!-- Role Subheading -->
          <div :style="animationStyle(2)">
            <p class="font-display text-xl font-semibold gradient-text">
              {{ cv.personal.role }}
            </p>
          </div>

          <!-- Summary -->
          <p
            class="text-ink-secondary text-base leading-relaxed max-w-lg"
            :style="animationStyle(3)"
          >
            {{ cv.personal.summary }}
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-wrap gap-4" :style="animationStyle(4)">
            <a
              href="#experience"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style="background: linear-gradient(135deg, #5656a0, #3e3e87)"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Lihat Pengalaman
            </a>
            <a
              href="#contact"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-brand-primary border border-brand-primary/30 bg-brand-primary/5 transition-all duration-200 hover:bg-brand-primary/10 hover:-translate-y-0.5"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hubungi Saya
            </a>
          </div>

          <!-- Contact Meta -->
          <div class="flex flex-wrap gap-5 pt-2" :style="animationStyle(5)">
            <a :href="`mailto:${cv.personal.email}`" class="flex items-center gap-2 text-sm text-ink-muted hover:text-brand-primary transition-colors">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              {{ cv.personal.email }}
            </a>
            <div class="flex items-center gap-2 text-sm text-ink-muted">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {{ cv.personal.location }}
            </div>
          </div>
        </div>

        <!-- Right: Visual / Image Placeholder -->
        <div class="relative flex justify-center order-1 lg:order-2" :style="animationStyle(1)">
          <div class="relative w-full max-w-sm">
            <!-- Main Image Placeholder -->
            <div
              class="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-card-hover"
              style="background: linear-gradient(145deg, #e2dfff 0%, #c2c1ff 50%, #a0a0d8 100%)"
            >
              <!-- Abstract QC-themed decorative content -->
              <div class="w-full h-full flex flex-col items-center justify-center gap-5 relative">
                <!-- Decorative circles -->
                <div class="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                  <div class="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white"></div>
                  <div class="absolute bottom-20 right-8 w-20 h-20 rounded-full border-4 border-white"></div>
                  <div class="absolute top-1/3 right-4 w-12 h-12 rounded-full border-4 border-white"></div>
                </div>
                
                <!-- Profile Avatar -->
                <div
                  class="w-36 h-36 rounded-full overflow-hidden shadow-xl border-4 border-white z-10"
                >
                  <img src="~/assets/img/fotoprofil.jpeg" alt="Chairul Umam Pelayati" class="w-full h-full object-cover object-top" />
                </div>
                
                <div class="text-center px-6 z-10">
                  <p class="font-display font-bold text-brand-primary-container text-xl">Chairul Umam Pelayati</p>
                  <p class="text-brand-primary text-sm font-medium mt-1">QC Specialist · 7+ Years Exp.</p>
                </div>
                
                <!-- Stats row -->
                <div class="flex gap-6 mt-2 z-10 bg-white/40 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/50">
                  <div class="text-center">
                    <p class="font-display font-bold text-xl text-brand-primary-container">100%</p>
                    <p class="text-[10px] text-ink-secondary uppercase tracking-wider font-semibold">Compliance</p>
                  </div>
                  <div class="w-px bg-brand-primary/20"></div>
                  <div class="text-center">
                    <p class="font-display font-bold text-xl text-brand-primary-container">3</p>
                    <p class="text-[10px] text-ink-secondary uppercase tracking-wider font-semibold">Facilities</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating ISO Badge -->
            <div class="absolute -bottom-4 -right-4 lg:-right-8 animate-levitate">
              <div
                class="px-4 py-3 rounded-xl shadow-card-hover border border-brand-primary/20"
                style="background: rgba(255,255,255,0.95); backdrop-filter: blur(8px)"
              >
                <div class="flex items-center gap-2.5">
                  <div
                    class="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                    style="background: linear-gradient(135deg, #5656a0, #3e3e87)"
                  >
                    ISO
                  </div>
                  <div>
                    <p class="text-xs font-bold text-ink leading-none">ISO 22000</p>
                    <p class="text-xs text-ink-muted">Certified</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating HACCP Badge -->
            <div class="absolute -top-4 -left-4 lg:-left-8 animate-levitate" style="animation-delay: 1.5s">
              <div
                class="px-4 py-3 rounded-xl shadow-card-hover border border-green-200"
                style="background: rgba(255,255,255,0.95); backdrop-filter: blur(8px)"
              >
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-lg flex items-center justify-center bg-green-500 text-white">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs font-bold text-ink leading-none">HACCP</p>
                    <p class="text-xs text-ink-muted">Practitioner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { personal } = useCvData()
const cv = { personal }

// Staggered animation style helper
const animationStyle = (index: number) => ({
  opacity: '0',
  animation: `fadeInUp 0.6s ease ${index * 0.12}s forwards`,
})
</script>
