<template>
    <div class="donut-wrapper">
        <client-only>
            <apexchart type="donut" 
                        :options="chartOptions"
                        v-for="item in series"
                        v-bind:key="item"
                        :series="[]"
                        class="DonutCharts">
            </apexchart>
        </client-only>
    </div>
</template>
<script src="../components/apexBar.js"></script>
<style>
.donut-wrapper{
    width: 300px;
    height: 300px;
    border: 1px solid red;
}
</style>