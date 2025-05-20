import getBanners from '@/api/banner'
import { SERVER_URL } from '@/urlConfig';
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
        amendImageUrl(state){
           state.data.forEach(i => {
            i.bigImg = SERVER_URL + i.bigImg;
            i.midImg = SERVER_URL + i.midImg;

           });

        }
        
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
            ctx.commit('amendImageUrl')
            
           
          
           
            
        }

    }
}