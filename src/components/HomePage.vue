<template>
  <div>
    <div class="user-add">
  <h2>Add user</h2>
  <input type="text" v-model="formData.name"  placeholder="namee"/> <br />
  <input type="text"  v-model="formData.email" placeholder="emailll" /> <br />

  <button @click="storeUser">Store</button>
</div>

    <div class="users" v-for="user in posts" :key="user.id">
      
      <table>
        <thead class="border">
          <tr  class="border">
            <th>ID</th>
            <th>NAME</th>

            <th>EMAIL</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>


          </tr>
        </tbody>
      </table>
     
  </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      posts: [],
      formData: {
        email: '',
         name: '',
        },
    };
  },
  mounted() {
      this.fetchData();
  },
  methods: {
    fetchData() {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            this.posts = response.data;
            this.savePosts(); // Save the initial fetch to local storage for subsequent loads
          })
          .catch(error => console.error("There was an error fetching the posts:", error));
      },

      async storeUser() {
        try {
    // Making the function async allows us to use await
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users", 
      {
        
        name: this.formData.name, // Sending name
        email: this.formData.email, // Sending email
        
        // Assuming you're using the length of the posts array to generate a new ID
        id: this.posts.length ? Math.max(...this.posts.map(post => post.id)) + 1 : 1,
      }
    );

    // Response from the POST request
    const user = response.data;

    // Unshift adds the new user to the beginning of the posts array
    this.posts.unshift(user);

    console.log(user);
  } 
  catch(e) {
    console.log(e);
  }
  this.savePosts(); // Save after modification
  this.resetForm(); // Reset form fields
},
savePosts() {
    localStorage.setItem('posts', JSON.stringify(this.user));
  },
resetForm() {
    this.formData = { name: '', email: '' };
  },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
