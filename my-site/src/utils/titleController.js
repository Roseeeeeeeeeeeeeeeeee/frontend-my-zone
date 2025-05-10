//用于控制网站标签栏的标题显示
let routeTitle = '',
    siteTitle = ''
function setTitle(){
    if(!routeTitle && !siteTitle){
        document.title = 'loading...'
    }else if(routeTitle && !siteTitle){
        document.title = routeTitle
    } else if(!routeTitle && siteTitle){
        document.title = siteTitle
    }else{
        document.title = routeTitle +'-'+ siteTitle 
    }

}
export default {
    setRouteTitle(name){
        routeTitle = name
        setTitle()
    },
    setSiteTitle(name){
        siteTitle = name
        setTitle()
    }
}