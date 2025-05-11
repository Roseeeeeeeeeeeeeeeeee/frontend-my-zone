import request from './request'
async function getProject(){
    return await request.get('/api/project')
}
export default getProject