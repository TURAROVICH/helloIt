

export const state = () =>({
    ctgs:{}
})

export const mutations = {
    change(state,payload){
        state.ctgs = payload
    }
}

export const actions = {
    fetchCategory({commit},id){
        this.$axios(`http://176.126.164.190:8000/api/bilimcourses/?category=${id}`).then(data=>{
            commit('change',data.data)
        })
    }
}

export const getters = {
    category:s=>s.ctgs.results
}
