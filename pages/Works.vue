<template>
    <div id="MainBody">
        <div class="IntroCont">
        <div class="thumb"></div>
            <el-row>
                <div class="WorksContainers">
                    <lines/>
                </div>
                <div>
              
                </div>
            </el-row>
        </div>
       <headered/>
    </div>
</template>
<style src="../assets/designII.css"></style>
<style src="../assets/design.css"></style>
<script>
import headered from '../components/headered';
import lines from '../components/linechartComp.vue';

export default {
    components:{
    headered,
    lines,
    err: ''
  },
    head(){
        return{
            title: "Works Stephen Zamora",
            meta:[
                {
                    hid:"description",
                    name:"Lol"
                }
            ]
        }
    }
}
</script>