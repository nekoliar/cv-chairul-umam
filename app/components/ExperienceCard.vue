<template>
  <div class="card-lift bg-white rounded-2xl p-7 border border-ink-faint/40 shadow-card">
    <!-- Header -->
    <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
      <div>
        <h3 class="font-display font-semibold text-lg text-ink leading-tight">{{ exp.title }}</h3>
        <p class="text-brand-primary font-medium text-sm mt-0.5">{{ exp.company }}</p>
      </div>
      <div class="flex flex-col items-end gap-1">
        <span class="px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/8 text-brand-primary border border-brand-primary/20">
          {{ exp.period }}
        </span>
        <span class="text-xs text-ink-muted">{{ exp.location }}</span>
      </div>
    </div>

    <!-- Divider -->
    <div class="h-px bg-gradient-to-r from-brand-primary/20 to-transparent mb-4"></div>

    <!-- Bullet Points -->
    <ul class="flex flex-col gap-2.5">
      <li
        v-for="(bullet, i) in exp.bullets"
        :key="i"
        class="flex items-start gap-3 text-sm text-ink-secondary leading-relaxed"
      >
        <span class="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-brand-primary/10">
          <svg class="w-3 h-3 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </span>
        {{ bullet }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  exp: {
    id: number
    title: string
    company: string
    period: string
    location: string
    bullets: string[]
  }
}>()
</script>
