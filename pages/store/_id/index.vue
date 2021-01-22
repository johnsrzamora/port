<template>
<div>
    <div v-if="getUserByID($route.params.id)">
        <div v-for="(item , key) in getUserByID($route.params.id)" :key="item.id">
            {{key !== "id" ? item: ""}}
        </div>
    </div>
    <div v-else>
        <h1>No profile found</h1>
    </div>
</div>
   
</template>
<script>
import {mapGetters} from 'vuex'
export default{
    computed:{
        ...mapGetters({
           getUserByID: 'getUserByID'
        }),
        member(){
            return this.members.find(member=>{
                return member.id == this.$route.params.id
            })
        }
    }

}
</script>