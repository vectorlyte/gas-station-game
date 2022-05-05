const gameWindow = document.getElementById("gameWindow");
let root = document.documentElement;
let atStation = false;
let score = 0;
let fueled = false;

//Spawns car
spawnCar();

function spawnCar() {
    
    //<====> Generates a random RGB color <====>
    function randomRGB(n = 2){
        if(n < 0){
            return []
        } else {
            const randomColor = randomRGB(n - 1);
            randomColor.push(Math.floor(Math.random()*255) + 1);
            return randomColor;
        }
    }
    let color = `rgb(${randomRGB()})`;

    // <====> Creates the car Object(div) <====>
    let car = `
        <div id="car" class="prop" 
        onclick="serviceCar()"
            >
            <div class="body" style="background-color: ${color}"></div>
            <div class="roof" style="background-color: ${color}"></div>
            <div class="front-wheels"></div>
            <div class="rear-wheels"></div>
            </div>`

    //applies car to the DOM
    gameWindow.innerHTML += car;

    //<====> Checks car has arrived at station <====>
    const Arrived = document.querySelector('#car');
    Arrived.addEventListener("animationend", () => {
        atStation = true;
    })
}

function serviceCar() {
    if(fueled){
        root.style.setProperty("--fueled-ani", "null");
        root.style.setProperty("--animation-name", "driveAway");
        score += Math.floor(Math.random()*15 + 5);
        updateScore();
        const driveEnd = document.querySelector('#car');
        
        driveEnd.addEventListener("animationend", () => {
        gameWindow.removeChild(document.getElementById("car"));
        root.style.setProperty("--animation-name", "drive");
        setTimeout(function(){
            spawnCar();
        }, Math.floor(Math.random()*10000));
        atStation = false;
        fueled = false;
    })
    }   else if(atStation){
        setTimeout(function fuel(){
            fueled = true;
            console.log("fueled!");
             root.style.setProperty("--fueled-ani", "fueled");
        }, 4000);
}
}

function updateScore() {
    const scoreEl = document.getElementById("score");
    scoreEl.innerText = `$:${score}`;
}

function aim(){
    
}


// const carX = document.getElementById("car").getBoundingClientRect();


