<template>
    <div class="main">
        <div class="container">
        <div class="logo">
            <img width="107" height="33" src="@/assets/imgs/logo.png" alt="">

            <div class="nav">
                <div  class="link">Жаңылыктар</div>
                <div  class="link">Маектер</div>
                <div   class="link"> Жарнамалар</div>
                <div class="link">Байланыш</div>
           </div>
        </div>
        </div>
        <div @click="close" class="close">

        </div>
    </div>
</template>

<script>
export default {
    methods:{
       close(){
           this.$emit('close')
       }
    }
}
</script>

<style scoped>
.main{
    width: 100%;
    height: 100vh;
    position: fixed;
     top: 0;
    left: 0;
    z-index: 100;
    display: flex;
}
.close{
    width: 10%;
    height: 100vh;
    background: transparent;
}
.container{
    height: 100vh;
    width: 90%;
    background: #fff;
    padding: 30px 35px;
}
.nav{
    display: flex;
    margin: 42px 0;
    flex-direction: column;
    gap: 30px;
}
.link{
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
/* identical to box height */


/* White */
color: #0B0D34;

}
</style>