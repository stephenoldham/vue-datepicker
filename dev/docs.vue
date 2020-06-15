<script>
    import Vue from 'vue';
    import Datepicker from '@/Datepicker.vue';
    import './vue-datepicker.css'

    import Prism from 'prismjs';
    import './prism-theme.css'

    export default Vue.extend({
        name: 'Docs',
        components: {
            Datepicker
        },
        data() {
            return {
                date: null,
                type: 'range',
                theme: 'indigo',

                themes: [
                'indigo',
                'blue',
                'pink',
                'red',
                'green',
                ],

                darkMode: false,

                dropdowns: {
                    theme: {
                        show: false,
                    }
                },

                icons: {
                    sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
                    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
                    calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
                    single: '<circle cx="12" cy="12" r="9"></circle><line x1="12" y1="9" x2="12" y2="15"></line><line x1="10" y1="11" x2="12" y2="9"></line>',
                    range: '<line x1="4" y1="14" x2="20" y2="14"></line><line x1="10" y1="6" x2="20" y2="6"></line><line x1="4" y1="10" x2="20" y2="10"></line><line x1="4" y1="18" x2="10" y2="18"></line>'
                },
            }
        },

        methods: {
            icon(name, size, classes, stroke){
                stroke = stroke? stroke : 2

                return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" class="${classes}">${this.icons[name]}</svg>`
            },

            code(){
                let attributes = {inline: true,}

                if(this.darkMode){
                    attributes['dark'] = this.darkMode
                }

                if(this.type == 'range'){
                    attributes['type'] = 'range'
                }

                attributes['theme'] = this.theme

                attributes = Object.keys(attributes).reduce(function (r, key) {
                    if(typeof attributes[key] == 'boolean' && attributes[key]){
                        return r += ` ${key}`
                    }

                    return r += ` ${key}="${attributes[key]}"`;
                }, []);

                let code = `<datepicker${attributes} />`
                return Prism.highlight(code, Prism.languages.markup, 'markup')
            },
        }
    });
</script>

