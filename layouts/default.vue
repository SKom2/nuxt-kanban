<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted} from "vue";
import {useLoaderStore} from "~/stores/Loader";

const loaderStore = useLoaderStore();
const authStore = useAuthStore();
const router = useRouter();
loaderStore.toggleIsLoading(true)

  onMounted(async () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      authStore.setAuthentication(true);
    } else {
      authStore.setAuthentication(false);
      await router.push('/login');
    }
    loaderStore.toggleIsLoading(false)
  })
</script>

<template>

  <div>
    <div v-if="loaderStore.isLoading" class="flex justify-center items-center text-9xl text-white min-h-screen">Загрузка...</div>
    <div v-else class="flex flex-col min-h-screen bg-[#191919] select-none">
      <Header />
      <slot />
    </div>
  </div>

</template>

<style>

</style>