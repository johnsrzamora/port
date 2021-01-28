<template>
  <div>
    <h1>{{skillChosen}}</h1>
        <el-card class="box-card">
            <div v-for="o in skillData"
                    :key="o.name" 
                    class="text item">
                - <el-button type="text" 
                            @click="skillOnclick(o.name, o.rate)">
                            {{o.name}}
                </el-button>
            </div>
        </el-card>
    </div>
</template>
<script src="../Mixins/introduc.js"></script>
<style>
.skillColumn{
    width: 100px;
    margin: auto;
    border: 1px solid red;
}
.box-card {
    width: 170px;
}
.el-button{
    color: rgb(0, 0, 0);
}
</style>