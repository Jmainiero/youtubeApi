const draw = el => {
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

const interval = setInterval(function() {
  const vtn = document.querySelectorAll(".grid-item");
  if (vtn.length > 0) {
    clearInterval(interval);
  }
  vtn.forEach(function(el) {
    el.addEventListener("click", function(event) {
      console.log(this.getAttribute("data-video"));
      document.getElementById("video-container").style.height = "100vh";
      document.getElementById("video-container").style.width = "100vw";
      document.getElementById(
        "video-container"
      ).innerHTML = `<iframe width="480" height="270" src="//www.youtube.com/embed/${this.getAttribute(
        "data-video"
      )}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    });
  });
  $(".grid-item").click(function(e) {
    $("html, body").animate(
      {
        scrollTop: $("#video-container").offset().top
      },
      1000
    );
  });
}, 3000);
