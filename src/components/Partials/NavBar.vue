<template>
  <div>
       <v-app-bar
      app
      color="white"
    >
      <div class="d-flex align-center">
        <v-img
          alt="App Logo"
          class="shrink mr-2"
          contain
          src="./../../assets/images/logo.png"
          transition="scale-transition"
          width="40"
        />

      </div>


      <v-row class="ma-10">
        <span>Explore</span>
      </v-row>

      <v-spacer></v-spacer>
       <v-icon>mdi-search</v-icon>
      <v-btn
        color="green"
        text
        @click="toggleDrawer"
      >
        <v-icon left>mdi-account-plus</v-icon>
        <span class="mr-2" >Register</span>
      </v-btn>
      <v-btn
        color="default"
        @click="toggleDrawer"
      >
        <span class="mr-2" >Sign In</span>
      </v-btn>
    </v-app-bar>

        <v-navigation-drawer color="red--text" temporary fixed v-model="drawer">
          <v-toolbar flat class="transparent">
            <v-list class="pa-0">
              <v-list-item avatar>
                <v-list-item-avatar>
                  <img src="./../../assets/images/avatar/avatar.png">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Emily</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-toolbar>
          <v-list dense class="pt-0">
            <v-list-item v-for="item in items" :key="item.key">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                           </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
  </div>
</template>




<script>
export default {
   data: () => ({
     drawer:false,
     items:[
       {
         key:1,
         icon:"icon",
         title:'Home'

       },
        {
         key:2,
         icon:"icon",
         title:'About'

       }
     ]
  }),
  methods:{
    toggleDrawer:function(){
      this.drawer=!this.drawer
      console.log(this.open);
      
      
    }
  }
}
</script>

<style>

</style>