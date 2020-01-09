<template>
  <div>
    <el-table :data="tableData" style="width: 100%;top:10px;text-align:center" height="400">

      <el-table-column fixed prop="createTime" label="时间" width="200"></el-table-column>

      <el-table-column prop="airTemperature" label="空气温度（单位：摄氏度）" width="200"></el-table-column>

      <el-table-column prop="airHumidity" label="空气湿度（单位：%）" width="180"></el-table-column>

      <el-table-column prop="windDirection" label="风向（单位： ）" width="150"></el-table-column>

      <el-table-column prop="windSpeed" label="风速（单位：m/s）" width="150"></el-table-column>

      <el-table-column prop="rainfall" label="雨量（单位：mm）" width="150"></el-table-column>

      <el-table-column prop="pressure" label="大气压力（单位：kPa）" width="200"></el-table-column>

      <el-table-column prop="soilTemperature" label="土壤温度（单位：摄氏度）" width="200"></el-table-column>

      <el-table-column prop="soilHumidity" label="土壤湿度（单位：%）" width="180"></el-table-column>

      <el-table-column prop="sunshine" label="日照时数（单位：h）" width="180"></el-table-column>

      <el-table-column prop="pm" label="PM2.5（单位：ug/m3）" width="180"></el-table-column>

      <el-table-column prop="evaporation" label="蒸发（单位：mm）" width="150"></el-table-column>

      <el-table-column prop="ultravioletRay" label="紫外线（单位：uW/cm2）" width="200"></el-table-column>

      <el-table-column prop="TotalRadiationTable" label="总辐射表（单位：W/m2）" width="200"></el-table-column>

      <el-table-column prop="moistureOnTheLeaf1" label="叶面湿度1（单位：%）" width="180"></el-table-column>

      <el-table-column prop="moistureOnTheLeaf2" label="叶面湿度2（单位：%）" width="180"></el-table-column>

      <el-table-column prop="moistureOnTheLeaf3" label="叶面湿度3（单位：%）" width="180"></el-table-column>

      <el-table-column prop="moistureOnTheLeaf4" label="叶面湿度4（单位：%）" width="180"></el-table-column>

      <el-table-column prop="leafTemperature1" label="叶面温度1（单位：摄氏度）" width="200"></el-table-column>

      <el-table-column prop="leafTemperature21" label="叶面温度2（单位：摄氏度）" width="200"></el-table-column>

      <el-table-column prop="leafTemperature3" label="叶面温度3（单位：摄氏度）"width="200"></el-table-column>

      <el-table-column prop="leafTemperature4" label="叶面温度4（单位：摄氏度）" width="200"></el-table-column>

    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          createTime: '',
          airTemperature: '',
          airHumidity: '',
          windDirection: '',
          windSpeed: '',
          rainfall: '',
          pressure: '',
          soilTemperature: '',
          soilHumidity: '',
          sunshine: '',
          pm: '',
          evaporation: '',
          ultravioletRay: '',
          TotalRadiationTable: '',
          moistureOnTheLeaf1: '',
          moistureOnTheLeaf2: '',
          moistureOnTheLeaf3: '',
          moistureOnTheLeaf4: '',
          leafTemperature1: '',
          leafTemperature2: '',
          leafTemperature3: '',
          leafTemperature4: '',
        }]
      }
    },
    mounted(){
      this.selectData();
    },
    methods:{
      selectData:function () {
        let that=this;
        //let url=this.websiteUrl+"/agricultureserver/data/history?company="+this.公司名+"&?area=";
        this.axios.get(url)
          .then(function (response) {
            if(response.data.code==200){
              console.log("tableData是："+that.tableData);
              that.tableData=response.data.data;
            }else{
              that.$message({
                message:response.data.msg,
                type:'error'
              })
            }
          }).catch(function (error) {
          that.$message({
            message:'查询失败',
            type:'error'
          })
        })
      }
    }

  }
</script>
<style>

</style>
