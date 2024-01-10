
let timer = 60 ;
let strikeval = 0;
let rn = 0 ; 
let score = 0;

function resetGame(){
    window.location.reload()
}

function startGame() {
    
    
    function randomNumberGenerator() {
    
    let divadd = "";
    for (let a = 1; a <=119; a++) {
         rn =  Math.round(Math.random()*10)
        divadd += `<div class="bubble">${rn}</div>`;
    
        
    }
    
    document.querySelector("#pbot").innerHTML = divadd;
    
}


function timerRem() {
let tt = setInterval(() => {
    if(timer>0){
    timer--;        
    document.querySelector('#timerval').textContent =timer
}
else{
    clearInterval(tt)
    document.querySelector('#pbot').innerHTML = `<h1>Game Over</h1>`
}
}, 1000)
}

function strike(){
    rn = Math.round(Math.random()*10)
    document.querySelector('#strikeval').textContent = `${rn}`
}

function scoreIncrease(params) {
    score += 10
    document.querySelector("#scoreval").innerText = score;
}

    document.querySelector('#pbot').addEventListener('click', function(e){
        let scoreid = Number(e.target.innerText)
        
        if(scoreid === rn){
            
            scoreIncrease()
            randomNumberGenerator()
            strike()
        }
    })


randomNumberGenerator()
timerRem();
strike()
}

