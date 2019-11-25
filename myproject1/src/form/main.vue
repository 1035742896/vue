<template>
	<el-container class="home-container">
		<!--头部-->
	  <el-header>
		  <div>
			  <img src='../../build/logo.png' width="40px" height="40px" />
			  <span>系统</span>
		  </div>
		  <el-button type="danger" @click="tuichu">退出</el-button>
	  </el-header>
	  <el-container>
		  <!--左侧-->
	    <el-aside :width="IsToggle ?'64px':'200px'">
			<!-- 展开关闭 -->
			<div class="toggle-button" @click="toggleMenu" :title="IsToggle ?'展开':'关闭'">|||</div>
			<!-- 左侧菜单  unique-opened只展开一栏  collapse是否开启折叠 collapse-transition是否开启折叠动画-->
			<el-menu
			      background-color="#545c64"
			      text-color="#fff"
			      active-text-color="#409EFF"
				  unique-opened
				  :collapse='IsToggle'
				  :collapse-transition='false'
				  >
			      <el-submenu :index="item.id+''" v-for="item in MenuList" :key='item.id'>
			        <template slot="title">
			          <i :class="MenuIocn[item.id]"></i>
			          <span>{{item.name}}</span>
			        </template>
					<!-- 二级菜单 -->
					<el-menu-item :index="item2.id+''" v-for='item2 in item.children' :key='item2.id'>
					  
					  <template slot="title">
					  	<i class="el-icon-menu"></i>
					  	<span> {{item2.name}}</span>
					  </template>
					</el-menu-item> 
					<!-- 
					三级菜单
			        <el-submenu :index="item2.id" v-for='item2 in item.children' :key='item2.id'>
			          
					  <template slot="title">
			          	<i class="el-icon-menu"></i>
			          	<span> {{item2.name}}</span>
			          </template>
					  
			          
					  <el-menu-item index="1-1-1">选项1-1</el-menu-item>
					  <el-menu-item index="1-1-2">选项1-2</el-menu-item>
					  <el-menu-item index="1-1-3">选项1-3</el-menu-item> 
					 
			        </el-submenu> 
					-->
			      </el-submenu>
				  
			    </el-menu>

		</el-aside>
		 <!--右侧-->
	    <el-main>Main</el-main>
	  </el-container>
	</el-container>
</template>
<script>
export default {
  data () {
	  return {
		  IsToggle:false,
		  MenuIocn:{
			  '1':'iconfont icon-tijikongjian',
			  '2':'iconfont icon-danju',
			  '3':'iconfont icon-users',
			  '4':'iconfont icon-baobiao',
		  },
		  MenuList:[
			  
				  {
				    id: 1,
				    name: "用户指南",
				    children: [
				      {
				        id: 11,
				        name: "设计原则"
				      },
				      {
				        id: 12,
				        name: "卫星导航"
					   },
				      {
				        id: 123,
				        name: "电脑导航"
					   }
					  ]
				  },
				  {
				    id: 2,
				    name: "产品指南",
				    children: [
				      {
				        id: 21,
				        name: "产品原则"
				      },
				      {
				        id: 22,
				        name: "产品导航"
				  					   },
				      {
				        id: 23,
				        name: "电脑产品"
				  					   }
				  					  ]
				  },
				  {
				    id: 3,
				    name: "DNF指南",
				    children: [
				      {
				        id: 31,
				        name: "DNF原则"
				      },
				      {
				        id: 32,
				        name: "DNF导航"
				  					   },
				      {
				        id: 33,
				        name: "电脑DNF"
				  					   }
				  					  ]
				  },
				  {
				    id: 4,
				    name: "商品指南",
				    children: [
				      {
				        id: 41,
				        name: "商品原则"
				      },
				      {
				        id: 42,
				        name: "卫星商品"
				  					   },
				      {
				        id: 43,
				        name: "商品导航"
				  	 }
				      ]
				  }
				  
			 
		]
     }
  },
	created() {
		this.get()
	},
 methods: {
      tuichu () {
      		  this.$db.clear()
      		  this.$message({
      		            message: '退出成功！',
      		            type: 'warning'
      		          })
      		  this.$router.push('/login')
      },
	  get(){
		  
	  },
	  // 菜单展开
	  toggleMenu(){
		  this.IsToggle=!this.IsToggle
	  }
     }
}
</script>
<style lang="less" scoped>
	.home-container{
		height: 100%;
	}
	
  .el-header{
    background-color: #545c64;
    color: #333;
    text-align: center;
	//头布局 左右对齐
	display: flex;
	justify-content: space-between;
	//取消 系统 的padding 上下居中
	padding-left: 0;
	align-items: center;
	color: #5AB1EF;
	font-size: 20px;
	>div{
		display: flex;
		align-items: center;
		span{
			margin-left: 15px;
		}
	}
	
   
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: left;
	//取消菜单的边框
	  .el-menu{
		  border-right: none;
		}
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  
  }
  .iconfont{
	  margin-right: 10px;
  }
  .toggle-button{
	  background-color:#545c64 ;
	  font-size: 13px;
	  line-height: 24px;
	  color: #fff;
	  text-align: center;
	  letter-spacing: 0.3;
	  cursor:pointer ;
	  
  }
  
</style>
