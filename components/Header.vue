<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Header",

  setup(){
    const open = ref(false);
    const onToggleBurger = () => {
      open.value = !open.value;
    }

    return {open, onToggleBurger}
  }
})
</script>

<template>
  <header class="shrink-0 flex justify-between px-4 py-3 items-center bg-[#262626]">
    <nav class="w-full justify-between items-center md:flex">
      <div class="flex justify-between items-center">
        <h1 class="font-bold py-4 text-white text-3xl">
          <NuxtLink class="hover:text-gray-700">KanBoard</NuxtLink>
        </h1>
        <button  @click="onToggleBurger()" class="px-4 cursor-pointer md:hidden" id="burger">
          <svg class="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="{1.5}"
               stroke="#FFF" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
      </div>
      <ul class="flex justify-end items-center transition-all ease-in-out duration-200 md:scale-y-100" :class="[open ? 'h-10' : 'scale-y-0  h-0']" id="menu">
        <li class="px-4">
          <NuxtLink>
            <svg class="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="{1.5}"
                 stroke="#FFF" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>