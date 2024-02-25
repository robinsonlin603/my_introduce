<template>
    <main class="text-black-primary flex pt-8 space-x-2 container">
        <div class="flex flex-col flex-1">
            <p class="text-md font-bold">{{ $t('home.whoAmI') }}</p>
            <p class="text-md">
                {{ $t('home.a') }}<span class="bg-[#F0FF00]">{{ $t('home.frontend') }}</span>
                <span>{{ $t('home.adventurer') }}</span>
            </p>
            <div class="flex justify-center h-full flex-col px-10">
                <p class="text-[30px] font-medium">
                    {{ $t('home.looking') }}
                    <span class="font-light">{{ $t('home.for') }}</span>
                    {{ $t('home.next') }}
                    <span class="font-bold">{{ $t('home.opportunity') }}</span>
                    <span class="font-medium">{{ $t('home.to') }}</span>
                    <span class="font-light">{{ $t('home.nextA') }}</span>
                    <span class="font-bold">{{ $t('home.change') }}</span>
                </p>
                <p class="text-[30px] font-medium">
                    {{ $t('home.passionate') }}
                    <span class="font-light">{{ $t('home.about') }}</span>
                    <span class="font-bold bg-[#F0FF00]"> {{ $t('home.delivering') }}</span>
                </p>
            </div>
            <div class="flex space-x-3 items-center">
                <i class="fa-brands fa-linkedin text-[24px] cursor-pointer" @click="toLinkedin"></i>
                <i class="fa-brands fa-github text-[24px] cursor-pointer" @click="toGithub"></i>
                <button class="border p-1 rounded-xl" @click="toChineseResume">
                    {{ $t('home.chineseResume') }}
                </button>
                <button class="border p-1 rounded-xl" @click="toEnglishResume">
                    {{ $t('home.englishResume') }}
                </button>
            </div>
        </div>
        <img
            src="/hiking.jpg"
            class="h-[364px] w-[257px] md:h-[728px] md:w-[514px] object-cover object-center"
        />
    </main>
</template>

<script setup>
const toGithub = () => {
    window.open('https://github.com/robinsonlin603', '_blank');
};
const toLinkedin = () => {
    window.open('https://www.linkedin.com/in/robinson0603/', '_blank');
};
const toChineseResume = () => {
    window.open(
        'https://drive.google.com/file/d/1v1cfyNFp2EwjdjdZU7KSPKaPF_5P8G2J/view?usp=sharing',
        '_blank'
    );
};
const toEnglishResume = () => {
    window.open(
        'https://drive.google.com/file/d/1meWVeWK7I8nJkVzIjLZIGP3QkJ-uX8-0/view?usp=sharing',
        '_blank'
    );
};
</script>
