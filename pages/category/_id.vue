<template>
    <div class="main">
        <div class="category-header">
            <img  :src="ctg.icon" alt="">
            <div class="block" :style="{'background':ctg.color}">
                <div class="title">{{ctg.name}}</div>
                <div class="des"> {{ctg.description}}</div>
            </div>
        </div>

        <div class="grid">
            <CardMain v-for="i of 6" :key="i"
                image="http://176.126.164.190:8000/media/education/images/fba4201738444cae87c00797800f1d10.png"
                name="test"
                description="test description"
                video-count="5"
                test-count="2"
                id="#"
            
             />
        </div>
    </div>
</template>

<script>
export default {
    
    mounted(){
        this.$store.dispatch('header/setColors',{
            bg:'#FFFDF4',
            burger:'#0B0D34',
            nav:'#0B0D34'
        })


    if(!this.$store.getters['categories/allCategories']){
            this.$store.dispatch('categories/fetchCategories')
    }
    },
    computed:{
        ctg(){
                let all = this.$store.getters['categories/allCategories']
                let result = null
                if(all){
                for(let i of  all){
                if(i.id == this.$route.params.id){
                    result = i

                    break;
                }
                }
                 return result
                }else{
                    return 'error '
                }

               
        }
    }
}
</script>

<style scoped>
.grid{
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 30px;
    width: 90%;
    margin: 40px auto;
}
.main{
    width: 100%;
}
.category-header{
    width: 100%;
    background: url("@/assets/imgs/rec.png") no-repeat;
    background-size: 100% auto;
    min-height: 330px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.category-header img{
    width: 30%;
}
.block{
    width: 590px;
    height: 106px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:15px;
    margin: -50px 0 0 0;
}

.des{
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
/* identical to box height */


/* BACKGROUND */

color: #0B0D34;
}

.title{
    
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 30px;
/* identical to box height, or 125% */


/* BACKGROUND */

color: #0B0D34;
}
@media screen and (max-width:1200px) {
    .grid{
        display: flex;
        flex-wrap: wrap ;
    }
}

@media screen and (max-width:570px) {
    .block{
        width: 90%;
        padding: 30px;
        height: auto;
    }
}
/* @media screen and (max-width:610px) {
    .grid > div{
        width: 100%;
    }
} */
@media screen and (max-width:697px) {
    .category-header img{
        width: 70%;
    }
    .block{
        margin: -30px 0 0 0;
    }
}
</style>