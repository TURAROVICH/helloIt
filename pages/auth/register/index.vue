<template>
    <div>
        <div class="title">
               Кирүү же каттоодон өтүү үчүн телефон номериңизди жазыңыңз
           </div>

           <div class="form-container">
               <input type="text" placeholder="Телефон номериңиз">
               <div class="desc">
                   Каттоодон отүү менен, сиз автоматтык түрдө тиркеменин колдонуу шарттарына макул болосуз
               </div>
               <div class="rules">
                   Колдонуу эрежелери жана шарттары
               </div>
               <div @click="$router.push('/auth/register/check')" class="button">
                   <span>КИРҮҮ</span>
               </div>
           </div>

           <div class="via-google">
               <div class="google-desc">
                   Google аккаунт аркылуу кируу
               </div>
               <div class="google">
                    <img src="@/assets/imgs/auth/google.png" alt="">
               </div>
               <nuxt-link to="/">Башкы бет</nuxt-link>
           </div>
    </div>
</template>


<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
 .title{
        @include h4{
            text-align: center;
            margin: 70px 0 30px 0;
        }
    }
    .form-container{
        /* strock */

    border: 1px solid #E0E7EA;
    box-sizing: border-box;
    border-radius: 5px;
    min-width: 370px;
    padding: 30px 35px;
    input{
        padding: 14px 15px;
        border: 1px solid #E0E7EA;
        box-sizing: border-box;
        border-radius: 5px;
        width: 100%;
        outline: none;
    }
    }
    .desc{
        @include h6;
         color: $bl;
        text-align: center;
        margin: 15px 0;
    }
    .rules{
        @include h6;
        color: $gr;
        margin-bottom: 25px;
        text-align: center;
    }
    .button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        width: 100%;

        /* Primery */

        background: $gr;
        border-radius: 5px;
        span{
            @include h5{
                color: $wh;
            }
        }
    }
    .via-google{
        margin: 60px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 30px;
        .google-desc{
            @include h5;
            color: $bl;
        }
    }
    a{
        @include h5;
        color: $gr;
    }
</style>