window.addEventListener("load", () => {
  clock();
  function clock() {
    const today = new Date();

    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    const hour = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;
    const second = seconds < 10 ? "0" + seconds : seconds;

    const hourTime = hour > 24 ? hour - 24 : hour;

    const ampm = hour < 24 ? "" : "";

    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDate();

    const monthList = [
      "일월",
      "이월",
      "삼월",
      "사월",
      "오월",
      "유월",
      "칠월",
      "팔월",
      "구월",
      "십월",
      "십일월",
      "십이월"
    ];

    const date = monthList[month] + " " + day + ", " + year;
    const time = hourTime + ":" + minute + ":" + second + ampm;

    const dateTime = date + " - " + time;

    document.getElementById("date-time").innerHTML = dateTime;
    setTimeout(clock, 1000);
  }
});