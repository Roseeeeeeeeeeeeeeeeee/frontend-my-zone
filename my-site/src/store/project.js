
import getProject from "@/api/project";
export default{
    
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
                
                // console.log('fd');
                
                if(ctx.state.data.length){
                    return
                }
                ctx.commit('setLoading',true)
                const resp = await getProject();
                // console.log(resp);
                
                
                ctx.commit('setLoading',false)
                ctx.commit('setData',resp)   
            }
    
        }
    
}