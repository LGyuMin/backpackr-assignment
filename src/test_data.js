import sample_image from './images/sample_image.png';

const card_test_data = [
    {
        cardImageUrl: sample_image,
        cardImageArt: '샘플 이미지',
        cardDescObj: {
            label: '카드 설명 라벨',
            title: '카드 설명 타이틀',
            highlight: '카드 설명 하이라이트',
            crossOut: '카드 설명 취소선'
        },
        rate: 4,
        rateDesc: '별점 설명'
    },
    {
        cardImageUrl: sample_image,
        cardImageArt: '샘플 이미지',
        cardDescObj: {
            label: '카드 설명 라벨',
            title: '카드 설명 타이틀',
            highlight: '카드 설명 하이라이트',
            crossOut: '카드 설명 취소선'
        }
    },
    {
        cardImageUrl: sample_image,
        cardImageArt: '샘플 이미지',
        rate: 4,
        rateDesc: '별점 설명'
    },
    {
        cardImageUrl: sample_image,
        cardImageArt: '샘플 이미지',
        rate: 4,
    },
]

export default card_test_data