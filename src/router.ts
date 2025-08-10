import ClubList from '@/components/ClubList.vue';
import Game from '@/components/Game.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: Game },
    { path: '/clublist', component: ClubList },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
