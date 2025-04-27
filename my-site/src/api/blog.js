import request from './request'

//获取所有博客分类
export async function getBlogTypes(){
    return await request.get('/api/blogtype',)
}
//获取分页博客
export async function getBlogs(page=1,limit=10,categoryid=-1){
   return await request.get('/api/blog',{
        params:{
            page,
            limit,
            categoryid
        }
    })
}