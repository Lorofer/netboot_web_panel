import { defineStore } from 'pinia'

export const useApiStore = defineStore('api', () => {
    const api = 'http://45.136.58.148:8000/';
    return { api };
});