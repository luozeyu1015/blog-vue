<template>
    <div id="header">
        <transition name="slide">
            <div v-if="show" class="nav">
                <span id="blog_left" style="display: flex"><a id="blog_name">一场小雨</a></span>
                <ul class="menu">
                    <li><router-link class="menu_item" :to="{path:'/Paper',hash:'main_bg'}"><i class="el-icon-edit"></i>文章</router-link></li>
                    <li><router-link class="menu_item" :to="{path:'/Amusement',hash:'main_bg'}"><i class="el-icon-magic-stick"></i>生活</router-link></li>
                    <li><router-link class="menu_item" :to="{path:'/Production',hash:'main_bg'}"><i class="el-icon-takeaway-box"></i>作品</router-link></li>
                    <li><router-link class="menu_item" :to="{path:'/Message',hash:'main_bg'}"><i class="el-icon-chat-line-round"></i>留言</router-link></li>
                    <li><router-link class="menu_item" :to="{path:'/About',hash:'main_bg'}"><i class="el-icon-postcard"></i>关于</router-link></li>
                </ul>
                <div class="nav_bg"></div>
            </div>
        </transition>
        <transition name="header-up">
            <div v-if="!show" class="header_up">
                <i class="el-icon-arrow-down"></i>
            </div>
        </transition>
        <div class="nav_message">
            <h1>一场小雨</h1>
            <div>
                <span></span>
            </div>
        </div>
        <div class="header_bg"></div>
    </div>
</template>

<script>
    export default {
        data() { //选项 / 数据
            return {
                activeIndex: '/',
                show:true
            }
        },
        methods: {
            handleScroll() {
                // 页面滚动距顶部距离
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
                    document.body.scrollTop
                var scroll = scrollTop - this.i;
                this.i = scrollTop;
                if (scroll < 0) {
                    this.show=true
                } else {
                    this.show=false
                }
            },
            handleClick: function () {
                this.show = (this.show === true ? false : true)
            }
        },
        mounted() {
            window.addEventListener('scroll',this.handleScroll,true)
        }
    }
</script>

<style scoped>
    #header{
        height: 100vh;
    }
    .header_bg{
        height: 100%;
        background-image: url("../assets/bg-002.jpg");
        background-attachment: fixed;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        -webkit-filter: blur(10px);
        -moz-filter: blur(10px);
        -o-filter: blur(10px);
        -ms-filter: blur(10px);
        filter: blur(10px);
    }
    .nav {
        width: 100%;
        /*margin-bottom:30px;*/
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
        position: fixed;
        display: flex;
        height: 60px;
        left: 0;
        top: 0;
        right: 0;
        z-index: 100;
        padding: 0 30px;
        align-items: center;
    }
    .nav_bg{
        height: 100%;
        background: rgba(40, 42, 44, 0.6);
        position: absolute;
        height: 60px;
        left: 0;
        top: 0;
        right: 0;
        z-index: 90;
        -webkit-filter: blur(10px);
        -moz-filter: blur(10px);
        -o-filter: blur(10px);
        -ms-filter: blur(10px);
        filter: blur(10px);
    }
    .nav #blog_left{
        display: flex;
        z-index: 120;
        padding-left: 30px;
    }
    .nav a{
        color: #eee;
    }
    a#blog_name {
        font-family: "fzytt";
        font-size: 30px;
        font-weight: 500!important;
    }
    .nav li{
        font-size: 24px;
        font-weight: 600;
    }
    .nav .el-menu {
        background: transparent;
        border-bottom: none!important;
        display: inline!important;
    }
    .nav .menu{
        list-style: none;
        display: inline;
        position: absolute;
        width: 500px;
        left: 0;
        right: 0;
        z-index: 110;
        text-align: center;
        margin: auto;

    }
    .nav .menu li {
        display: inline-block;
        padding: 0 .8rem;
    }

    .nav_message{
        color: white;
        position: absolute;
        top: 40%;
        left: 0;
        right: 0;
        text-align: center;
        width: 100%;
        z-index: 120;
    }
    .nav_message h1{
        font-size: 60px;
        opacity: 0.7;
    }
    /*向下显示导航的图标*/
    .header_up{
        width: 100%;
        position: fixed;
        top: 20px;
        left: 0;
        right: 0;
        z-index: 120;
        animation: header-up 1.5s infinite;
    }
    .header_up i{
        width: 100%;
        font-size: 40px;
        font-weight: 700;
        text-align: center;
        opacity: 1;
        cursor: pointer;
    }

    /*动画效果*/
    .slide-enter-active{
        transition:all .3s linear;
    }
    .slide-leave-active{
        transition:all .3s linear;
    }
    .slide-enter{
        transform: translateY(-100%);
        opacity: 0;
    }
    .slide-leave-to{
        transform: translateY(-100%);
        opacity: 0;
    }
    .header-up-enter-active{
        transition:all .3s linear;
    }
    .header-up-leave-active{
        transition:all .3s linear;
    }
    .header-up-enter{
        transform: translateY(-100%);
        opacity: 0;
    }
    .header-up-leave-to{
        transform: translateY(-120%);
        opacity: 0;
    }
    @-moz-keyframes header-up{
        0%{top:20px;opacity:.4}
        50%{top:4px;opacity:1;-ms-filter:none;filter:none}
        100%{top:20px;opacity:.4}
    }
    @-webkit-keyframes header-up{
        0%{top:20px;opacity:.4}
        50%{top:4px;opacity:1;-ms-filter:none;filter:none}
        100%{top:20px;opacity:.4}
    }
    @-o-keyframes header-up{
        0%{top:20px;opacity:.4}
        50%{top:4px;opacity:1;-ms-filter:none;filter:none}
        100%{top:20px;opacity:.4}
    }
    @keyframes header-up{
        0%{top:20px;opacity:.4}
        50%{top:4px;opacity:1;-ms-filter:none;filter:none}
        100%{top:20px;opacity:.4}
    }
</style>