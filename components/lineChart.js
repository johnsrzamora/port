import plainData from '../components/jsons/2019-09PRODUCTDATA.json';
import unPlainData from '../components/jsons/200COMPANY_PRODUCTS.json';
export default {
    name:'lines',
    data(){
        return {
            plain: plainData,
            unPlain: unPlainData,
            filteredDates:[],
            promiseData:[],
            PlainData:[],
            series: [],
            unDate:[],
            matchData:'',
            legend: {
                show: false
              },
              dataLabels: {
                enabled: false
              },
            chartOptions: {
                chart: {
                height: '1350px',
                type: 'line',
                zoom: {
                    enabled: false
                },
                animations:{
                    enabled:false
                }
                },
                stroke: {
                curve: 'straight'
                },
                title: {
                text: 'Product Trends by Month',
                align: 'left'
                },
                grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5,
                    padding:{
                        top: 10,
                        right: 0,
                        bottom: 10,
                        left: 0
                    }
                },
                },
                xaxis: {
                categories: ['Sept-01','Sept-02','Sept-03','Sept-04','Sept-05'],
                },
                yaxis:{
                    tickAmount: 3,
                    min: 500,
                    max: 6000,
                    labels:{
                        show:true,
                        style:{
                            fontSize:'20px;',
                            fontWeight: 400,
                        },
                        offsetY: 0,
                    }
                }
            },
        }
    },
    methods:{
      chartData(){
        var match = [],
            str = 'Sep',
            DatesData = [],
            filterDate = [],
            newJson = this.plain;
        for (var keys = 0 ; keys < newJson.length; keys++) {
            this.PlainData.push({
                id:   newJson[keys].item_id,
                date: newJson[keys].date,
            });
            DatesData.push(str + newJson[keys].date.slice(7,10));  
        }
        filterDate = DatesData.filter((item, index)=>DatesData.indexOf(item)===index);
        this.filteredDates = filterDate;
        for(var x in this.unPlain.results){
            var price =  Math.floor(Math.random() * 4500) + 500;
            var products = this.unPlain.results[x]
            for(var Property in products.product_skus){
                if(this.PlainData.indexOf(products.product_skus[Property].item_id) < 0){
                    match.push({
                        companyProductID:products.product_skus[Property].item_id,
                        retailer: products.product_skus[Property].retailer_url,
                        ItemName: products.product_skus[Property].item_name,
                        productID:products.product_skus[Property].product,
                    })
                }
            }
        }
        var chartArray = [],
            dataTemp =[],
            date = [],
            datesArray = [];
        var filteredSeries=[];
        for(var i in match){
            var price =  Math.floor(Math.random() * 4500) + 500;
            for(var x in this.PlainData){
                if(match[i].companyProductID == this.PlainData[x].id){
                    dataTemp.push(price)
                    date.push(this.PlainData[x].date)
                    chartArray[i] = [dataTemp]
                    datesArray[i] = [date]
                    filteredSeries.push({
                        ids:  match[i].companyProductID,
                        prodId: match[i].productID,
                        data: dataTemp,
                    })
                }
            }
            dataTemp = []
            date = []
        }   
        var seen = new Set();
        const rar = filteredSeries.filter(el => {
            const duplicate = seen.has(el.prodId);
            seen.add(el.prodId);
            return !duplicate;
        });
        console.log(rar)
        return rar
      }
    },
    created(){
        this.promiseData = new Promise((filters, rejected)=>{
            setTimeout(()=>{
                this.series = this.chartData()
                filters(()=>{
                console.log("Data is Set")
                })
            },3000)
       
        })
    },
}