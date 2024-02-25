<template>
    <main class="container flex flex-col">
        <h1 class="mt-8 text-[30px] font-bold">
            {{ $t('portfolio.title') }}
        </h1>
        <div class="flex mt-10 space-x-2">
            <img src="/selfie.png" class="w-[460px] h-auto" />
            <div class="flex flex-col space-y-3">
                <h3 class="text-[25px] font-bold">Selfie</h3>
                <p>{{ $t('portfolio.selfieInfo') }}</p>
                <div>{{ $t('portfolio.selfieTech') }}</div>
                <div class="flex space-x-2">
                    <img src="/react.png" class="w-[40px] h-auto" />
                    <img src="/javascript.png" class="w-[40px] h-auto" />
                    <img src="/firebase.png" class="w-[40px] h-auto" />
                    <img src="/react-router.png" class="w-[40px] h-auto" />
                </div>
                <div>{{ $t('portfolio.selfLink') }}</div>
                <div class="flex space-x-4">
                    <i class="fa-solid fa-link text-[24px] cursor-pointer" @click="toSelfie"></i>
                    <i class="fa-brands fa-github text-[24px] cursor-pointer" @click="toGithub"></i>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
const toSelfie = () => {
    window.open('https://theselfie-59eaf.web.app/', '_blank');
};
const toGithub = () => {
    window.open('https://github.com/robinsonlin603/MyInfo/tree/main', '_blank');
};
</script>
