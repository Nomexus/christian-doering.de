<template>
  <span v-if="typeof activeBadge !== 'undefined'" :class="'badge ' + 'badge-'+props.type">
    {{ activeBadge.name }}
  </span>
</template>

<script setup lang="ts">
const badgeTypes = [
  {
    type: "symfony",
    name: "Symfony"
  },
  {
    type: "php",
    name: "PHP"
  },
  {
    type: "vue",
    name: "Vue"
  },
  {
    type: "mysql",
    name: "MySQL"
  },
  {
    type: "phalcon",
    name: "Phalcon"
  },
  {
    type: "javascript",
    name: "JavaScript"
  },
];

const props = defineProps({
  type: String
});

let activeBadge: object | undefined = badgeTypes.filter((badge) => badge.type === props.type)[0];

</script>