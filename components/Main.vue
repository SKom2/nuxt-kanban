<script>
import { defineComponent } from 'vue';
import Table from './Tables.vue';

export default defineComponent({
  name: "Main",
  components: {
    Table
  }
});
</script>

<template>
  <main class="flex-1">
    <div class="flex flex-col h-full overflow-x-scroll">
      <div class="flex-1 px-4 mx-auto my-14">
        <div class="inline-flex h-full gap-2">
          <Table />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>