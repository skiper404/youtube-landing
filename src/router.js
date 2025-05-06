import { createRouter, createWebHashHistory } from 'vue-router'

import MainPage from './MainPage.vue'
import TheChannel from './ChannelPage.vue'

const routes = [
  { path: '/', name: 'Main', component: MainPage },
  { path: '/channel', name: 'Channel', component: TheChannel },
]

const router = createRouter({ history: createWebHashHistory(), routes: routes })

export { router }
