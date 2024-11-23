import { defineStore } from 'pinia'
import { useApiStore } from "@/stores/apiStore.js";
import { useUserStore } from "@/stores/userStore.js";
import {ref} from "vue";

import {useRouter} from "vue-router";

export const useMachinesStore = defineStore('machines', () => {
    const apiStore = useApiStore();
    const userStore = useUserStore();
    const router = useRouter();

    const machines = ref([]);

    async function getMachines(){
        try{
            let resp = await fetch(`${apiStore.api}api/stands/?format=json`, {
                headers: {
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            if(!resp.ok){
                throw "not ok";
            }
            machines.value = await resp.json();
        }
        catch(error){
            userStore.isAuthorization = false;
            await router.push({path: '/register'});
        }
    }

    return { machines, getMachines };
});