<template>
     <div @click="$router.push(`category/${id}`)" class="card" :style="{'background':color}">
         <div class="title">
             {{name}}
         </div>

         <img width="170" :src="image" alt="">
    </div>
</template>

<script>
export default {
  props:[
    'color',
    'name',
    'image',
    'id'
  ]
}
</script>

<style scoped>
.card{
  border-radius: 5px;
  width: 387px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
}
.title{
  font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 33px;

width: 20%;
/* identical to box height */


/* White */

color: #FFFFFF;
}
@media screen and (max-width:394px) {
  .card{
    width: 95%;
    flex-direction: column-reverse;
    height: 100%;
    padding: 30px 0;
  }
  .title{
    width: 90%;
  }
}
</style>