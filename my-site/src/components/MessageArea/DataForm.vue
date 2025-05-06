<template>

    <form class="data-form-container" id="data-form-container" ref="form" @submit.prevent="handleSubmit">
        <div class="form-item">
            <div class="input-area">
            <div class="tip">{{ formData.nickname.length }}/10</div>

                <input type="text" placeholder="用户昵称" v-model.trim="formData.nickname" maxlength="10">
            </div>

            
            <div class="error">{{ errInfo.nickname }}</div>

        </div>
        <div class="form-item" >
            <div class="text-area">
            <div class="tip">{{ formData.comment.length }}/300</div>

                <textarea name="" id="" placeholder="输入内容" v-model.trim="formData.comment" maxlength="300"></textarea>
            </div>

            <div class="error">{{ errInfo.content }}</div>

          
        </div>
        <div class="form-item">
            <div class="botton-area">
                <button :disabled="isSubmiting" :class="{
                    disable: isSubmiting
                }">
                    {{ isSubmiting ? '提交中...' : '提交' }}
                </button>
            </div>
        </div>

    </form>

</template>

<script>


export default {

    data() {
        return {
            formData: {
                nickname: '',
                comment: ''
            },
            isSubmiting: false,
            errInfo: {
                nickname: '',
                comment: ''
            }
        }
    },
    methods: {
        handleSubmit() {
            //处理不满足提交要求的情况
            this.errInfo.nickname = this.formData.nickname ? '' : '昵称不能为空'
            this.errInfo.content = this.formData.comment ? '' : '内容不能为空'
        
            if (this.errInfo.nickname || this.errInfo.comment) {
                return;
            }
            //提交过程
            this.isSubmiting = true
            this.$emit('submit', this.formData, (text) => {
                this.$showMessage({
                    text: text,
                    type: 'success',
                    container: this.$refs.form,
                    callback:()=>{
                        this.isSubmiting = false;
                        this.formData.nickname = '';
                        this.formData.comment = '';
                    }

                })

            })
        }
    }
}
</script>

<style scoped lang="less">
@import url('~@/styles/var.less');

.data-form-container {
    margin-bottom: 20px;
    overflow: hidden;

}

.form-item {
    margin-bottom: 8px;
}

.input-area {
  width: 50%;
  position: relative;
}
.text-area {
  position: relative;
}
.tip {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: #b4b8bc;
  font-size: 12px;
}
input,
textarea {
  display: block;
  width: 100%;
 
  border: 1px dashed @gray;
  outline: none;
  color: @words;
  font-size: 14px;
  border-radius: 4px;
  &:focus {
    border-color: @primary;
  }
}
input {
  padding: 0 15px;
  height: 40px;
}
textarea {
  resize: none;
  padding: 8px 15px;
  height: 120px;
}
.error {
  margin-top: 6px;
  color: @danger;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
button {
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 34px;
  color: #fff;
  border-radius: 4px;
  background: @primary;
  &:hover {
    background: darken(@primary, 10%);
  }
  &:disabled {
    background: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}
</style>