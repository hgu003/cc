<template>
  <div id="app">
    <header class="header">
      <AddTodo @add-todo="addTodo" @all-btn="AllBtn" :flag="AllOfNot"></AddTodo>
    </header>
    <div class="con">
      <TodoList
        :items="result"
        @toggle="toggleHandle"
        @dele="dele"
        @update-input="updateInput"
      ></TodoList>
    </div>
    <TodosFilter
      :filter="currentFilter"
      :itemLength="items.length"
      :unfinishedLength="unfinishedNum.length"
      @change-filter="changeFilter"
      @clear-item="clearItem"
    >
    </TodosFilter>
  </div>
</template>

<script>
import AddTodo from "./components/addTodo.vue";
import TodoList from "./components/TodoList.vue";
import TodosFilter from "./components/TodosFilter.vue";

export default {
  name: "App",
  components: {
    AddTodo,
    TodoList,
    TodosFilter,
  },
  data: function () {
    return {
      items: [],
      currentFilter: 0, //按钮判断
      count: 0, //未完成数量
      AllOfNot: false, //全选切换
    };
  },
  computed: {
    //计算当前未完成数量
    unfinishedNum: function () {
      return this.items.filter((item) => !item.complete);
    },
    //判断当前的点击按钮，返回相应的数据，filter返回一个新数组
    result: function () {
      switch (this.currentFilter) {
        case 1:
          return this.items.filter((item) => !item.complete);
        case 2:
          return this.items.filter((item) => item.complete);
        default:
          return this.items;
      }
    },
  },
  watch: {
    items: {
      //监听的对象
      deep: true, //深度监听设置为 true
      handler: function () {
        //全选按钮高亮切换
        // watch监听不到对象的变化，用深度监听可以
        this.AllOfNot = this.unfinishedNum.length == 0 && this.items.length > 0;
      },
    },
  },
  methods: {
    //输入框传递的添加数据事件
    addTodo: function (text) {
      this.items.push({
        con: text,
        complete: false,
        id: this.items.length ? this.items[this.items.length - 1].id + 1 : 0,
      });
    },
    //子组件传递的finish事件,点击li的多选框改变complete数据,达到li的class根据complete添加删除
    toggleHandle: function (index) {
      //类名切换
      this.result[index].complete = !this.result[index].complete;
    },
    //全选事件
    AllBtn: function () {
      if (this.items.length == 0) return;
      this.items.forEach((item) => (item.complete = !this.AllOfNot));
      //全选按钮样式切换
      this.AllOfNot = !this.AllOfNot;
    },
    //删除事件
    dele: function (index) {
      this.items.splice(index, 1);
    },
    // 改变事件
    updateInput: function (a, index) {
      this.items[index]["con"] = a;
    },
    //三按钮切换
    changeFilter: function (index) {
      this.currentFilter = index;
    },
    //items等于一个过滤了已完成事件的新数组
    clearItem: function () {
      this.items = this.items.filter((item) => !item.complete);
    },
  },
  // 每次数据更新并渲染后把数据添加到本地存储
  updated: function () {
    localStorage.setItem("item", JSON.stringify(this.items));
  },
  //页面挂载完成并渲染到页面后把本地存储的加进数据里
  mounted: function () {
    if (!localStorage.getItem("item")) return;
    JSON.parse(localStorage.getItem("item")).forEach((item) => {
      this.items.push(item);
    });
  },
};
</script>

<style>
</style>
