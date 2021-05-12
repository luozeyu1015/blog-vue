<template>
    <div id="main_bg">
        <el-row class="main-row">
            <el-col class="grid-content bg-purple-dark" :xs="{span:24,offset:0}" :md="{span:22,offset:1}" :lg="{span:20,offset:2}">
                <div class="main-content">
                    <slot/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .grid-content {
        border-radius: 4px;
        min-height: 360px;
    }
    .bg-purple-dark {
        background: rgba(31,45,61,0.9);
    }
    .main-row{
        padding-top: 40px;
        padding-bottom: 40px;
    }
    .main-content{
        margin: 30px 30px 0 30px;
    }
</style>