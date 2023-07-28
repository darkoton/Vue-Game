import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import axios from './plugins/axios';
import "@/assets/style/main.scss";
import { createI18n } from 'vue-i18n'
import messages from './i18n/language';



const app = createApp(App);

// const i18n = createI18n({
//   locale: 'ru',
//   messages
// })


const i18n = createI18n({
  locale: 'ru',
  messages
})

app.use(router);
app.use(store);
app.use(axios);
app.use(i18n);

app.mount('#app');