<template>
    <div id="app" class="flex items-center justify-center w-full h-full">
        <div class="fixed w-full h-full">
            <div class="absolute w-full h-full bg-night"></div>
            <div class="absolute w-full h-full bg-80s z-5 transition-all ease-linear duration-300"
            :class="{
                'opacity-0': darkMode,
                'opacity-1': !darkMode,
            }"></div>

            <div class="flex absolute top-0 right-0 m-8 text-white">
                <span v-html="icon('range', 24, '-mt-px')"></span>
                <span v-html="icon('single', 24, '-mt-px')"></span>
                <span 
                v-if="!darkMode"
                v-html="icon('sun', 24, '-mt-px')"></span>
                <span 
                v-if="darkMode"
                v-html="icon('moon', 24, '-mt-px')"></span>
            </div>
        </div>

        <div class="relative flex flex-col w-full max-w-xl z-10">
            <div class="mb-12">
                <div class="flex justify-center text-white font-nexa font-bold leading-none text-6xl">
                    Pical
                    <span 
                    class="flex items-center justify-center w-8 h-8 mt-px ml-1 -mr-5 rounded-full bg-white bg-opacity-25 text-gray-100"
                    v-html="icon('calendar', 16, '-mt-px')"></span>
                </div>

                <p class="mt-4 text-center text-white">
                    A <span class="px-1 py-1 bg-white bg-opacity-25 rounded-sm">VueJs</span> datepicker for <span class="px-1 py-1 bg-white bg-opacity-25 rounded-sm">Tailwind CSS</span> projects 🤘
                </p>
            </div>

            <div class="flex">
                <div class="shadow-lg rounded-lg z-50">
                    <datepicker 
                    inline 
                    :theme="theme" 
                    :type="type"
                    :dark="darkMode"
                    v-model="date"></datepicker>
                </div>

                <div 
                class="flex-1 ml-8 text-sm font-medium rounded divide-y"
                :class="{
                    'text-gray-700 bg-white divide-gray-300': darkMode,
                    'text-white border border-white divide-gray-100': !darkMode,
                }">
                    <div class="p-3 text-white text-center">
                        {{ date? date : 'Choose a date' }}
                    </div>
                    <div class="flex items-center p-3">
                        <label for="type" class="flex-1 inline-block leading-5">Type</label>
                        <select 
                        id="type" 
                        v-model="type"
                        class="form-select inline-block pl-3 pr-10 py-2 text-base text-gray-500 leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                            <option v-for="item in ['single', 'range']">{{ item }}</option>
                        </select>
                    </div>

                    <div class="flex items-center p-3">
                        <label for="type" class="flex-1 inline-block leading-5">Theme Color</label>
                        <select 
                        id="type" 
                        v-model="theme"
                        class="form-select inline-block pl-3 pr-10 py-2 text-base text-gray-500 leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                            <option v-for="item in themes">{{ item }}</option>
                        </select>

                        <div class="relative inline-block text-left">
                            <div>
                                <span 
                                @click="dropdowns.theme.show = !dropdowns.theme.show"
                                class="rounded-md shadow-sm block w-10 h-10 border border-white bg-gray-500">
                                </span>
                            </div>

                            <!--
                            Dropdown panel, show/hide based on dropdown state.

                            Entering: "transition ease-out duration-100"
                            From: "transform opacity-0 scale-95"
                            To: "transform opacity-100 scale-100"
                            Leaving: "transition ease-in duration-75"
                            From: "transform opacity-100 scale-100"
                            To: "transform opacity-0 scale-95"
                            -->
                            <div 
                            v-if="dropdowns.theme.show"
                            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                                <div class="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <div class="py-1">
                                        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Edit
                                        </a>
                                        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Duplicate
                                        </a>
                                    </div>
                                    <div class="border-t border-gray-100"></div>
                                    <div class="py-1">
                                        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Archive
                                        </a>
                                        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Move
                                        </a>
                                    </div>
                                    <div class="border-t border-gray-100"></div>
                                    <div class="py-1">
                                        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Share
                                        </a>
                                        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Add to favorites
                                        </a>
                                    </div>
                                    <div class="border-t border-gray-100"></div>
                                    <div class="py-1">
                                        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Delete
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
                    <div class="flex items-center p-3">
                        <span class="flex-1">Dark Mode</span>
                        <span 
                        role="checkbox" 
                        tabindex="0" 
                        :aria-checked="darkMode" 
                        class="relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
                        :class="{
                            'bg-indigo-500': darkMode,
                            'bg-gray-200': !darkMode
                        }"
                        @click="darkMode = !darkMode">
                            <!-- On: "translate-x-5", Off: "translate-x-0" -->
                            <span 
                            aria-hidden="true" 
                            :class="{
                                'translate-x-5': darkMode,
                                'translate-x-0': !darkMode
                            }"
                            class="inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"></span>
                        </span>
                    </div>
                </div>
            </div>

<pre class="mt-8 p-3 rounded bg-gray-900">
<code v-html="code()">

</code>
</pre>
        </div>
    </div>
</template>

<style>
@import 'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css';
@import 'https://cdn.jsdelivr.net/npm/@tailwindcss/ui@latest/dist/tailwind-ui.min.css';
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');

html, body {
    height: 100%;
}

.font-nexa {
    font-family: 'Nexa', cursive;
}

.bg-night {
    background: rgb(43,16,60);
    background: linear-gradient(45deg, rgba(43,16,60,1) 0%, rgba(70,61,133,1) 50%, rgba(14,22,85,1) 100%);
}

.bg-80s {
    background: rgb(131,58,180);
    background: linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
}

.bg-indigo-gradient {
    background: rgb(76,81,191);
    background: linear-gradient(45deg, rgba(67,65,144,1) 25%, rgba(76,81,191,1) 50%);
}
</style>