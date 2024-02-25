<template>
    <main class="container text-white">
        <div class="pt-4 mb-8 relative flex items-center">
            <input
                type="text"
                v-model="searchQuery"
                @input="getSearchResults"
                :placeholder="$t('weather.search')"
                class="text-black-primary py-2 px-1 flex-1 bg-transparent border-b border-weather-secondary focus:border-weather-primary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
            />
            <i
                v-show="searchQuery !== ''"
                class="fa-sharp fa-solid fa-circle-xmark cursor-pointer text-black-primary"
                @click="removeSearchQuery"
            ></i>
            <ul
                v-if="mapBoxSearchResults"
                class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]"
            >
                <p v-if="searchError">{{ $t('weather.wrong') }}</p>
                <p v-if="!searchError && mapBoxSearchResults.length === 0">
                    {{ $t('weather.noResults') }}
                </p>
                <template v-else>
                    <li
                        v-for="searchResult in mapBoxSearchResults"
                        :key="searchResult.id"
                        class="py-2 cursor-pointer"
                        @click="previewCity(searchResult)"
                    >
                        {{ searchResult.place_name }}
                    </li>
                </template>
            </ul>
        </div>
        <div class="flex flex-col space-y-4">
            <Suspense>
                <CityList />
                <template #fallback><CityCardSkeleton /> </template>
            </Suspense>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import CityList from '../components/CityList.vue';
import CityCardSkeleton from '../components/CityCardSkeleton.vue';

const router = useRouter();

const previewCity = (searchResult) => {
    const [city, state] = searchResult.place_name.split(',');
    router.push({
        name: 'cityView',
        params: {
            state: state.replaceAll(' ', ''),
            city
        },
        query: {
            lat: searchResult.geometry.coordinates[1],
            lng: searchResult.geometry.coordinates[0],
            preview: true
        }
    });
};

const searchQuery = ref('');
const maxboxAPIKey =
    'pk.eyJ1Ijoicm9iaW5zb25saW4iLCJhIjoiY2x0MDF0bWpuMGp1YzJqcXlreTV4bWo2OCJ9.ly7cMe-tq9aJ8bh8mAyNtg';
const queryTimeout = ref(null);
const mapBoxSearchResults = ref(null);
const searchError = ref(false);

const removeSearchQuery = () => {
    searchQuery.value = '';
    mapBoxSearchResults.value = null;
};

const getSearchResults = () => {
    clearTimeout(queryTimeout.value);
    queryTimeout.value = setTimeout(async () => {
        if (searchQuery.value !== '') {
            try {
                const result = await axios.get(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${maxboxAPIKey}&type=place`
                );
                mapBoxSearchResults.value = result.data.features;
                return;
            } catch {
                searchError.value = true;
            }
        }
        mapBoxSearchResults.value = null;
    }, 300);
};
</script>
