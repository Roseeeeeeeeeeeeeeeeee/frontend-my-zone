import request from './request'
function getAbout(){
    return request.get('/api/about')
}
export default getAbout