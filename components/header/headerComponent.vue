<template>
<div>
   <el-header></el-header>
     <div v-for="user in users"
        :key="user.id">
      <el-button type="text" @click="switchPageto(user.id)"> {{user.profile_name}}</el-button>
    </div>
</div>
 
     
</template>

<script src="./config.js"></script>

<style>
.el-header{
    width: 100%;
}
.el-button{
    color: black;
}
.el-button :hover{
    color: gold;
}
</style>