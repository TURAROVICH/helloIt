<template>
    <div>

          <div class="form-container">
               <div class="to-prev">
            <svg @click="$router.push('/auth/register')" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14L8.41 12.59L3.83 8H20V6H3.83L8.42 1.41L7 0L0 7L7 14Z" fill="#21A95D"/>
            </svg>

            <div class="des">Артка</div>

        </div>
              <div class="desc">
                  Сиздин телефон номеринизге келген кодду жазыныз
              </div>
              <label for="">Тастыктуу код</label>
               <input type="text">
               <div class="button">
                   <span>Тастыктоо</span>
               </div>
           </div>
    </div>
</template>


<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
  .form-container{
        /* strock */
    margin-top: 58px;
    border: 1px solid #E0E7EA;
    box-sizing: border-box;
    border-radius: 5px;
    min-width: 370px;
    padding: 30px 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .to-prev{
         align-self: flex-start;
        justify-self: start;
        display: flex;
        gap: 22px;
        .des{
            @include h5;
            color: $bl;
        }
}
    input{
        padding: 14px 15px;
        border: none;
        border-bottom: 1px solid $gr;

        box-sizing: border-box;
        margin-bottom: 30px;
        width: 80%;
        outline: none;
    }
    label{
        align-self: flex-start;
        justify-self: start;
        margin: 0 30px;
        font-size: 10px;
        color: $gr;
    }
    .desc{
        @include h3{
            text-align: center;
            margin: 32px 0  30px 0;
        }
    }
    }

      .button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        width: 80%;

        /* Primery */

        background: $gr;
        border-radius: 5px;
        span{
            @include h5{
                color: $wh;
            }
        }
    }
</style>