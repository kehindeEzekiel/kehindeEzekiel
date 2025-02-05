function updateTime (){
    const utc = document.getElementById('utctime')
    const now = new Date();
    const utcString = now.toUTCString();
    utc.innerText = utcString;
  }

 

  setInterval(updateTime, 1000);

  updateTime();

