<template>
  <div class="AlsoThe-con-child">
    <div class="imgBox">
      <img src="../../assets/images/bookvip.png" class="vip" v-if="book.allowMonthly"/>
      <img src="../../assets/images/已完结.png" class="finish" v-if="!book.isSerial"/>
      <img
        :src="`http://statics.zhuishushenqi.com${book.cover}`"
        class="book"
      />
    </div>
    <div class="imgMsg">
      <p>{{book.title}}</p>
      <p>{{book.retentionRatio}}%读过</p>
    </div>
  </div>
</template>

<script>
export default {
    props:['book'],
};
</script>

<style>
</style>