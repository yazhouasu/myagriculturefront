<template>
  <div>
    <div style="display:flex;flex-firection:row;background-color:#ffcc33;height:500px">
      <div >
        <el-input
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </el-input>

        <el-tree
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          default-expand-all
          @node-click="tiaozhuan"
          ref="tree">
        </el-tree>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: "SideBar",
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      tiaozhuan(data) {
        console.log("data-->", data)
      }

    },

    data() {
      return {
        filterText: '',
        data: [{
          id: 1,
          label: '首农集团',
          children: [{
            id: 4,
            label: 'A区1号',
          },
            {
              id: 5,
              label: 'A区2号',
            },
            {
              id: 6,
              label: 'A区3号',
            },
            {
              id: 7,
              label: 'A区3号',
            },
            {
              id: 8,
              label: 'A区4号',
            },
            {
              id: 9,
              label: 'B区1号',
            },
            {
              id: 10,
              label: 'B区2号',
            },
            {
              id: 11,
              label: 'B区3号',
            }]
        }, {
          id: 2,
          label: '顺鑫农业',
          children: [{
            id: 12,
            label: 'A区1号'
          }, {
            id: 13,
            label: 'A区2号'
          }]
        }, {
          id: 3,
          label: '康顺农场',
          children: [{
            id: 14,
            label: 'A区1号'
          }, {
            id: 15,
            label: 'A区2号'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
  }
</script>
<style>


</style>
