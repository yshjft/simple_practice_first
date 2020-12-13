import {FoodState} from './food'

export const foodData: FoodState[] = [
    {
        id: 'kor-01',
        type: 'korean',
        name: '부기식당',
        address: '서울특별시 서초구 양재2동 317',
        menu: [
            {name: '부대찌개', price: 7000},
            {name: '제육볶음', price: 7000}, 
            {name: '된장찌개', price: 7000}
        ],
        score: 0
    },
    {
        id: 'kor-02',
        type: 'korean',
        name: '양재해장국',
        address: '서울 서초구 강남대로10길 11',
        menu: [
            {name: '뼈다귀 해장국', price: 8000},
            {name: '뼈다귀 감자탕(소)', price: 23000}, 
        ],
        score: 0
    },
    {
        id: 'kor-03',
        type: 'korean',
        name: '원조함경도순대',
        address: '서울 서초구 마방로2길 49',
        menu: [
            {name: '순대국', price: 8000},
        ],
        score: 0
    },
    {
        id: 'kor-04',
        type: 'korean',
        name: '만두랑',
        address: '서울 서초구 언남16길 3 (우)06781',
        menu: [
            {name: '만두전골', price: 7000},
            {name: '튀김만두', price: 6000},
        ],
        score: 0
    },
    {
        id: 'kor-05',
        type: 'korean',
        name: '장터칼국수',
        address: '서울 서초구 언남11길 34-2 (우)06776',
        menu: [
            {name: '바지락칼국수', price: 6500},
        ],
        score: 0
    },
    {
        id: 'kor-06',
        type: 'korean',
        name: '백세김치찌개',
        address: '서울 서초구 언남11길 34-6 (우)06776',
        menu: [
            {name: '햄소세지 김치찌개', price: 6500},
            {name: '제주흑생 김치찌개', price: 6500},
            {name: '라면사리', price: 1000}
        ],
        score: 0
    },
    {
        id: 'jp-01',
        type: 'japanese',
        name: '한양돈까스',
        address: '서울특별시 서초구 양재동 96',
        menu: [
            {name: '등심돈까스', price: 8500}
        ],
        score: 0
    },
    {
        id: 'jp-02',
        type: 'japanese',
        name: '훈식당우동엔오니기리',
        address: '서울 서초구 언남길 80 (우)06782',
        menu: [
            {name: '오니기리(모든 종류)', price: 2500},
            {name: '어묵김치우동 & 어묵튀김우동', price: 5000},
        ],
        score: 0
    },
    {
        id: 'ch-01',
        type: 'chinese',
        name: '동원',
        address: '서울 서초구 동산로13길 48 (우)06781',
        menu: [
            {name: '삼선볶음짬뽕', price: 9000},
            {name: '굴짬뽕', price: 9000},
            {name: '삼선울면', price: 9000},
            {name: '삼선우동', price: 9000},
            {name: '잡채밥', price: 8000},
            {name: '동원특밥', price: 8000},
            {name: '삼선볶음짬뽕', price: 9000},
        ],
        score: 0
    },
    {
        id: 'ch-02',
        type: 'chinese',
        name: '용무있습니까',
        address: '서울특별시 서초구 양재동 264-10',
        menu: [
            {name: '짬뽕', price: 7000},
            {name: '짬짜면', price: 8000},
        ],
        score: 0
    },
]

export const cafeData = [
    {
        id: 'cafe_01',
        type: 'cafe',
        name: '30 coffee',
        address: '서울특별시 서초구 양재2동 강남대로18길 24-14',
        menu: [
            {name: '아메리카노', price: 2500},
            {name: '돌체라떼', price: 3500},
        ],
        score: 0
    },
    {
        id: 'cafe_02',
        type: 'cafe',
        name: '빽다방',
        address: '서울특별시 서초구 양재2동 마방로2길 94',
        menu: [
            {name: '아메리카노(아이스)', price: 2000},
            {name: '민트초코라떼', price: 3000},
            {name: '완전초코바나나', price: 3300},
            {name: '민트초코 빽스치노', price: 4000},
        ],
        score: 0
    },
]

export const parkData = [
    {
        id: 'park_01',
        type: 'park',
        name: '양재 시민의 숲',
        address: ' 서울특별시 서초구 매헌로 99 (양재동)',
        info: '시간 나면 걷기 좋은 공원'
    },
    {
        id: 'park_02',
        type: 'park',
        name: '양재근린공원',
        address: '서울특별시 서초구 양재동 311',
        info: '시간 없어도 걸을 수 있는 공원'
    },
]