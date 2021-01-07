<template>
    <div class="chartWrapper">
        <div class="chartContainer">
            <client-only>
                <div id="chart">
                    <apexchart type="donut" 
                              :options="chartOptions"
                              v-for="item in series"
                              v-bind:key="item"
                              :series="[(parseInt(item)),100-(parseInt(item))]"
                              class="DonutCharts">
                    </apexchart>
                </div>
            </client-only>
        </div>
    </div>
</template>
<script>
import PostService from '../pages/PostService'
export default {
    name:'donuts',
    data(){
        return{
            err:'',
            posts:[],
            donutRate:[],
            series: [],
            chartOptions: {
            plotOptions:{
                pie:{
                    donut:{
                        size: '80%'
                    }
                }
            },
            tooltip:{
            enabled:false
            },
            chart: {
            type: 'donut',
            width: 150
            },
            fill: {
                colors: ['#001818', '#F6AA09']
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
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
        }
    },
    async created(){
    try{
    this.posts = await PostService.getPosts();
    const temp = this.posts;    

    var myDonut = temp.map((e)=>{
        return e.skillPie
    })
    this.series = myDonut;
    console.log(this.series)
    }
    catch(err){
         this.error = err.message;
    }    
    },
}
</script>
<style src="../assets/donutDes.css"></style>