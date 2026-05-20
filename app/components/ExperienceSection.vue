<template>
  <section id="experience" class="section-padding">
    <div class="max-w-6xl mx-auto px-6 lg:px-12">

      <!-- Section Header -->
      <div ref="headerRef" class="text-center mb-20" :class="headerVisible ? 'animate-fade-in-up' : 'opacity-0'">
        <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-brand-primary bg-brand-primary/8 border border-brand-primary/20 mb-4">
          Riwayat Karier
        </span>
        <h2 class="font-display text-4xl lg:text-5xl font-bold text-ink">Pengalaman Kerja</h2>
        <p class="mt-4 text-ink-secondary max-w-xl mx-auto">
          Perjalanan profesional di industri Food & Beverage dengan fokus pada keunggulan kualitas dan keamanan pangan.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Center Line (Desktop) -->
        <div class="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full">
          <div class="timeline-line h-full w-full"></div>
        </div>

        <!-- Experience Cards -->
        <div class="flex flex-col gap-0">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.id"
            :ref="(el) => setCardRef(el, index)"
            class="relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            <!-- Left slot (odd items on desktop) -->
            <div
              class="lg:pr-16"
              :class="[
                index % 2 === 0 ? 'lg:block' : 'lg:hidden',
                cardVisible[index] && index % 2 === 0
                  ? 'animate-slide-in-left'
                  : index % 2 === 0 ? 'opacity-0' : ''
              ]"
            >
              <ExperienceCard v-if="index % 2 === 0" :exp="exp" />
            </div>

            <!-- Center dot (Desktop) -->
            <div class="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 items-center justify-center z-10">
              <div class="w-5 h-5 rounded-full border-4 border-brand-primary-fixed-dim bg-white shadow-sm"></div>
            </div>

            <!-- Right slot (even items on desktop, shifted) -->
            <div
              class="lg:pl-16"
              :class="[
                index % 2 === 1 ? 'lg:block' : 'lg:hidden',
                'lg:col-start-2',
                cardVisible[index] && index % 2 === 1
                  ? 'animate-slide-in-right'
                  : index % 2 === 1 ? 'opacity-0' : ''
              ]"
            >
              <ExperienceCard v-if="index % 2 === 1" :exp="exp" />
            </div>

            <!-- Mobile: always show -->
            <div class="lg:hidden col-span-full" :class="cardVisible[index] ? 'animate-fade-in-up' : 'opacity-0'">
              <ExperienceCard :exp="exp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { experiences } = useCvData()

const headerRef = ref<Element | null>(null)
const headerVisible = ref(false)
const cardRefs = ref<(Element | null)[]>([])
const cardVisible = ref<boolean[]>(experiences.map(() => false))

const setCardRef = (el: any, index: number) => {
  if (el) cardRefs.value[index] = el as Element
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === headerRef.value && entry.isIntersecting) {
          headerVisible.value = true
        }
        cardRefs.value.forEach((ref, i) => {
          if (entry.target === ref && entry.isIntersecting) {
            setTimeout(() => {
              cardVisible.value[i] = true
            }, 80)
          }
        })
      })
    },
    { threshold: 0.15 }
  )

  if (headerRef.value) observer.observe(headerRef.value)
  cardRefs.value.forEach((ref) => {
    if (ref) observer.observe(ref)
  })
})
</script>
