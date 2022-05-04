const gameWindow = document.getElementById("gameWindow");

function SpawnCar() {
    function randomRGB(n = 2){
        if(n < 0){
            return []
        } else {
            const randomColor = randomRGB(n - 1);
            randomColor.push(Math.floor(Math.random()*255) + 1);
            return randomColor;
        }
    }
    let car = `<div id="car" class="prop" style="background-color: rgb(${randomRGB()})"></div>`

    gameWindow.innerHTML += car;
}

SpawnCar();


