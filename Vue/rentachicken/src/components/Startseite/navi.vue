<template>
  <div class="test">
    <b-container>
      <b-row>
        <b-col>
          <img src="./../../assets/images/huhn.svg" alt="" />
        </b-col>
        <b-col>
          <img src="./../../assets/images/wissen.svg" alt="" />
        </b-col>
        <b-col>
          <img src="./../../assets/images/wecker.svg" alt="" />
        </b-col>
      </b-row>
      <b-row>
        <b-col class="home">Home</b-col>
        <b-col>Wissen</b-col>
        <b-col>Wecker</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  z-index: 1;
  bottom: 0;
  margin: none;
}

.col {
  background: #f9f8f6;
  align-items: center;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */
  letter-spacing: 0.15px;
  color: #c4c4c4;
}
.test {
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}
img {
  margin-top: 11px;
}
.home{
  color: #4A7140;
}
</style>