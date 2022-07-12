import { createApp  } from 'vue'
import App from './App.vue'
//import Map from './components/Map.vue'
import ymapPlugin from '../node_modules/vue-yandex-maps'


createApp(App).use(ymapPlugin).mount('#app');
//createApp(Map).use(ymapPlugin).mount('#map');
