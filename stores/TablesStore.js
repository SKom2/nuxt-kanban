import { defineStore } from 'pinia';

export const useTablesStore = defineStore('tableStore', {
    state: () => ({
        tables: [
            {
                id: Date.now(),
                name: 'On hold',
                color: 'bg-orange-600',
                isShowingForm: false,
                tasks: []
            },
            {
                id: Date.now() + 1,
                name: 'In progress',
                color: 'bg-blue-800',
                isShowingForm: false,
                tasks: []
            },
            {
                id: Date.now() + 2,
                name: 'Needs review',
                color: "bg-yellow-600",
                isShowingForm: false,
                tasks: []
            },
            {
                id: Date.now() + 3,
                name: 'Approved',
                color: 'bg-green-800',
                isShowingForm: false,
                tasks: []
            }
        ]
    }),
    actions: {
        toggleFormState(tableId){
            const table = this.tables.find(table => table.id === tableId)
            if (!table) return;
            if (table.isShowingForm === undefined){
                this.$patch(() => {
                    table.isShowingForm = false;
                })
            } else {
                this.$patch(() => {
                    table.isShowingForm = !table.isShowingForm;
                })
            }
        },
        onSubmit(tableId, task){
            const tableIndex = this.tables.findIndex(table => table.id === tableId)
            if (tableIndex === -1) return;
            this.tables[tableIndex].tasks.push(task)
        },
        onDeleteTask(tableId, taskId) {
            const tableIndex = this.tables.findIndex(table => table.id === tableId);
            if (tableIndex === -1) return;

            const taskIndex = this.tables[tableIndex].tasks.findIndex(task => task.id === taskId);
            if (taskIndex === -1) return;

            this.tables[tableIndex].tasks.splice(taskIndex, 1);
        },
        updateTasks(tableId, tasks) {
            const tableIndex = this.tables.findIndex(table => table.id === tableId)
            if (tableIndex === -1) return;
            this.tables[tableIndex].tasks = tasks;
            localStorage.setItem('tables', JSON.stringify(this.tables))
        },
    }
})