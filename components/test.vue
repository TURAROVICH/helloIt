<template>
    <div class="main">
        <Modal v-if="modal" @close="modal = false" />
        <div class="container">
            <div class="form-container">
                <img @click="$router.push('/')" src="@/assets/imgs/test/x.png" alt="" class="x">
                <div class="title">Кыргыз тили аналогия</div>

                <div class="question">
                    <div class="count">Суроо 1/15</div>
                    <div class="query">Дыйкан: Орок</div>
                </div>

                <div class="form-q" >
                    <div class="choice " @click="check(1)" :class="{'choiced':q1}">
                        <div class="box">A</div>
                        <div class="res">Кетмен : Жумушчу</div>
                    </div>
                     <div class="choice" @click="check(2)" :class="{'choiced':q2}">
                        <div class="box">A</div>
                        <div class="res">Кетмен : Жумушчу</div>
                    </div>
                     <div class="choice" @click="check(3)" :class="{'choiced':q3}">
                        <div class="box">A</div>
                        <div class="res">Кетмен : Жумушчу</div>
                    </div>
                     <div class="choice" @click="check(4)" :class="{'choiced':q4}">
                        <div class="box">A</div>
                        <div class="res">Кетмен : Жумушчу</div>
                    </div>


                    <div class="btns">
                        <div class="prev btn"><span>Мурунку</span></div>
                        <div class="next btn" @click="modal= !modal"><span>Кийинки</span></div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
import Modal from './test/modal.vue'
export default {
    data:()=>({
        modal:false,
        q1:false,
        q2:false,
        q3:false,
        q4:false,

        hasTest:false

    }),
    methods:{
        check(id){
            switch(id){
                case 1:
                    this.q1 = true
                    this.q2 = false
                    this.q3 = false
                    this.q4 = false
                    break;
                case 2:
                    this.q1 = false
                    this.q2 = true
                    this.q3 = false
                    this.q4 = false
                    break;

                case 3:
                    this.q1 = false
                    this.q2 = false
                    this.q3 = true
                    this.q4 = false
                    break;

                case 4:
                    this.q1 = false
                    this.q2 = false
                    this.q3 = false
                    this.q4 = true
                    break;
            }
        }
    },
    mounted(){
        let course_id = this.$route.path.split('/')[2]
        this.$axios.get('http://176.126.164.190:8000/api/bilimtests/?course='+course_id).then(data=>{
            console.log(data.data);
            this.hasTest = !!data.data.results.length
        })
        
    },
    components:{
        Modal
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.main{
    min-height: 100vh;
    width: 100%;
    padding: 50px 0 0 0;
    background: url("@/assets/imgs/test/bg.png") no-repeat;
    .container{
        margin: 0 auto;
        width: 90%;
        display: flex;
        justify-content: center;
        position: relative;
    }
}

.form-container{
    .x{
        position: absolute;
        right: 0;
        top: 0;
    }
    .title{
        font-size: 36px;
        color: $wh;
        text-align: center;
    }
    .question{
        width: 666px;
        height: 129px;
        background: #FFFFFF;
        border-radius: 10px;
        margin: 50px 0;
        padding: 30px 38px;
        .count{
            @include h5{
                color: $sl;
            }
        }
        .query{
            @include h4{
                color: $bl;
                margin: 20px 0 0 0;
            }
        }

       
    }

    .form-q{
        width: 666px;
        height: 669px;
        background: $wh;
        border-radius: 49px;
        padding: 41px 38px;
        .choice{
        width: 585px;
        height: 62px;
        background: #E0E7EA;
        border-radius: 10px;
        padding: 9px 27px;
        display: flex;
        align-items: center;
        gap: 10px;
        margin:15px 0;
            .box{
                width: 44px;
                height: 44px;
                background: $wh;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                @include h5{
                    color: $bl;
                }
            }
            .res{
                @include h5{
                    color: $bl;
                }
            }
        }

        .choiced{
        background: $fi;
            .res{
                color: $wh;
            }
        }

        .btns{
            margin: 40px 0 0 0;
            display: flex;
            gap: 40px;
            .next{
                background: #8259E0;
                span{
                    @include h5{
                        color: $wh;
                    }
                }
            }
            .prev{
                border: 1px solid #21A95D;
                span{
                    @include h5{
                        color: $gr;
                    }
                }
            }
            .btn{
                box-sizing: border-box;
                border-radius: 5px;
                width: 198px;
                height: 52px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }



     @media (max-width:640px) {
            .question{
                width:400px;
                height: auto;
                margin: 50px auto;
            }

            .form-q{
                width: 400px;
                height: auto;
                .choice{
                    width: 90%;
                }
            }

            
        }

    @media (max-width:390px) {
        .question{
           display: flex;
           align-items: center;
           justify-content: center;
           flex-direction: column;
        }
    }


 

      
}

  @media screen and (max-width:480px) {
            .form-container{
                padding: 50px 0 0 0;
            }
            .form-container .title{
                width: 90%;
            }
}




</style>