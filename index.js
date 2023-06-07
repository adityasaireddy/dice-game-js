let randomnumber1 = Math.floor(Math.random()*6)+1;
let randomimag1 = "images/dice"+randomnumber1+".png";
let image1 = document.querySelectorAll("img")[0].setAttribute("src",randomimag1);

let randomnumber2 = Math.floor(Math.random()*6)+1;
let randomimag2 = "images/dice"+randomnumber2+".png";
let image2 = document.querySelectorAll("img")[1].setAttribute("src",randomimag2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = "player1 wins 😍";
}else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML = "player2 wins 😍";
}else{
    document.querySelector("h1").innerHTML = "it's a draw!";
}