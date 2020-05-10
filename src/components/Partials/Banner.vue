<template>
  <div class="banner" >
    <v-container grid-list-md >
      <v-layout row wrap>
        <v-flex md6>
          <div class="left pt-10" >
            <h1 class="display-1">Challenge and be challenged by musical gurus</h1>

            <p>Loorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem laborum at ad tenetur aut corporis aspernatur voluptas beatae enim.</p>

            <v-btn color="success ma-2">Sign Up <v-icon right>mdi-account-plus</v-icon></v-btn>
          
          </div>
        </v-flex>
        <v-flex md6>
          <div class="right">
              <vue-flux
                :options="vfOptions"
                :images="vfImages"
                :transitions="vfTransitions"
                :captions="vfCaptions"
                ref="slider">
                <template v-slot:preloader>
                    <flux-preloader />
                </template>
              </vue-flux>
          </div>
        </v-flex>
      </v-layout>
      <v-row></v-row>
    </v-container>
  </div>
</template>

<script>
import {
   VueFlux,
   FluxPreloader,
} from 'vue-flux';

export default {
  components: {
    VueFlux,
    FluxPreloader,
  },
  data: () => ({
    vfOptions: {
      autoplay: true
    },
    vfImages: [
      require("./../../assets/images/banner/6.png"),
      require("./../../assets/images/banner/2.svg"),
      require("./../../assets/images/banner/3.svg")
    ],
    vfTransitions: ["fade"],
    vfCaptions: [
      "Caption for image 1",
      "Caption for image 2",
      "Caption for image 3"
    ]
  })
};
</script>

<style lang="scss" scoped>
.banner{
   background:url(./../../assets/images/bg/bg1.png);
   background-position:bottom;
   background-size: cover;
   & .left{
      & h1{
         font-weight: 800;
         font-size: 30px;
         padding: 10px;
      }
      & p{
         padding: 10px;
      }
   }
}
</style>