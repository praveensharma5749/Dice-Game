let players = document.querySelectorAll('input');

let btns = document.querySelectorAll('button');

let score = document.querySelectorAll('span');

let endButton = document.querySelector('#endButton');

let winMessage = document.querySelector('#winMessage');

endButton.disabled = true;
for(let t of btns){
    t.addEventListener("click",rollDice);
}
let btnClickCount = 0; //count of buttons 
function rollDice(eventDetails){
    btnClickCount++; 
    if(btnClickCount==5){
        endButton.disabled = false;
    }
    let btns_id = eventDetails.target.id.slice(-1)-1;
    //disable the button
    eventDetails.target.disabled = true;
    //slice used to get only numeric id here 
    // console.log(btns_id);

    //roll the dice

    let diceArray = [1, 2, 3, 4, 5, 6];
    let randomIndex=  parseInt(Math.random()*diceArray.length)
    let diceValue = diceArray[randomIndex];

    // add the dice value to the score
    score[btns_id].innerText = diceValue;
}

endButton.addEventListener("click",findWinner)

function findWinner(){
    winMessage.disabled = true;
    let highest = 0;
    for(let t of score){
        console.log(t);
        if(+t.innerText > highest){
            highest = +t.innerText;
        }
    }

let winnerIndex = [];
for(let i = 0;i<=score.length-1;i++){
    if(Number(+score[i].innerText)==highest){
        winnerIndex.push(i);
    }
}

let playersName = [];
for(let t of winnerIndex){
    playersName = playersName + players[t].value+",";
}
playersName = playersName.slice(0,-1);
winMessage.innerText = playersName + " Wins";

}