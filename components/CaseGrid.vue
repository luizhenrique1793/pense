<script setup lang="ts">
import { caseTiles, projects, type Project } from '~/data/projects'

const emit = defineEmits<{ open: [project: Project] }>()
</script>

<template>
  <div class="case-grid">
    <button
      v-for="tile in caseTiles"
      :key="`${tile.projectId}-${tile.image}`"
      class="case-tile"
      type="button"
      @click="emit('open', projects[tile.projectId])"
    >
      <img :src="tile.image" :alt="tile.alt" loading="lazy" decoding="async">
      <span class="case-overlay">
        <strong>{{ tile.title }}</strong>
        <small>{{ tile.summary }}</small>
        <i>Ver projeto →</i>
      </span>
    </button>
  </div>
</template>
