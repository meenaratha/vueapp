<template>
    <div>
      
      <div class="p-5">
        <div class="flex justify-between items-center heading">
          <h2>Vue js & Tailwindcss Crud App</h2>
          <button
      class="px-4 py-2 bg-navyblue text-white font-bold rounded"
      @click="openModal"
    >
     Add Employee
    </button>
        </div>
    

    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10 flex justify-center items-center"
      @click="closeModal"
    >
      <div
        @click.stop
        class="relative w-[500px] mx-auto p-5 border shadow-lg  rounded-md bg-white z-10"
      >
        <div class="mt-3 text-center">
          <h3 class="text-lg leading-6 font-medium text-gray-900"> {{ editingIndex !== null ? 'Update the Employee' : 'Add New Employee' }}</h3>
          <div class="mt-2 px-7 py-3 w-full max-w-xs">
            <!-- Form -->
            <form class="space-y-4 p-[30px]" @submit.prevent="submitForm">
              <div class="mb-4">
                <label for="name" class="block text-sm font-bold mb-2 text-left text-gray-700">Job Title</label>
                <input
                  type="text"
                  v-model="formData.title"
                  class="shadow appearance-none border rounded w-[350px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Job Title..."
                  required
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-bold mb-2 text-left text-gray-700">Job Description</label>
                <textarea
                  v-model="formData.body"
                  rows="4"
                  class="shadow appearance-none border rounded w-[350px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Job Description..."
                  required
                ></textarea>
              </div>
              
              <div class="flex justify-center space-x-4">
                <button
                  type="button"
                  class="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  @click="closeModal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="px-4 py-2 bg-indigo-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {{ editingIndex !== null ? 'Update' : 'Add' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
      
      
      <!-- <form @submit.prevent="submitForm">
        <input v-model="formData.title" type="text" placeholder="Title" required>
        <textarea v-model="formData.body" placeholder="Body" required></textarea>
        <button type="submit">{{ editingIndex !== null ? 'Update' : 'Add' }} Post</button>
      </form> -->
    <div class="outer-wrapper blur-effect">  
  <div class="  table-wrapper blur-effect">
  <table class="min-w-full table-auto border-[10px] box-shadow-sm blur-effect" >
    <thead class="bg-naviblue text-white text-bold blur-effect ">
      <tr class="blur-effect">
        <th class="px-4 py-4 text-left text-xs font-medium  uppercase whitespace-nowrap tracking-wider">Employee Id</th>
        <th class="px-4 py-4 text-left text-xs font-medium  uppercase whitespace-nowrap tracking-wider">Job Tittle</th>
        <th class="px-4 py-4 text-left text-xs font-medium  uppercase whitespace-nowrap abnftracking-wider">Job Description</th>
        <th class="px-4 py-4 text-left text-xs font-medium  uppercase whitespace-nowrap tracking-wider">Action</th>

      </tr>
    </thead>
    <tbody class="">
      <tr class="bg-white border-b"  v-for="(post, index) in posts" :key="post.id">
        <td class="px-4 py-2 ">{{ post.id }}</td>
        <td class="px-4 py-2 ">{{ post.title }}</td>
        <td class="px-4 py-2 ">{{ post.body }}</td>
        <td class="px-4 py-2 ">
          <div class="flex justify-between">
            <button @click="editPost(index)" class="  mr-[20px] flex items-center px-4 py-2 bg-navyblue font-bold text-white rounded hover:bg-navyblue">
    <!-- SVG Edit Icon -->
    <svg class="h-4 w-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM3 17v3h3c.553 0 1-.447 1-1v-2H4c-.553 0-1 .447-1 1z"/></svg>
    <!-- Button Text -->
    <span>Edit</span>
  </button> 
              <button @click="deletePost(index)" class="flex items-center justify-center bg-red hover:bg-red text-white font-bold py-2 px-4 rounded">
    <!-- SVG Icon for the delete symbol -->
    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
    Delete
  </button>
            </div>
         
        </td>

      </tr>
     
      <!-- Repeat <tr> for more rows -->
    </tbody>
  </table>
   </div>
  </div>

    </div>
  </template>
  
  <script>
