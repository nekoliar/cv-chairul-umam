<template>
  <section id="skills" class="section-padding">
    <div class="max-w-6xl mx-auto px-6 lg:px-12">

      <!-- Section Header -->
      <div ref="headerRef" class="text-center mb-16" :class="headerVisible ? 'animate-fade-in-up' : 'opacity-0'">
        <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-brand-primary bg-brand-primary/8 border border-brand-primary/20 mb-4">
          Kompetensi
        </span>
        <h2 class="font-display text-4xl lg:text-5xl font-bold text-ink">Keahlian Inti</h2>
        <p class="mt-4 text-ink-secondary max-w-xl mx-auto">
          Kombinasi keahlian teknis mendalam dan kemampuan profesional yang mendorong hasil nyata di lapangan.
        </p>
      </div>

      <!-- 2-column Skills Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <!-- Technical Skills -->
        <div ref="techRef" :class="techVisible ? 'animate-slide-in-left' : 'opacity-0'">
          <div class="bg-white rounded-2xl p-8 border border-ink-faint/40 shadow-card h-full">
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                style="background: linear-gradient(135deg, #5656a0, #3e3e87)"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.7-1.41 2.4l-1.97-.394m-10.9-1.408L5 14.5m0 0L3.598 15.9c-1 1-.03 2.7 1.41 2.4l1.97-.394m0 0a9.049 9.049 0 0010.04 0" />
                </svg>
              </div>
              <div>
                <h3 class="font-display font-semibold text-lg text-ink">Technical Proficiency</h3>
                <p class="text-xs text-ink-muted">Keahlian Teknis QC</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2.5">
              <div
                v-for="(skill, index) in technicalSkills"
                :key="skill.label"
                class="pill-technical flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-medium text-white"
                style="background: linear-gradient(135deg, #110c5a, #3e3e87)"
                :style="{ opacity: techVisible ? 1 : 0, animation: techVisible ? `popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.05 + index * 0.07}s forwards` : 'none' }"
              >
                <svg class="w-3.5 h-3.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {{ skill.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- Professional Skills -->
        <div ref="profRef" :class="profVisible ? 'animate-slide-in-right' : 'opacity-0'">
          <div class="bg-white rounded-2xl p-8 border border-ink-faint/40 shadow-card h-full">
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-brand-primary/30"
                style="background: #f0ecf3"
              >
                <svg class="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-display font-semibold text-lg text-ink">Professional Skills</h3>
                <p class="text-xs text-ink-muted">Kemampuan Profesional</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2.5">
              <div
                v-for="(skill, index) in professionalSkills"
                :key="skill.label"
                class="pill-professional flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-medium text-ink border border-ink-faint/60 bg-surface-high"
                :style="{ opacity: profVisible ? 1 : 0, animation: profVisible ? `popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.05 + index * 0.07}s forwards` : 'none' }"
              >
                <svg class="w-3.5 h-3.5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {{ skill.label }}
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Stats Bar -->
      <div
        ref="statsRef"
        class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        :class="statsVisible ? 'animate-fade-in-up' : 'opacity-0'"
      >
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="text-center p-6 bg-white rounded-2xl border border-ink-faint/40 shadow-card card-lift"
        >
          <p class="font-display font-bold text-3xl gradient-text">{{ stat.value }}</p>
          <p class="text-sm text-ink-secondary mt-1">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { technicalSkills, professionalSkills } = useCvData()

const headerRef = ref<Element | null>(null)
const techRef = ref<Element | null>(null)
const profRef = ref<Element | null>(null)
const statsRef = ref<Element | null>(null)

const headerVisible = ref(false)
const techVisible = ref(false)
const profVisible = ref(false)
const statsVisible = ref(false)

const stats = [
  { value: '7+', label: 'Tahun Pengalaman' },
  { value: '5', label: 'Sertifikasi Aktif' },
  { value: '35%', label: 'Pengurangan Defect' },
  { value: '3', label: 'Fasilitas Dikelola' },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.value) headerVisible.value = true
          if (entry.target === techRef.value) techVisible.value = true
          if (entry.target === profRef.value) profVisible.value = true
          if (entry.target === statsRef.value) statsVisible.value = true
        }
      })
    },
    { threshold: 0.15 }
  )

  ;[headerRef, techRef, profRef, statsRef].forEach((r) => {
    if (r.value) observer.observe(r.value)
  })
})
</script>
