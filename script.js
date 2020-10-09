var t = new Date();


// var seconds = t.getSeconds();

// document.getElementById('clock-date').innerHTML= t.getDay();

// zeroBeforeHour(hour);
// zeroBeforeMniutes(minutes)
// zeroBeforeSeconds(seconds);
// todayDate();



// Adds a zero for times less than 10
function zeroBeforeHour(hour)
{
    if(hour < 10)
    {
        var zero= "0";
      
        document.getElementById('clock-hour').innerHTML= '0' + hour ;
    }
    else{
        document.getElementById('clock-hour').innerHTML= hour ;
    }
    // var timer = setTimeout(zeroBeforeHour(hour),1000);
}
// Adds a zero for times less than 10
function zeroBeforeMniutes(minutes)
{
    if(minutes < 10)
    {
        var zero= "0";
      
        document.getElementById('clock-minutes').innerHTML= '0' + minutes ;
    }
    else{
        document.getElementById('clock-minutes').innerHTML= minutes ;
    }
}
function zeroBeforeSeconds(seconds)
{
    if(seconds < 10)
    {
        var zero= "0";
      
        document.getElementById('clock-milli').innerHTML= '0' + seconds ;
    }
    else{
        document.getElementById('clock-milli').innerHTML= seconds ;
    }
    
        
    
}
function startTime()
{
    var d = new Date();

    var hour = d.getHours();
    zeroBeforeHour(hour)

    var minutes = d.getMinutes();
    zeroBeforeMniutes(minutes)

    var seconds = d.getSeconds();
    zeroBeforeSeconds(seconds);
    // document.getElementById('clock-milli').style.transform ="rotateX(180deg)";
    todayDate();
    
    var timer = setTimeout(startTime,100);
    // document.getElementById('clock-milli').style.transform ="rotateX(180deg)";
}
function todayDate()
{
    var nowday = new Date();
    var days = ["Sunday","Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
    var dayVar = days[nowday.getDay()];
    var day = dayVar.substring(0,3);
    document.getElementById('clock-date').innerHTML = day;

    var months = ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug", "Sept", "Oct","Nov","Dec"];
    var month = months[nowday.getMonth()];
    var numDate = nowday.getDate();
    var year = nowday.getFullYear();
    document.getElementById('top-date').innerHTML = numDate+" "+month+" "+year;

}

function pomodoro()
{ 
    window.location= "pomodoro.html";

    // var minleft = 25;
    // var secleft = 60;
    //  var downtime = setInterval(function{
    //      secleft--;
    //      document.getElementById('clock-milli').innerHTML = secleft;
    //      if( secleft <=0)
    //      {
    //          clearInterval(downtime);
    //      }
    //  },1000);
   
   
}

function pomoLoad()
{
    var minleft = 25;
    var secleft = 60;
     var downtime = setInterval(function(){
         secleft--;
         document.getElementById('clock-milli').innerHTML = secleft;
         if( secleft <=0)
         {
             clearInterval(downtime);
         }
     },1000);
}
