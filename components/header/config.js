import { mapState, mapGetters } from 'vuex'
export default {
    name:'headers',
    data(){
        return{
            activeIndex: '1',
            activeIndex2: '1'
        }
    },

    computed:{
        ...mapState({
            users: state=> state.users
        }),
        ...mapGetters({
            getUserByID: 'getUserByID'
        })
    },

    methods:{
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        switchPageto(id){
            this.$router.push('/store/' + id)
        }
    }
}