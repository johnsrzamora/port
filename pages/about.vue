<template>
  <div id="MainBody">
      <div class="IntroCont">
        <div class="thumb"></div>
          <el-container>
           <el-row>
            <el-col :span="12">
               <div class="IntroName" id="align">
                 <br>
                  <h1>My Front-End Skills </h1>
                  <h1>I Use <span id="apex">ApexCharts</span> for these ------</h1>
                  <h1>This portfolio site is built in <span id="apex">Nuxt.JS</span> </h1>
                  <h1>And I am very familiar in <span id="apex">Vue</span> </h1>
                  <h1>Also I can make web designs using <span  id="apex">Photoshop</span> <br>
                      and convert it into static web pages</h1>
              </div>
            </el-col>
            <el-col :span="12">
              <el-row>
                <el-col :span="12">
                  <yellowBox/> 
                </el-col>
                 <el-col :span="12">
                   <donutCharts/>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="12">
               <div class="IntroName" id="align">
                 <br>
                  <h1>Video Editing Skills </h1>
                  <h1>For techs that i use for editing <span id="apex">VSDC</span> <br>is my choice</h1>
                  <h1>In audio mastering I use many plugins for<span id="apex">Audacity</span> </h1>
                  <h1>I also utilize template designing platforms <br> like <span id="apex">Canva</span> and <span id="apex">Illustrator</span></h1>
              </div>
            </el-col>
             <el-col :span="12">
               <div class="IntroName" 
                    id="align">
                    <bars/>
              </div>
            </el-col>
          </el-row>
      </el-container>
      </div>
      <headered/>
  </div>
</template>
<script>
import PostService from '../pages/PostService';
import yellowBox from '../components/yellowBox';
import apexcharts from '../components/barChart';
import headered from '../components/headered';
import contentLayout from '../components/Content';
import bars from '../components/videoBars';
import donutCharts from '../components/donut.vue';

export default {
  components:{
    contentLayout,
    yellowBox,
    apexcharts,
    headered,
    donutCharts,
    bars
  },
    data(){
      return{
        posts:[],
        barArray:['60','80','55','90', '80','65'],
        error: '',
        text:'',
        show: true,
        b: '',
        CustomColorBar:'black'
      }
    },
  async created(){
      try{
        this.posts =  await PostService.getPosts();
        const temp = this.posts;
        const bartemp = []
        const c = this.chartID;
       for(var keys =0; keys <temp.length; keys++){
         temp2.push({
           pieD: temp[keys].skillPie,
           Chart: temp[keys]._id
         })
       }
      }
      catch(err){
        this.error = err.message;
      }
    },
    head(){
        return{
            title: "About Stephen Zamora",
            meta:[
                {
                    hid:"description",
                    name:"Lol"
                }
            ]
        }
    },
}
</script>
<style src="../assets/design.css"></style>
<style src="../assets/designII.css"></style>
<style scoped>

.IntroName{
 width: 600px;
 height: 600px;
 margin: auto;
 padding-top: 100px;
}
.IntroCont{
    background:url('../assets/paperBack.jpg') no-repeat;
    background-size: cover;
    height: 1720px;
    animation-name: entrance;
    animation-duration:1.7s;
    animation-iteration-count:initial;
    position:absolute;
    transition: 2s;
}
@keyframes entrance{
    0%{top:-2000px; top:-1500px; top:-1000px}
    50%{top:215px}
    100%{ top:200px}
}
#Vid{
  color: white;
}
#Front{
  color: black;
  text-align: right;
  margin-left: -110px;
}
  .gradHead{
  height: 100px;
  border-radius: 10px;
  width: 100%;
}
  .Boxes{
    font-family: 'Segoe UI';
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: none;
  }
  .bg-purple {
    background:none;

  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    height: 200px;
  }
  .circleFrame{
  border: 2px solid rgb(255, 166, 0);
  width: 200px;
  height: 200px;
  border-radius: 200px;
  margin: auto;
  background:url('../assets/Pic.jpg') no-repeat;
}
.ColumnVideo{
  width: 300px;
  height: 300px;
  border: 1px solid red;
}
.buttonContainers{
  width: 200px;
  height: 70px;
  border: 1px solid red;
  margin: auto;
}
#align h1{
  text-align: right;
}
#apex{
  font-family: 'Courier New', Courier, monospace;
  font-size:40px;
}
</style>
