import { defineStore } from 'pinia'
import {ref} from "vue";

export const useUserStore = defineStore('user', () => {
    const isAuthorization = ref(false);

    const login = ref('');
    const email = ref('');
    const password = ref('');

    async function register(){
        isAuthorization.value = true;
        alert(login.value);
    }

    async function signIn(){
        isAuthorization.value = true;
        alert(email.value + ' входи');
    }

    return {
        login, email, password,
        register, signIn,
        isAuthorization,
    };
});