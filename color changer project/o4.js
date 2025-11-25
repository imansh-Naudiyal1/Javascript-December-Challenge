document.getElementById("basicBtn");
document.getElementById("randomBtn");
document.getElementById("hexBtn");


basicBtn.addEventListener("click", function() {
    const colors =["red", "blue", "green", "yellow", "purple", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

randomBtn.addEventListener("click", function() {
    const randomColor = 'rgb(' + 
        Math.floor(Math.random() * 256) + ',' +
        Math.floor(Math.random() * 256) + ',' +
        Math.floor(Math.random() * 256) + ')';
    document.body.style.backgroundColor = randomColor;
});
hexBtn.addEventListener("click", function() {
    const hexChars = '0123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexChars[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = hexColor;
});