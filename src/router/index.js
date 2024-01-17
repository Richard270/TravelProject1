import VueRouter from "vue-router";
import Vue from 'vue';

Vue.use(VueRouter);

const routes=[
    {
        path:'/',
        redirect: '/inicio'
    },{
        path: '/',
        component:{
            render(c){
                return c('router-view');
            },
        },
        children: [
            {
                path:'/inicio',
                name: 'inicio',
                component: ()=>import('../components/Inicio.vue')
            },
            {
                path:'/reservar',
                name: 'reservar',
                component: ()=>import('../components/Reservar.vue')
            },
            {
                path:'/disponible',
                name: 'disponible',
                component: ()=>import('../components/Disponible.vue')
            },
            {
                path: '/cancelar',
                name: 'cancelar',
                component: ()=>import('../components/Cancelar.vue')
            },
            {
                path: '/asientosr',
                name: 'asientosr',
                component: ()=>import('../components/AsientosR.vue')
            },
            {
                path: '/lineasv',
                name: 'lineasv',
                component: ()=>import('../components/LineasV.vue')
            },
            {
                path: '/proximov',
                name: 'proximov',
                component: ()=>import('../components/ProximoV.vue')
            }
        ]
    }
]

const router = new VueRouter({routes, })
export default router; 