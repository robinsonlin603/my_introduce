import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CityViewVue from '../views/CityView.vue';
import AboutView from '../views/AboutView.vue';
import WeatherViewV from '../views/WeatherView.vue';
import PortfolioViewVue from '../views/PortfolioView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
            meta: {
                title: 'About'
            }
        },
        {
            path: '/weather',
            name: 'weather',
            component: WeatherViewV,
            meta: {
                title: 'Weather'
            }
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PortfolioViewVue,
            meta: {
                title: 'Portfolio'
            }
        },
        {
            path: '/weather/:state/:city',
            name: 'cityView',
            component: CityViewVue,
            meta: {
                title: 'City Weather'
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = `${to.params.city ? `${to.params.city}, ${to.params.state}` : to.meta.title} | Robinson Blog`;
    next();
});

export default router;
