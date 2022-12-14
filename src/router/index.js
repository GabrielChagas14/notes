import { createRouter, createWebHashHistory } from "vue-router";
import { useStoreAuth } from "../stores/storeAuth"
import Notes from "@/views/Notes.vue";
import EditNote from "@/views/EditNote.vue";
import Stats from "@/views/Stats.vue";
import Auth from "@/views/Auth.vue";

const routes = [
  {
    path: "/",
    name: "notes",
    component: Notes,
  },
  {
    path: "/editNote/:id",
    name: "edit-note",
    component: EditNote,
  },
  {
    path: "/stats",
    name: "stats",
    component: Stats,
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

router.beforeEach(async (to, from) => {
    const storeAuth = useStoreAuth();
    if (!storeAuth.user.id && to.name !== 'auth') {
        return { name: 'auth'}
    }
    if (storeAuth.user.id && to.name === 'auth') {
        return false
    }
});

export default router;
