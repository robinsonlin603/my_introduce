<template>
    <div class="flex py-6 px-3 bg-weather-secondary rounded-md shadow-md cursor-pointer">
        <div class="flex flex-col flex-1 space-y-2">
            <h2 class="text-3xl">{{ city.city }}</h2>
            <h3>{{ city.state }}</h3>
        </div>

        <div class="flex flex-col space-y-2">
            <p class="text-3xl self-end">{{ Math.round(city.weather.main.temp) }}&deg;</p>
            <div class="flex space-x-2">
                <span class="text-xs">
                    H:
                    {{ Math.round(city.weather.main.temp_max) }}&deg;
                </span>
                <span class="text-xs">
                    L:
                    {{ Math.round(city.weather.main.temp_min) }}&deg;
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
const city = defineModel('city');
</script>
