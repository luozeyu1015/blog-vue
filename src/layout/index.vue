<template>
    <div class="app-wrapper">
        <el-container>
            <el-header class="header-bg">
                <app-header/>
            </el-header>
            <el-main class="app-main">
                <app-main/>
            </el-main>
        </el-container>
    </div>

</template>

<script>
    import AppMain from "@/layout/AppMain";
    import AppHeader from "@/layout/AppHeader";
    export default {
        name: "Layout",
        components: {AppHeader, AppMain}
    }
</script>

<style lang="scss" scoped>
    @import "~@/styles/mixin.scss";
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.mobile.openSidebar {
            position: fixed;
            top: 0;
        }

    }
    .header-bg{
        margin: 0;
        padding: 0;
        background: rgba(63,63,63,0.7);
    }
    .app-main{
        margin: 0;
        padding: 0;
    }
</style>