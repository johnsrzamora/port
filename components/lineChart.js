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
            series:[],
            unDate:[],
            checkItems:[],
            matchData:'',
            chartOptions: {
                legend: {
                    show: false,
                    onItemHover: {
                        highlightDataSeries: false
                      },
                    labels:{
                        tooltip:{
                            enabled: false,
                            shared: false,
                            intersect: false
                        }
                     }
                  },
                tooltip:{
                    enabled: true,
                    shared: false
                },
                chart: {
                height: '2000px',
                type: 'line',
                zoom: {
                    enabled: false
                },
                animations:{
                    enabled:false
                }
                },
                stroke: {
                curve: 'straight',
                color: '#f3f3f3'
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
                    tickAmount: 6,
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
      FilterLines(prod){
          var check = document.querySelectorAll('input[type=checkbox]:checked').length;

      },
      chartData(){
        var match = [],
            str = 'Sep',
            DatesData = [],
            filterDate = [],
            newJson = this.plain,
            newJson2 = this.unPlain
        // for (var keys = 0 ; keys < newJson.length; keys++) {
        //     this.PlainData.push({
        //         id:   newJson[keys].item_id,
        //         date: newJson[keys].date,
        //     });
        //     DatesData.push(str + newJson[keys].date.slice(7,10));  
        // }

       const referenceData = this.unPlain.results.map((res)=>{
           var respon = res.product_skus
           var dataresults = respon.map((red)=>{
            if(this.plain.indexOf(red.item_id) < 0){
                return {
                    companyprodId: red.item_id,
                    itemName: red.item_name,
                    productId: red.product,
                    retailer: red.retailer_url
                }
            }
        })
        return dataresults
       })

       const referenceFilter = referenceData.map((re)=>{

       })
       console.log(referenceData)
        filterDate = DatesData.filter((item, index)=>DatesData.indexOf(item)===index);
        // this.filteredDates = filterDate;
        // for(var x in this.unPlain.results){
        //     var price =  Math.floor(Math.random() * 4500) + 500;
        //     var products = this.unPlain.results[x]
        //     for(var Property in products.product_skus){
        //         if(this.PlainData.indexOf(products.product_skus[Property].item_id) < 0){
        //             match.push({
        //                 companyProductID:products.product_skus[Property].item_id,
        //                 retailer: products.product_skus[Property].retailer_url,
        //                 ItemName: products.product_skus[Property].item_name,
        //                 productID:products.product_skus[Property].product,
        //             })
        //         }
        //     }
        // }
        var chartArray = [],
            dataTemp =[],
            date = [],
            datesArray = [];
        var filteredSeries=[];
        // for(var i in match){
        //     var price =  Math.floor(Math.random() * 4500) + 500;
        //     for(var x in this.PlainData){
        //         if(match[i].companyProductID == this.PlainData[x].id){
        //             dataTemp.push(price)
        //             date.push(this.PlainData[x].date)
        //             chartArray[i] = [dataTemp]
        //             datesArray[i] = [date]
        //             filteredSeries.push({
        //                 ids:  match[i].companyProductID,
        //                 prodId: match[i].productID,
        //                 data: dataTemp,
        //                 name:match[i].ItemName
        //             })
        //         }
        //     }
        //     dataTemp = []
        //     date = []
        // }   
        // var seen = new Set();
        // const rar = filteredSeries.filter(el => {
        //     const duplicate = seen.has(el.prodId);
        //     seen.add(el.prodId);
        //     return !duplicate;
        // });
        const splicedData = [];
        // for(var i in rar){
        //     splicedData.push({
        //         data:rar[i].data.splice(5,6),
        //         ids:  rar[i].ids,
        //         prodId:rar[i].prodId,
        //         name: rar[i].name
        //     })
        // }
        // return referenceData
      },
    unload(){
        var loads  = document.getElementById('loadingCont')
            loads.style.display = 'none'
    }
    },
    mounted(){
        this.promiseData = new Promise((filters, rejected)=>{
            setTimeout(()=>{
                this.chartData()
                filters(()=>{
                console.log("Data is Set")
                })
            },3000)
        })
        this.promiseData.then(()=>{
            this.unload();
            console.log("Humana")
        })
    }
}