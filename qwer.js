function clock () {
    const d = new Date();
    let dInt = d.getDay();
    let dmInt = d.getDate();
    let mInt = d.getMonth();
    let hInt = d.getHours();
    let minInt = d.getMinutes();
    let sInt = d.getSeconds();
    var dmStr = dmInt.toString(); 
    var hStr = hInt.toString();
    var minStr = minInt.toString();
    var AMPM = "AM";
  
    var day;
    if(dInt == 0) {
      day = "Sunday"
    } else if (dInt == 1) {
      day = "Monday";
    } else if (dInt == 2) {
      day = "Tuesday";
    } else if (dInt == 3) {
      day = "Wednesday";
    } else if (dInt == 4) {
      day = "Thursday";
    } else if (dInt == 5) {
      day = "Friday";
    } else if (dInt == 6) {
      day = "Saturday";
    }
    
    if(dmStr.length == 1){
      dmStr = th(dmStr);
    } else {
      var dmStr0 = dmStr.charAt(0);
      var dmStr1 = dmStr.charAt(1);
      if (!(dmStr == "11" || dmStr == "12" || dmStr == "13")) {
      dmStr1 = th(dmStr1);
      dmStr = dmStr0 + dmStr1;
      } else {
      dmStr = dmStr + "th";  
      }
    }
  
    var month;
    
    if(mInt == 0) {
      month = "January";
    } else if (mInt == 1) {
      month = "February";
    } else if (mInt == 2) {
      month = "March";
    } else if (mInt == 3) {
      month = "April";
    } else if (mInt == 4) {
      month = "May";
    } else if (mInt == 5) {
      month = "June";
    } else if (mInt == 6) {
      month = "July";
    } else if (mInt == 7) {
      month = "August";
    } else if (mInt == 8) {
      month = "September";
    } else if (mInt == 9) {
      month = "October";
    } else if (mInt == 10) {
      month = "November";
    } else if (mInt == 11) {
      month = "December";
    }
  
    var secs; 
    var dayEven = 0;
    var dayOdd = 0;
    
    
    if((dmInt%2 == 1) && (dayOdd == 0 || dayOdd == 2)) {
      secs = 86400 - (hInt*3600+mInt*60+sInt);
      dayEven = 2;
      dayOdd = 1;
    }  
    if((dmInt%2 == 2) && (dayEven == 0 || dayEven == 2)) {
      secs = 86400 - (hInt*3600+mInt*60+sInt);
      dayOdd = 2;
      dayEven = 1;
      console.log(dayEven);
    }
    
    if(minStr.length == 1) {
      minStr = "0" + minStr;
    }
    
    if(hStr == "0")
      hStr == "12"
    if(hInt > 11) {
      hInt = hInt - 12;
      hStr = hInt.toString();
      AMPM = "PM";
    }
    
    const clockFace =     document.getElementById("clockFace");
    clockFace.className = day;
  
    clockFace.innerHTML = hStr + ":" + minStr + AMPM;
    
    
  
    
    document.getElementById("clockFace").style.animationDuration = secs;
    document.getElementById("dayInfo").style.animationDuration = secs;
    document.getElementById("dayInfo").innerHTML = day + ", "+ month + " " + dmStr;
    dayInfo.className = day;
      let t = setTimeout(function(){ clock() }, 1000);
  }
  clock();
  
  function th (dmStr)  {
    if(dmStr=="1") {
        dmStr="1st";
      } else if (dmStr=="2") {
        dmStr="2nd";
      } else if (dmStr=="3") {
        dmStr="3rd";
      } else {
        dmStr = dmStr + "th";
      }
    return dmStr;
  }