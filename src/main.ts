import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Mango from './components/Mango.vue'
import Mango2 from './components/Mango2.vue'

const history =createWebHashHistory()
const router= createRouter({
    history:history,
    routes:[
        {path:'/',component:Mango},
        {path:'/xxx',component:Mango2}
    ]
})

const app=createApp(App)
app.use(router)
app.mount('#app')
