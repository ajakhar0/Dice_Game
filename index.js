var randomNumber1= Math.floor(Math.random()*6)+1;
var image1Source="images/"+"dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1Source);

var randomNumber2= Math.floor(Math.random()*6)+1;
var image2Source="images/"+"dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2Source);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}



