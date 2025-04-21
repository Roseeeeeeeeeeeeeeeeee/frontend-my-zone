<template>

    <ul class="contact-container">
        <li
       v-for="(item,i) in contactInfo"
       :key="i"
        >
           <a :href="item.herf">
            <div class="icon" :class="{weixin:item.icon === 'weixin'}">
                <Icon :type="item.icon"/>
            </div>
            <span>{{item.text}}</span>
           </a>
           <div class="pop" v-if="item.pop">
            <img :src="item.img" alt="">
           </div>
        </li>
    </ul>

</template>

<script>
import Icon from '@/components/Icon'

export default {
    data() {
        return {
            contactInfo: [
                {
                    icon: 'github',
                    text: 'Roseeeeeeeeeeeeeeeeee',
                    pop:false,
                    herf:'',
                    
                },
                {
                    icon: 'mail',
                    text: '3270692067@qq.com',
                    pop:false,
                    herf:'mailto:23423424234@qq.com'
                },
                {
                    icon: 'qq',
                    text: '3270692067',
                    pop:true,
                    img:'https://img0.baidu.com/it/u=218761232,3524899133&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=970',
                    herf:'tencent://message/?Menu=yes&uin=3263023350&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45'
                },
                {
                    icon: 'weixin',
                    text: 'BgqgssxH',
                    img:'https://img0.baidu.com/it/u=44627786,1035348010&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
                    pop:true
                },
            ]
        }
    },
    components: {
        Icon,
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.contact-container{
    width: 100%;
  
    background-color: transparent;
    color: @gray;
    list-style: none;
    padding: 20px;

    @itemHigth:35px;
    li{
        margin: 30px 0;
        line-height: 30px;
        position: relative;
        &:hover{
                .pop{
                    transform: scaleY(1);
                }
            }
        .icon{
            width: 36px;
            font-size:25px;
            &.weixin {
                font-size: 32px;
                text-indent: -3px;
            }
        }
        a{
            display: flex;
            align-items: center;
            cursor: pointer;
            font-size: 14px;
        }
        .pop{
            position: absolute;
            padding: 15px;
            left: 0;
            bottom: @itemHigth+7px;
            background-color: #fff;
            
            border-radius: 5px;
           
            box-sizing: border-box;
            transform: scaleY(0);
            transform-origin: bottom center;
            transition: .5s;
            img{
                width: 150px;
                height: 150px;
                object-fit: cover;
            }
            &::after{
                width: 10px;
                height: 10px;
                background-color: #fff;
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%) rotate(45deg) ;
                bottom: -5px;
                
            
            }
        }
    }
}
</style>