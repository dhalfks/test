let target = document.querySelector('#dynamic');

//randomString함수 안으로 이동.
// let stringArr=['Learn to HTML','Learn to CSS','Learn to Javascript',
//                 'Learn to Python','Learn to React'];
// let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
// console.log(selectString);
// let selectStringArr = selectString.split("");
// console.log(selectStringArr);

function randomString(){
    let stringArr=['Learn to HTML','Learn to CSS','Learn to Javascript',
                'Learn to Python','Learn to React'];
let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
// console.log(selectString);
let selectStringArr = selectString.split("");
// console.log(selectStringArr);
return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent ="";
    dynamic(randomString());
}

//한글자씩 텍스트 출력함수
function dynamic(randomArr){
    console.log(randomArr);
 if(randomArr.length > 0){
    target.textContent += randomArr.shift();
    setTimeout(function(){
        dynamic(randomArr);
    },80);
}else{ // 남은 문자열이 없다면
    setTimeout(resetTyping,3000);
}
}

dynamic(randomString());
//커서 깜박임 효과
function blink(){
    target.classList.toggle('active');
}
setInterval(blink,500);


