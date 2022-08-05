function getAverage (assigenment1,assigenment2,assigenment3){
    const total =assigenment1 + assigenment2+ assigenment3;
    const average = total /3;
    return average;
}
var assigenment1Mark = 60;
var assigenment2Mark = 58;
var assigenment3Mark = 59;

const myAverage = getAverage(assigenment1Mark, assigenment2Mark, assigenment3Mark);
console.log(myAverage);