<template>
    <div class="textForm">
        <div class="textareaWrapper">
            <label for="exterTextArea"></label>
            <textarea 
                name="exterTextArea" 
                id="exterTextArea"
                :placeholder="textAreaValue ? textAreaValue : '내용을 입력하세요.'"
                v-model="copiedTextareaValue"
            >
            </textarea>
            <span class="remainTextCount">{{ remainTextCount }}</span>
        </div>
        <button
            v-if="textAreaStatus === 'input'" 
            type="submit" 
            class="saveBtn"
            :disabled="(!textAreaValue && !copiedTextareaValue) || textAreaValue === copiedTextareaValue"
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
                return ['input', 'disable', 'readonly'].indexOf(value) !== -1
            }
        },
        textAreaValue: { type: String, required: false }
    },
    data() {
        return {
            copiedTextareaValue: ''
        }
    },
    computed: {
        remainTextCount() {
            return 500 - this.copiedTextareaValue.length
        }
    },
    created() {
        if (this.textAreaValue) {
            this.copiedTextareaValue = this.textAreaValue
        }
    }
}
</script>

<style scoped> 
.textForm {
    display: flex;
    gap: 10px;
}
.textareaWrapper {
    position: relative;
    display: flex;
    width: 100%;
}

.textareaWrapper #exterTextArea {
    width: 100%;
    height:100px;
    border: 1px solid #dcdcdc;
    overflow-y: overlay;
    font-size: 16px;
    font-weight: 500;
    color: #222;
    line-height: 19px;
}

.textareaWrapper .remainTextCount{
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 14px;
}

.textForm .saveBtn {
    width: 100px;
    border: 1px solid #dcdcdc;
}

</style>