<template>
<div class="main">

            <div class="container">
                <div class="main-title">
                    Жаңылыктар
                </div>

            <!-- Slider main container -->
            <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <div class="wrapper-slide">
                        <div class="content">
                            <div class="content-title">
                                Футбол тууралуу эмнелерди билесиңер?
                            </div>

                            <div class="content-desc-container">
                                <div class="content-desc">
                    Противоположная точка зрения подразумевает, что ключевые особенности структуры проекта набирают 
                                </div>
                                <div @click="$router.push('/full-news/1')" class="content-arrow">
                                    <img @click="$router.push('/full-news/1')" src="@/assets/imgs/news/arrow.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    <div class="swiper-slide">
                    <div class="wrapper-slide">
                        <div class="content">
                            <div class="content-title">
                                Футбол тууралуу эмнелерди билесиңер?
                            </div>

                            <div class="content-desc-container">
                                <div class="content-desc">
                    Противоположная точка зрения подразумевает, что ключевые особенности структуры проекта набирают
                                </div>
                                <div @click="$router.push('/full-news/1')" class="content-arrow">
                                    <img @click="$router.push('/full-news/1')" src="@/assets/imgs/news/arrow.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            </div>




            <div class="links-container">
                <nuxt-link class="link" active-class="active"  to="/news/kabar">Соңку кабар</nuxt-link>
                <nuxt-link active-class="active" class="link" to="#">Конкурс и гранттар</nuxt-link>
                <nuxt-link active-class="active" class="link" to="#">Интрервью    </nuxt-link>
                <nuxt-link active-class="active" class="link" to="#">Спорт</nuxt-link>
            </div>


            <div class="child-pages">
                <nuxt-child/>
            </div>


            </div>
</div>
</template>


<script>
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css'
export default {
    mounted(){
          this.$store.dispatch('header/setColors',{
            bg:'#fff',
            burger:'#0B0D34',
            nav:'#0B0D34'
        })


 new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
 

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },


});
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.swiper-container {
  width: 100%;
  height: 615px;
  margin: 40px 0;
  .wrapper-slide{
      width: 100%;
      min-height: 100%;

      background: url("@/assets/imgs/news/slide-1.png") no-repeat;
      background-position: center center;
      display: flex;
      align-items: flex-end;
      justify-content: center;
  }

  .content{
      min-height: 100%;
      width: 80%;
     
      &-title{
          @include h1{
              color:$wh;
          }
      }
      &-desc-container{
           background: rgba(0, 0, 0, 0.3);
            border-radius: 5px;

          margin: 30px 0;
          width: 100%;
          min-height: 100%;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap   :34.33px;
         
      }
       &-desc{
              @include h5;
              color:#fff;
          }
  }
}



.main{

    width: 100%;
    .container{
        width: 80%;
        margin: 0 auto;
    }
    &-title{
        @include h2{
            color:$bl;
        }
    }

    .links-container{
        overflow-x: scroll;
        @include no-scroll;
        display: flex;
        gap:30px;
        align-items: center;
        margin-bottom: 30px;
        a{
            white-space: nowrap;
            @include h3{
                text-decoration: none;
            }
        }
    }
    .child-pages{
        margin-bottom: 180px;
    }
}
.link{
 color:$sl;
}
.active{
color:$gr;
}

</style>