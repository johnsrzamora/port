<template>
    <div>
        <skiList/>
    </div>
</template>
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
<script>
import skiList from '..//components/skill-list.vue'
export default {
components:{
    skiList
}
}
</script>