<template>
    <div class="flex h-screen  full-container">
      <SidebarView v-if="showSidebar" @toggleSidebar="toggleSidebar" />
      <div class="flex flex-col flex-1">
        <NavbarView @toggleSidebar="toggleSidebar" />
        <main class="p-4 main-content">
          <slot />
          <EmployeeList/>
        </main>
      </div>
    </div>
  </template>
  
  <script>
import EmployeeList from './EmployeeList.vue';
  import NavbarView from "./NavbarView.vue";
  import SidebarView from "./SidebarView.vue";
  
  export default {
    components: {
        NavbarView,
        SidebarView,
        EmployeeList,
    },
    data() {
      return {
        showSidebar: true,
      };
    },
    methods: {
      toggleSidebar() {
        this.showSidebar = !this.showSidebar;
      },
    },
  };
  </script>
  

  <style>
  .main-content{
    /* margin: 20px; */
    display: block;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
  }
  .full-container{
    width: 100%;
    /* overflow-x: hidden; */
  }
  </style>