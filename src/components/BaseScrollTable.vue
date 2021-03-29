<template>
    <div>
        <table class="tablecontainer">
            <tr>
                <th width="50%">title</th>
                <th width="30%">date</th>
                <th width="20%">owner</th>
            </tr>
        </table>
        <vue-seamless-scroll :data="listData" :class-option="classOption" class="seamless-warp">
            <table class="tablecontainer">
                <tr v-for="(item, idx) in listData" :key="idx">
                    <td width="50%">{{ item.title }}</td>
                    <td width="30%">{{ item.date }}</td>
                    <td width="20%">{{ item.owner }}</td>
                </tr>
            </table>
        </vue-seamless-scroll>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listData: [
                {
                    title: '无缝滚动第一行无缝滚动第一行',
                    date: '2017-12-16',
                    owner: 'Alex'
                },
                {
                    title: '无缝滚动第二行无缝滚动第二行',
                    date: '2017-12-16',
                    owner: 'Alex'
                },
                {
                    title: '无缝滚动第三行无缝滚动第三行',
                    date: '2017-12-16',
                    owner: 'Alex'
                },
                {
                    title: '无缝滚动第四行无缝滚动第四行',
                    date: '2017-12-16',
                    owner: 'Alex'
                },
                {
                    title: '无缝滚动第五行无缝滚动第五行',
                    date: '2017-12-16',
                    owner: 'Alex'
                },
                {
                    title: '无缝滚动第六行无缝滚动第六行',
                    date: '2017-12-16',
                    owner: 'Alex'
                },
                {
                    title: '无缝滚动第七行无缝滚动第七行',
                    date: '2017-12-16',
                    owner: 'Alex'
                },
                {
                    title: '无缝滚动第八行无缝滚动第八行',
                    date: '2017-12-16',
                    owner: 'Alex'
                },
                {
                    title: '无缝滚动第九行无缝滚动第九行',
                    date: '2017-12-16',
                    owner: 'Jerex'
                },
               
            ]
        };
    },
    computed: {
        classOption() {
            return {
                direction: 1,
                step: 0.5
            };
        }
    }
};
</script>

<style lang="">
.seamless-warp {
    height: 200px;
    overflow: hidden;
    background-color: rgba(147, 167, 236, 0.7);
}
.tablecontainer {
    border-collapse: collapse;
    padding: 0 20px;
    width: 100%;
}
.tablecontainer th,
.tablecontainer td {
    border: 1px solid rgba(25, 25, 221, 0.3);
    text-align: center;
}
.tablecontainer th {
    background-color: green;
    font-size: 20px;
}
</style>