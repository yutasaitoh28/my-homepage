import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About.vue'
import Experience from '@/views/Experience.vue'
import Blog from '@/views/Blog.vue'
import Books from '@/views/Books.vue'
import AddBookForm from '@/views/AddBookForm.vue'
import Contact from '@/views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path: '/books/:book_id?/edit',
      name: 'book_edit',
      component: AddBookForm 
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
