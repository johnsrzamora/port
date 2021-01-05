<template>
    <div>
    <el-container>
        <section class="HeaderSection">
          <div class="navigationNote">
             <ul>
                <li>
                  <nuxt-link to="/intro" class="nuxtLinks">Intro</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about" class="nuxtLinks">Skills</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/works" class="nuxtLinks">Works</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/works" class="nuxtLinks">Bio</nuxt-link>
                </li>
            </ul>
          </div>
         
              <!-- <el-row :gutter="0">
                <el-col :span="4">
                  <div class="InfoContainer">
                       <div class="MainTitles">
                          <div class="StephenBio"></div>
                        </div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="InfoContainer">
                       <div class="MainTitles">
                         <nuxt-link class="nuxtLinks" to="/intro">
                           Intro
                         </nuxt-link>
                        </div>
                  </div>
                </el-col>
                <el-col :span="4">
                    <div class="InfoContainer">
                         <div class="MainTitles">
                         <nuxt-link class="nuxtLinks" to="/about">
                         Skills
                         </nuxt-link>
                        </div>
                  </div>
                </el-col>
                <el-col :span="4">
                    <div class="InfoContainer">
                        <div class="MainTitles">
                          <nuxt-link class="nuxtLinks" to="/works">
                            Works
                          </nuxt-link>
                        </div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="InfoContainer">
                       <div class="MainTitles">
                        <h1>20-21</h1>
                        </div>
                  </div>
                </el-col>
            </el-row> -->
        </section>
    </el-container>
    </div>
</template>
<style>
.navigationNote{
  width: 140px;
  top: 70px;
  left: 60px;
  position:relative;
  color: rgb(255, 187, 0);
  transform: rotate(-6deg);
}
.navigationNote li{
  padding: 5px 5px;
}
.StephenBio{
  font-family: nos;
  color: white;
  width: 100px;
  height: 50px;
}
.nuxtLinks{
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
  margin-right: 55px;
  font-weight: bold;
  color: rgb(32, 31, 31);
  font-size: 25px;
}
@font-face{
    src: url('../assets/Shorelines Script Bold 400.otf');
    font-family: nos;
}
#MainBody{
    width: 100%;
    height:1500px;
    
}
#MainBody2{
  width: 100%;
  height:1500px;
  background: black;
  
}
.InfoContainer{
    height: 150px;
    margin:auto;
}
.HeaderSection{
    background: url('../assets/note.png')no-repeat;
    background-size: contain;
    width:300px;
    height: 300px;
    position: relative;
    top: 120px;
}
.el-container{
    width: 1200px;
    margin: auto;
}
#main-section{
    width: 100%;
    height: 600px;
    background: rgb(255, 0, 0);
    opacity: .0;
    transition: 0.5s;
}
#main-section2{
    width: 500px;
    height: 600px;
    background: none;
    opacity: .0;
    transition: 0.5s;
}
#Vid{
    color: black;
    text-align: center;
    margin-right: 60px;
  }
.titles{
    width: 100%;
}
#Front{
    color: rgb(19, 18, 18);
    text-align: center;
  }
.MainTitles{
    color: white;
    font-family: 'Courier New', Courier, monospace;
    font-size: 25px;
    margin-top: 70px;
}
.el-button{
    margin: auto;
    margin-top: 250%;
    margin-left: 5px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  #main-sections{
    width: 550px;
    height: 600px;
    border: 1px solid green;
    background: none;
    margin:auto;
    float: left;
  }
 
</style>
<script>
export default {
    name:'headers'
}
</script>
