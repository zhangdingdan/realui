import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import User from '../views/User'
import Robot from '../views/Robot'
import RobotControl from '../views/RobotControl'
import Telecontrol from '../views/Telecontrol'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/User',
    name: 'User',
    component: User
  },
  {
    path: '/RobotControl',
    name: 'RobotControl',
    component: RobotControl
  },
  {
    path: '/Robot',
    name: 'Robot',
    component: Robot
  },
  {
    path: '/Telecontrol',
    name: 'Telecontrol',
    component: Telecontrol
  },
]

const router = new VueRouter({
  routes
})

export default router
