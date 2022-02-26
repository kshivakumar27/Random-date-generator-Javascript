var container = document.createElement("div");
container.setAttribute("class", "container bg-secondary");

var row = document.createElement("div");
row.setAttribute("class", "row");

var col = document.createElement("div");
col.setAttribute("class", "col-8 offset-2 text-center");

var p = document.createElement('h1');
p.innerHTML = "Random Generation of an Eight Digit Number.";
p.setAttribute('class','text-warning ')
var button = document.createElement('button');
button.setAttribute('onclick', 'myFunction()');
button.setAttribute('class', 'btn btn-outline-info');
button.innerHTML = "Random Generator";
var p1 = document.createElement('h1');
p1.setAttribute('id', 'demo');
p1.setAttribute('class','text-info')
let digits=[];
function myFunction() {
    var x= document.getElementById('demo');
    let digit= Math.floor((Math.random() * 9) + 1);
    if(digits.length ===8){
        x.innerHTML=digits.join('');
       
    }
    else{
        if(!digits.includes(digit)){
            digits.push(digit);
        }
        myFunction();
    }
   
}


var head = document.createElement("h1");
head.innerHTML = "Date Manipulation";
head.setAttribute('class','text-warning mt-5');
var data=document.createElement('h2');
data.innerHTML="Enter your Date of birth in mm/dd/yyyy format";
data.setAttribute('class','text-light');
var inp=document.createElement("input");
inp.setAttribute("type",'text');
inp.setAttribute('class','form-control');
inp.setAttribute('placeholder','mm/dd/yyyy');

var button2 = document.createElement("button");
button2.setAttribute("class","btn btn-outline-warning");
button2.innerHTML = "Generate!";
button2.setAttribute("onclick", "date()");
var day = document.createElement("h2");
day.setAttribute('class','text-light');
var year = document.createElement("h2");
year.setAttribute('class','text-light');
var month = document.createElement("h2");
month.setAttribute('class','text-light');
var min = document.createElement("h2");
min.setAttribute('class','text-light');
var sec = document.createElement("h2");
sec.setAttribute('class','text-light');
var msec = document.createElement("h2");
msec.setAttribute('class','text-light');

//daycount, year, month, mins, secs, millisecs difference
function date(){
    var date1 = new Date(inp.value);
    var date2 = new Date();
    console.log("Your DOB is : " + date1);
    console.log("Current date is : " + date2);
    console.log("The difference is as follows,")
    //daycount
    var timediff = date2.getTime()-date1.getTime();
    var daycount = Math.floor(timediff/(1000 * 60 * 60 * 24));
    day.innerHTML="DayCount : " + daycount;
    //year diff
    var yeardiff = (date2.getFullYear() - date1.getFullYear());
    year.innerHTML="Yeardiff : " + (yeardiff-1);
    //month diff
    var monthdiff = (yeardiff)*12 + (date2.getMonth() - 1 - date1.getMonth());
    month.innerHTML="Monthdiff : " + monthdiff;
    //minutes diff
    var minsdiff = (daycount * 24 * 60);
    min.innerHTML="minutes diff : " + minsdiff;
    //secnds diff
    var secdiff = (minsdiff * 60);
    sec.innerHTML="seconds diff : " + secdiff;
    //milliseconds diff
    var msecdiff = (timediff);
    msec.innerHTML="milli seconds diff : " + msecdiff;
}




col.append(p,button,p1,head,data,inp,button2,day,year,month,min,sec,msec);

row.append(col);

container.append(row);

document.body.append(container);