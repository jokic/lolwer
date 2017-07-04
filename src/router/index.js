import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hero from '@/components/content/Hero'
import Item from '@/components/content/Item'
import Skill from '@/components/content/Skill'
import Talent from '@/components/content/Talent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
      	{
      		path: "/",
      		component: Hero
      	},
      	{
      		path: "item",
      		component: Item
      	},
      	{
      		path: "skill",
      		component: Skill
      	},
      	{
      		path: "talent",
      		component: Talent
      	}
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return false
  }
})
