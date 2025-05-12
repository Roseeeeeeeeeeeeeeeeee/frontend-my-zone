module.exports = {
    devServer:{
        proxy:{
            "/api" :{
                target:"http://test.my-site.com" //填对应的后端测试服务器地址
            } ,
            '/bfs': {
                target: 'https://i1.hdslb.com', // 设置图片的主机
            }
        }
    },
    configureWebpack:require('./webpack.config')
}