export const state =()=>({
    users: [
        {
            "id":"1",
            "profile_name": "Front-End",
            "intro": "im a front-end developer",
            "color": "yellow",
            "skills":[{
                "nuxt / vueJS": "50",
                "css / element-ui": "40",
                "expressJS": "30",
                "data-driven charts": "60",
            }]
        },
        {
            "id":"2",
            "profile_name": "Video-Editor",
            "intro": "im a VideoEditor",
            "color": "black",
            "skills":[{
                "nuxt / vueJS": "50",
                "css / element-ui": "40",
                "expressJS": "30",
                "data-driven charts": "60",
            }]
        }
       
    ]
})

export const getters = {
    getUserByID: (state) => (id) =>{
      return state.users.find(users => users.id === id)
    }
}

export const mutations =()=>({
    addUser(state, payload){
        let user = {
            ...payload
        }
    }
})