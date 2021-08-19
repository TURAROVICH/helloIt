export const state = () => ({
    bg:'#0B0D34',
    burger:'#fff',
    nav:'#fff'
})

export const mutations = {
    setState(ste,payload){
        ste.bg = payload.bg
        ste.burger = payload.burger
        ste.nav = payload.nav
    }
}

export const actions = {
    setColors({commit},payload){
        commit('setState',payload)
    }
}

export const getters={
    getBg:s=>s.bg,
    getBurger:s=>s.burger,
    getNav:s=>s.nav
}