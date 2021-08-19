<template>
    <div class="main">
        <div class="category-header">
            <img src="@/assets/imgs/ob2.png" alt="">
            <div class="block">
                <div class="title"> ЖРТ </div>
                <div class="des"> даярдык учун курсттар</div>
            </div>
        </div>

        <div class="grid">
            <CardMain v-for="i of 6" :key="i" />
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
    height: 330px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.block{
    width: 590px;
    height: 106px;
    background: #F9E1B5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:15px;
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
    }
}
</style>