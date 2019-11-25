<template>
  <div class="work-panel-ui">
      <div @click="open(item)" v-for="item in dataList" :key="item.id" class="text item work-panel-li">
        <div class="work-panel-oi">
          <span class="work-panel-title">{{item.title | ellipsis}}({{item.rz_chanpin_mc}})</span>
          <span style="color: rgb(153, 153, 153);">
            ({{item.read_sf==1?"已读":"未读"}})
          </span>
          <span style="float:right">
            {{dateFormat(item.chuangjian_shijian)}}
          </span>
        </div>
      </div>
      <div v-if="dataList.length==0" style="color:gray">暂无短消息</div>
      
   
    </div>
   
</template>

<script>
// import request from '@/utils/request'
// import edit from '@/views/xiaoxi/edit'
// import * as core from '@/utils/core'
// import xiaoxi from '@/views/xiaoxi/list'
export default {
  directives: {

  },
  components: {
    // edit, xiaoxi 
  },
  data() {
    return {
      //core,
      dataList: [
        {id:1,title:"111111111111111111",rz_chanpin_mc:'qq',read_sf:1,chuangjian_shijian:4232333333444},
        {id:2,title:"222222",rz_chanpin_mc:'ww',read_sf:0,chuangjian_shijian:4232333333454},
        {id:3,title:"333333",rz_chanpin_mc:'ee',read_sf:1,chuangjian_shijian:1232333333464},
        {id:4,title:"444444444444444444",rz_chanpin_mc:'rr',read_sf:0,chuangjian_shijian:2232333333474},
        {id:5,title:"555555",rz_chanpin_mc:'tt',read_sf:1,chuangjian_shijian:2232333333484},
      ],
      loading: true,
      visible: false,
      component: null,
      query: {
        page: 1,
        limit: 6,
        order: 'read_sf'
      }
    }
  },
  methods: {
   
    
    open(row) {
      // if (row.read_sf !== '1') {
      //   this.loading = true
      //   request({
      //     url: '/quanxian/sys_xiaoxi/save',
      //     method: 'post',
      //     data: row
      //   }).then(response => {
      //     core.saveSuccessAlerm()
      //     this.loading = false
      //   })
      // }
      // this.$refs.edit1.show(row)
    },
    dateFormat: function (time) {
      var date = new Date(time);
      var year = date.getFullYear();
      /* 在日期格式中，月份是从0开始的，因此要加0
      * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
      * */
      var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      // 拼接
      // return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
      return year + "-" + month + "-" + day;
    }
  },
  filters: {
    ellipsis(value) {
      if (!value) return ''
      if (value.length > 9) {
        return value.slice(0, 9) + '...'
      }
      return value
    }
  }
}
</script>

<style>
.work-panel-title {
  color: #5ab1ef;
  white-space: nowrap; 
  text-overflow: ellipsis; 
  overflow: hidden; 
 
}

  .work-panel-col {
    margin-bottom: 32px;
  }
  .work-panel-ui {
    overflow: hidden;
    height: 180px;
  }
  .work-panel-li {
    font-weight: normal;
    padding: 0px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 30px;
    position: relative;
    -webkit-touch-callout: none;
   
  }

      .work-panel-oi {
        line-height: 30px;
        background-color: #f3f5f9;
      }
    
</style>
