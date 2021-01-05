<template>
    <div class="footerWrapper">
        <div class="ocean">
            <div class="wave"></div>
        </div>
        <div class="ocean2">
        </div>
    </div>
</template>
<script>
export default {
    name:'footer'
}
</script>
<style lang="scss">
.footerWrapper{
    width: 1350px;
    height: 500px;
    border: 1px solid red;
    margin: auto;
    overflow: hidden;
}
.ocean { 
  height: 300px;
  width:100%;
  position: relative;
  bottom:150px;
  left:0;
  background: none;
}
.ocean2{
  height: 1000px;
  width:1350px;
  bottom:0px;
  background: #273036;
}
.wave {
  background: url('../assets/waves.svg') repeat-x; 
  background-size: contain;
  width: 10000px;
  height: 500px;
  animation: wave 15s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}
@keyframes wave {
  0% {
    margin-left: 0;
  }
  50% {
    margin-left: -500px;
  }
  100% {
    margin-left: -10px;
  }
}
@keyframes swell {
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
}
</style>