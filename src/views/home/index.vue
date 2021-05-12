<template>
    <div>
        <pub-header></pub-header>
        <pub-main>
            <div class="block home-content">
                <el-timeline>
                    <el-timeline-item :size="large" timestamp="2018" placement="top">
                        <el-card>
                            <h3>更新 Github 模板</h3>
                            <strong>王小虎 提交于 2018/4/12 20:46</strong>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item :hide-timestamp="false" placement="top">
                        <el-card>
                            <h3>更新 Github 模板</h3>
                            <strong>王小虎 提交于 2018/4/3 20:46</strong>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/2" placement="top">
                        <el-card>
                            <h3>更新 Github 模板</h3>
                            <strong>王小虎 提交于 2018/4/2 20:46</strong>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </pub-main>
        <pub-footer></pub-footer>
    </div>
</template>

<script>
    import PubHeader from "../../components/PubHeader";
    import PubMain from "../../components/PubMain";
    import PubFooter from "../../components/PubFooter";
    export default {
        components: {
            PubFooter, //定义组件
            PubHeader,
            PubMain
        },
    }
</script>

<style scoped>
</style>