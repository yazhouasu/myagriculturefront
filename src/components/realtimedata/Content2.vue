<template>
<div>
  <NavBar></NavBar>
  <el-row>
  <el-col :span="4"><div class="grid-content bg-purple-dark">
    <SideBar></SideBar>
    </div></el-col>
    <el-col :span="20"><div class="grid-content bg-purple-light">
  <div style="flex-direction:column;width:100%;background:#f0f0f0;top:-10px;flex-grow:20">
    <div class="shang"
         style="margin:0px;display:flex;flex-direction:row;justify-content:space-around;height:200px;align-items:flex-end">
      <div style="flex-direction:column;height:100%">
        <p style="color:#FFA500">A区1号</p>
        <div style="background:#DAA520;height:20px"><i class="el-icon-camera"></i> 实时照片</div>
        <div><img style="height:120px;width:150px" :src="photo"></div>
      </div>
      <div style="border-radius: 4px;display:flex;flex-direction:column">
        <div>
          <el-button style="background-color:#DAA520;border-color:#AFEEEE;float:right;margin:10px" :plain="true"
                     @click="open">预警设置
          </el-button>
        </div>
        <div style="background:#DAA520;height:20px">生长周期</div>
        <el-steps :active="2" finish-status="success" simple style="margin-top: 2px">
          <el-step title="育苗期"></el-step>
          <el-step title="生长期"></el-step>
          <el-step title="开花期"></el-step>
          <el-step title="成熟期"></el-step>
          <el-step title="采摘期"></el-step>
        </el-steps>
      </div>
      <div>
        <div style="background:#DAA520"><i class="el-icon-video-camera"></i> 视频监控</div>
        <div>
          <!-- <img style="height:160px;width:270px" :src="video"> -->
          <video1></video1>
        </div>
      </div>
    </div>
    <div class="xia" style="display:flex;flex-direction:row;height:300px">
      <div style="border-style:groove;border-color:#AFEEEE;width:22%">
        <div style="background:#DAA520;height:20px;width:100%">空气温湿度</div>
        <div style="display:flex;flex-direction:row;">
          <kongqi style="width:50%"></kongqi>
          <kshidu style="width:50%"></kshidu>
        </div>
      </div>
      <div style="border-style:groove;border-color:#AFEEEE;width:22%">
        <div style="background:#DAA520;height:20px;width:100%">土壤温湿度</div>
        <div style="display:flex;flex-direction:row">
          <turang style="width:50%"></turang>
          <tshidu style="width:50%"></tshidu>
          <div></div>
        </div>

      </div>
      <div style="border-style:groove;border-color:#AFEEEE;width:22%">
        <div style="background:#DAA520;height:20px;width:100%"><i class="fa-leaf"></i>光照强度</div>
        <guangzhao></guangzhao>
      </div>
      <div style="border-style:groove;border-color:#AFEEEE;width:22%">
        <div style="background:#DAA520;height:20px;width:100%">二氧化碳浓度</div>
        <co2></co2>
      </div>

    </div>
  </div>
  </div></el-col>
  </el-row>
  </div>
</template>
<script>
  import NavBar from '../commons/NavBar'
  import video1 from './component/Video'
  import turang from './/wendu/turang.vue'
  import guangzhao from './/wendu/guangzhao'
  import co2 from './/wendu/co2'
  import kongqi from './/wendu/kongqi'
  import kshidu from './/wendu/kshidu'
  import tshidu from './/wendu/tshidu'
  import SideBar from "../commons/SideBar";

  export default {
    name: "Content2",
    components: {
      SideBar,
      NavBar,
      video1,
      turang,
      guangzhao,
      co2,
      kongqi,
      kshidu,
      tshidu
    },
    data() {
      return {
        photo: 'http://pic.sc.chinaz.com/files/pic/pic9/201811/bpic9272.jpg',
        // video:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575563887919&di=6ddbf7f52e62b9f5d697793a452a8e99&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fk3%2FM09%2FE6%2FE4%2FwKhQv1sTuLWEDtZTAAAAAJfViw0826.jpg'
      }
    },
    methods: {
      open() {
        this.$message('这里可以设置预警值');
      }
    }
  }
</script>
<style>
  div.xia {
    display: flex;
    justify-content: space-around;
    flex-grow: 1;

  }
  div.shang {
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
  }
</style>
