import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';


const routes = [
    { path: '/hello', component: HelloWorld }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
