//公共的远程获取数据代码
//具体的组件中需要在methods中提供对应的fetchData方法
export default function (dataType = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: dataType
            }
        },
        async created() {

            this.data = await this.fetchData();
            this.isLoading = false
        }
    }
}