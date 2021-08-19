export const state = () =>({
    about:null
})

export const mutations = {
    change(state,payload){
        state.about = payload 
    }
}

export const actions = {
    fetchCourse({commit}){
        this.$axios('http://176.126.164.190:8000/api/bilimcourses/?ordering=views').then(data=>{
            commit('change',data.data)
        })
    }
}

export const getters = {
    allCourse:s=>s.about ? s.about.results : null
}