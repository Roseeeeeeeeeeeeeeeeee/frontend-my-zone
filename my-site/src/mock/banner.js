import Mock from 'mockjs';

import carouselLow1 from '../assets/carousel/low-1.jpeg'
export default Mock.mock("/api/banner", "get", {
    code: 0,
    msg: "",
    data: [
        {
            id: "1",
            midImg: 'https://img1.baidu.com/it/u=3116592540,2312802028&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800',
            bigImg: 'https://pic.rmb.bdstatic.com/bjh/events/ec4255e8299da55c18550d3547a2e3824338.jpeg@h_1280',
            title: "华灯初上",
            description: "烟火气正浓，光影晕染，撞入朦胧",
        },
        {
            id: "2",
            midImg: "https://img2.baidu.com/it/u=1480783773,335860308&fm=253&fmt=auto&app=120&f=JPEG?w=784&h=500",
            bigImg: "https://p3.itc.cn/q_70/images03/20221123/02cec752d78b4a6e9389b9498ddb440c.jpeg",
            title: "海风轻拂",
            description: "白衣佳人，明眸皓齿，同海天一色",
        },
        {
            id: "3",
            midImg: "https://img0.baidu.com/it/u=2143141532,662147883&fm=253&fmt=auto?w=1200&h=800",
            bigImg: " https://pic.rmb.bdstatic.com/bjh/32bc83ac01e2f13fa5fd5627ac52925c2560.jpeg@h_1280",
            title: "春从漫步",
            description: "轻纱长裙，仿佛融于画中",
        },
        {
            id: "4",
            midImg: "https://img0.baidu.com/it/u=1134087034,470843866&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500",
            bigImg: "https://n.sinaimg.cn/sinakd20117/214/w2048h1366/20220521/20b3-8f11b6db1c883942f500d43f4eba3cd2.jpg",
            title: "初夏寻绿",
            description: "小满时节，绿意盎然",
        },
       
       
    ],
})
