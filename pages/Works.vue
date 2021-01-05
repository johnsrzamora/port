<template>
    <div id="MainBody">
        <div class="IntroCont">
            <div class="thumb"></div>
        <el-row>
            <div class="WorksContainers">

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
export default {
    components:{
    headered
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