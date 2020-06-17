<script>
import Vue from 'vue';
import Datepicker from '@/Datepicker.vue';

import './vue-datepicker.css';

export default Vue.extend({
    name: 'Dev',
    components: {
        Datepicker
    },
    data() {
        return {
            dp1: null,
            dp2: null,
            dp3: null,
            dp4: null,
            dpFormat: 'DD MMM YYYY'
        }
    },
});
</script>

<template>
    <div id="app" class="p-16 bg-gray-900">
        <div class="flex flex-col w-full min-h-full mx-auto my-8 text-gray-900 bg-white rounded shadow" style="max-width: 960px">
            <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
                <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">
                    <div class="ml-4 mt-4">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Datepicker Examples
                        </h3>
                        <p class="mt-1 text-sm leading-5 text-gray-500">
                            <span>A <em>very</em> basic page to outline a few examples of the datepicker in practise.</span> <a href="https://github.com/stephenoldham/vue-datepicker/blob/master/src/Datepicker.vue" target="_blank" class="text-blue-500 text-sm">View the repo <span class="arrow">&rarr;</span></a>
                        </p>
                    </div>
                    <div class="ml-4 mt-4 flex-shrink-0">
                        <span class="inline-flex p-1 text-white uppercase font-100 rounded bg-blue-600" style="font-size: .6rem">VueJs</span>
                    </div>
                </div>
            </div>

            <div class="p-8">
                <section class="mb-16 pb-16 border-b border-gray-200">
                    <h3 class="text-blue-500">Inline</h3>
                    <span class="block mb-3 text-xs text-gray-500">
                        Inputs all bound to datepickers value using v-model
                    </span>

                    <div class="md:flex">
                        <div class="flex-1 mb-4 mr-6">    
                            <h4 class="text-gray-700 text-sm mb-2">Light mode</h4>
                            <input 
                            type="text" 
                            :value="dp1"
                            disabled 
                            class="form-input transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            <datepicker inline v-model="dp1"></datepicker>
                        </div>
                        <div class="flex-1">
                            <h4 class="text-gray-700 text-sm mb-2">Dark mode</h4>
                            <input 
                            type="text" 
                            :value="dp2"
                            disabled 
                            class="form-input transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            <datepicker inline dark v-model="dp2"></datepicker>
                        </div>
                    </div>
                </section>


                <section class="mb-16 pb-16 border-b border-gray-200">
                    <h3 class="text-blue-500 mb-3">Theme: Highlight Color</h3>
                    
                    <div class="md:flex">
                        <div class="flex-1 mb-4 mr-6">    
                            <h4 class="text-gray-700 text-sm mb-2">Pink</h4>
                            <input 
                            type="text" 
                            :value="dp3"
                            disabled 
                            class="form-input transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            <datepicker inline 
                            v-model="dp3"
                            theme="pink"
                            default="now"></datepicker>
                        </div>
                        <div class="flex-1">
                            <h4 class="text-gray-700 text-sm mb-2">Green range picker in dark mode</h4>
                            <input 
                            type="text" 
                            :value="dp4"
                            disabled 
                            class="form-input transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            <datepicker inline dark 
                            v-model="dp4"
                            theme="green"
                            type="range"
                            :default="[new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)]"></datepicker>
                        </div>
                    </div>
                </section>
                

                <section class="mb-16 pb-16 border-b border-gray-200">
                    <h3 class="text-blue-500 mb-3">Basic</h3>
                    
                    <datepicker 
                    default="now"
                    format="YYYY-MM-DD">
                        <div class="text-sm">
                            The datepicker can render a basic date anywhere within the default slot: <span class="text-blue-500">%date%</span>
                            <br>Here's the same date with a custom date format: <span class="text-orange-500">%date|ddd Do MMM YYYY%</span>
                        </div>
                    </datepicker>
                    <span class="block mt-2 text-xs text-gray-500">
                        Change the date by clicking anywhere in the text above.
                    </span>
                </section>
            

                <section class="mb-16 pb-16 border-b border-gray-200">
                    <h3 class="text-blue-500 mb-3">Date format</h3>

                    <div class="flex items-center">
                        <div class="max-w-xs rounded-md shadow-sm mr-3">
                            <select v-model="dpFormat" class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                <option value="DD MMM YYYY">DD MMM YYYY</option>
                                <option value="DD-MM-YY">DD-MM-YY</option>
                                <option value="Do MMMM">Do MMMM</option>
                            </select>
                        </div>

                        <datepicker 
                        name="dp2" 
                        default="now"
                        :format="dpFormat"
                        :options="{
                            enterTransition: 'fadeInLeft',
                            withPointer: false,
                        }"></datepicker>
                    </div>
                </section>


                <section class="mb-16 pb-16 border-b border-gray-200">
                    <h3 class="text-blue-500 mb-3">Date range picker</h3>
                    <p class="text-sm mb-3 max-w-xl">
                        When setting the picker type prop to "range", after an initial date is selected the picker remains open to allow the selection of a second date to end the range
                    </p>

                    <div class="flex flex-wrap">
                        <div class="mb-3 mr-3">
                            <h4 class="text-gray-700 text-sm mb-2">Light mode</h4>
                            <datepicker name="dp3" type="range"></datepicker>
                        </div>
                        <div class="mb-3 mr-3">
                            <h4 class="text-gray-700 text-sm mb-2">Dark mode</h4>
                            <datepicker dark name="dp4" type="range"></datepicker>
                        </div>
                    </div>
                </section>


                <section class="mb-16 pb-16 border-b border-gray-200">
                    <h3 class="text-blue-500 mb-3">Period (month, year) selection</h3>
                    
                    <div class="flex flex-wrap">
                        <div class="mb-3 mr-3">
                            <h4 class="text-gray-700 text-sm mb-2">Month Picker</h4>
                            <datepicker format="MMMM" picks="months"></datepicker>
                        </div>

                        <div class="mb-3 mr-3">
                            <h4 class="text-gray-700 text-sm mb-2">Year Picker</h4>
                            <datepicker format="YYYY" picks="years"></datepicker>
                        </div>
                    </div>
                </section>


                <section class="mb-16 pb-16 border-b border-gray-200">
                    <h3 class="text-blue-500 mb-3">Limiting date selection</h3>

                    <div class="flex flex-wrap">
                        <div class="mb-3 mr-3">
                            <h4 class="text-gray-700 text-sm mb-2">Future Only</h4>
                            <datepicker disable-past></datepicker>
                        </div>

                        <div class="mb-3 mr-3">
                            <h4 class="text-gray-700 text-sm mb-2">Past Only</h4>
                            <datepicker disable-future></datepicker>
                        </div>

                        <div class="mb-3 mr-3">
                            <h4 class="text-gray-700 text-sm mb-2">Min date</h4>
                            <datepicker from="2020-06-01"></datepicker>
                            <span class="block mt-1 text-xs text-gray-500">e.g. 1 June 2020</span>
                        </div>

                        <div class="mb-3 mr-3">
                            <h4 class="text-gray-700 text-sm mb-2">Max date</h4>
                            <datepicker to="2020-05-31"></datepicker>
                            <span class="block mt-1 text-xs text-gray-500">e.g. 31 May 2020</span>
                        </div>

                        <div class="mb-3 mr-3">
                            <h4 class="text-gray-700 text-sm mb-2">Disable dates using recurrence rules</h4>
                            <datepicker disable-rule=""></datepicker>
                            <span class="block mt-1 text-xs text-gray-500">e.g. disable every Monday and Wednesday</span>
                        </div>
                    </div>
                </section>


                <section class="mb-16">
                    <h3 class="text-blue-500 mb-3">Picker Placement</h3>

                    <p class="py-2 text-sm">Picker alignment can be defined using the <strong>placement</strong> attribute. use <strong>top</strong>, <strong>right</strong>, <strong>bottom</strong> or <strong>left</strong> to specify which side the picker will display on.</p>
                    
                    <div class="flex flex-wrap mt-2 mb-4">
                        <div class="mb-3 mr-3">
                            <h4 class="text-gray-700 text-sm mb-2">Placement: top</h4>
                            <datepicker placement="top" :options="{ withPointer: true }"></datepicker>
                        </div>
                        <div class="mb-3 mr-3">
                            <h4 class="text-gray-700 text-sm mb-2">Placement: right</h4>
                            <datepicker placement="right" :options="{ withPointer: true }"></datepicker>
                        </div>
                        <div class="mb-3 mr-3">
                            <h4 class="text-gray-700 text-sm mb-2">Placement: bottom</h4>
                            <datepicker placement="bottom" :options="{ withPointer: true }"></datepicker>
                        </div>
                        <div class="mb-3 mr-3">
                            <h4 class="text-gray-700 text-sm mb-2">Placement: left</h4>
                            <datepicker placement="left" :options="{ withPointer: true }"></datepicker>
                        </div>
                    </div>

                    <p class="py-4 text-sm">You can also specify which edge of the <strong><em>picker</em></strong> to align to. If you set the placement to <strong>top</strong>, the picker will align to <strong>top middle</strong> by default. To align the picker <strong>top left</strong> you would use the placement <strong>top-start</strong></p>
                    
                    <div class="flex flex-wrap mt-2">
                        <div class="mb-3 mr-3">
                            <h4 class="text-gray-700 text-sm mb-2">Placement: top-start</h4>
                            <datepicker placement="top-start"></datepicker>
                        </div>
                        <div class="mb-3 mr-3">
                            <h4 class="text-gray-700 text-sm mb-2">Placement: top (middle)</h4>
                            <datepicker placement="top"></datepicker>
                        </div>
                        <div class="mb-3 mr-3">
                            <h4 class="text-gray-700 text-sm mb-2">Placement: top-end</h4>
                            <datepicker placement="top-end"></datepicker>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<style>
    html, body {
        
    }
</style>