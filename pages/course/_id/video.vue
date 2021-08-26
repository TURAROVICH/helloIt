<template>
<div class="main">
  <div v-if="!data.count" class="no-test">
    Азырынча видео жок
  </div>
  <Modal v-if="modal" @close="modal=false" :name="data.name" :desc="data.desc"/>
       <div v-for="i of data.count" :key="i" class="video">
         <div class="cnt">
           <img width="138" height="138" style="border-radius:5px;margin:0 auto;" :src="data.icon"  />
          <svg @click="modal=!modal" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM16 29V11L28 20L16 29Z" fill="#21A95D"/>
          </svg>

         </div>
            <div class="content">
                <div class="title">{{data.name}} </div>
                <div class="des">{{data.desc}}</div>
            </div>  
       </div>
    </div>
</template>

<script>
import Modal from '@/components/course/Modal'
export default {
  props:['data'],
  data:()=>({
    modal:false,
  }),
  components:{
    Modal
  }
}
</script>

<style lang="scss" scoped>
.main{
    width: 100%;
    height: 420px;
    overflow-y: scroll;

}
.no-test{
  color:#0B0D34;
    text-align: center;
 font-size: 20px;
}
.cnt{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  svg{
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 40%;
    left: 40%;
  }
}
.video{
    width: 100%;
    display:flex;
    gap:30px;
    border-bottom: 1px solid  #E0E7EA;;
    border-top: 1px solid  #E0E7EA;;
    padding: 30px 0 30px 0;
}
/* width */
.main::-webkit-scrollbar {
  width: 10px;
  border-radius: 10px;
}

/* Track */
.main::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.main::-webkit-scrollbar-thumb {
  background: #0B0D34;
}

.des{
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 26px;
/* or 144% */


/* Secondary */

color: #7E7E7E;
}

.title{
    font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 26px;
/* or 130% */


/* BACKGROUND */
margin: 0 0 10px 0;
color: #0B0D34;
}

@media screen and (max-width:620px) {
  .video{
    flex-direction: column;
  }
  .video iframe{
    width: 100%;
    height: 170px;
  }
}
</style>