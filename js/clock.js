var hrBox =document.querySelector("#hr");
var minBox =document.getElementById("min");
var secBox =document.getElementById("sec");

setInterval(function(){
    var time=new Date();
    var hr =time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
   
    if(hr<12){
    
        if(hr<10){
            hrBox.innerText="0"+hr;
        }else{
            hrBox.innerText=hr;
        }
    }else{
        newHr=hr-12;

    if(newHr<10){
        hrBox.innerText="0"+newHr;
    }else{
        hrBox.innerText=newHr;
    }
    }



    if(min<10){
        minBox.innerText="0"+min;
    }else{
        minBox.innerText=min;
    }

    if(sec<10){
        secBox.innerText="0"+sec;
    }else{
        secBox.innerText=sec;
    }


})

