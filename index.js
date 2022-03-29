function clock(){


    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("ampm");


    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";


    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs > 12) {
        hrs = hrs- 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
    am.innerText = am_pm;
}
setInterval(clock,1000);

function settime(){

    var x = document.getElementById('morning').value;
    var y = document.getElementById("afternoon").value;
    var z = document.getElementById("evening").value;
    var a = document.getElementById("night").value;
    var hour = new Date().getHours();

    if(x==hour){

        document.getElementById('imgcontainer').style.backgroundImage="url('./Images/Component.png')"
        document.getElementById('textcontainer').innerText="GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("smallbox").innerText="GOOD MORNING!! WAKE UP !!";
    }

    if(y==hour){
        document.getElementById("imgcontainer").style.backgroundImage="url('./Images/Group5183.png')"
        document.getElementById("textcontainer").innerText="LET'S HAVE SOME LUNCH !!";
        document.getElementById("smallbox").innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
    }

    if(z==hour){
        document.getElementById("imgcontainer").style.backgroundImage="url('./Images/evening_image.png')"
        document.getElementById("textcontainer").innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("smallbox").innerText="GOOD EVENING !!";
    } 
    if(a==hour){
        document.getElementById("imgcontainer").style.backgroundImage="url('./Images/Group5194.png')"
        document.getElementById("textcontainer").innerText="CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("smallbox").innerText="GOOD NIGHT !!";
    }     
    
   
}
