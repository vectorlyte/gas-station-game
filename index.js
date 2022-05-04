const gameWindow = document.getElementById("gameWindow");
let root = document.documentElement;

function spawnCar() {
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
    let car = `
        <div id="car" class="prop"  style="background-color: ${color}" 
        onclick="fuel()"
            >
            <div class="body" style="background-color: ${color}"></div>
            <div class="front-wheels"></div>
            <div class="rear-wheels"></div>
            </div>`

    gameWindow.innerHTML += car;
}

spawnCar();


// make cars clickable, if clicked, fuel car.


function fuel() {
    root.style.setProperty("--animation-name", "driveAway");
    const driveEnd = document.querySelector('#car');
    driveEnd.addEventListener("animationend", () => {
        gameWindow.removeChild(document.getElementById("car"));
        root.style.setProperty("--animation-name", "drive");
        spawnCar();
    })
}

// const carX = document.getElementById("car").getBoundingClientRect();