export default function (refName) {
    return {
        mounted() {
            this.$bus.$on("setMainScroll", this.handleSetMainScroll);
            this.$refs[refName].addEventListener("scroll", this.handleMainScroll);
        },
        beforeDestroy() {
            this.$bus.$emit("mainScroll");
            this.$refs[refName].removeEventListener("scroll", this.handleMainScroll);
            this.$bus.$off("setMainScroll", this.handleSetMainScroll);
        },
        methods: {
            handleMainScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refName]);
            },
            handleSetMainScroll(scrollTop) {
                this.$refs[refName].scrollTop = scrollTop;
            },
        }
    }
}