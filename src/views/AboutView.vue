<template>
    <main class="container pt-8 text-black-primary flex flex-col space-y-8">
        <div class="flex space-x-4 border-b border-black-primary pb-4 border-opacity-10">
            <h3 class="w-[300px] text-[30px] font-bold">{{ $t('about.summary') }}</h3>
            <div class="flex-1">
                <p>{{ $t('about.summaryInfo1') }}</p>
                <p>{{ $t('about.summaryInfo2') }}</p>
                <p>{{ $t('about.summaryInfo3') }}</p>
                <p>{{ $t('about.summaryInfo4') }}</p>
                <p>{{ $t('about.summaryInfo5') }}</p>
            </div>
        </div>
        <div class="flex space-x-4 border-b border-black-primary pb-4 border-opacity-10">
            <h3 class="w-[300px] text-[30px] font-bold">{{ $t('about.experience') }}</h3>
            <div class="flex flex-col space-y-5 flex-1">
                <div>
                    <div class="flex justify-between">
                        <p class="font-medium">{{ $t('about.experience1') }}</p>
                        <p>02/2023 - now</p>
                    </div>
                    <ul class="list-disc mt-2">
                        <li>{{ $t('about.experienceList1') }}</li>
                        <li>{{ $t('about.experienceList2') }}</li>
                        <li>{{ $t('about.experienceList3') }}</li>
                        <li>{{ $t('about.experienceList4') }}</li>
                        <li>{{ $t('about.experienceList5') }}</li>
                    </ul>
                </div>
                <div>
                    <div class="flex justify-between">
                        <p class="font-medium">{{ $t('about.experience2') }}</p>
                        <p>08/2022 - 12/2022</p>
                    </div>
                    <ul class="list-disc mt-2">
                        <li>{{ $t('about.experience2List1') }}</li>
                        <li>{{ $t('about.experience2List2') }}</li>
                        <li>{{ $t('about.experience2List3') }}</li>
                        <li>{{ $t('about.experience2List4') }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex space-x-4">
            <h3 class="w-[300px] text-[30px] font-bold">{{ $t('about.education') }}</h3>
            <div class="flex justify-between flex-1">
                <p class="font-medium">{{ $t('about.school') }}</p>
                <p>2022.01 - 2022.07</p>
            </div>
        </div>
    </main>
</template>

<script setup></script>
