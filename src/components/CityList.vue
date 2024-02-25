<template>
    <div v-for="city in saveCities" :key="city.id">
        <CityCard :city="city" @click="goToCityView(city)" />
    </div>
    <p v-if="saveCities.length === 0">
        No locations added. To start tracking a location, search in the field above.
    </p>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import CityCard from './CityCard.vue';
import { useRouter } from 'vue-router';

const saveCities = ref([]);
const getCities = async () => {
    if (localStorage.getItem('savedCities')) {
        saveCities.value = JSON.parse(localStorage.getItem('savedCities'));
    }

    const request = [];
    saveCities.value.forEach((city) => {
        request.push(
            axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${city.coords.lat}&lon=${city.coords.lng}&appid=290429e98db9482defed16c2c50b7496&units=imperial`
            )
        );
    });

    const weatherData = await Promise.all(request);

    weatherData.forEach((city, index) => {
        saveCities.value[index].weather = city.data;
    });
};
await getCities();

const router = useRouter();
const goToCityView = (city) => {
    router.push({
        name: 'cityView',
        params: {
            state: city.state,
            city: city.city
        },
        query: {
            lat: city.coords.lat,
            lng: city.coords.lng,
            id: city.id
        }
    });
};
</script>
