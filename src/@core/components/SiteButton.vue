<script setup>
defineProps({
  outlined: {
    type: Boolean,
    default: false
  }
})

const primaryBtnClasses = 'bg-secondary'
const outlineBtnClasses = 'bg-transparent outline outline-2 outline-secondary hover:outline-white'
</script>

<template>
  <button
      :class="[outlined ? outlineBtnClasses : primaryBtnClasses]"
      class="text-white rounded-4xl text-sm sm:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl font-bold px-3 sm:px-5 py-2 lg:px-6 2xl:px-9.5 2xl:py-5"
  >
    <slot />
  </button>
</template>

<style scoped>
button{
  transition: all .3s ease-in;
}
button.bg-secondary:hover{
  box-shadow: 0 3px 9px 1px theme('colors.secondary');
  transform: translateY(-3px);
}
</style>