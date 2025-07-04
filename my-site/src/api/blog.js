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
//获取单个博客
export async function getBlog(id){
    return await request.get(`/api/blog/${id}`)
}
//提交评论
export async function postComment(commentInfo) {
    console.log(commentInfo,'com');
    
    return await request.post('/api/comment',
        commentInfo
    )
}
//分页获取评论
export async function getComments(page=1,limit=10,blogId=-1){
    return await request.get('/api/comment',{
        params:{
            page,
            limit,
            blogId
        }
    })
}