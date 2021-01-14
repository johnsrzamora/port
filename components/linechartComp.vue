<template>
    <div>
        <div class="LinesCont">
            <client-only>
                <div id="chart">
                    <apexchart  type="line" 
                                height="350" 
                                :options="chartOptions" 
                                :series="series"
                                class="apex">
                    </apexchart>
                </div>
            </client-only>
        </div>
    </div>
</template>
<script src="../components/lineChart.js"></script>
<style>
.LinesCont{
    width: 100%;
    margin:auto;
    border: 1px solid red;
    margin-top: 100px;
}
</style>