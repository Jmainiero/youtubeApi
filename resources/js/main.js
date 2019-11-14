const draw = (el) => {
    item = '<div class = "grid-item">';
    // item += '<p>' + el[1] + '</p>';
    item += '<img src="' + el[1] + '"</img>';
    item += '<div class = "grid-p-item">';
    item += '<p>' + el[0] + '</p>';
    item += '</div>';
    item += '</div>';
    document.getElementById('mp-container').innerHTML += item;
}

const callPages = (pageToken) => {
    $.ajax({
        type: 'POST',
        url: 'main.php',
        dataType: "json",
        data: {
            values: "mostPopular",
            pageToken: pageToken
        },
        success: function (response) {
            console.log(response);
            response.forEach(function (el) {
                if (el.pageToken) {
                    // callPages();
                } else {
                    draw(el);
                }
            });
        }
    });
}