<template>
  <el-row>
    <label>姓名：{{info.name}}</label>
    <el-input v-model="info.name" placeholder="请输入姓名"></el-input>
    <label>年龄：{{info.age}}</label>
    <el-input v-model="info.age" placeholder="请输入年龄"></el-input>
    <label>性别：{{info.sex}}</label>
    <el-select v-model="info.sex" placeholder="请选择">
      <el-option v-for="item in options" :key="item" :value="item"></el-option>
      <!-- 这里的key官方推荐在v-for时使用，不然会警告，但不影响使用 -->
    </el-select>
    <el-button @click="created" type="success" round>创建</el-button>

    <template>
      <el-table :data="tabledata" align="left">
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="a">
            <el-button @click.prevent="del(a.$index)" size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <router-link to="newContact2">
      <el-link type="primary">主要链接</el-link>
    </router-link>
  </el-row>
</template>

  </el-row>
</template>

<script>
export default {
  name: "NewContact",
  data() {
    return {
      id: 22,
      info: {
        name: "",
        age: null,
        sex: ""
      },
      options: ["女", "男", "保密"],
      tabledata: [
        { name: "Leo", age: 12, sex: "man" },
        { name: "Lei", age: 22, sex: "women" },
        { name: "Lii", age: 65, sex: "men" }
      ]
    };
  },
  methods: {
    created() {
      console.log("开始create");
      this.tabledata.push({
        name: this.info.name,
        age: this.info.age,
        sex: this.info.sex
      });
      //  this.tabledata.push(this.info);
      this.info = { name: "", age: null, sex: "" };
    },
    del(val) {
      //删除
      this.tabledata.splice(val, 1);
    }
  }
};
</script>
<style>
</style>
