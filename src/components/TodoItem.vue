<template>
  <li>
    <input
      type="checkbox"
      :checked="flag"
      @click="$emit('toggle',inde)"
    />
    <div @dblclick="changeIpt" ref="div" :class="{active:flag}">
      <span>{{ con }}</span>
      <input
        type="text"
        v-show="iptShow"
        v-model.lazy.trim="chanIpt"
        @blur="iptShow = false"
      />
    </div>
    <button class="iconfont icon-delete" @click.self="$emit('dele',inde)"></button>
  </li>
</template>

<script>
export default {
  name: "todoItem",
  //flag属性解决全选时多选框没有选中的问题
  props:['flag','con','inde'],
  data: function () {
    return {
      iptShow: false, //input显示隐藏
      chanIpt: "", //input双向绑定数据
    };
  },
  watch: {
    chanIpt: function () {
      // 双击改变input的显示隐藏
      if (this.chanIpt == "" || this.chanIpt == this.con) return;
      this.$emit("update-input", this.chanIpt, this.inde);
      this.iptShow = false;
    },
  },
  methods: {
    changeIpt: function () {
      //当前点击显示
      this.iptShow = true;
      //input的value设为con
      this.chanIpt = this.con;
      setTimeout(() => {
       this.$refs.div.children[1].select();
      }, 100);
    },
  },
};
</script>

<style>
</style>