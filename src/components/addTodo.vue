<template>
  <div>
    <button
      type="button"
      class="AllSelect"
     :class="{ active: flag }"
      @click="$emit('all-btn')"
    >
    </button>
    <input
      type="text"
      placeholder="What nedds to be done?"
      v-model.lazy.trim="iptText"
    />
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  props: ['flag'],
			data: function () {
				return {
					iptText: '',	//要添加到父组件items数组的数据
				}
			},
			watch: {
				//搜索框lazy转change事件改变后传递到父组件并且清空输入框
				iptText: function () {
					//iptText为空则不传递
					if (this.iptText.trim() == '') return;
					this.$emit('add-todo', this.iptText);
					this.iptText = '';
				},
			},
};
</script>

<style>

</style>