<template>
  <li class="manitoCard">
      <h1>{{item.title}}</h1>
      <p>{{item.advs[0].simpleDes}}</p>
      <img :src="item.advs[0].img" alt="">
  </li>
</template>
<script>
export default {
    props:['item'],
}
</script>

<style lang="less">
.manitoCard{
    margin-top: 10px;
    background: white;
    padding: 15px 12px;
    h1{
        font-size: 16px;
    }
    p{
       color: #8a8a8f;
       margin: 7px 0;
    }
    img{
        width: 100%;
        border-radius: 3px;
    }
}
</style>