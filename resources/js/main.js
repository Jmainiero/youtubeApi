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