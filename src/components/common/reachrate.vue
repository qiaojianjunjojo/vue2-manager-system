<template>
  <div class="reachrate">
    <div class="reach-head">
      <span class="reach-title">{{ process }}達產率</span>
      <span class="reach-owner">Owner:{{ owner }}</span>
    </div>
    <div class="lightgroups">
      <Lightgroup
        v-for="processdata in processArray()"
        :key="processdata.process"
        :lightdata="processdata"
      ></Lightgroup>
    </div>
    <div class="reachtablecontainer">
      <table class="reachtable">
        <tr>
          <th>制程</th>
          <th>线体</th>
          <th>计划量</th>
          <th>产出</th>
          <th>差异</th>
          <th>达产率</th>
          <th>异常状况</th>
          <th>異常时间</th>
          <th>次數</th>
          <th>Top</th>
          <th>Owner</th>
        </tr>
        <tr v-for="detail in processTable()" :key="detail.process">
          <td>{{ detail.process }}</td>
          <td>{{ detail.lineid }}</td>
          <td>{{ detail.target }}</td>
          <td>{{ detail.cnt }}</td>
          <td>{{ detail.cnt - detail.target }}</td>
          <td>{{ detail.rate }}</td>
          <td>{{ detail.issue }}</td>
          <td>{{ detail.minute }}</td>
          <td>{{ detail.times }}</td>
          <td>{{ detail.top }}</td>
          <td>{{ detail.owner }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Lightgroup from "./lightgroup";

export default {
  data() {
    return {
      BEOL: [],
      LCM: [],
      SET: [],
      BeolTable: [],
      LcmTable: [],
      SetTable: [],
      default: [
        {
          process: "組裝",
          rate: "100%",
          rednum: 0,
          yellownum: 0,
          greennum: 0,
        },
        {
          process: "測試",
          rate: "100%",
          rednum: 0,
          yellownum: 0,
          greennum: 0,
        },
      ],
    };
  },
  props: ["fab", "process", "owner"],
  components: { Lightgroup },
  methods: {
    processArray() {
      if (this.process === "BEOL") {
        return this.BEOL;
      } else if (this.process === "LCM") {
        return this.LCM;
      } else if (this.process === "SET") {
        return this.SET;
      } else {
        return [];
      }
    },
    processTable() {
      if (this.process === "BEOL") {
        return this.BeolTable;
      } else if (this.process === "LCM") {
        return this.LcmTable;
      } else if (this.process === "SET") {
        return this.SetTable;
      } else {
        return [];
      }
    },
    getUrl() {
      //api設計更合理的情況return url?this.fab&this.process
      const urls = {
        BEOL: "http://10.189.127.62:40012/Beol2ReachesProducingRate/",
        LCM: "http://10.189.127.62:40012/LCM2ReachesProducingRate/",
        SET: "http://10.189.127.62:40012/SETReachesProducingRate/",
      };
      return urls[this.process];
    },
    getUrltable() {
      const urls = {
        BEOL: "http://10.189.127.62:40012/getBeolratephase1table/",
        LCM: "http://10.189.127.62:40012/getlcmratephase1table/",
        SET: "http://10.189.127.62:40012/getsetratephase1table/",
      };
      return urls[this.process];
    },
  },
  mounted() {
    this.$http
      .get(
        this.getUrl(),
        {},
        {
          headers: {},
          emulateJSON: true,
        }
      )
      .then(
        function (response) {
          // 这里是处理正确的回调
          if (this.process == "BEOL") {
            this.BEOL = response.data.data;
          } else if (this.process == "LCM") {
            this.LCM = response.data.data;
          } else if (this.process == "SET") {
            this.SET = response.data.data.length>0?response.data.data:this.default;
          }

          // this.articles = response.data["subjects"] 也可以
        },
        function (response) {
          // 这里是处理错误的回调
          console.log(response);
        }
      );

    this.$http
      .get(
        this.getUrltable(),
        {},
        {
          headers: {},
          emulateJSON: true,
        }
      )
      .then(
        function (response) {
          // 这里是处理正确的回调
          if (this.process == "BEOL") {
            this.BeolTable = response.data.data;
          } else if (this.process == "LCM") {
            this.LcmTable = response.data.data;
          } else if (this.process == "SET") {
            this.SetTable = response.data.data;
          }

          // this.articles = response.data["subjects"] 也可以
        },
        function (response) {
          // 这里是处理错误的回调
          console.log(response);
        }
      );
  },
};
</script>

<style lang="">
.reachrate {
  margin-top: 10px;
}
.reach-title {
  font-size: 24px;
}
.reach-owner {
  font-size: 18px;
  float: right;
  padding-top: 5px;
}

.reachtablecontainer {
  width: 100%;
  background-color: rgba(143, 15, 58, 0.3);
  height: 150px;
  overflow-y: scroll;
}

.reachtable {
  width: 100%;
  border-collapse: collapse;
  margin-top: 2px;
}

.reachtable th {
  position: sticky;
  top: 0px;
  text-align: center;
  background-color: green;
  border-style: none solid;
  border-color: rgb(97, 16, 228);
  border-width: 1px;
}
.reachtable td {
  border: 1px solid rgba(6, 50, 247, 0.5);
  text-align: center;
}
</style>