var randomno1= Math.floor(Math.random()*6)+1;
var randomno2= Math.floor(Math.random()*6)+1;
var dice1image="dice_"+randomno1+".png";
var dice2image="dice_"+randomno2+".png";
console.log(dice1image);
console.log(dice2image);
document.querySelector("#dices1").setAttribute("src" , dice1image);
document.querySelector("#dices2").setAttribute("src" , dice2image);
if(randomno1>randomno2)
{
	document.querySelector("h1").innerHTML = '<img id="flag" src="flag2.png">Player 1 wins!';
}
else if(randomno1<randomno2)
{
	document.querySelector("h1").innerHTML = '<img id="flag" src="flag2.png">Player 2 wins!';
}
else
{
	document.querySelector("h1").innerHTML = 'DRAW!';
}