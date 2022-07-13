import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import componenteInput from '../src/components/componenteInput.vue'
import componentePreguntas from '../src/components/componentePreguntas.vue'


export const router = new VueRouter({
    mode: 'history',
    routes : [
        {path: '/input', component: componenteInput},
        {path: '/preguntas', component: componentePreguntas},
    ]
})