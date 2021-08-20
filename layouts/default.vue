<template>
    <div class="main">
         <transition name="slide-fade">
            <header-modal v-if="modal" @close="modal=false"/>
         </transition>
        <div :style="{'background':$store.getters['header/getBg']}" class="header-wrapper">
       <div class="header" >

           <div @click="modal=true" class="burger">
               <div class="burger-line" :style="{'background':burgerLine}"></div>
               <div class="burger-line" :style="{'background':burgerLine}"></div>
               <div class="burger-line" :style="{'background':burgerLine}"></div>
           </div>


           <div class="logo">
               <img src="@/assets/imgs/logo.png" alt="">
           </div>

           <div class="nav">
                <div :style="{'color':getNav}" class="link">Жаңылыктар</div>
                <div :style="{'color':getNav}" class="link">Маектер</div>
                <div :style="{'color':getNav}"  class="link"> Жарнамалар</div>
                <div :style="{'color':getNav}" class="link">Байланыш</div>
           </div>



           <div @click="$router.push('/auth/register')" class="login">
                 <span>КИРҮҮ</span>
           </div>
       </div>
       </div>

        <div class="view">
             <Nuxt/>
        </div>

       <div class="footer">
          <div class="container">
              <div class="block">
                  <img class="logo-img" src="@/assets/imgs/footer-l.svg" alt="">
                  <div class="items">Колдонуу эрежелери жана шарттары</div>
              </div>

              <div class="block">
                  <div class="second">
                      <div>адрес ул Токтоналиева 86</div>
                      <div>№104 офис, Бишкек 2021</div>
                  </div>
                  <div class="items">Колдонуу эрежелери жана шарттары</div>
              </div>

              <div class="block">
                  <div class="items">Жаңылыктар</div>
                  <div class="items">Маектер</div>
                  <div class="items">Жарнамалар</div>
                  <div class="items">Байланыш</div>
              </div>

              <div class="block">
                  <div class="items">Жаңылыктар</div>
                   <div class="icons">
                       <img src="@/assets/imgs/instagram.png" alt="">
                       <img src="@/assets/imgs/whatsapp.png" alt="">
                       <img src="@/assets/imgs/telegram.png" alt="">

                   </div>
              </div>
          </div>
       </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        modal:false,

    }),
 computed:{
        burgerLine(){
            return this.$store.getters['header/getBurger']
        },
        getNav(){
            return this.$store.getters['header/getNav']
        }
    }
   
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(-70%);
  opacity: 0;
}

.main{
    width: 100%;

}
.logo-img{
    max-width: 247px;
}
.header{
    width: 80%;
    min-height: 90px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-active{
     background: #0B0D34;
}

.header-wrapper{
    width: 100%;
}

.link{
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
/* identical to box height */


/* White */
color: #FFFFFF;

}

.nav{
    display: flex;
    gap: 20px;
}
.n-active{
    color: #0B0D34;
}

.login{
    width: 117px;
height: 36px;
display: flex;
align-items: center;
justify-content: center;
/* Primery */

background: #21A95D;
/* Primery */
border: 1px solid #21A95D;
box-sizing: border-box;
border-radius: 5px;
}

.login span{
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
text-align: center;

/* White */

color: #FFFFFF;

}

.view{
    width: 100%;
    min-height: 50vh;
}
.footer{
    width: 100%;
    min-height: 300px;
    background: #0B0D34;
    
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer .container{
    width:80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    grid-gap: 115px;
}
.footer .items{
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: flex-end;
text-align: center;

/* White */

color: #FFFFFF;
}
.burger{
    display: none;
}
.block{
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.second {
    display: flex;
    flex-direction: column;
    gap: 10px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 23px;
text-transform: uppercase;
/* White */

color: #FFFFFF;
white-space: nowrap;
}

.icons{
    display: flex;
    align-items: center;
    gap:30.71px;
}


@media screen and (max-width:1150px) {
    .footer .container{
        width: 90%;
        display: flex;
        justify-content: space-between  ;
        grid-gap: 0;
        
    }
}

@media screen and (max-width:884px) {
    .footer .container{
        width: 95%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 50px;
    }
    .footer{
        padding: 40px 10px;
    }
}

@media screen and (max-width:570px) {
    .footer .container{
        display: flex;
        flex-direction: column;
        grid-gap: 60px;
    }
}

@media screen and (max-width:780px) {
    .nav{
        display: none;
    }
    .burger{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 7.2px;

    }
    .logo{
        display: none;
    }
    .burger-line{
        width: 28px;
        height: 1.5px;
        background: #fff;
    }
}
</style>

