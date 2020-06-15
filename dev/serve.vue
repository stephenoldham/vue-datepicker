<script>
import Vue from 'vue';
import Datepicker from '@/Datepicker.vue';

import './vue-datepicker.css';

export default Vue.extend({
  name: 'Dev',
  components: {
    Datepicker
  }
});
</script>

<template>
  <div id="app">
    <div class="block w-full" style="height: 1280px"></div>  
    
    <datepicker />
    <datepicker 
    :disable="['2020-06-14', '2020-06-28', '2020-06-20']"
    :options="{ weekStartsOn: 3 }" />
    <datepicker placement="bottom" dark :options="{ withPointer: true, alwaysInView: false }" />
    <datepicker default="2020-03-01" placement="right" dark :options="{ withPointer: true }" />
    
    <datepicker v-slot="{ date, methods }">
        <input 
        type="text" 
        class="form-input" 
        @focus="methods.show"
        @keydown.tab="methods.hide"
        :value="date.readable">
        <button class="p-1 rounded-md bg-gray-100" @click="methods.setDate('2020-03-02', true)">Default</button>
    </datepicker>

    <div class="block w-full" style="height: 1280px"></div>  
  </div>
</template>

<style>
    html, body {
        padding: 0.25rem;
    }
</style>