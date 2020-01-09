import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/home/Login'
import Reg from '@/components/home/Reg'
import LineChart from '@/components/home/LineChart'
import Map from '@/components/home/Map'
import Content3 from '@/components/control/Content3'
import Content4 from '@/components/historydata/Content4'
import Content2 from '@/components/realtimedata/Content2'

Vue.use(Router);
export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'Login',
      component:Login
    },{
      path:'/lineChart',
      name:'LineChart',
      component:LineChart
    }, {
      path:'/reg',
      name:'Reg',
      component:Reg
    }, {
      path:'/map',
      name:'Map',
      component:Map,
    }, {
      path:'/content3',
      name:'Content3',
      component:Content3,
    }, {
      path:'/content4',
      name:'Content4',
      component:Content4,
    }, {
      path:'/Content2',
      name:'Content2',
      component:Content2,
    }
  ]
})
