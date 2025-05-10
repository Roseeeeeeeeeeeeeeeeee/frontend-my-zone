import getBanners from '@/api/banner'
export default {
    namespaced:true,
    state:{
       data:[],
       loading:false
    },
    mutations:{
        setData(state,pld){
            state.data = pld;
        },
        setLoading(state,pld){
            state.loading = pld;
        },
        
    },
    actions:{
        async fetchData(ctx){
            if(ctx.state.data.length){
                return
            }
            ctx.commit('setLoading',true)
            const resp = await getBanners();
            ctx.commit('setLoading',false)
            ctx.commit('setData',resp)
           
           
            
        }

    }
}