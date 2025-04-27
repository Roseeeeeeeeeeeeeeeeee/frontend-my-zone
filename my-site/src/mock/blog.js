
import Mock from 'mockjs'
import qs from 'querystring'
//模拟所有博客分类
Mock.mock('/api/blogtype', 'get', {
    code: 0,
    msg: "",
    'data|10-20': [
        {
            'id|+1': 1,
            name: "分类@id",
            'articleCount|0-300': 0,
            'order|+1': 1,
        },
    ]
})
//模拟博客某页信息
Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', function (option) {
    const querys = qs.parse(option.url)
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            'total|1000-2500': 0,
            [`rows|${querys.limit}`]: [
                {
                    id: '@guid',
                    title: "@ctitle",
                    description: "@cparagraph(1,10)",
                    category: {
                        'id|+1': 1,
                        name: "分类@id"
                    },
                    'scanNumber|0-500': 0,
                    'commentNumber|0-200': 0,
                    thumb: Mock.Random.image('300x250', '#000', '#fff', 'random img'),
                    createDate: "@date('T)"
                }
            ]
        }
    }
    )
})