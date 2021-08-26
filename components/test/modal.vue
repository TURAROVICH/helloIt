<template>
    <div class="modal">
        <div class="modal-container">
                <svg @click="$emit('close')" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6276 6.31372C17.237 5.92319 16.6039 5.92319 16.2133 6.31372L11.9707 10.5564L7.72806 6.31372C7.33754 5.92319 6.70437 5.92319 6.31385 6.31372C5.92332 6.70424 5.92332 7.33741 6.31385 7.72793L10.5565 11.9706L6.31385 16.2132C5.92332 16.6037 5.92332 17.2369 6.31385 17.6274C6.70437 18.018 7.33754 18.018 7.72806 17.6274L11.9707 13.3848L16.2133 17.6274C16.6039 18.018 17.237 18.018 17.6276 17.6274C18.0181 17.2369 18.0181 16.6037 17.6276 16.2132L13.3849 11.9706L17.6276 7.72793C18.0181 7.33741 18.0181 6.70424 17.6276 6.31372Z" fill="#7E7E7E"/>
                </svg>
            <div class="title">
                Жыйынтыкты коруу?
            </div>
            <div class="yes">
                Ооба (Ырастоо)
            </div>
            <div class="no">
                Жок, артка
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.modal{
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 10;
    background: rgba(0,0,0,0.8);

    display: flex;
    align-items: center;
    justify-content: center;
    &-container{
        width: 545px;
        background: #FFFFFF;
        border-radius: 10px;
        position: relative;
        padding: 25px 0px ;
        .title{
            text-align: center;
            @include h4{
                color: $bl;
            }
        }

        .yes{
            @include h5{
                color: $gr;
                text-align: center;
                margin-top: 50px;
                width: 100%;
                padding: 20px 0;
                border-bottom: 1px solid#E0E7EA;;
            }
        }
        .no{
            @include h5{
                color: $bl;
                text-align: center;
                 width: 100%;
                padding: 20px 0;
            }
        }

        
    svg{
        position: absolute;
        top: 15px;
        right: 15px;

    }
    }

}
</style>