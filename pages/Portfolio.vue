<template>
<transition name="el-fade-in-linear">
<div id="MainBody">
    <el-container>
        <section class="header-section">
            <el-row :gutter="0">
                <el-col :span="4">
                  <div class="InfoContainer">
                       <el-button :disabled="false" v-on:click="showBlack()" type="warning" icon="el-icon-star-off" circle></el-button>
                  </div>
                </el-col>
                <el-col :span="16">
                    <div class="InfoContainer">
                        <div class="circleFrame" ></div>
                  </div>
                </el-col>
                <el-col :span="4">
                    <div class="InfoContainer">
                         <el-button @click="showYellow()" icon="el-icon-star-off" circle></el-button>
                  </div>
                </el-col>
            </el-row>
        </section>
        <br>
    </el-container>
    <el-container>
        <section class="titles">
            <el-row>
                <el-col :span="12">
                    <div class="MainTitles" id="Vid">Video Editor</div>
                </el-col>
                 <el-col :span="12">
                   <div class="MainTitles" id="Front">Front-End Dev</div>
                </el-col>
            </el-row>
        </section>
    </el-container>
    <el-container >
        <transition name="el-fade-in-linear">
            <el-row>
                <el-col :span="24">
                     <section id="main-sections">
                         UnHidden
                    </section> 
                    <section id="main-section2">
                       
                    </section> 
                    
                </el-col>
            </el-row>
        </transition>
        <transition name="el-fade-in-linear">
            <el-row>
                <el-col :span="24">
                     <section id="main-section">
                        
                    </section> 
                    <section id="main-sections">
                        UnHidden
                    </section> 
                    
                </el-col>
            </el-row>
        </transition>
    </el-container>
</div>
</transition>
</template>
<script>
import PostService from '../pages/PostService';
import yellowBox22 from '../components/yellowBox';

export default {
    components:{
         yellowBox22,
    },
    data(){
        return{
            show:false,
            show2:false,
            shows:false,
            disabled:false,
            posts:[],
            error: '',
            text:'',
        }
    },
    methods:{
        showBlack(){  
             var element =  document.getElementById('main-section');
            if(this.show =! this.show){
              document.getElementById('MainBody').style.background ='rgb(19, 18, 18)' ;
              element.style.opacity ='1' ;
            }
           else if(this.show == this.show){
             document.getElementById('MainBody').style.background = 'linear-gradient(90deg, rgb(19, 18, 18) 50%, rgba(255,166,0,1) 50%, rgba(255,166,0,1) 100%)';
             element.style.opacity ='.0';
            }
        },
        showYellow(){
            var element2 =  document.getElementById('main-section2');
             if(this.show2 =! this.show2){
              document.getElementById('MainBody').style.background ='rgba(255,166,0,1)';
              element2.style.opacity ='1' ; 
            }
            else if(this.show2 == this.show2){
              document.getElementById('MainBody').style.background = 'linear-gradient(90deg, rgb(19, 18, 18) 50%, rgba(255,166,0,1) 50%, rgba(255,166,0,1) 100%)';   
              element2.style.opacity ='.0' ; 
            }
        },
        chartDraw: function(a, e){
        setTimeout(() => {  
        var total = 100,
            remainder = 0
            remainder = total - a
        var options = {
            plotOptions: {
                pie: {
                  donut: {
                    size: '80%'
                  }
                }
              },
              series: [parseInt(a),remainder],
              chart: {
              type: 'donut',
              width: 150
            },
            fill: {
                colors: ['#001818', '#FFFFFF']
            },
            dataLabels:{
                enabled: false,
                enabledOnSeries: undefined,
            },
            legend:{
                show:false
            },
            stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'butt',
                colors: undefined,
                width: 0,
                dashArray: 0,      
            },
            tooltip:{
                enabled: false,
                enabledOnSeries: undefined,
            },
            responsive: [{
                breakpoint: 480,
                options: {
                chart: {
                    width:80
                },
                legend: {
                    position: 'bottom'
                }
                }
            }]
            };
        var chart = new ApexCharts(document.getElementById(''+ e +''), options);
        chart.render();
    }, 2000);  
    },
    async created(){
      try{
        this.posts =  await PostService.getPosts();
        const temp = this.posts;
        const c = this.chartID;
        const temp2 = []
       for(var keys =0; keys <temp.length; keys++){
         console.log(temp)
         temp2.push({
           pieD: temp[keys].skillPie,
           Chart: temp[keys]._id
         })

       }
      }
      catch(err){
        this.error = err.message;
      }
    },
    head(){
        return{
            title: "About Stephen Zamora",
            meta:[
                {
                    hid:"description",
                    name:"Lol"
                }
            ]
        }
    },
    }
}
</script>