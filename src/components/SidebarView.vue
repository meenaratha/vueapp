<template>
    <aside class="w-64 bg-navyblue blur-effect m-[20px] backdrop-blur-xl" aria-label="Sidebar h-[100%]">
      <div class="px-3 py-2 overflow-y-auto  rounded-t-xl bg-navyblue bg-gray-50 ">
        <ul class="space-y-2">
          <li class="flex justify-center border-b-white pb-[40px]">
            <a href="#" class="flex items-center p-2 text-red font-extrabold h-[48px] text-gray-900 rounded-lg flex justify-center w-[160px] text-bold text-md text-white glassmorphism">
             <img :src="logo" alt="logo" class="w-[40px] h-[40px] rounded-full  mr-[20px] bg-white flex justify-center rounded">
             VUE JS</a>
          </li>
          <!-- sidebar menus  -->
           <li class="m-[30px] " >
            <div class="flex  text-white p-[7px] rounded-[10px] hover:bg-white hover:text-black">
              <div class="icon rounded-full bg-primary w-[30px] h-[30px] flex justify-center mr-[10px] text-bold text-md items-center">
                <svg  xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 -960 960 960" width="24">
                 
                  <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
                  </svg>
              </div>
              <a href="">Dashboard</a>
            </div>
           </li>

           <li class="m-[30px] " >
            <div class="flex  text-white p-[7px] rounded-[10px] hover:bg-white hover:text-black">
              <div class="icon rounded-full bg-primary w-[30px] h-[30px] flex justify-center mr-[10px] text-bold text-md items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 -960 960 960" width="24">
                
                  <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
                 </svg>
              </div>
              <a href=""> Profile</a>
            </div>
           </li>

           <li class="m-[30px] " >
            <div class="flex  text-white p-[7px] rounded-[10px] hover:bg-white hover:text-black">
              <div class="icon rounded-full bg-primary w-[30px] h-[30px] flex justify-center mr-[10px] text-bold text-md items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 -960 960 960" width="24">
                 
                  <path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/>
                </svg>
              </div>
              <a href="">Employee Notes</a>
            </div>
           </li>

           <li class="m-[30px] " >
            <div class="flex  text-white p-[7px] rounded-[10px] hover:bg-white hover:text-black">
              <div class="icon rounded-full bg-primary w-[30px] h-[30px] flex justify-center mr-[10px] text-bold text-md items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-4q-37-8-67.5-27.5T600-720H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h404q-4 20-4 40t4 40H160v525l46-45h594v-324q23-5 43-13.5t37-22.5v360q0 33-23.5 56.5T800-240H240L80-80Zm80-720v480-480Zm600 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
                 </svg>
              </div>
              <a href="">Team Chat</a>
            </div>
           </li>

           <li class="m-[30px] " >
            <div class="flex  text-white p-[7px] rounded-[10px] hover:bg-white hover:text-black">
              <div class="icon rounded-full bg-primary w-[30px] h-[30px] flex justify-center mr-[10px] text-bold text-md items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="M480-40v-80h280v-40H600v-320h160v-40q0-116-82-198t-198-82q-116 0-198 82t-82 198v40h160v320H200q-33 0-56.5-23.5T120-240v-280q0-74 28.5-139.5T226-774q49-49 114.5-77.5T480-880q74 0 139.5 28.5T734-774q49 49 77.5 114.5T840-520v400q0 33-23.5 56.5T760-40H480ZM200-240h80v-160h-80v160Zm480 0h80v-160h-80v160ZM200-400h80-80Zm480 0h80-80Z"/>
                  </svg>
              </div>
              <a href="">Help Disk</a>
            </div>
           </li>

           <li class="m-[30px] " >
            <div class="flex  text-white p-[7px] rounded-[10px] hover:bg-white hover:text-black">
              <div class="icon rounded-full bg-primary w-[30px] h-[30px] flex justify-center mr-[10px] text-bold text-md items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="currentColor" viewBox="0 -960 960 960" width="24">
                 <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/>
                </svg>
              </div>
              <a href="">Settings</a>
            </div>
           </li>
          <!-- Add more navigation items here -->
        </ul>
      </div>
    </aside>
  </template>
  
  <script>
  import MyLogo from '@/assets/logo.png';
  export default {
    data() {
    return {
      logo: MyLogo,
    };
  },
  };
  </script>

  <style >
.glassmorphism {
  background: rgba(255, 255, 255, 0.2); /* Semi-transparent white */
  backdrop-filter: blur(10px); /* Blur effect for the background */
  border-radius: 10px; /* Optional: rounded corners */
  border: 1px solid rgba(255, 255, 255, 0.18); /* Optional: border to enhance the glass effect */
  /* More styling here */
}
.blur-effect {
  /* This creates the blur effect */
  background: rgba(255, 255, 255, 0.05);
border-radius: 16px;

backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
}

</style>
  