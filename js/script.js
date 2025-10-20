var countDownDate = new Date("September 30, 2025 15:37:25").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#time").innerHTML =
    days + "يوم " + hours + "ساعة " +
    minutes + "دقيقه " + seconds + "ثانيه ";

  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#time").innerHTML = "انتهت الفعاليه ";
  }
}, 1000);