import Swal from 'sweetalert2'; // Import SweetAlert2
import axios from 'axios';
// import ModalForm from "@/components/ModalForm.vue";


  console.log(localStorage.getItem('posts'),'getdata');
  export default {
    data() {
      return {
        isModalOpen: false,
        posts:localStorage.getItem('formData'),
        formData: {
          title: '',
          body: ''
        },
        editingIndex: null, // Track the index of the post being edited
       
        
      };
    },
    components: {
    // ModalForm,
  },
    
    mounted() {
      this.fetchData();
      this.resetForm();
      this.loadPosts();
      this. loadFormData();
    },
    methods: {
      openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
      loadPosts() {
    // Try to load posts from local storage first
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      this.posts = JSON.parse(storedPosts);
    } else {
      // If no posts in local storage, fetch from API
      this.fetchData();
    }
  },
  
      fetchData() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            // this.posts = response.data;
             // Assuming you want to sort by 'id' in descending order
      this.posts = response.data.sort((a, b) => b.id - a.id);
            this.savePosts(); // Save the initial fetch to local storage for subsequent loads
          })
          .catch(error => console.error("There was an error fetching the posts:", error));
      },
    //   getItemsFromLocalStorage() {
    //   const storedItems = JSON.parse(localStorage.getItem('posts'));
    //   if (storedItems) {
    //     this.posts = storedItems;
    //   }
    // },
      savePosts() {
    localStorage.setItem('posts', JSON.stringify(this.posts));
  },
  // loadFormData() {
  //     // Load formData from localStorage if available
  //     const storedFormData = localStorage.getItem('formData');
  //     if (storedFormData) {
  //       this.formData = JSON.parse(storedFormData);
  //     }
  //   },
  
      submitForm() {
  if (this.editingIndex !== null) {
    // Update logic
    this.posts[this.editingIndex] = {
      ...this.formData,
      id: this.posts[this.editingIndex].id // Preserve the id
    };
    this.editingIndex = null; // Reset editing index
   // Save posts and reset form
   this.savePosts();
    this.resetForm();
    this.closeModal();

    // Show success message for update
    Swal.fire({
      title: 'Success!',
      text: 'Post updated successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } else {
    // Add new post logic
    const newPost = {
      ...this.formData,
      id: this.posts.length ? Math.max(...this.posts.map(post => post.id)) + 1 : 1,
    };
    this.posts.unshift(newPost);
    // Save posts and reset form
    this.savePosts();
    this.resetForm();
    this.closeModal();

    // Show success message for adding a new post
    Swal.fire({
      title: 'Success!',
      text: 'Post added successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }
  this.savePosts(); // Save after modification
  this.resetForm(); // Reset form fields
        // Reset form
         // After form submission logic is handled, close the modal
    this.closeModal();
        // this.formData = { title: '', body: '' };
        // localStorage.removeItem('formData'); // Clear saved form data
         // Display SweetAlert2 success message
 
      },
       // Add a method to reset the form
  resetForm() {
    this.formData = { title: '', body: '' };
  },
      editPost(index) {
        // Set the index of the post being edited
  this.editingIndex = index;
         // Find the post in the posts array
  const post = this.posts[index];
        this.formData = { ...post }; // Copy the post data to the form
         // Open modal here if it's not opened automatically
      this.openModal();

     
      },
      deletePost(index) {
  // Ask for confirmation before deletion
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      // Perform deletion if confirmed
      this.posts.splice(index, 1);
      this.savePosts(); // Save the updated posts array to local storage

      // Show success message
      Swal.fire(
        'Deleted!',
        'Your post has been deleted.',
        'success'
      )
    }
  })
},

     
    }
  }
  </script>
  
  <style>
 .outer-wrapper {
    margin: 10px;
    margin-left: 20px;
    margin-right: 20px;
    /* border: 1px solid black; */
    border-radius: 10px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.9);
    max-width: fit-content;
    max-height: fit-content;
    /* background-color: aqua; */

    
}
.table-wrapper {

    overflow-y: scroll;
    overflow-x: scroll;
    height: 100%;
    max-height: 100vh;
    border-radius: 10px;
    margin-top: 22px;
    
    /* margin: 15px; */
    padding-bottom: 20px;
    
}
/* For Webkit (Chrome, Safari, etc.) */
.table-wrapper::-webkit-scrollbar {
  width: 4px; /* Width of the scrollbar */
}

.table-wrapper::-webkit-scrollbar-track {
  background: #f0f0f0; /* Color of the track */
}

.table-wrapper::-webkit-scrollbar-thumb {
  background: #007bff; /* Color of the scrollbar thumb */
  border-radius: 6px; /* Rounded corners of the thumb */
  height: 30px;
  width:2px;

}

.table-wrapper::-webkit-scrollbar-thumb:hover {
  background: #0056b3; /* Color of the thumb on hover */
}

table {
    
    min-width: max-content;
    
    border-collapse: separate;
    border-spacing: 0px;    
    
}



table th{
    position: sticky; 
    z-index: 1;
    top: 0px;

    
    background-color: rgb(2, 2, 61);
    color: #ffff;
    
    text-align: center;
    font-weight: normal;
    font-size: 18px;
    /* outline: 0.7px solid black;
    border: 1.5px solid black; */

} 



table th, table td {
    
    padding: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    
}

table td {
    text-align: left;
    
    font-size: 15px;
    border: 1px solid rgb(177, 177, 177);
    padding-left: 20px;
    
}
@media screen and (max-width: 768px) {
  .heading{
    display: block !important;
    text-align: center;
}
.heading h2{
  font-size: 22px;
  padding-bottom: 20px;
  color: #133b5c;
  font-weight: 800;
}
}
.heading h2{
  font-size: 30px;
  /* padding-bottom: 20px; */
  color: #133b5c;
  font-weight: 800;
}
tr:nth-child(odd) {
  background-color: #f2f2f2; /* Color for odd rows */
}

tr:nth-child(even) {
  background-color: #ffffff; /* Color for even rows */
}
 </style>