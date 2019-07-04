var numberOfSquers = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var massage = document.getElementById("massage");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var squares = document.querySelectorAll(".squere");
var modeButtons = document.querySelectorAll(".mode");

init();


function init(){
        setUpModeButtons();
        setUpSqueres();
        resetButton.addEventListener("click",resetGame);
        resetGame();
}

function setUpSqueres(){
        for(var i=0;i<squares.length;i++){
                squares[i].addEventListener("click",function(){
                        if(this.style.backgroundColor===pickedColor){
                                massage.textContent = "Correct !";
                                changeColor(pickedColor);
                                h1.style.backgroundColor = pickedColor;
                                resetButton.textContent = "Play again ?";
                        }
                        else{
                                this.style.backgroundColor = "#232323";
                                massage.textContent = "Try again";
                        }
                });
        };
}

function setUpModeButtons(){
        for(var i=0;i<modeButtons.length;i++){
                modeButtons[i].addEventListener("click",function(){
                          modeButtons[0].classList.remove("selected");
                          modeButtons[1].classList.remove("selected");
                          this.classList.add("selected");
                          this.textContent === "Easy" ? numberOfSquers = 3:numberOfSquers =6;
                          resetGame();
                })  
          };
}

function resetGame(){
        colors = generateRandomColor(numberOfSquers);
        pickedColor = pickColor();
        colorDisplay.textContent =pickedColor;
        resetButton.textContent = "New Colors";

        massage.textContent ="";
        for(var i=0;i<squares.length;i++){
                if(colors[i]){
                        squares[i].style.display="block";
                        squares[i].style.backgroundColor = colors[i];
                }else{
                        squares[i].style.display="none";
                }
        }
        h1.style.backgroundColor = "steelblue";
}

function changeColor(color){
        for(var i=0;i<squares.length;i++){
                squares[i].style.backgroundColor = color; 
        } 
}

function generateRandomColor(num){
        var arr =[];
        for(var i=0;i<num;i++){
                arr.push(randomColor());
        }
        return arr;
}

function randomColor(){
        var r = Math.floor(Math.random() *256);
        var g = Math.floor(Math.random() *256);
        var b = Math.floor(Math.random() *256);
        return "rgb("+r+", "+g+", "+b+")";
}

function pickColor(){
        var randNumber = Math.floor(Math.random() * colors.length) ;
        return colors[randNumber];       
}