function showTime() {
  setInterval(showTime, 1000);

  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = "AM";
  //console.log(hour, min, sec);

  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "pm";
  } else if (hour == 0) {
    hr = 12;
    am_pm = "am";
  }

  //   hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  document.getElementById("hours").innerHTML = hour;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
  document.getElementById("am").innerHTML = am_pm;
}

showTime();
function time() {
  debugger;
  let a = document.getElementById("hours").innerHTML;
  let b = document.getElementById("minutes").innerHTML;
  let c = document.getElementById("seconds").innerHTML;
  let d = document.getElementById("am").innerHTML.toLowerCase();
  let wakeup = document.getElementById("wakeup").value;
  let lunch = document.getElementById("lunch").value;
  let dinner = document.getElementById("dinner").value;
  let Set_time = a + d;
  let img = document.getElementById("img");

  console.log(a, b, c, d, wakeup, lunch, dinner, Set_time, img);
  debugger;
  if (Set_time === wakeup) {
    img.src = "./cat.jpeg";
  } else if (Set_time === lunch) {
    img.src = "./lunch.jpeg";
  } else if (Set_time === dinner) {
    img.src = "./mom-cat-dinner.jpeg";
  } else {
    img.src = "./codecat.jpeg";
    let code = (document.getElementById("code").innerHTML = "LETS CODE!!!");
  }
}
