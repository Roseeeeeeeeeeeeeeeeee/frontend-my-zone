<template>
    <ul class="data-list-container">

        <li class="list-item" v-for="item in list" :key="item.id">
            <Avatar :url="item.avatar" :size="44" 
            class="avatar-container"/>
            <div class="data">
                <div class="nickname">{{ item.nickname }}</div>
                <div class="content">{{ item.content }}</div>
                <div class="time">
                    {{ getFormatDate(item.createDate, true) }}
                </div>
            </div>
 
        </li>
        <Empty text="无留言或评论" v-if="list.length === 0 && !isLoading"/>
    </ul>
</template>

<script>
import Avatar from '@/components/Avatar';
import { getFormatDate } from '../../utils';
import Empty from "@/components/Empty"
export default {
    components: {
        Avatar,
       Empty

    },
    props: {
        list: {
            type: Array,
            default:()=>[]
        },
        isLoading:{
          type:Boolean,
          default:false
        }
    },
    methods: {
        getFormatDate
    },
    mounted(){
      console.log(this.list,'lis');
      
    }
}
</script>

<style scoped lang="less">
@import url('~@/styles/var.less');

.data-list-container {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  min-height: 150px;
}
li {
  display: flex;
  border-bottom: 1px solid lighten(@gray, 20%);
  padding: 15px 0;
  align-items: center;
}
.avatar-container {
  margin-right: 15px;
}
.nickname {
  color: darken(@success, 10%);
  margin-bottom: 10px;
}
.content {
  font-size: 14px;
}
.data {
  flex: 1 1 auto;
  position: relative;
}
.time {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 12px;
  color: @gray;
}
</style>