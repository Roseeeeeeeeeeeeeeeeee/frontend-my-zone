<template>
    <div class="blog-list-container"  v-loading="isLoading" ref="container" >
        <ul v-show="!isLoading">
            <li v-for="(item, i) in data.rows" :key="item.id">

                <div class="thumb" v-if="item.thumb">
                    <router-link :to="{
                        name: 'BlogDetail',
                        params: {
                            id: item.id
                        }
                    }">
                        <img  v-lazy="item.thumb" :alt="item.title" :title="item.title">
                    </router-link>
                </div>


                <div class="main">

                    <router-link :to="{
                        name: 'BlogDetail',
                        params: {
                            id: item.id
                        }
                    }">
                        <h2>
                            {{ item.title }}
                        </h2>
                    </router-link>



                    <div class="desc">
                        <span>日期 ：{{ getFormatDate(item.createDate) }}</span>
                        <span>浏览 ：{{ item.scanNumber }}</span>
                        <span>评论 ：{{ item.commentNumber }}</span>
                        <router-link :to="{
                            name: 'BlogCategory',
                            
                            params: {
                                categoryId: item.category.id
                            }
                        }">
                            <a>{{ item.category.name }}</a>
                        </router-link>

                    </div>
                    <div class="content">

                        {{ item.description }}

                    </div>
                </div>



            </li>
        </ul>
        <!-- 分页组件 -->
        <Pager class="pager" v-if="data.total" :total="data.total" :current="routeInfo.page" :limit="routeInfo.limit"
            @page-change="handleChange" v-show="!isLoading"/>
        <Empty v-if="data.rows.length === 0 && !isLoading"/>
    </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js'
import mainScroll from '@/mixins/mainScroll';
import { getBlogs } from '../../../api/blog';
import { getFormatDate } from '@/utils'
import Pager from '@/components/Pager'
import Empty from '@/components/Empty'

export default {
    components: {
        Pager,
        Empty
    },
    mixins: [fetchData({
        total:0,
        rows:[]
    }),mainScroll('container')],
    data() {
        return {

        }
    },
    methods: {
        async fetchData() {
            const r = await getBlogs(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.categoryId)
            // console.log(r); 
            return r

        },
        getFormatDate,
        handleChange(np) {
            //用新的页码变更url中的page参数
            //1、所有分类情况下
            const query = {
                page: np,
                limit: this.routeInfo.limit
            }
            if (this.routeInfo.categoryId === -1) {

                this.$router.push({
                    name: 'Blog',
                    params: {},
                    query
                })
            } else {
                this.$router.push({
                    name: 'BlogCategory',
                    params: {
                        categoryId: this.routeInfo.categoryId
                    },
                    query
                })
            }

        },
       
    
    },
    computed: {
        //获取路由信息
        routeInfo() {
            const categoryId = +this.$route.params.categoryId || -1
            const page = +this.$route.query.page || 1;
            const limit = +this.$route.query.limit || 10;
            return {
                categoryId,
                page,
                limit,
            }
        }

    },
  
  
    watch: {

        // async $route() { //就是监视this.$route
        // this.$refs.container.scrollTop = 0
        // this.isLoading = true
        // this.data  = await this.fetchData();
        // this.isLoading = false
        // }
        $route: {
            async handler() {
                this.$refs.container.scrollTop = 0
                this.isLoading = true
                this.data = await this.fetchData();
                this.isLoading = false
            }

        }
    }
}
</script>

<style scoped lang="less">
@import url('~@/styles/var.less');

.blog-list-container {
    line-height: 1.7;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow-y: scroll;
    scroll-behavior: smooth;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid @gray;

        .thumb {
            flex: 0 0 auto;
            margin-right: 15px;

            img {
                border-radius: 5px;
                display: block;
                max-width: 200px;
            }
        }

        .main {
            flex: 1 1 auto;

            h2 {
                margin: 0;
            }

            .desc {
                font-size: 12px;
                color: @gray;

                span {
                    margin-right: 15px;
                }
            }

            .content {
                margin: 15px 0;
                font-size: 14px;
            }
        }



    }

}
</style>