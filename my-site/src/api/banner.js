
import request from './request'
async function getBanners(){
    return await request.get('/api/banner');
}
export default getBanners;
