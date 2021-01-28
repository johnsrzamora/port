<template>
    <div>
        <div v-if="getUserByID($route.params.id)" :iden="$route.params.id">
            
        </div>
        <div v-else>
            <h1>No Data</h1>
        </div>
    </div>
</template>
<script>
import {mapGetters , mapState} from 'vuex'
export default {
    data(){
        return {
            userData: [],
            r: [],
            iden: '',
            mountedDatas: []
        }
    },
    computed:{
        ...mapGetters({
           getUserByID: 'getUserByID',
           getSkillsByID: 'getSkillsByID'
        }),
    },

}
</script>