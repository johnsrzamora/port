let data = {
    users: [
        {
            id:"kndfoewrn95123",
            profile_name: "Front-End",
            intro: "im a front-end developer",
            color: "yellow",
            skills:[
                {
                    name: 'vue',
                    rate: '50'
                },
                {
                    name: 'js',
                    rate: '30'
                }
            ]
        },
        {
            id:"kndfoewrn12353",
            profile_name: "Video-Editor",
            intro: "im a VideoEditor",
            color: "black",
            skills:[
                {
                    name: 'vue',
                    rate: '50'
                },
                {
                    name: 'js',
                    rate: '30'
                }
            ]
    
        }
       
    ]
}
export const state =()=> (data)

export const getters = {
    getUserByID: (state) => (id) => {
       return state.users.find(users => users.id === id)
    },
    getSkillsByID : (state) => (id) =>{
       let i =  state.users.skills.find(users => users.id === id)
       console.log(i)
       return i
    }
}

export const mutations =()=>({
    addUser(state, payload){
        let user = {
            ...payload
        }
    }
})