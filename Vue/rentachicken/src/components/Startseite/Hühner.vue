<template>
<div>
    <h2>Hühner</h2>
    <b-container>
        <b-row>
            <b-col>
                Meine Hühner
            </b-col>
            <b-col class="nicht">
                Vermietete Hühner
            </b-col>
            <b-col class="nicht">
                Freie Hühner
            </b-col>
        </b-row>
    </b-container>
    <carousel></carousel>
</div>
  
  
</template>

<script>
import Carousel from '../Carousel.vue'
export default {
  components: { Carousel },

}
</script>

<style scoped>
.row{
    width: 90%;
}
.col{
    padding: 0;
    margin-right: 16px;
    margin-left:0cm;
font-family: Airbnb Cereal App;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.4px;
color: #4A7140;
}
.nicht{
    color: #C4C4C4;
}
</style>
