<template>
    <div :class="{card: true, horizental: isHorizental}">
        <div class="cardImgWrapper">
            <img class="cardImg" :src="cardImageUrl" :alt="cardImageArt">
        </div>

        <div class="cardInfo">
            <div class="cardDesc" v-if="cardDescObj">
                <p class="cardDescLabel ellipsis">{{ cardDescObj.label }}</p>
                <p class="cardDescTitle ellipsis">{{ cardDescObj.title }}</p>
                <p class="cardDescDetail ellipsis">
                    <span class="cardDetailHighlight">{{ cardDescObj.highlight }}</span>
                    <span class="cardDetailCrossOut">{{ cardDescObj.crossOut }}</span>
                </p>
            </div>

            <div class="rateWrapper" v-if="rate">
                <div class="rateRow">
                    <span v-for="i of 5" :key="i" :class="{ rate: true, active: i <= rate }"></span>
                </div>
                <p class="rateDesc ellipsis">{{ rateDesc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComp',
    props: {
        isHorizental: { type:Boolean, required: true },
        cardImageUrl: { type: String, required: true },
        cardImageArt: { type: String, required: true },
        cardDescObj: {
            type: Object,
            required: false,
            validator(value){
                const cardDescKeys = Object.keys(value);
                return cardDescKeys.indexOf('label') !== -1 && cardDescKeys.indexOf('title') !== -1
            }
        },
        rate: { 
            type: Number, 
            required: false,
            validator(value) {
                return value > 0 && value % 1 === 0
            }
        },
        rateDesc: { type: String, required: false }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    min-width: 24%;
    max-width: 25%;
    border: 1px solid #ddd;
}

.card > div {
    background: #f8f8f8;
}

.card .cardImgWrapper {
    width: 100%;
    position: relative;
    padding-top: 100%;
    overflow: hidden;
}

.card .cardImgWrapper .cardImg {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
}

.card .cardInfo {
    width: 100%;
}

.card .cardInfo > div {
    padding: 10px;
}

.card .cardInfo .cardDescLabel {
    font-size: 12px;
    color: #b6b6b6;
    margin-bottom: 10px;
}

.card .cardInfo .cardDescTitle {
    font-weight: bold;
    margin-bottom: 25px;
}

.card .cardInfo .cardDescDetail .cardDetailHighlight {
    font-size: 12px;
    color: red;
    margin-right: 10px;
}

.card .cardInfo .cardDescDetail .cardDetailCrossOut {
    font-size: 12px;
    color: #ccc;
    text-decoration: line-through;
}

.card .rateWrapper {
    border-top: 1px solid #ddd;
    padding-top: 5px;
}

.rateWrapper .rateRow {
    display: flex;
    margin-bottom: 5px;
}

.rateRow .rate {
    display: inline-block;
    width: 15px;
    height: 15px;
    background: #ccc;
    border-radius: 50%;
    margin-right: 5px;
}

.rateRow .rate.active {
    background: #ffdb00;
}

.rateWrapper .rateDesc {
    font-size: 12px;
    color: #b6b6b6;
}

/* 가로 스타일 */
.card.horizental {
    flex-direction: row;
    min-width: 49%;
    max-width: 49%;
}

.card.horizental .cardImgWrapper {
    width: 40%;
    padding-top: 40%;
}

.card.horizental .cardInfo {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card.horizental .cardInfo > div {
    padding: 0;
}

.card.horizental .cardInfo .cardDesc {
    padding: 5px 10px;
    height: 50%;
}

.card.horizental .cardInfo .rateWrapper {
    border-top: none;
    padding: 5px 10px;
    height: 30%;
}

/* 공통 사용 클래스 */
.ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
}

/* 반응형 */
@media (max-width: 770px) {
    .card, .card.horizental { 
        min-width: 100%;
        max-width: 100%;
    }
}
</style>