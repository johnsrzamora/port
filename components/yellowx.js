import PostService from '../pages/PostService'
export default {
     data(){
      return{
        posts:[],
        pieData:[],
        error: '',
        text:'',
        skillN: '',
        skillR: '',
        num: "20"
      }
    },
      async created(){
       
      try{
        this.posts =  await PostService.getPosts();
        const temp = this.posts;
        const c = this.chartID;
        const temp2 = []
        var element = document.getElementById('loading').style.display='none';
       for(var keys =0; keys <temp.length; keys++){
         temp2.push({
           pieD: temp[keys].skillPie,
           Chart: temp[keys]._id
         })

       }
      
      }
      catch(err){
        this.error = err.message;
      }
    },
    methods:{
    handleChange(num) {
      console.log(num)
    },
     async createPost(){
      await PostService.insertPost(this.skillN, this.num);
      this.skillN = '',
      this.num = ''
      this.posts =  await PostService.getPosts();
      window.location.reload();
    },
    async deletePost(id){
      await PostService.deletePost(id);
      this.posts =  await PostService.getPosts();
    },
    },
}