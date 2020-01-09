<template>
  <div>
    <NavBar></NavBar>

    <el-row>

      <el-col :span="4">
        <SideBar></SideBar>
      </el-col>

      <el-col :span="20">
        <div class="grid-content bg-purple-light">
          <div style="width:100%;height:100%;background:#f0f0f0;top:-10px">
            <div class="shang"
                 style="margin:0px;display:flex;flex-direction:column;justify-content:space-around;height:200px">
              <div style="flex-direction:row;height:100%">
                <div class="block" style="margin:10px;float:left">
                  <el-date-picker v-model="value" type="daterange" align="right" unlink-panels range-separator="至"
                                  start-placeholder="开始日期" end-placeholder="结束日期"
                                  :picker-options="pickerOptions" value-format="yyyy-MM-dd hh:mm:ss">

                  </el-date-picker>
                  <el-button @click="doQuery">查询</el-button>
                  <el-button>导出</el-button>
                </div>
                <div style="margin:10px;">
                  <el-table :data="dataPager" style="width: 100%;top:10px;text-align:center" height="390">

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

                    <el-table-column prop="leafTemperature3" label="叶面温度3（单位：摄氏度）" width="200"></el-table-column>

                    <el-table-column prop="leafTemperature4" label="叶面温度4（单位：摄氏度）" width="200"></el-table-column>
                  </el-table>
                  <!--分页组件--><br>
                  <div id="data_pager" STYLE="text-align: center">
                    <el-pagination
                      background
                      layout="prev, pager, next"
                      :page-size="pageSize"
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :total="tableData.length">
                    </el-pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  import NavBar from "../commons/NavBar";
  import SideBar from "../commons/SideBar";

  export default {
    name: "Content4",
    components: {
      SideBar,
      NavBar,
    },
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value: ['',''],
        company: 'A公司',
        area: 'A地区',
        pageSize: 3,//每页显示3条数据
        currentPage: 1,//默认第一页
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
      };
    },
    mounted() {
      this.$set(this.value,0,'2020-01-08 12:00:00');//设置初始值
      this.$set(this.value,1,'2020-02-11 12:00:00');//设置初始值
      this.doQuery();//第一次进入页面自动获得数据
    },
    //计算属性分页
    computed: {
      dataPager: function () {
        return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
      }
    },
    methods: {
      //执行查询
      doQuery: function () {
        let that = this;
        let url = this.websiteUrl + '/agricultureserver/data/history';
        console.log("value[0]是" + this.value[0] + "value[1]" + this.value[1]);
        this.axios.get(url, {
          params: {
            company: that.company,
            area: that.area,
            createTime: that.value[0]
          }
        })
          .then(function (response) {
            if (response.data.code == 200) {
              that.tableData = response.data.data;
            } else {
              that.$message({
                message: response.data.msg,
                type: 'error'
              })
            }
          }).catch(function (error) {
          that.$message({
            message: '查询失败',
            type: 'error'
          })
        })
      },

      // 初始页currentPage、初始每页数据数pagesize和数据data
      handleSizeChange: function (size) {
        this.pageSize = size;
        console.log(this.pageSize)  //每页下拉显示数据
      },
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage;
        console.log(this.currentPage)  //点击第几页
      }
    }
  };
</script>
<style>

</style>
