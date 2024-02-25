<template>
    <header class="sticky top-0 bg-gray-primary shadow-lg">
        <nav
            class="container flex flex-col items-center space-x-4 py-6 text-black-primary sm:flex-row"
        >
            <RouterLink :to="{ name: 'home' }">
                <div
                    v-if="route.path.split('/')[1] !== 'weather'"
                    class="flex flex-1 items-center space-x-3"
                >
                    <i class="fa-solid fa-house text-2xl"></i>
                    <p class="text-2xl">Robinson</p>
                </div>
                <div v-else class="flex flex-1 items-center space-x-3">
                    <i class="fa-solid fa-sun text-2xl"></i>
                    <p class="text-2xl">{{ $t('nav.theLocalWeather') }}</p>
                </div>
            </RouterLink>
            <div class="flex space-x-3 flex-1 justify-end items-center">
                <div class="relative">
                    <button @click="showLanguageMenu = !showLanguageMenu">
                        {{ language === 'zh-TW' ? `${$t('nav.zh-TW')}` : `${$t('nav.en-US')}` }}
                    </button>
                    <div
                        v-if="showLanguageMenu"
                        class="w-[100px] h-[50px] absolute top-[30px] left-0"
                    >
                        <button v-if="language === 'en-US'" @click="changeLanguage('zh-TW')">
                            {{ $t('nav.zh-TW') }}
                        </button>
                        <button v-if="language === 'zh-TW'" @click="changeLanguage('en-US')">
                            {{ $t('nav.en-US') }}
                        </button>
                    </div>
                </div>
                <RouterLink v-if="route.path.split('/')[1] !== 'weather'" :to="{ name: 'about' }">{{
                    $t('nav.about')
                }}</RouterLink>
                <RouterLink :to="{ name: 'weather' }">{{ $t('nav.weather') }}</RouterLink>
                <RouterLink
                    v-if="route.path.split('/')[1] !== 'weather'"
                    :to="{ name: 'portfolio' }"
                    >{{ $t('nav.portfolio') }}</RouterLink
                >
                <i
                    class="fa-solid fa-circle-info text-xl hover:text-weather-secondary duration-150 cursor-pointer"
                    @click="toggleModal"
                    v-if="route.path.split('/')[1] === 'weather'"
                ></i>
                <i
                    class="fa-solid fa-plus text-xl hover:text-weather-secondary duration-150 cursor-pointer"
                    @click="addCity"
                    v-if="route.query.preview && route.path.split('/')[1] === 'weather'"
                ></i>
            </div>
            <BaseModal v-model="modalActive">
                <div class="text-black">
                    <h1 class="text-2xl mb-1">
                        {{ $t('nav.info.about') }}
                    </h1>
                    <p class="mb-4">
                        {{ $t('nav.info.aboutInfo') }}
                    </p>
                    <h2 class="text-2xl">{{ $t('nav.info.works') }}</h2>
                    <ol class="list-decimal list-inside mb-4">
                        <li>{{ $t('nav.info.worksInfo1') }}</li>
                        <li>
                            {{ $t('nav.info.worksInfo2') }}
                        </li>
                        <li>
                            {{ $t('nav.info.worksInfo3') }}
                        </li>
                    </ol>
                    <h2 class="text-2xl">{{ $t('nav.info.remove') }}</h2>
                    <p>
                        {{ $t('nav.info.removeInfo') }}
                    </p>
                </div>
            </BaseModal>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { inject, ref } from 'vue';
import BaseModal from './BaseModal.vue';
import { uid } from 'uid';

// i18n
const { language, updateLocale } = inject('language');
const { locale } = useI18n();
const showLanguageMenu = defineModel({ default: false });
const changeLanguage = (lng) => {
    updateLocale(lng);
    locale.value = lng;
    showLanguageMenu.value = false;
};

// modal
const modalActive = ref(null);
const toggleModal = () => {
    modalActive.value = !modalActive.value;
};

// city
const saveCities = ref([]);
const route = useRoute();
const router = useRouter();
const addCity = () => {
    if (localStorage.getItem('savedCities')) {
        saveCities.value = JSON.parse(localStorage.getItem('savedCities'));
    }

    const locationObj = {
        id: uid(),
        state: route.params.state,
        city: route.params.city,
        coords: {
            lat: route.query.lat,
            lng: route.query.lng
        }
    };

    saveCities.value.push(locationObj);
    localStorage.setItem('savedCities', JSON.stringify(saveCities.value));

    let query = Object.assign({}, route.query);
    delete query.preview;
    query.id = locationObj.id;
    router.replace({ query });
};
</script>
