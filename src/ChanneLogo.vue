<script setup>
defineProps(['letter', 'color'])
</script>
<template>
  <div
    :style="{ backgroundColor: `${color}` }"
    class="flex h-7 w-7 items-center justify-center rounded-full bg-blue-300"
  >
    {{ letter }}
  </div>
</template>
