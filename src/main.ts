import { createApp } from 'vue'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import 'virtual:windi.css'
import 'virtual:windi-devtools'

import App from './App.vue'

const app = createApp(App)
app.use(Antd)

app.mount('#app')
