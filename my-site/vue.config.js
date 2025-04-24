module.exports = {
    devServer:{
        proxy:{
            "/api" :{
                target:"http://test.my-site.com" //填对应的后端测试服务器地址
            } 
        }
    }
}