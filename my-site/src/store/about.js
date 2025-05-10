
import getAbout from "@/api/about";
export default{
    
    namespaced:true,
        state:{
           data:'',
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
                
                
                if(ctx.state.data){
                    return
                }
                ctx.commit('setLoading',true)
                const resp = await getAbout();
                console.log(resp);
                
                ctx.commit('setLoading',false)
                ctx.commit('setData',resp)   
            }
    
        }
    
}