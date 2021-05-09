<template>
    <div class="height-full main-header">
        <div class="main-bg" :style="backgroundDiv">

        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                backgroundDiv: {
                    background:'url(' + require('../../assets/bg-002.png') + ') 50% 50% / cover no-repeat rgba(0, 0, 0, 0.5)'
                }
            }
        }
    }
</script>

<style scoped>
    .main-header{
        width: 100%;
        position: relative;
        overflow: hidden;

    }
    .main-bg{
        width: calc(100vw + 40px);
        height: 100%;
        overflow: hidden;
        z-index: 10;
        margin-left: -20px;
        position: absolute;
        transition: transform .2s;
        --percentage: 0;
        transform: translateX(calc(var(--percentage)*20px));
    }
    .height-full {
        height: calc(100vh - 60px);
    }
    @media screen and (max-width: 1200px){
        .height-full {
            height: 50vh;
        }
    }

</style>