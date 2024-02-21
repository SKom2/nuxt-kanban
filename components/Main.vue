<script>
import { ref, defineComponent } from 'vue';
import { tables } from '../data/tables.js';
import Tables from '../components/Tables.vue';

export default defineComponent({
  name: "Main",
  components: {
    Tables
  },
  setup() {
    const tablesRef = ref(tables);

    return { tables: tablesRef.value };
  }
});
</script>

<template>
  <main class="flex-1">
    <div class="flex flex-col h-full overflow-x-scroll">
      <div class="flex-1 px-4 mx-auto my-14">
        <div class="inline-flex h-full gap-2">
          <Tables :tablesProp="tables" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>