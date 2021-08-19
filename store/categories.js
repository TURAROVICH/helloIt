export const state = () =>({
    ctg:{}
})

export const mutations = {
    change(state,payload){
        state.ctg = payload
    }
}

export const actions = {
    fetchCategories({commit}){
        this.$axios('http://176.126.164.190:8000/api/bilimcategories/').then(data=>{
            commit('change',data.data)
            console.log(data.data);
        })
    }
}

export const getters = {
    allCategories:s=>s.ctg.results
}