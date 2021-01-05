<template >
<div>
    <div id="MainBody">
      <contentLayout/>
      <headereds/>
    </div>
</div>
</template>
<script>
import PostService from '../pages/PostService';
import yellowBox from '../components/yellowBox';
import apexcharts from '../components/barChart';
import headereds from '../components/headered';
import contentLayout from '../components/Content';
import wavefooter from '../components/footer'

export default {
  components:{
    contentLayout,
    yellowBox,
    apexcharts,
    headereds,
    wavefooter
  },
    data(){
      return{
        posts:[],
        error: '',
        text:'',
        show: true,
        b: ''
      }
    },
    methods:{
    AddBox: function(){
      return this.box;
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
            title: "Intro Stephen Zamora",
            meta:[
                {
                    hid:"description",
                    name:"Lol"
                }
            ]
        }
    },
}

</script>
<style src="../assets/design.css"></style>
<style>
#Vid{
  color: white;

}
#Front{
  color: black;
  text-align: right;
  margin-left: -110px;
}
  .gradHead{
    height: 100px;
    border-radius: 10px;
    width: 100%;
  }
  .Boxes{
    font-family: 'Segoe UI';
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: none;
  }
  .bg-purple {
    background:none;

  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    height: 200px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .SkillsContainer{
      margin: auto;
      width: 1250px;
  }
  .circleFrame{
  border: 2px solid rgb(255, 166, 0);
  width: 200px;
  height: 200px;
  border-radius: 200px;
  margin: auto;
  background:url('../assets/Pic.jpg') no-repeat;
}
.ColumnVideo{
  width: 300px;
  height: 300px;
  border: 1px solid red;
}
.buttonContainers{
  width: 200px;
  height: 70px;
  border: 1px solid red;
  margin: auto;
}
</style>


