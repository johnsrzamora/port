<template>
 <div>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">
          <div>
            <div class="circleFrame"></div>
              <h1 class="title">
                Stephen Zamora
              </h1>
              <h2 class="subtitle" >
                Video Editor & Front-End Dev
              </h2>
              <nuxt-link class="links" to='/intro'>
                  Check Site
              </nuxt-link>
          </div>
        </div>
      </transition>
    </div>
 </div>
</template>
<script>
export default {
   head(){
        return{
            title: "Stephen Zamora",
            meta:[
                {
                  hid:"description",
                  name:"Home"
                }
            ]
        }
    },
    data(){
      return {
        show: true
      }
    },
    methods:{
      setTime: function(){
        setTimeout(function()
        { alert("Hello"); 
        }, 3000);
      }
    }
}
</script>

<style>
</style>
