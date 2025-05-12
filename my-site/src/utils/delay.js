
//用于等待一段时间
function delay(duration){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },duration)
    })
}
export default delay