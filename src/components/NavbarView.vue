<template>
    <nav class=" text-white bg-navibar px-[20px] blur-effect rounded-b-[10px] rounded-t-[0px] shadow bg-gray-800 text-white sm:px-6 lg:px-8 w-full h-[60px] z-10">
      <div class="px-1 py-1 h-[60px] flex justify-between items-center sm:justify-start md:space-x-10  ">
        
         <!-- Logo or Brand Name -->
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="#">
          <button @click="toggleSidebar" class=" p-2 text-white rounded-md text-gray-500 focus:outline-none focus:width:35px">
            <svg xmlns="http://www.w3.org/2000/svg" height="34" fill="currentColor" viewBox="0 -960 960 960" width="30">
             
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm540-453h100v-107H700v107Zm0 186h100v-106H700v106ZM160-240h460v-480H160v480Zm540 0h100v-107H700v107Z"/>
             </svg>
        </button>
        </a>
      </div>
      

        <!-- primary nav -->
        <div class="hidden md:flex items-center space-x-1  text-white">
          <button class="bubbling-button flex justify-center items-center">
            <img :src="profile" alt="logo" class="w-[40px] h-[40px] rounded-full  mr-[15px] bg-white flex justify-center rounded">
               <p class="text-bold">Meena</p> 
          </button>
          </div>

          <!-- mobile button goes here -->
        <div class="md:hidden flex items-center justify-flex-end text-white">
          <button class="mobile-menu-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 -960 960 960" width="24">
             
              <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/>
             
            </svg>
          </button>
        </div>
      </div>
      <!-- mobile menu -->
    <div class="mobile-menu bg-navyblue hidden md:hidden rounded-b-[10px]">
      <a href="#" class="block py-2 px-4 text-sm hover:bg-navibar ">Home</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-navibar">About</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-navibar">Services</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-navibar hover:rounded-b-[10px]">Contact</a>
    </div>
    </nav>
    
  </template>
  
  <script>
  import ProfilePic from '@/assets/pro.jpg'
  export default {
    data() {
    return {
      isMobileMenuOpen: false,
      profile:ProfilePic,
    };
  },
    methods: {
      toggleSidebar() {
        this.$emit('toggleSidebar');
      },
      toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    
    },
    mounted() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  },
  };
  </script>
  <style>
  .bubbling-button {
  position: relative;
  padding: 5px 20px;
  border: 1px solid #63a0dd;
  background-color: #04148e;
  color: white;
  font-size: 16px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.bubbling-button::after {
  content: '';
  position: absolute;
  width: 120%;
  height: 120%;
  top: 50%;
  left: 50%;
  pointer-events: none;
  background-image: radial-gradient(circle, #0dedf585 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: translate(-50%, -50%) scale(10);
  opacity: 0;
  transition: transform .5s, opacity 1s;
 
}

.bubbling-button:hover::after {
  transform: translate(-50%, -50%) scale(0);
  opacity: .5;
  transition: 0s;
}

.bubbling-button:focus {
  outline: none;
}
</style>
  