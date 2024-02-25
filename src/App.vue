<template>
    <div class="flex flex-col min-h-screen font-Roboto bg-gray-primary">
        <SiteNavigation />
        <RouterView v-slot="{ Component }">
            <Transition name="page" mode="out-in">
                <component :is="Component" />
            </Transition>
        </RouterView>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SiteNavigation from './components/SiteNavigation.vue';
import { provide, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const language = ref(locale.value);
const updateLocale = (lng) => {
    language.value = lng;
};
provide('language', { language, updateLocale });
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: 600ms ease all;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>
