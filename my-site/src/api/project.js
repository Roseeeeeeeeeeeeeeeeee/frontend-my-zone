import request from './request'
function getProject(){
    return request.get('/api/project')
}
export default getProject