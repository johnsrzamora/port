<template>
    <div class="loadingCont">
        <div class="loadingSVG"></div>
    </div>
</template>
<script>
export default {
    name: 'loading'
}
</script>
<style>
.loadingCont{
    background: url('../assets/Ripple-1s-200px.svg');
    background-size: contain;
    width: 100px;
    height: 100px;
    margin: auto;
    display:block;
}
</style>