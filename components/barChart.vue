<template>
<div>
    <client-only>
        <apexchart width="500" type="bar" :options="chartOptions" :series="series">
            
        </apexchart>
    </client-only>
</div>
</template>

<script src="../components/apexBar.js"></script>