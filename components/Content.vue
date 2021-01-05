<template>
  <div class="IntroCont">
      <div class="thumb"></div>
      <el-row >
          <el-col :span="12" 
                  :gutter="20">
                <div class="IntroWrapper">
                    <div class="IntroName" 
                         id="faded">
                            <h1>I'm <span id="apex">Stephen Zamora</span> 
                                and Yes I do Video Editing and Front-End stuff...
                                I am a developer based in Davao City, Philippines.
                            </h1>
                    </div>
                </div>
          </el-col>
           <el-col :span="12" 
                   :gutter="20">
               <div class="IntroWrapper">
                    <div class="IntroName">
                         <img src="../assets/Pic.jpg" class="pic">
                        <div class="polaroid">
                          
                        </div>
                         
                    </div>
               </div>
          </el-col>
      </el-row>
       <el-row>
            <el-col :span="12" :gutter="20">
                <div class="IntroWrapper">
                    <div class="IntroName">
                        <br>
                        <div id="CourseTitle">
                            <p> B.S in Information Systems</p>
                        </div>
                    </div>
                </div>
          </el-col>
          <el-col :span="12">
              <div class="IntroWrapper">
                    <div class="IntroName" 
                         id="faded2">
                        <h1>Imagine... I've been studying in College for almost 8 years
                            with different courses and at the end I landed in this degree and
                            I dont know what its all about....
                        </h1>
                    </div>
              </div>
          </el-col>
      </el-row>
      <br>
       <br>
        <br>
         <br>
          <br>
            <br>
              <br>
                <br>
      <el-row>
          <el-col :span="24">
              <div class="IntroWrapper">
                <div class="IntroName" 
                     id="faded3">
                  <h1>without having any experience of those things mentioned above, I still made it because of my interest in this field and I will continue learning.
                      the course that I've graduated didn't really focus on those, but I am a purpose driven person who is willing to learn and venture out of my comfort zone.</h1>
                </div>
              </div>
          </el-col>
      </el-row>
       <el-row>
          <el-col :span="24">
              <div class="IntroWrapper">
                    <div class="IntroName"  id="faded4">
                    <h1>Stephen's Portfolio -2021</h1>
                    </div>
              </div>
          </el-col>
      </el-row>
  </div>
</template>
<script>
export default {
name: 'contentLayout',
}
</script>
<style>
.pic{
    width: 200px;
    height: 200px;
    position: relative;
    top: 5px;
    transform: rotate(5deg);
}
.polaroid{
    background: url('../assets/polaroid.png') ;
    background-size:cover;
    width: 300px;
    height: 300px;
    margin:auto;
    margin-top: -250px;
    transform: rotate(5deg);
}
.thumb{
    background: url('../assets/thumb.png') no-repeat;
    background-size: contain;
    width: 100px;
    height: 100px;
    position: relative;
    left: 1100px;
    top: 20px;
}
.IntroWrapper{
    width: 500px;
    height: 250px;
    margin: auto;
    border: 1px solid transparent;
}
.IntroCont{
    background:url('../assets/paperBack.jpg') no-repeat;
    background-size: cover;
    width: 1200px;
    top: 200px;
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
.LinesWrapper{
    width: 100%;
    height: 100px;
    margin:auto;
}
.Lines{
    float:right;
    font-weight: bolder;
    font-size: 150px;
    width: 30px;
    margin:auto;
}
#line1{
    animation-name: line1;
    animation-duration:.5s;
    animation-iteration-count: infinite;
}
@keyframes line1{
    0%{font-size: 150px;}
    25%{font-size: 155px;}
    50%{font-size: 160px;}
    75%{font-size: 155px;}
    100%{font-size: 150px;}
}
#CourseTitle{
    font-family: 'Courier New', Courier, monospace;
    color: rgb(150, 16, 16);
    font-size: 30px;
    width: 450px;
    margin:auto;
    margin-top: 70px;
    text-align: center;
    font-weight: bolder;
    border: 5px solid rgb(150, 16, 16);
    border-radius: 5px;
    transform: rotate(-10deg);
}
.AnimationWrapper{
    width: 415px;
    height: 100px;
    margin: auto;
    margin-top: 20px;
    margin-left: 120px;
}
.playBut{
    background: url('../assets/plays.png') no-repeat;
    background-size: cover;
    width: 100px;
    height: 100px;
    transform: rotate(-10deg);
    animation-name: greater2;
    animation-duration:6s;
    animation-iteration-count: infinite;
    transition: 2s;
    position:relative;
    opacity: .5;
}
.AnimationCont{
    margin: auto;
    width: 205px;
    height: 100px;
    float: left;
}
.greaterThan{
    background: url('../assets/greater.png') no-repeat;
    background-size: contain;
    height: 100px;
    width: 100px;
    position:relative;
    left:-50px;
    animation-name: greater;
    animation-duration:2s;
    animation-iteration-count: infinite;
    transition: 6s;
    float: left;
}
.greaterThan2{
    background: url('../assets/greater.png') no-repeat;
    background-size: contain;
    height: 100px;
    width: 100px;
    position:relative;
    left:-55px;
    animation-name: greater;
    animation-duration:2.5s;
    animation-iteration-count: infinite;
    transition: 2s;
    float: left;
    transform: rotate(180deg);
}

@keyframes greater{
    0%{left: -55px}
    25%{top: 1px;}   
    50%{left: -54px}
    75%{bottom: 1px;}
    100%{left: -54px}
}
@keyframes greater2{
    0%{right: 1px}
    25%{left: 1px; bottom:1px}
    50%{right: 1px; opacity: 1;}
    75%{left: 1px}
    100%{right: 1px}
}
.IntroName{
    width: 500px;
    font-family: nos;
    margin-top: 15%;
    padding-right: 20px;
    text-align: center;
}
.IntroName h1{
    font-size: 20px;
    padding-top: 20px;
}
#faded{
    margin-left: 90px;
    margin-top: 20px;
}
#faded2{
    margin-left: -80px;
    margin-top: 20px;
}
#faded h1{
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;

}
#faded2 h1{
    -webkit-animation: fadein 5s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 5s; /* Firefox < 16 */
        -ms-animation: fadein 5s; /* Internet Explorer */
         -o-animation: fadein 5s; /* Opera < 12.1 */
            animation: fadein 5s
}
#faded3 h1{
    -webkit-animation: fadein 8s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 8s; /* Firefox < 16 */
        -ms-animation: fadein 8s; /* Internet Explorer */
         -o-animation: fadein 8s; /* Opera < 12.1 */
            animation: fadein 8s;
            width: 600px;
            margin-left: -50px;
}
#faded4 h1{
    -webkit-animation: fadein 8s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 8s; /* Firefox < 16 */
        -ms-animation: fadein 8s; /* Internet Explorer */
         -o-animation: fadein 8s; /* Opera < 12.1 */
            animation: fadein 8s;
              margin-left: -50px;
              margin-top: 50px;
}
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>