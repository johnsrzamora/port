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
.transition-box {
  margin-bottom: 10px;
  width: 100%;
  border-radius: 4px;
  background-color:none;
  text-align: center;
  color: black;
  padding: 40px 20px;
  box-sizing: border-box;
  }
.links{
  width: 200px;
  height: 50px;
  text-decoration: none;
  color: rgb(255, 166, 0);
  font-size: 20px;
}
.circleFrame{
  border: 2px solid rgb(255, 166, 0);
  width: 200px;
  height: 200px;
  border-radius: 200px;
  margin: auto;
  background:url('../assets/Pic.jpg') no-repeat;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: lighter;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
