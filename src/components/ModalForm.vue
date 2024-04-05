<template>
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      @click.self="closeModal"
    >
      <div class="relative top-20 mx-auto p-5 border w-[600px] shadow-lg rounded-md bg-white">
        <div class="mt-3 text-center">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Modal Title</h3>
          <div class="mt-2 px-7 py-3">
            <!-- Your form or content goes here -->
            
        <form class="space-y-4" @submit.prevent="submitForm">
            <div>
                <label for="name" class="block text-sm font-medium text-left text-gray-700">Job Tittle</label>
                <input type="text" v-model="formData.title" 
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                 placeholder="Job Tittle..." required>
            </div>
            
            <div>
                <label for="message" class="block text-sm font-medium text-left text-gray-700">Message</label>
                <textarea v-model="formData.body" rows="4"
                 class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  placeholder="Job Description..." required></textarea>
            </div>
            
       
         
          <div class="items-center px-4 py-3 flex justify-center ">
            <button
              id="ok-btn"
              class="px-4 mr-[20px] py-2 w-[90px] bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              @click="closeModal"
            >
              Close
            </button>

            <button type="submit" class="w-[90px] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {{ editingIndex !== null ? 'Update' : 'Add' }} Submit
                </button>
          </div>
        </form>
   
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: Boolean,
    },
    methods: {
      closeModal() {
        this.$emit("update:isOpen", false);
      },
    },
  };
  </script>
  