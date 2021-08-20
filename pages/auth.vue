<template>
   <div class="main">
       <div class="container">
           <div class="logo">
               <img width="219" height="68" src="@/assets/imgs/auth/logo.png" alt="">
           </div>
           
           <div>
               <nuxt-child/>
           </div>
       </div>
    
   </div>
</template>


<script>
export default {
    layout:'empty'
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.main{
    display: flex;
    justify-content: center;
    width: 100%;
    .container{
        margin: 70px 0 132px 0;
        width: 30%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
   
    @media (max-width:600px) {
        .container{
            width: 80%;
        }
    }
}
</style>