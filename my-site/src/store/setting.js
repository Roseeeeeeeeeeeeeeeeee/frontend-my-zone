import getSetting from "@/api/setting"
import { titleController } from "@/utils";
import { SERVER_URL } from "../urlConfig";
export default {
    namespaced:true,
    state:{
        data:null
    },
    mutations:{
        setData(state,pld){
            state.data = pld
            state.data.avatar = SERVER_URL+state.data.avatar ;
            state.data.qqQrCode =  SERVER_URL + state.data.qqQrCode ;
            state.data.weixinQrCode =  SERVER_URL + state.data.weixinQrCode ;
            
            
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
                link.href= resp.favicon;
                document.querySelector('head').appendChild(link)
                
                
            }
            if(resp.siteTitle){
                titleController.setSiteTitle(resp.siteTitle)
            }
        }
    }
}