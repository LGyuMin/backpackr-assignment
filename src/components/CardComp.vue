<template>
    <div :class="{card: true, horizental: isHorizental}">
        <div class="cardImgWrapper">
            <img class="cardImg" :src="cardImageUrl" :alt="cardImageArt">
        </div>
        <div class="cardDesc">
            <p class="cardDescLabel">Card Label</p>
            <p class="cardDescTitle">Card Title</p>
            <p class="cardDescDetail">
                <span class="cardDetailHighlight">Highlight</span>
                <span class="cardDetailCrossOut">cross out</span>
            </p>

            <div class="rateWrapper" v-if="isHorizental">
                <div class="rateRow">
                    <span class="rate active" v-for="i of 5" :key="i"></span>
                </div>
                <p class="rateDesc">rate desc</p>
            </div>
        </div>
        <div class="rateWrapper" v-if="!isHorizental">
            <div class="rateRow">
                <span class="rate active" v-for="i of 5" :key="i"></span>
            </div>
            <p class="rateDesc">rate desc</p>
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
        rate: { type: Number, required: false }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    min-width: 20%;
    border: 1px solid #ddd;
}

.card.horizental {
    flex-direction: row;
    min-width: 30%;
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

.card.horizental .cardImgWrapper {
    width: 40%;
    padding-top: 40%;
}

.card .cardImg {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
}

.card .cardDesc {
    padding: 5px 10px;
    width: 100%
}

.card.horizental .cardDesc {
    width: 60%;
}

.card .cardDesc .cardDescLabel {
    font-size: 12px;
    color: #b6b6b6;
    margin-bottom: 10px;
}

.card .cardDesc .cardDescTitle {
    font-weight: bold;
    margin-bottom: 25px;
}

.card .cardDesc .cardDescDetail .cardDetailHighlight {
    font-size: 12px;
    color: red;
    margin-right: 10px;
}

.card .cardDesc .cardDescDetail .cardDetailCrossOut {
    font-size: 12px;
    color: #ccc;
    text-decoration: line-through;
}

.card .rateWrapper {
    padding: 5px 10px;
}

.rateWrapper .rateRow {
    display: flex;
    margin-bottom: 5px;
}

.rateRow .rate {
    width: 15px;
    height: 15px;
    cursor: pointer;
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
</style>