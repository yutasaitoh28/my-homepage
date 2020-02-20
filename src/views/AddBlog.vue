<template>
  <div id="Add-Blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>日記</label>
        <input type="checkbox" value="日記" v-model="blog.categories" />
        <label>アイデア帳</label>
        <input type="checkbox" value="アイデア帳" v-model="blog.categories" />
        <label>日々の考察</label>
        <input type="checkbox" value="日々の考察" v-model="blog.categories" />
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="(author, key) in authors " :key="key">{{ author }}</option>
      </select>
      <v-btn v-on:click.prevent="post">Add Blog</v-btn>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="(category, key) in blog.categories" :key="key">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ['Me', 'The First Visitor', 'The Returner'],
      submitted: false,
    }
  },
  methods: {
    post: function(){
       this.$http.post('http://jsonplaceholder.typicode.com/posts',{
         title: this.blog.title,
         body: this.blog.content,
         userID: 1
       }).then(function(data){
         console.log(data);
         this.submitted = true;
       });
    }
  }
}
</script>

<style>
#Add-Blog *{
  box-sizing: border-box;
}
#Add-Blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes  input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;
}
</style>