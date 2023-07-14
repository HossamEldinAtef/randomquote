var data1=[
    "Be yourself; everyone else is already taken.",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
];

var data2=["Oscar Wilde","Marilyn Monroe","Albert Einstein"];


function test(){
var data=Math.floor(Math.random()*data1.length);
document.getElementById('demo1').innerHTML=data1[data];
document.getElementById('demo2').innerHTML=data2[data];
}