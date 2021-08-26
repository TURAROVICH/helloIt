<template>
    <div class="main">
        <div v-if="!data.test_count" class="no-test">
            Азырынча тесттер жок
        </div>
        <div v-for="i of data.test_count" :key="i" class="test" @click="$router.push(`/test/${$route.params.id}/1`)">
            <img :src="data.icon" width="130" alt="">
            <div class="content">
                <div class="title">Аналогия тест</div>
                <div class="question-count">Суроолордун саны: 15</div>
                <div class="desc">Аналогия, кыргыз тили 1-тест</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['data']
}
</script>

<style scoped>
.test{
    width: 100%;
    display: flex;

    border-bottom: 1px solid  #E0E7EA;;
    border-top: 1px solid  #E0E7EA;;
    padding: 30px 0 30px 0;
    gap: 30px;
}
.no-test{
  color:#0B0D34;
    text-align: center;
 font-size: 20px;
}
.main{
    height: 420px;
    width: 100%;
    overflow-y: scroll;
}
/* width */
.main::-webkit-scrollbar {
  width: 10px;
  border-radius: 10px;
}

/* Track */
.main::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.main::-webkit-scrollbar-thumb {
  background: #0B0D34;
}
.content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.title{
    font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;

/* BACKGROUND */

color: #0B0D34;
}

.question-count{
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
/* identical to box height */


/* Primery */

color: #21A95D;
}

.desc{
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
/* identical to box height */


/* BACKGROUND */

color: #0B0D34;


}

@media screen and (max-width:620px) {
  .test{
    flex-direction: column;
  }
  .test img{
    width: 100%;
    height: 170px;
  }
}
</style>