<template>
    <div class="card">
                <div class="img">
                <img src="@/assets/imgs/test.png" alt="">
                </div>

                <div class="card-content">
                    <div class="card-des">
                      Чет өлкөдө окуу
                    </div>
                    <div class="card-title">
                      Doni Kyrgyz дан интервьюлар
                    </div>

                    <div class="flex">
                      <div class="card-about">12 видео сабак</div>
                      <div class="card-about">0 Тест</div>

                    </div>
                </div>
              </div>
</template>


<style scoped>

.card{
  width: 285px;
  height: 370px;
  background: #CFD8DC;
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