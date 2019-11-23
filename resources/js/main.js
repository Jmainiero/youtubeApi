const drawMp = el => {
  videoId = el[1].split("/")[4];

  item = `<div class = "grid-item" data-video = "${videoId}">`;
  // item += '<p>' + el[1] + '</p>';
  item += '<img src="' + el[1] + '"</img>';
  item += '<div class = "grid-p-item videoTitle">';
  item += "<p>" + el[0] + "</p>";
  item += "</div>";
  item += '<div class = "grid-p-item channelName">';
  item += "<p>" + el[2] + "</p>";
  item += "</div>";
  item += "</div>";
  document.getElementById("mp-container").innerHTML += item;
};

const drawSQ = el => {
  videoId = el[1].split("/")[4];

  item = `<div class = "sub-grid-item" data-video = "${videoId}">`;
  // item += '<p>' + el[1] + '</p>';
  item += '<div class = "sub-img"><img src="' + el[1] + '"</img></div>';
  item += '<div class = "sub-item-title">';
  item += "<p>" + el[0] + "</p>";
  item += "</div>";
  item += '<div class = "sub-item-channel">';
  item += "<p>" + el[2] + "</p>";
  item += "</div>";
  item += '<div class = "sub-item-desc">';
  item += "<p>" + el[4] + "</p>";
  item += "</div>";
  item += "</div>";
  document.getElementById("mp-container").style.gridTemplateColumns =
    "repeat(1,1fr)";
  document.getElementById("mp-container").style.width = "862px";
  document.getElementById("mp-container").innerHTML += item;
};

const interval = setInterval(function() {
  if (document.querySelectorAll(".grid-item").length > 0) {
    const vtn = document.querySelectorAll(".grid-item");
  } else {
    vtn = document.querySelectorAll(".sub-grid-item");
  }

  if (vtn.length > 0) {
    clearInterval(interval);
  }
  vtn.forEach(function(el) {
    el.addEventListener("click", function(event) {
      console.log(this.getAttribute("data-video"));
      document.getElementById("video-container").style.height = "45em";
      document.getElementById("video-container").style.width = "100%";
      document.getElementById(
        "video-container"
      ).innerHTML = `<iframe width="480" height="270" src="//www.youtube.com/embed/${this.getAttribute(
        "data-video"
      )}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    });
  });
  $(vtn).click(function(e) {
    $("html, body").animate(
      {
        scrollTop: $("body").offset().top
      },
      1000
    );
  });
}, 1500);
