<template>
    <div id="app">
        <h1>백패커 프론트엔드 개발자 포지션 과제</h1>

        <div class="cardUi">
            <h2>카드 UI</h2>
            <div class="cardUiRow">
                <CardComp
                    v-for="(item, index) in cardTestData"
                    :key="index"
                    :is-horizental="false"
                    :card-image-url="item.cardImageUrl"
                    :card-image-art="item.cardImageArt"
                    :card-desc-obj="item.cardDescObj"
                    :rate="item.rate"
                    :rate-desc="item.rateDesc"
                />
            </div>

            <div class="cardUiRow">
                <CardComp
                    v-for="(item, index) in cardTestData"
                    :key="index"
                    :is-horizental="true"
                    :card-image-url="item.cardImageUrl"
                    :card-image-art="item.cardImageArt"
                    :card-desc-obj="item.cardDescObj"
                    :rate="item.rate"
                    :rate-desc="item.rateDesc"
                />
            </div>
        </div>

        <div class="inputFormUi">
            <h2>입력 폼 UI</h2>
            <TextForm :text-area-status="'input'" :max-length="500" />
            <TextForm :text-area-status="'disabled'" :text-area-value="'this is disabled'" :max-length="500" />
            <TextForm :text-area-status="'readonly'" :text-area-value="'this is readonly'" :max-length="500" />
        </div>
    </div>
</template>

<script>
import TextForm from './components/TextForm.vue';
import CardComp from './components/CardComp.vue';

import card_test_data from './test_data';

export default {
    name: 'App',
    components: {
        TextForm,
        CardComp
    },
    data() {
        return {
            cardTestData: card_test_data
        }
    }
}
</script>

<style scoped>
h1, h2 {
    margin-bottom: 20px;
    text-align: center
}

.cardUi {
    margin-bottom: 20px;
}

.cardUi .cardUiRow {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    flex-wrap: wrap;
}

.inputFormUi > * {
    margin-bottom: 15px;
}
</style>

<style>
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");

/* 스타일 초기화 */
*{
    margin: 0; 
    padding: 0; 
    font-family: inherit;
}
*, :after, :before { box-sizing: border-box; }
button {
    background: none;
    border: 0;
    cursor: pointer;
}
a { text-decoration: none; }
textarea { resize: none; }
div:focus,
input:focus,
button:active,
button:focus,
a:focus,
a:active,
textarea:focus {
    outline: 1px solid #dcdcdc;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    max-width: 1200px;
    min-width: 350px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
}
</style>
