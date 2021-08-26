<template>
<div class="main">
    <div class="container">
        <div class="title">
            Баардыгы
        </div>
       <div class="grid">
                <CardMain 
                v-for="(i,k) in cours" 
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
        <div v-if="hasData" class="loader">
            <loader/>
        </div>

         </div>
</template>

<script>

export default {
    data:()=>({
        courses:[],
        next:null,
        prev:'',
        hasData:true
    }),
    mounted(){
        this.$axios.get('http://176.126.164.190:8000/api/bilimcourses/?ordering=views')
            .then(data=>{
                this.courses = data.data.results
                this.next = data.data.next
                this.hasData = data.data.next
            })

            let t= this

            const target = document.querySelector('.loader');
            function handleIntersection(entries) {
            entries.map((entry) => {
            if (entry.isIntersecting) {
                if(t.next != null){
                t.$axios.get(t.next).then(data=>{
                    console.log(t.next,data.data.next);
                    t.next = data.data.next
                    t.hasData = data.data.next

                    t.courses=[...t.courses,...data.data.results]
                })
                }
            } 
            });
    }

    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(target)

    },
    computed:{
        cours(){
            return this.courses
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.loader{
    display: flex;
    align-items: center;
    justify-content: center;
}
.main{
 width: 100%;
 padding: 30px 0 ;
 .title{
     @include h2;
 }
    .container{
        width: 90%;
        margin: 0 auto;
    }
.grid{
  display: flex;
//   grid-template-columns: repeat(6,1fr );
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 50px 0 0 0;
}

}


@media screen and (max-width:596px) {
    .card{
        width: 100%;
    }
}
</style>