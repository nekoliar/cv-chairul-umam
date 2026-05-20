<template>
  <section id="education" class="section-padding" style="background: linear-gradient(180deg, #f0ecf3 0%, #fcf8ff 100%)">
    <div class="max-w-6xl mx-auto px-6 lg:px-12">

      <!-- Section Header -->
      <div ref="headerRef" class="text-center mb-16" :class="headerVisible ? 'animate-fade-in-up' : 'opacity-0'">
        <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-brand-primary bg-brand-primary/8 border border-brand-primary/20 mb-4">
          Latar Belakang
        </span>
        <h2 class="font-display text-4xl lg:text-5xl font-bold text-ink">Pendidikan & Sertifikasi</h2>
        <p class="mt-4 text-ink-secondary max-w-xl mx-auto">
          Fondasi akademik yang kuat didukung oleh sertifikasi industri yang relevan di bidang keamanan pangan.
        </p>
      </div>

      <!-- 2-column grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <!-- Left: Academic Education (Timeline) -->
        <div ref="eduRef" :class="eduVisible ? 'animate-slide-in-left' : 'opacity-0'">
          <h3 class="font-display font-semibold text-xl text-ink mb-8 flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg flex items-center justify-center bg-brand-primary text-white shrink-0">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </span>
            Pendidikan Akademik
          </h3>

          <div class="relative pl-8 border-l-2 border-brand-primary/20 flex flex-col gap-10">
            <div
              v-for="(edu, index) in education"
              :key="edu.id"
              class="relative"
              :style="{ animationDelay: `${index * 0.15}s` }"
            >
              <!-- Dot -->
              <div class="absolute -left-[2.35rem] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-brand-primary shadow-sm"></div>

              <div class="bg-white rounded-xl p-5 border border-ink-faint/40 shadow-card card-lift">
                <p class="text-xs font-semibold text-brand-primary uppercase tracking-wide mb-1">{{ edu.period }}</p>
                <h4 class="font-display font-semibold text-ink leading-tight">{{ edu.degree }}</h4>
                <p class="text-sm font-medium text-brand-primary mt-1">{{ edu.institution }}</p>
                <p class="text-xs text-ink-muted mt-1">{{ edu.gpa }}</p>
                <p class="text-sm text-ink-secondary mt-3 leading-relaxed">{{ edu.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Certifications -->
        <div ref="certRef" :class="certVisible ? 'animate-slide-in-right' : 'opacity-0'">
          <h3 class="font-display font-semibold text-xl text-ink mb-8 flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg flex items-center justify-center bg-brand-primary text-white shrink-0">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </span>
            Sertifikasi Profesional
          </h3>

          <div class="flex flex-col gap-4">
            <div
              v-for="(cert, index) in certifications"
              :key="cert.id"
              class="card-lift group flex items-start gap-4 p-5 bg-white rounded-xl border border-ink-faint/40 shadow-card transition-all duration-200 hover:border-brand-primary/30"
              :style="{ opacity: certVisible ? 1 : 0, animation: certVisible ? `fadeInUp 0.5s ease ${index * 0.1}s forwards` : 'none' }"
            >
              <!-- Checkmark Icon -->
              <div
                class="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                style="background: linear-gradient(135deg, #e2dfff, #c2c1ff)"
              >
                <svg class="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>

              <div class="flex-1 min-w-0">
                <h4 class="font-display font-semibold text-sm text-ink leading-snug">{{ cert.title }}</h4>
                <div class="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1.5">
                  <p class="text-xs text-ink-secondary">{{ cert.issuer }}</p>
                  <span class="text-ink-faint">·</span>
                  <span class="text-xs font-medium text-brand-primary">{{ cert.date }}</span>
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
const { education, certifications } = useCvData()

const headerRef = ref<Element | null>(null)
const eduRef = ref<Element | null>(null)
const certRef = ref<Element | null>(null)

const headerVisible = ref(false)
const eduVisible = ref(false)
const certVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.value) headerVisible.value = true
          if (entry.target === eduRef.value) eduVisible.value = true
          if (entry.target === certRef.value) certVisible.value = true
        }
      })
    },
    { threshold: 0.15 }
  )

  ;[headerRef, eduRef, certRef].forEach((r) => {
    if (r.value) observer.observe(r.value)
  })
})
</script>
