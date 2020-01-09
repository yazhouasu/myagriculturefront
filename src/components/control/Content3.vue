<template>
<div>
    <NavBar></NavBar>
      <el-row>
  <el-col :span="4"><div class="grid-content bg-purple">
      <SideBar></SideBar>
      </div></el-col>
  <el-col :span="20"><div class="grid-content bg-purple-light">
    <div style="width:100%;height:100%;flex-direction:column;background:#f0f0f0">
        <div style="flex-direction:row">
            <div id="mycharts5" ref = "mycharts5" style="height:180px"></div>
        </div>
        <div style="display:flex;flex-direction:row">
            <div>
                <Button></Button>
            </div>
        </div>
    </div>
    </div></el-col>
</el-row>
    </div>
</template>
<script>
import Button from './Button'
import NavBar from '../commons/NavBar'
import SideBar from "../commons/SideBar";
export default {
  name: "Content3",
    components:{
      SideBar,
        Button,
        NavBar,
    },
    mounted() {
        const mycharts5=this.$echarts.init(this.$refs.mycharts5);
        var data = [
    {
        name: '空气平均温度',
        value: 54
    },{
        name: '空气平均湿度',
        value: 44
    },{
        name: '土壤平均温度',
        value: 35
    },{
        name: '土壤平均湿度',
        value: 30
    },{
        name: 'CO2浓度',
        value: 20
    }]
    
    var titleArr= [], seriesArr=[];
    var colors=[['#389af4', '#dfeaff'],['#ff8c37', '#ffdcc3'],['#ffc257', '#ffedcc'], ['#fd6f97', '#fed4e0'],['#a181fc', '#e3d9fe']]
    data.forEach(function(item, index){
        titleArr.push(
            {
                text:item.name,
                left: index * 20 + 10 +'%',
                top: '65%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '16',
                    color: colors[index][0],
                    textAlign: 'center',
                },
            }        
        );
        seriesArr.push(
            {
                name: item.name,
                type: 'pie',
                clockWise: false,
                radius: [60, 70],
                itemStyle:  {
                    normal: {
                        color: colors[index][0],
                        shadowColor: colors[index][0],
                        shadowBlur: 0,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                    }
                },
                hoverAnimation: false,
                center: [index * 20 + 10 +'%', '50%'],
                data: [{
                    value: item.value,
                    label: {
                        normal: {
                            formatter: function(params){
                                return params.value+'%';
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold',
                                color: colors[index][0]
                            }
                        }
                    },
                }, {
                    value: 100-item.value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: colors[index][1]
                        },
                        emphasis: {
                            color: colors[index][1]
                        }
                    }
                }]
            }    
        )
    });
    let option5 = {
        backgroundColor: "#f0f0f0",
        title:titleArr,
        series: seriesArr
        }
        mycharts5.setOption(option5)
    }
}
</script>
<style>

</style>
