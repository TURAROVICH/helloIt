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
            <div class="title"><span>Эң популярдуудалар</span> <span @click="$router.push('/all')" class="view-all">Баарын коруу</span></div>


            <div class="grid">
                <CardMain 
                
                v-for="(i,k) in courses" 
                :image="i.icon"
                :name="i.name"
                :description="i.description"
                :video-count="i.video_count"
                :test-count="i.test_count"
                :id="i.id"
                :color="i.color"
                :key="k"/>
            </div>
         </div>

         <div class="most">
            <div class="title">Эң жаңылар</div>


            <div class="grid">
                <CardMain v-for="(i,k) in courses"
                :image="i.icon"
                :name="i.name"
                :description="i.description"
                :video-count="i.video_count"
                :test-count="i.test_count"
                :id="i.id"
                :color="i.color"
                 :key="k"/>
            </div>
         </div>

          <div class="category">
            <div class="title">Категориялар</div>


            <div class="grid-category">
               <category
                v-for="(i,k) in categories"
                :key="k" 
                :color="i.color"
                :name="i.name"
                :image="i.icon"
                :id="i.id"
               />
            </div>
         </div>
      </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    
  }),
  async mounted(){
    this.$store.dispatch('categories/fetchCategories')
    this.$store.dispatch('course/fetchCourse')

            this.$store.dispatch('header/setColors',{
            bg:'#0B0D34',
            burger:'#fff',
            nav:'#fff'
        })
        
  },

  computed:{
    courses(){
      const course = this.$store.getters['course/allCourse']
      let j = 0
      let six =[]
      for(let i in course){
        j+=1
        six.push(course[i])
        if(j==6) {
          break;
        }
      }
      return six
    },

    categories(){
      return this.$store.getters['categories/allCategories']
    }
  }


  
  
}
</script>


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
display: flex;
justify-content: space-between;
align-items: center;


/* BACKGROUND */
color: #0B0D34;
margin:  0 0 40px 0;



}
.view-all{
  color:#21A95D;
   font-size: 18px;
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
  grid-template-columns: repeat(6,1fr );
  gap: 20px;
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

@media screen and (max-width:461px) {
  .title{
    flex-direction: column;
  }
}
</style>