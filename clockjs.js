let minutehand=document.getElementsByClassName('hands')[1];
let hourhand=document.getElementsByClassName('hands')[0];
let secondhand=document.getElementsByClassName('hands')[2];


function  clockrotation( ){
    //time calculataion
let now=new Date();
let seconds=(now.getSeconds()*6)+180;
let minuteratio=now.getSeconds()/60;
let minute=now.getMinutes();
let totalminute=((minuteratio+minute)*6)+180;
let hour=now.getHours();
    if(now.getHours() >= 12){
        hour=hour-12;
    }
let totalhours=((((now.getSeconds()/3600)+(minute/60 )+(hour))*30)+180);

    //secondhand
    // console.log(now.getSeconds())
    secondhand.style.transform=`rotate(${seconds}deg)`;

    // // minute hand
    minutehand.style.transform=`rotate(${totalminute}deg)`;
    // console.log(now.getMinutes());
    // console.log(totalminute);
     
    // // hour hand
    hourhand.style.transform=`rotate(${totalhours}deg)`;
    // console.log(((now.getSeconds()/3600)+(minute/60 )+(now.getHours()))-12);
    // console.log(totalhours);
}
clockrotation();
setInterval(clockrotation,1000);


