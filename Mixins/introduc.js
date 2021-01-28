import profiles from '../components/jsons/profile.json';
export default {
    head(){
        return{
            title: "Stephen ZamorGa",
            meta:[
                {
                  hid:"description",
                  name:"intro"
                }
            ]
        }
    },
    data(){
        return{
            prof: profiles,
            data: '',
            skillData: '',
            checked: [],
            skillChosen: null
        }
    },
    created(){
        let data = this.prof;
        var results =  data.profiles.map((e)=>{
            let r = e.skills.reduce(function(acc, propert){
                return {...acc, [propert.name]:propert}
            }, {})
            
            return this.data = r
        })
       var resultses = data.profiles.map((s)=>{
           let ss = s.skills.map((se)=>{
               return{
                   name:se.name,
                   rate:se.rate
               }
           })
           this.skillData = ss
           return ss
       })
    },
    methods:{
        skillOnclick(a , b){
            console.log(a)
            this.skillChosen = ' '+ a +'  :  ' + b + ''
        }
    }
}