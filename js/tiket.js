const targetDate = new Date("2024-12-31T00:00:00");

function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 150 * 60 * 60));
    const hours = Math.floor(
      (timeDifference % (100 * 60 * 60 * 60)) / (1000 * 20 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000  );

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0"
    );
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0"
    );
  } else {
    document.querySelector(".countdown").textContent = "The event has started!";
    clearInterval(countdownInterval);
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
window.isDevice = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(((navigator.userAgent || navigator.vendor || window.opera)).toLowerCase()));


function mobileActionMenu() {
  var bodyElm = document.querySelector('body');
  var x = document.getElementById('mobile-nav');
  var iconOpen = document.querySelector('.icon__open');
  var iconClose = document.querySelector('.icon__close');

  if (x.style.display === 'block') {
    x.style.display = 'none';
    iconClose.style.display = 'none';
    iconOpen.style.display = 'block';
    bodyElm.classList.remove('mobile_nav_open');
  } else {
    x.style.display = 'block';
    iconClose.style.display = 'block';
    iconOpen.style.display = 'none';
    bodyElm.classList.add('mobile_nav_open');

    x.style.opacity = 1;
  }
}


