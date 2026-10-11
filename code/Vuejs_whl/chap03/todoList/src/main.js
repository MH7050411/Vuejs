import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TodoHeader from './components/todoHeader.vue'

// createApp(App).mount('#app')
const app = createApp(App)
// 全局注册组件
app.component('TodoHeader',TodoHeader)
app.mount('#app')
