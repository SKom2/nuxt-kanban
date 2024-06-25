<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '~/stores/Auth';
import {useRouter, useRoute} from "vue-router";

export default defineComponent({
  name: "Header",
  setup() {
    const open = ref(false);
    const authStore = useAuthStore();
    const router = useRouter();
    const route = useRoute();

    const onToggleBurger = () => {
      open.value = !open.value;
    };

    const onLogout = () => {
      authStore.logout();
      router.push('/login')
    };

    const linkInfo = computed(() => {
      if (route.path === '/login') {
        return { path: '/register', text: 'Регистрация' };
      } else if (route.path === '/register') {
        return { path: '/login', text: 'Вход' };
      } else {
        return { path: '/login', text: 'Выход', logout: true };
      }
    });

    return { open, onToggleBurger, onLogout, linkInfo };
  }
});
</script>

<template>
  <header class="shrink-0 flex justify-between px-4 py-3 items-center bg-[#262626]">
    <nav class="w-full justify-between items-center md:flex">
      <div class="flex justify-between items-center">
        <h1 class="font-bold py-4 text-white text-3xl">
          <a href="/" class="hover:text-gray-700 cursor-pointer">KanBoard</a>
        </h1>
        <button  @click="onToggleBurger()" class="px-4 cursor-pointer md:hidden" id="burger">
          <svg class="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFF" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
      </div>
      <ul class="flex justify-end items-center transition-all ease-in-out duration-200 md:scale-y-100" :class="[open ? 'h-10' : 'scale-y-0  h-0']" id="menu">
        <li class="px-4">
          <NuxtLink :to="linkInfo.path" class="font-medium text-white text-2xl" @click="linkInfo.logout ? onLogout() : null">
            {{ linkInfo.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>