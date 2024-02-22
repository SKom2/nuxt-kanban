<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue'
import Tasks from '../components/Tasks.vue';
import { v4 as uuidv4 } from 'uuid';
import {useTablesStore} from "~/stores/TablesStore";

export default defineComponent({
  name: "Tables",
  components: {
    Tasks
  },
  data(){
    return{
      content: 'mario'
    }
  },
  setup(){

    onMounted(() => {
      const storedTables = localStorage.getItem('tables')
      if (storedTables) {
        tableStore.tables = JSON.parse(storedTables);
      }
    })

    const tableStore = useTablesStore()
    const textareaNameRef = ref()

    const showForm = async (tableId: String) => {
      tableStore.toggleFormState(tableId)
      await nextTick()
      textareaNameRef.value[0].focus()
    }

    const onSubmit = async (tableId: String, content: String) => {
      const table = tableStore.tables.find(table => table.id === tableId)
      if (!table) return;
      const newTask = {
        id: Date.now(),
        content
      }

      tableStore.onSubmit(tableId, newTask)
      tableStore.toggleFormState(tableId)
      localStorage.setItem('tables', JSON.stringify(tableStore.tables))
    };

    return {tableStore, textareaNameRef, showForm, onSubmit}
  }
})

</script>

<template>
  <article class="w-72 flex flex-col rounded-md gap-1" v-for="table in tableStore.tables" :key="table.id">
    <div :class="table.color + ' px-3 py-2 rounded-md'">
      <h3 class="text-sm font-semibold text-white uppercase">{{ table.name }}({{ table.tasks.length }})</h3>
    </div>
    <Tasks :table="table" />
    <form
        @submit.prevent="onSubmit(table.id, textareaNameRef[0].value)"
        v-if="table.isShowingForm"
        class="p-3 bg-[#262626] rounded-md">
      <textarea
          ref="textareaNameRef"
          v-model="content"
          class="block text-white w-full pt-2 pl-2 text-sm rounded-md bg-[#191919] border-gray-300 shadow-sm focus:border-gray-300"
          rows="4"
          placeholder="Enter something..."
      ></textarea>
      <div class="mt-3 flex justify-between">
        <button
            type="submit"
            class="px-4 py-2 text-sm font-medium text-white bg-blue-800 hover:bg-blue-700 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-100">
          Add Task
        </button>
        <button
            type="button"
            @click=" tableStore.toggleFormState(table.id)"
            class="px-4 py-2 text-sm font-medium text-white bg-red-800 hover:bg-red-700 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-100">
          Cancel
        </button>
      </div>
    </form>
    <button
        v-if="!table.isShowingForm"
        @click="showForm(table.id)"
        class="text-[#555555] w-full p-2 hover:bg-[#262626] text-left rounded-md transition ease-in-out duration-300 cursor-pointer">
        <span>
          + Add new Card
        </span>
    </button>
  </article>
</template>

<style scoped>

</style>