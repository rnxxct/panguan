<template>
    <div>
        <div style="position: absolute; left: 0%; top: 0%;">
            <navbar></navbar>
        </div>
        <div>
            <div style="position: absolute; left: 25%; top: 40%;">
                <i @click="handleCreate" style="font-size: 125px" class="el-icon-document"></i>
                <br/>
                录答案
            </div>
            <div style="position: absolute; left: 45%; top: 40%;">
                <i style="font-size: 125px" class="el-icon-printer" @click="handleScan"></i>
                <br/>
                扫试卷
            </div>
            <div style="position: absolute; left: 65%; top: 40%;">
                <i style="font-size: 125px" class="el-icon-view" @click="handleCheck"></i>
                <br/>
                看成绩
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "./layout/components/Navbar";

    export default {
        components: {Navbar},
        component: {
            Navbar
        },
        methods: {
            handleCheck() {
                this.$router.push('/scoreAnalysis/tests/Choose');
            },
            handleScan() {
                this.$router.push('/scan/scan');
            },
            handleCreate() {
                this.$router.push('/exam');
            }
        }
    }
</script>

<style scoped>

</style>
