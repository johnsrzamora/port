<template>
    <div>
        <div id="chart">
        <apexchart type="donut" :series="series"></apexchart>
      </div>
    </div>
</template>
<script>
export default {
    name: 'pie',
    mounted(){
        var options = {
            series: [80, 20],
            labels: ['Lol'],
            chart: {
            type: 'donut',
           
        },
        tooltip:{
            enabled: false
        },
            responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                width: 200
                },
                legend: {
                show:false,
                position: 'bottom'
                }
            }
            }]
        };
        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    }
}


</script>