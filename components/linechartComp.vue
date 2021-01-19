<template>
    <div>
        <div class="LinesCont">
            <div class="DropdownHolder">
                <div class="Dropdown">
                    <el-dropdown>
                            <el-button type="primary">
                                Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
                            </el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                   <label>
                                       
                                    </label> 
                                    <input type="checkbox"
                                           v-model="checkItems">
                                </el-dropdown-item>
                            </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <client-only>
                 <div id="loadingCont"></div>
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
    width: 70%;
    margin:auto;
    border: 1px solid red;
    margin-top: 100px;
}
.DropdownHolder{
    width: 100%;
    height: 50px;
    border: 1px solid red;
}
.Dropdown{
    width: 100px;
    height: 50px;
    border: 1px solid red;
    margin-left: 90%;
}
.el-dropdown{
    margin-top: 0px;
}
#loadingCont{
    background: url('../assets/Ripple-1s-200px.svg');
    background-size: contain;
    width: 100px;
    height: 100px;
    margin: auto;
}
</style>