<script lang="ts">
import {defineComponent, ref} from 'vue'
import {useAuthStore} from "~/stores/Auth";
import {useLoaderStore} from "~/stores/Loader";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "register",
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  setup() {
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const authStore = useAuthStore();
    const loaderStore = useLoaderStore();

    const onSubmit = async () => {
      loaderStore.toggleIsLoading(true);
      const response = await authStore.createUser(username.value, email.value, password.value);
      loaderStore.toggleIsLoading(false);

      if (!response) return;
      router.push('/login');
    }

    return {onSubmit, username, email, password, authStore}
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-12 text-white mx-auto w-4/5 2xl:w-2/4 mt-32">
    <div class="flex flex-col gap-6">
      <label class="flex flex-col gap-2">
        <span class="font-medium text-2xl">
          User name:
        </span>
        <input v-model="username" class="border text-xl md:text-3xl bg-[#262626] border-gray-900 h-20 pl-2 rounded-2xl " type="text" placeholder="User name" required autocomplete="username" />
      </label>
      <label class="flex flex-col gap-2">
        <span class="font-medium text-2xl">
          Email:
        </span>
        <input v-model="email" class="border text-xl md:text-3xl bg-[#262626] border-gray-900 h-20 pl-2 rounded-2xl" type="email" placeholder="sasha@yandex.ru" required />
      </label>
      <label class="flex flex-col gap-2">
        <span class="font-medium text-2xl">
          Password:
        </span>
        <input v-model="password" class="border text-xl md:text-3xl bg-[#262626] border-gray-900 h-20 pl-2 rounded-2xl" type="password" placeholder="********" required autocomplete="current-password" />
      </label>
    </div>
    <button type="submit" class="mx-auto px-4 py-2 h-16 text-2xl font-medium text-white bg-blue-800 w-full hover:bg-blue-700 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-100">
      Register
    </button>
    <div v-if="authStore.errorMessage" class="text-red-500">
      {{ authStore.errorMessage }}
    </div>
  </form>
</template>

<style scoped>

</style>