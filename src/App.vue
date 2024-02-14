<script>
import ContactBook from './views/ContactBook.vue'
import AppHeader from "@/components/AppHeader.vue";
export default {
  components: { 
    ContactBook,
  AppHeader,
 },

};

</script>


<template>
  <div id="app">
      <AppHeader />

      <div class="container mt-3">
            <router-view />
      </div>
  </div>
</template>


<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>
