<template>
  <div class="test">
      <b-container>
          <b-row>
              <b-col>hi</b-col>
              <b-col>hi</b-col>
              <b-col>hi</b-col>
          </b-row>
          <b-row>
              <b-col>Home</b-col>
              <b-col>Wissen</b-col>
              <b-col>Wecker</b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    z-index: 1;
    position: sticky;
    bottom:0;
}
.col{
background: #F9F8F6;   
    align-items: center;
text-align: center;
 font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 20px;
/* identical to box height, or 167% */

letter-spacing: 0.15px;

color: #C4C4C4;

}

</style>