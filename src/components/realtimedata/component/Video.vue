<template>
  <div class="item_video">
    <div id="video" class="vjs-custom-skin"/>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Video',
  data() {
    return {}
  },
  mounted: function() {
    var ckplayer = window.ckplayer
    // 挂载完成后进行
    var videoObject = {
      container: '#video', // 容器的ID或className
      variable: 'player', // 播放函数名称
      autoplay: true,
      live: true,
      // video: 'rtmp://live.hkstv.hk.lxdns.com/live/hks'
      video: 'rtmp://rtmp01open.ys7.com/openlive/2a9d3230871e4eb89c6930b527de466b'
    }
    // 定义一个对象
    const player = new ckplayer(videoObject)
  }
}
</script>

<style>
.vjs-custom-skin {
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
}
.item_video {
  /* margin-top: 1vh; */
  width: 100%;
  height: 100%;
  /* background-color: black; */
}
</style>
