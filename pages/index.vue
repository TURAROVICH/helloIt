<template>
  <div class="main">
      <div class="main-page-header">
          <div class="wrapper">
              <div class="content">
                <div class="title">
                  Салам!
                </div>
                <div class="des">Бул - дүйнө өзгөртө алчу эң күчтүү курал. </div>
              </div>


              <img src="@/assets/imgs/main-page.png" alt="">
          </div>
      </div>



      <div class="nav">
         <div class="most">
            <div class="title">Эң популярдуудалар</div>


            <div class="grid">
                <CardMain v-for="i of 4" :key="i"/>
            </div>
         </div>

         <div class="most">
            <div class="title">Эң жаңылар</div>


            <div class="grid">
                <CardMain v-for="i of 4" :key="i"/>
            </div>
         </div>

          <div class="category">
            <div class="title">Категориялар</div>


            <div class="grid-category">
               <category v-for="i of 6" :key="i" />
            </div>
         </div>
      </div>
  </div>
</template>


<style scoped>













.main{
  width: 100%;
}

.main-page-header{
  background: url("@/assets/imgs/main-page-bg.png") no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 100% auto;
  min-height: 536px;
}

.content .title{
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 52px;
line-height: 61px;
/* identical to box height */


/* White */

color: #FFFFFF;
}

.content .des{
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 23px;

color: #FFFFFF;
margin: 30px 0;
}

.wrapper{
  margin-top: 60px;
  width: 80%;
  display: flex;
  justify-content: space-between;
}

.nav{
  width: 90%;
  margin: 30px auto;
}
.most .grid{
   overflow-x: scroll;
}

.most {
  width: 100%;
  margin:  0 0 90px 0;
}
.most .title{
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 37px;
/* identical to box height */


/* BACKGROUND */

color: #0B0D34;
margin:  0 0 40px 0;
}
/* width */
.most .grid::-webkit-scrollbar {
  display: none;
}

/* Track */
.most .grid::-webkit-scrollbar-track {
 display: none;
}

/* Handle */
.most .grid::-webkit-scrollbar-thumb {
   display: none;
}


.category{
  width: 100%;
  margin:  0 0 90px 0;
}
.category .title{
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 37px;
/* identical to box height */
/* BACKGROUND */
color: #0B0D34;
margin:  0 0 40px 0;
}
.grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}

.grid-category{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-column-gap: 20px;
  grid-row-gap: 30px;
}

@media screen and (max-width:995px) {
  .wrapper{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .wrapper > img{
    width: 50%;
  }
  .main-page-header{
    background-size: 100% 500px;
  }
}

@media screen and (max-width:634px) {
  .wrapper > img{
    width: 90%;
  }
  .main-page-header{
    background: url("@/assets/imgs/rec1.png") no-repeat;
    background-size: 100% 400px;
  }
}


@media screen and (max-width:1200px) {
  .grid-category{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

}
</style>