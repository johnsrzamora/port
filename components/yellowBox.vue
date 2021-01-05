<template>
    <div class="ChartsWrapper">
    <el-row :gutter="10">
    <div id="loading">
      <h3>Loading...</h3>
    </div>
          <el-col :xs="24"  
                  :xl="24" 
                  :span="24" 
                  v-for="post in posts"
                  v-bind:key="post._id">
            <div class="chartContainers">
              <!-- <input  @click="deletePost(post._id)" type="button" value="button"> -->
              <el-row :gutter="5" >
                <el-col :span="8" class="SkillTitle">
                  <p> {{post.skillName}}</p>
                    
                </el-col>
                 <el-col :span="8" class="SkillPercent">
                     {{post.skillPie}}%
                </el-col>
                 <el-col :span="8">
                    <div  v-bind:id="post._id" 
                      class="ChartCont">
                </div>
                </el-col>
              </el-row>
            </div>
        </el-col>
    </el-row>
    <!-- <el-row :gutter="20">
        <el-col :xs="12" :xl="12" :span="12">
          <div class="grid-content bg-purple">
            <div class="inputContainer">
              <el-row :gutter="0">
              <el-col :xs="6" :xl="12" :span="12">
                Skill Name 
              </el-col>
              <el-col :xs="6" :xl="12" :span="12">
              <el-input color="#000000" 
                        size="mini" 
                        placeholder="type" 
                        v-model="skillN">
              </el-input>
              </el-col>
              <br>
              <br>
                <el-row :gutter="0">
                  <el-col :xs="6" 
                          :xl="12" 
                          :span="12">
                    Percentage 
                  </el-col>
                  <el-col :xs="6" :xl="12" :span="12">
                      <el-input-number v-model="num" 
                                       size="small" 
                                       @change="handleChange()" 
                                       :min="20" 
                                       :max="100">

                      </el-input-number>
                  </el-col>
                   <el-col :xs="6" :xl="12" :span="12">
                        <el-button id="button" 
                                   size="small" 
                                   type="warning"
                                   v-on:click="createPost()">
                                    Add Skill
                        </el-button>
                  </el-col>
                </el-row>
                <el-row :gutter="0">
                   
                </el-row>
            </el-row>
            </div>
          </div>
        </el-col>
     </el-row> -->
     <br>
    </div>
</template>
<script src="../components/yellowx.js"></script>
<style>
.ChartsWrapper{
  height: 500px;
  width: 100%;
  margin-top: 100px;
}
#loading{
  font-family: nos;
  font-size: 20px;
  position:absolute;
  left: 600px;
  top:-50px;
  display: block;
}
#button{
  margin: auto;
  margin-left: 50%;
}
.ChartCont{
  border:none;
  width: 200px;
  margin: auto;
  margin-top: -20px;
}
.labelsTitle{
  text-align: center;
  font-family: 'Segoe UI';
  font-weight: normal;
  font-size: 18px;
  padding-top: 10px;
}
.labels{
  position: relative;
  top: 60px;
  left: 103px;
  font-family: 'Segoe UI';
  font-weight: bold;
  font-size: 20px;
}
.el-col{
  margin-top: 20px;
  margin-bottom: 20px;
}
.el-input{
  width: 100px;
  text-align: center;
  color: black;
}
.inputContainer{
  width: 200px;
  margin: auto;
  padding-top: 20px;
}
.el-button{
  margin: auto;
  font-size: 15px;
  position: relative;
  top: -30px;
}
.el-input-number{
  color: black;
  text-align: center;
  width: 100px;
}
.chartContainers{
  width: 380px;
  height: 130px;
  margin-top: -50px;
}
.SkillTitle{
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  text-align: right;
  position: relative;
  left: 160px;
  top: 50px;
  transition: 0.3s;
}
.SkillPercent{
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  text-align: right;
  position: relative;
  left: 165px;
  top: 50px;
}
</style>