<template>
   <footer class="footer">
      <div class="count"><span v-text="unfinishedLength"></span> items left</div>
			<div class="toggle">
				<button :class="{active:filter== 0}" @click="$emit('change-filter',0)">All</button>
				<button :class="{active:filter== 1}" @click="$emit('change-filter',1)">Active</button>
				<button :class="{active:filter== 2}" @click="$emit('change-filter',2)">Completed</button>
			</div>
			<div class="clearCom">
				<button v-show="unfinishedLength<itemLength" @click="$emit('clear-item')">Clear completed</button>
			</div>
    </footer>
</template>

<script>
export default {
	name:'TodosFilter',
	//unfinishedLength是数据里complete为false的数组长度，itemLength是数组长度，未完成数组长度小于数组长度表示某个数据的complete已为true，清除按钮显示
    props:['filter','itemLength','unfinishedLength'],
}
</script>

<style>

</style>