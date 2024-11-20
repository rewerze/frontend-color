var colorList = ["red", "yellow", "green", "blue", "purple"];
var meaning;
var color;
var delayTime = 100;
Display();


function random() {
    return Math.floor(Math.random() * colorList.length);
  }

function Display() {
    meaning = colorList[random()];
    document.getElementById('meaning').textContent = meaning;

    color = colorList[random()];
    document.getElementById('color').textContent = colorList[random()];
    document.getElementById('color').style = "color:"+color;
}


document.addEventListener('keydown', (e) => {
    switch (e.code) {
        case "ArrowLeft":
            if (color != meaning) {
                document.getElementById('answer').textContent = "✅";
                setTimeout(function() {
                    document.getElementById('answer').textContent = "";
                    Display();
                    }, delayTime);
            }
            else {
                document.getElementById('answer').textContent = "❌";
                setTimeout(function() {
                    document.getElementById('answer').textContent = "";
                    Display();
                }, delayTime);
            }
            break;
            case "ArrowRight":
                if (color == meaning) {
                    document.getElementById('answer').textContent = "✅";
                    setTimeout(function() {
                        document.getElementById('answer').textContent = "";
                        Display();
                        }, delayTime);
                }
                else {
                    document.getElementById('answer').textContent = "❌";
                    setTimeout(function() {
                        document.getElementById('answer').textContent = "";
                        Display();
                    }, delayTime);
                }
                break;
    }
});