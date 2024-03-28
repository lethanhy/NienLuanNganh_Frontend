import { defineStore } from "pinia";
import userService from "@/services/user.service";
import router from "@/router";
export const userUserStore = defineStore('userStore', {
    state: () => ({
        user: null,
        login: false,
        cart: [],
    }),
    getters: {

    },
    actions: {
        setUser(data) {
            this.user = data
            this.login = true

        },
        async logout() {
            this.user = null;
            this.login = false;
            this.cart = [];
            // await userService.logout();
        }
    },
    persist: {
        enabled: true,
    }
})