<template>
    <client-only>
        <div>
            <apexchart type="donut" 
                        :options="chartOptions"
                        :series="series"
                        class="DonutCharts">
            </apexchart>
        </div>
    </client-only>
</template>
<script>
export default {
    name:'donuts',
    data(){
        return{
            series: [44, 55, 41, 17, 15],
          chartOptions: {
            chart: {
              type: 'donut',
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
    }
}
</script>
<style src="../assets/donutDes.css"></style>