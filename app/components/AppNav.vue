<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down"
    :class="isScrolled ? 'navbar-glass shadow-glass' : 'bg-transparent'"
  >
    <nav class="max-w-6xl mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
      <!-- Logo / Brand -->
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-ink-faint/30">
          <img src="~/assets/img/fotoprofil.jpeg" alt="Avatar" class="w-full h-full object-cover object-top" />
        </div>
        <div class="hidden sm:block">
          <p class="font-display font-semibold text-ink text-sm leading-tight">Chairul Umam Pelayati</p>
          <p class="text-ink-muted text-xs">QC Specialist — F&B</p>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-ink-secondary hover:text-brand-primary transition-colors duration-200 relative group"
        >
          {{ link.label }}
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full rounded-full"
          ></span>
        </a>
        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
          style="background: linear-gradient(135deg, #5656a0, #3e3e87)"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          Download CV
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 rounded-lg text-ink-secondary hover:bg-surface-high transition-colors"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu Dropdown -->
    <Transition name="menu-slide">
      <div
        v-if="mobileOpen"
        class="md:hidden navbar-glass border-t border-ink-faint/30 px-6 py-4 flex flex-col gap-4"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-ink-secondary hover:text-brand-primary transition-colors py-1"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
        <a
          href="#contact"
          class="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
          style="background: linear-gradient(135deg, #5656a0, #3e3e87)"
          @click="mobileOpen = false"
        >
          Download CV
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { href: '#experience', label: 'Pengalaman' },
  { href: '#education', label: 'Pendidikan' },
  { href: '#skills', label: 'Keahlian' },
]

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.25s ease;
}
.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
