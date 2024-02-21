<script lang="ts">
import {defineComponent, ref} from 'vue'
import Tasks from '../components/Tasks.vue';

export default defineComponent({
  name: "Tables",
  components: {
    Tasks
  },
  props: {
    tablesProp: {
      type: Array,
      required: true,
    },
  },

  setup(props){
    const tables = ref(props.tablesProp)

    return {tables}
  }
})
</script>

<template>
  <article class="w-72 flex flex-col rounded-md gap-1" v-for="table in tables" :key="table.id">
    <div :class="table.color + ' px-3 py-2 rounded-md'">
      <h3 class="text-sm font-semibold text-white uppercase">{{ table.name }}</h3>
    </div>
    <Tasks :tasksProp="table.tasks" />
    <button class="text-[#555555] w-full p-2 hover:bg-[#262626] text-left rounded-md transition ease-in-out duration-300 cursor-pointer" @click="addNewTask(table.id)">
        <span>
          + Add new Card
        </span>
    </button>
  </article>
</template>

<style scoped>

</style>