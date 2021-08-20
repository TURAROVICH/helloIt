<template>
    <div class="profile">
        <div class="profile-img"><img src="@/assets/imgs/full-news/profile.png" alt=""></div>
        <div class="profile-content">
            <div class="full-name">Марат к Ширин</div>
            <div class="date">
                <div class="month"> 17 Март</div>
                <div class="year">2021</div>
                <div class="hour">19:21</div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.profile{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 200px;
    gap: 30px;
    &-img{
        border-radius: 50%;
    }
    .full-name{
        @include h6;
        font-family: Raleway;
    }
    .date{
        display: flex;
        gap:16px;
    }
    .date > div{
        color:$sl;
        margin: 10px 0 0 0;
        white-space: nowrap;
    }

}
</style>