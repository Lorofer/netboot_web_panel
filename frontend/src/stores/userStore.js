import { defineStore } from 'pinia'
import { useApiStore } from "@/stores/apiStore.js";
import {ref} from "vue";

export const useUserStore = defineStore('user', () => {
    const apiStore = useApiStore();

    const isAuthorization = ref(true);

    const login = ref('');
    const email = ref('');
    const password = ref('');

    async function signIn(){
        let resp = await fetch(`${apiStore.api}auth/token/login/`, {
            method: "POST",
            body: JSON.stringify({
                "username": login.value,
                "password": password.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        let obj = await resp.json();
        localStorage.setItem("token", obj["auth_token"]);
        isAuthorization.value = true;
    }

    async function register(){
        let resp = await fetch(`${apiStore.api}api/auth/users/`, {
            method: "POST",
            body: JSON.stringify({
                "username": login.value,
                "password": password.value,
                "email": email.value
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        let obj = await resp.json();
        console.log(obj);

        await signIn();
    }

    return {
        login, email, password,
        register, signIn,
        isAuthorization,
    };
});