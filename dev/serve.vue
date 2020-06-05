<script>
import Vue from 'vue';
import Datepicker from '@/Datepicker.vue';

import '../dist/vue-datepicker.css';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Datepicker
  }
});
</script>

<template>
  <div id="app">
    <datepicker inline />
  </div>
</template>
