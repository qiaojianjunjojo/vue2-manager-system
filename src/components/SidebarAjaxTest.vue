<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-service"></i> Ajax使用</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <h1>Ajax:get/post的使用,参考SidebarAjaxTest.vue组件</h1>
            <el-row>
                <el-button type="primary" @click="getData">点击获取Api1数据</el-button>
                <el-button type="primary" @click="getData2">点击获取Api2数据</el-button>
                <el-button type="primary" @click="getData3">点击获取Api3数据</el-button>
                <el-button type="primary" @click="logOut">退出登錄</el-button>
            </el-row>
            <div v-if="process">loading Api1...</div>
            API1-data:<br/>{{ info }}
            <br />
            API-data2:
            <p v-html="info2"></p>
            API3-data:<br/>
            <section v-if="errored">
                <p>请求失败了！</p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AjaxTest',
    data() {
        return {
            info: '',
            process: '',
            info2: '',
            errored: false
        };
    },
    methods: {
        logOut() {
            this.$store.commit('mutationUserOut');
            this.$router.push('/login');
        },

        getData() {
            this.process = true;
            //一般的get請求demo，不帶任何參數；
            this.$axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(
                // success callback
                (response) => {
                    this.process = false;
                    this.info = response;
                }
            );
        },

        getData2() {
            //帶參數的get 請求demo;
            this.$axios
                .get(
                    'http://10.189.127.62:40028/get/Mportal/Yield/Lcm/LCM1/2/', //url
                    { params: { process: 'Bonding', color: 'N' } } // params參數
                )
                .then((response) => {
                    this.info2 = response.data;
                   
                });
        },

        getData3() {
            //post請求 请求失败案例
            this.$axios
                .post('/someUrl', { foo: 'bar' })
                .then((response) => {})
                .catch((error) => {
                    this.errored = true;
                    this.$alert("请求出错了！")
                });
        }
    }
};
</script>
