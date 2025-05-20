module.exports = {
    devServer:{
        proxy:{
            "/api" :{
                target:"http://127.0.0.1:7001" //填对应的后端测试服务器地址
            } ,
            "/it" :{
                target:"https://img0.baidu.com" 
            } ,
            
        }
    },
    configureWebpack:require('./webpack.config')
}