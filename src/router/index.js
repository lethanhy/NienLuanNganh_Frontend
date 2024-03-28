import { createWebHashHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import Home from "@/views/Home.vue";

const routes = [
    // {
    //     path: "/",
    //     name: "contactbook",
    //     component: ContactBook,
    // },
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/contacts/",
        name: "contact.add",
        component: () => import("@/views/ContactAdd.vue"),
    },
    {
        path: "/register",
        name: "user.add",
        component: () => import("@/views/DangKy.vue"),
    },
    {
        path: "/login",
        component: () => import("@/views/DangNhap.vue"),
    },
    {
        path: "/products/",
       component: () => import("@/views/SanPham.vue"),
    },
    {
        path: "/products/:id",
        name: "showProduct",
       component: () => import("@/views/DetailProduct.vue"),
    },
    {
        path: "/carts",
        component: () => import("@/views/Cart.vue"),

    },
    {
        path: "/orders",
        component: () => import("@/views/Lichsudonhang.vue"),

    },
   
   
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;