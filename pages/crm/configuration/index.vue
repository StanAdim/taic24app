<script setup>
definePageMeta({
    layout:'auth'
})
useHead({
    title: 'TAIC - App Configuration'
})
const configurationData = ref([
{
    year: 2024,
    startDate: '21th October',
    endDate: '25th October',
    venue: 'JNICC Dar es Salaam',
    theme: 'Theme 1',
    aboutConference: '',
    defaultFee: 450000,
    foreignerFee: 300,
    guestFee: 500000,
},
{
    year: 2023,
    startDate: '21th October',
    endDate: '25th October',
    venue: 'Dar JNICC',
    theme: 'Theme 2',
    aboutConference: '',
    defaultFee: 420000,
    foreignerFee: 300,
    guestFee: 500000,
},
{
    year: 2022,
    startDate: '21th October',
    endDate: '25th October',
    venue: 'Zanzibar Sheratoon',
    theme: 'Theme 3',
    aboutConference: '',
    defaultFee: 400000,
    foreignerFee: 250,
    guestFee: 450000,
}
])

const configStore = useConfigurationStore()
const setAction = ref('create')
const itemToUpdate = ref({})

const openDialog = (method, passedItem = '' )=>{
    itemToUpdate.value = passedItem
    setAction.value = method
    configStore.toogleDialog()
}
</script>
<template>
<div>
    <AdminThePageTitle title="app configuration" />
    <AdminCreateUpdate :passedItem ="itemToUpdate"
    :showStatus="configStore.configurationDialogStatus"  
    :configurationAction="setAction"/>
    <div class="">
        <div class=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="w-full max-w-sm mx-auto px-4 py-2">
            <div class="flex items-center border-b-2 border-teal-500 py-2">

                <button @click="openDialog('create', '')"
                    class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button">
                    Add <i class="fa-solid fa-plus mx-2"></i>
                </button>
            </div>
        </div>
        <ul class="divide-y divide-gray-300 px-4" v-if="configurationData">
            <li class="mb-3" v-for="item in configurationData" :key="item">
                <div class="flex flex-md-column">
                    <div class="ml-3 block text-gray-900">
                        <p class="my-0.5 py-0 text-lg text-sky-800 font-medium">Conference of <span class="text-lg font-medium text-sky-800">{{item.year}}</span> </p>
                    </div>
                    <div class="ml-3 block text-teal-900">
                        <p class="my-0.5 py-0 font-medium line-clamp-1	">{{ item.theme }}</p>
                        <span class="text-sm mx-3 font-medium text-gray-500">Commence on <span class="text-blue-600">{{item.startDate}}</span></span>
                        <span class="text-sm mx-3 font-medium text-gray-500">Due on <span class="text-orange-700">{{item.endDate}}</span></span>
                    </div>
                    <div class="ml-3 block text-teal-900">
                        <p class="my-0.5 py-0 text-lg text-sky-800 font-medium">Fees</p>
                        <span class="mx-3 font-medium">Default: <em class="">{{ item.defaultFee }} Tsh</em></span>
                        <span class="mx-3 font-medium">Guest: <em class="">{{ item.guestFee }} Tsh</em></span>
                        <span class="mx-3 font-medium">Foreigner: <em class="">{{ item.foreignerFee }} $</em></span>
                    </div>

                    <div class="mt-2">
                        <button @click="openDialog('update', item.theme)"
                            class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-0.5 px-2 rounded"
                            type="button">
                            Edit <i class="fa-regular fa-pen-to-square mx-2"></i>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    </div>
</div>
</template>