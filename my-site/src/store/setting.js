import getSetting from "@/api/setting"
export default {
    namespaced:true,
    state:{
        data:null
    },
    mutations:{
        setData(state,pld){
            state.data = pld
        }
    },
    actions:{
        async fetchData(ctx){
            const resp = await getSetting();
            ctx.commit('setData',resp)
            if(resp.favicon){
                let link = document.querySelector("link[ref='shortcut icon']")
                if(link){
                    return
                }
                link = document.createElement('link');
                link.rel = 'shortcut icon'
                link.type = 'images/x-icon'
                link.herf= resp.favicon;
                document.querySelector('head').appendChild(link)
            }
        }
    }
}