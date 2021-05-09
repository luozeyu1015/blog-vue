<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </transition>
    </section>
</template>

<script>
    export default {
        name: "AppMain",
        data(){
            return{
                key() {
                    return this.$route.path
                },
                //todo 页面缓存功能，通过状态管理实现
                cachedViews() {
                    return ['/home']
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/styles/mixin.scss";
    .app-main{
        @include clearfix
    }
</style>