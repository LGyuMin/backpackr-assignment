<template>
    <div class="textForm">
        <div :class="['textareaWrapper', textAreaStatus]">
            <label :for="'enterTextArea_'+textAreaStatus"></label>
            <textarea 
                :name="'enterTextArea_'+textAreaStatus"
                :id="'enterTextArea_'+textAreaStatus"
                title="텍스트 입력 영역"
                v-model="copiedTextAreaValue"
                :placeholder="textAreaValue ? textAreaValue : '내용을 입력하세요.'"
                :maxlength="maxLength"
                :disabled="textAreaStatus == 'disabled' || textAreaStatus == 'readonly'"
            >
            </textarea>
            <span class="remainTextCount">{{ remainTextCount }}</span>
        </div>
        <button
            v-if="textAreaStatus === 'input'" 
            type="submit" 
            class="saveBtn"
            :disabled="(!textAreaValue && !copiedTextAreaValue) || textAreaValue === copiedTextAreaValue"
        >
            Save
        </button>
    </div>
</template>

<script>
export default {
    props: {
        textAreaStatus: {
            validator (value) { 
                return ['input', 'disabled', 'readonly'].indexOf(value) !== -1
            }
        },
        maxLength: { 
            type: Number, 
            required: true,
            validator(value) {
                return value > 1
            } 
        },
        textAreaValue: { type: String, required: false }
    },
    data() {
        return {
            copiedTextAreaValue: ''
        }
    },
    computed: {
        remainTextCount() {
            return this.maxLength - this.copiedTextAreaValue.length
        }
    },
    created() {
        if (this.textAreaValue) {
            this.copiedTextAreaValue = this.textAreaValue
        }
    }
}
</script>

<style scoped> 
.textForm {
    display: flex;
}
.textareaWrapper {
    position: relative;
    display: flex;
    width: 100%;
}

.textareaWrapper.input {
    width: calc(100% - 110px)
}

.textareaWrapper textarea {
    width: 100%;
    height:100px;
    border: 1px solid #dcdcdc;
    font-size: 16px;
    font-weight: 500;
    color: #222;
    line-height: 1.2;
    padding: 5px;
}

textarea::placeholder {color:#828482;}
textarea::-webkit-input-placeholder {color:#828482;}
textarea::-ms-input-placeholder {color:#828482;}

.textareaWrapper.disabled textarea {
    cursor: not-allowed;
    color: #929292
}
.textareaWrapper.readonly textarea {
    cursor: text;
    color: #ff8282
}

.textareaWrapper .remainTextCount{
    position: absolute;
    bottom: 10px;
    right: 20px;
    font-size: 13px;
    font-weight: bold;
    color: #999
}

.textForm .saveBtn {
    width: 100px;
    margin-left: 10px;
    background-color: #4478ff;
    border: 1px solid #4478ff;
    border-radius: 8px;
    color: #fff;
    transition: all .3s;
}

.textForm .saveBtn:hover {
    background-color: #2659de;
    border-color: #2659de
}

.textForm .saveBtn:disabled {
    background-color: #a1bbff;
    border-color: #a1bbff;
    cursor: default;
}

</style>