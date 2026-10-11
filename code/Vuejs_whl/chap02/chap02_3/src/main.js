import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Computed from './components/Computed.vue'
import Watch from './components/Watch.vue'
import ClassStr from './components/ClassStr.vue'
import ClassObj from './components/ClassObj.vue'
import ClassArray from './components/ClassArray.vue'

// createApp(App).mount('#app')
// createApp(Computed).mount('#app')
// createApp(Watch).mount('#app')
// createApp(ClassStr).mount('#app')
// createApp(ClassObj).mount('#app')
createApp(ClassArray).mount('#app')