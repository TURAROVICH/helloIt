<template>
    <div  @click="to" :style="{'background':color}" class="card">
                <div class="img">
                <img :src="image" alt="">
                </div>

                <div class="card-content">
                    <div class="card-des">
                      {{name}}
                    </div>
                    <div class="card-title">
                      {{description.length > 20 ? description.slice(0,18) +'...' :description}}
                    </div>

                    <div class="flex">
                      <div class="card-about">{{videoCount}} видео сабак</div>
                      <div class="card-about">{{testCount}} Тест</div>

                    </div>
                </div>
              </div>
</template>


<script>
export default {
  props:[
    'image',
    'name',
    'description',
    'video-count',
    'test-count',
    'id',
    'color'
  ],
  methods:{
    to(){
      if(this.id != "#"){
        this.$router.push(`course/${this.id}/video`)
      }
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.card{
  width:285px;
  height: 370px;
  border-radius: 5px;
  padding: 20px;
  
  position: relative;
}

.card .img{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0 40px 0;
}
.card .img img{
  width: 60%;
}
.card-des{
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
/* identical to box height */


/* Primery */

color: #21A95D;

}

.card-title{
  
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 30px;
/* or 125% */


/* BACKGROUND */

color: #0B0D34;
}

.card-about{
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
/* identical to box height */
white-space: nowrap;

color: #8259E0;
}

.flex{
  display: flex;
  gap: 20px;
  width: 100%;
  position: absolute;
  left: 20px;
  bottom: 20px;
}


.card-content{
  display: flex;
  flex-direction: column;
  gap:15px;
}

</style>