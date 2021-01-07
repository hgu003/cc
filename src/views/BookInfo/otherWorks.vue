<template>
  <div class="AlsoThe-con-child">
    <div class="imgBox">
      <img src="../../assets/images/bookvip.png" class="vip" v-if="Alsothe.allowMonthly"/>
      <img src="../../assets/images/已完结.png" class="finish" v-if="!Alsothe.isSerial"/>
      <img
        :src="'http://statics.zhuishushenqi.com'
        +Alsothe.cover"
        class="book"
      />
    </div>
    <div class="imgMsg">
      <p>{{Alsothe.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Alsothe"],
};
</script>

<style>
</style>