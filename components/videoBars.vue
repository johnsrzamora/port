<template>
   <div class="barWrapper"> 
        <div class="barContainer">
        <el-row>
            <el-col :span="16">
                <el-progress :text-inside="true" 
                    :stroke-width="15" 
                    v-bind:percentage="60" 
                    v-bind:color="CustomColorBar">
                </el-progress>
            </el-col>
            <el-col :span="8">
                <div class="barTitles">
                <p>OBS Brodcasting</p>
                </div>
            
            </el-col>
        </el-row>
        </div>
        <div class="barContainer">
        <el-row>
            <el-col :span="16">
                <el-progress :text-inside="true" 
                    :stroke-width="15" 
                    v-bind:percentage="80" 
                    v-bind:color="CustomColorBar">
                </el-progress>
            </el-col>
            <el-col :span="8">
                <div class="barTitles">
                <p>Explainer Videos</p>
                </div>
            </el-col>
        </el-row>
        </div>
        <div class="barContainer">
        <el-row>
            <el-col :span="16">
                <el-progress :text-inside="true" 
                    :stroke-width="15" 
                    v-bind:percentage="55" 
                    v-bind:color="CustomColorBar">
                </el-progress>
            </el-col>
            <el-col :span="8">
                <div class="barTitles">
                <p>Color Grading</p>
                </div>
            </el-col>
        </el-row>
        </div>
        <div class="barContainer">
        <el-row>
            <el-col :span="16">
                <el-progress :text-inside="true" 
                    :stroke-width="15" 
                    v-bind:percentage="90" 
                    v-bind:color="CustomColorBar">
                </el-progress>
            </el-col>
            <el-col :span="8">
                <div class="barTitles">
                <p>Slideshows</p>
                </div>
            </el-col>
        </el-row>
        </div>
        <div class="barContainer">
        <el-row>
            <el-col :span="16">
                <el-progress :text-inside="true" 
                    :stroke-width="15" 
                    v-bind:percentage="80" 
                    v-bind:color="CustomColorBar">
                </el-progress>
            </el-col>
            <el-col :span="8">
                <div class="barTitles">
                <p>Explainer Videos</p>
                </div>
            </el-col>
        </el-row>
        </div>
        <div class="barContainer">
        <el-row>
            <el-col :span="16">
                <el-progress :text-inside="true" 
                    :stroke-width="15" 
                    v-bind:percentage="65" 
                    v-bind:color="CustomColorBar">
                </el-progress>
            </el-col>
            <el-col :span="8">
                <div class="barTitles">
                <p>Stop Motion</p>
                </div>
            </el-col>
        </el-row>
        </div>
    </div>
</template>
<style>
.barTitles{
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
}
.barWrapper{
  width: 500px;
  height: 500px;
}
.barContainer{
  width: 500px;
  height: 50px;
  margin: auto;
  margin-top: 20px;
}
</style>
<script>
export default {
    name:'bars',
    data(){
        return{

        }
    }
}
</script>