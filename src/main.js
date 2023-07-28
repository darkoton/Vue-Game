import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/store';
import axios from '@/plugins/axios';
import "@/assets/style/main.scss";
import i18n from "@/locales/i18n-config";



const app = createApp(App);

app.use(router);
app.use(store);
app.use(axios);
app.use(i18n);

app.mount('#app');