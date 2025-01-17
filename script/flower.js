//배열객체
const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]

//1. 월/꽃 종류/ 꽃말/ 버튼/사용자 입력 총 5개 가져오기
const userMonth = document.querySelector('#user_month'); //입력
const btn = document.querySelector('button'); //버튼
const month = document.querySelector('.month'); //월
const birth = document.querySelector('.birth'); //꽃 종류
const flowerwords = document.querySelector('.flowerwords'); //꽃말
//1-2. 실행 박스 가져오기
const resultBox = document.querySelector('.user_result'); //꽃말
//2. 이벤트 실행  , 버튼 누르면 배열 인덱스에서 객체 가져오기

//입력한 값에 따라 birthday_flower배열 인덱스-1를 가져오기
//1을 입력했다면
// btn.addEventListener('click', ()=>{
//     if(userMonth.value >= 1 && userMonth.value <= 12 ){
//         if(userMonth.value === '1'){
//             month.textContent = birthday_flower[0].month;
//             birth.textContent = birthday_flower[0].flower;
//             flowerwords.textContent = birthday_flower[0].content;
//         }else if(userMonth.value === '2'){
//             for(let i in birthday_flower){
//                 birthday_flower[1]
//             }
//         }
//     } 
// })

//인덱스 값이 입력한 값 -1/ 변수로 설정!
btn.addEventListener('click', () => {
    //보이게 하기
    resultBox.style.display = 'inline-block';
    // 1을 뺴준 값을 인덱스 값으로 설정
    const monthIndex = userMonth.value - 1; 
    // 0에서 11까지만 인덱스 값 ㅇㅈ
    if (monthIndex >= 0 && monthIndex <= 11) { 
        month.textContent = birthday_flower[monthIndex].month;
        birth.textContent = birthday_flower[monthIndex].flower;
        flowerwords.textContent = birthday_flower[monthIndex].content;
    }else if (userMonth.value > 12 || userMonth.value < 0 ){
        resultBox.style.display = 'none';
        alert('1에서 12까지의 숫자만 입력하세요.')
    }else {
        resultBox.style.display = 'none';
        alert('다시 입력하세요.')
    }
});


