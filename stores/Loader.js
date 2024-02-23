import {defineStore} from "pinia";

export const useLoaderStore = defineStore('loader', {
    state: () => ({
        isLoading: false
    }),
    actions: {
        toggleIsLoading(status){
            this.isLoading = status;
        }
    }
})