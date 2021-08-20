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
                </div>
                </div>
                <div class="swiper-slide">
                <div class="wrapper-slide">
                </div>
                </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>

                </div>



                <div class="reviews">
                    <div class="reviews-title-container">
                        <div class="reviews-title">Футбол тууралуу эмнелерди билесиңер?</div>
                        <div class="reviews-comment-share">
                           <div class=""><img src="@/assets/imgs/full-news/comment.png" alt=""></div> 
                            <div><img src="@/assets/imgs/full-news/share.png" alt="">   </div>
                        </div>
                    </div>


                    <div class="full">
                    <Account />
                    <div class="desc">
                        Следует отметить, что разбавленное изрядной долей эмпатии, рациональное мышление в значительной степени обусловливает важность модели развития. Задача организации, в особенности же экономическая повестка сегодняшнего дня требует определения и уточнения дальнейших направлений развития. Активно развивающиеся страны третьего мира, инициированные исключительно синтетически, представлены в исключительно положительном свете. Внезапно, явные признаки победы институционализации являются только методом политического участия и превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Каждый из нас понимает очевидную вещь: базовый вектор развития обеспечивает широкому кругу (специалистов) участие в формировании стандартных подходов.
                    </div>
                    <div class="info">
                        <div class="views">
                            <span class="other">29</span>
                            <span>раз прочитано</span>
                        </div>
                        <div class="views">
                            <span class="other">1</span>
                            <span>Комментарий</span>
                        </div>
                    </div>
                    </div>
                </div>


                <div class="coments">
                    <div class="coments-title">Комментарии</div>
                    <div class="coments-container">
                        <div class="comment">
                            
                        <Account />
                        <div class="desc">
                            Следует отметить, что разбавленное изрядной долей эмпатии, рациональное мышление в значительной степени обусловливает важность модели развития.
                        </div>
                        </div>
                        
                    </div>
                </div>

                <div class="warning">
                    <div class="warning-desc">Для комментариев вам необхадимо пройти регистрацию</div>
                    <div class="button"><span>КАТТОДОН ОТУУ</span></div>
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
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },


        });
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.coments{
    &-title{
        @include h5;
        color: $gr;
        margin: 30px 0  ;
    }
}

.warning{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 90px;
    gap:40px;
    &-desc{
        @include h5;
        color: $gr;
    }

      .button{
        border: 1px solid $gr;
        box-sizing: border-box;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: $gr;
        width: 185px;
        height: 36px;

        span{
            @include h6;
            color: $wh;
        }
    }
}

.swiper-container {
  width: 100%;
  height: 615px;
  margin: 40px 0;
  .wrapper-slide{
      width: 100%;
      min-height: 100%;

      background: url("@/assets/imgs/news/slide-1.png") no-repeat;
      background-position: center center;
  }
  .swiper-button-next,.swiper-button-prev{
      color:#fff;
  }

}
   .desc{
            width: 100%;
            margin: 30px 0 ;
            @include h5{
                color:$bl;
            }
        }
.reviews{
    &-title{
        @include h1{
            color:$bl;
        }
    }
    &-title-container{
        display: flex;
        gap: 60px;
        align-items: center;
    }
    &-comment-share{
        display: flex;
        align-items: center;
        gap: 15px;
    }
    .full{
        margin: 30px 0;
        width: 100%;
        border-bottom: 1px solid $sl;
     
        .info{
            display: flex;
            align-items: center;
            gap: 33px;
            margin-bottom: 30px;
            @include h5{
                color: $sl;
            }
            .other{
                color: $gr;;
            }
        }
    }

    @media (max-width:825px) {
        &-title-container{
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 15px;
        }
    }
}


.main{
    margin-bottom: 164px;
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

}
</style>