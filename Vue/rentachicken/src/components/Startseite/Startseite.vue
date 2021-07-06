<template>
  <div>
    <div class="nix">
      <b-container>
        <b-row>
          <b-col>
            <h1>Rent a Chicken</h1>
          </b-col>
          <b-col class="svg">
            <img src="./../../assets/images/menu.svg" alt="" />
          </b-col>
        </b-row>
      </b-container>
      <div>
        <DeineEier></DeineEier>
      </div>
      <div>
        <Hühner></Hühner>
      </div>
      <div>
        <LiveCam></LiveCam>
      </div>
    </div>
    <navi></navi>
  </div>
</template>

<script>
import DeineEier from "../Startseite/DeineEier.vue";
import Hühner from "../Startseite/Hühner.vue";
import LiveCam from "../Startseite/LiveCam.vue";
import Navi from "./navi.vue";
export default {
  components: {
    DeineEier,
    Hühner,
    LiveCam,
    Navi,
  },
  methods: {
  },
};
</script>

<style>
body {
  margin: 0;
}
.col {
  display: block;
  position: relative;
  width: 100%;
}

.row {
  display: flex;
  flex-wrap: nowrap;
}
h1 {
  color: #e58f4d;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  letter-spacing: 0.4px;
  margin-bottom: 1px;
}
h2 {
  margin-top: 24px;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.4px;
  color: #e58f4d;
}
.nix {
  margin-top: 23px;
  margin-left: 18px;
  margin-right: 18px;
}
.svg {
  width: auto;
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
}
</style>