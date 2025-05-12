import Mock from 'mockjs'
Mock.mock('/api/project','get',{
    code:0,
    msg:'',
    "data|5-8": [
        {
          id: "@uuid",
          name: "@ctitle(1, 10)",
          "url|1": ["@url", null],
          "github|1": ["@url", null],
          "description|1-4": ["@cparagraph(1, 5)"],
          'thumb|1': [
            'https://n.sinaimg.cn/sinakd20117/214/w2048h1366/20220521/3d1e-663fe2c0d6dc00e2d4d4ceedd97ac313.jpg',
            
            'https://b0.bdstatic.com/0a58d020627fa0ab64a3507aeefa2d55.jpg@h_1280',
            'https://pic.rmb.bdstatic.com/bjh/d6c0e1f0f9699e24e8f22334d0005a695447.jpeg@h_1280',
            'https://q7.itc.cn/images01/20240813/d810d4479e8544408a29987bc9ce7a51.jpeg',
            'https://wx2.sinaimg.cn/orj480/a1847e2fgy1hk8vkixcdej20u00gwwkr.jpg'
          ],
        },
      ],
})
