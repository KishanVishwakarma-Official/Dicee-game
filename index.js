//Random  Image1 
var randomNumber1 = Math.floor(Math.random() * 6) + 1  ;

var imageSource1 = "dice"+randomNumber1+".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",imageSource1);



// Random Image2
var randomNumber2 = Math.floor(Math.random() * 6) + 1  ;

var imageSource2 = "dice"+randomNumber2+".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",imageSource2);


// check greater random number

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").textContent ="🚩Player 1 Won";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").textContent ="Player 2 Won🚩";
}

else
{
    document.querySelector("h1").textContent ="Draw😳";
}

