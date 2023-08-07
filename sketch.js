var Ball, database;
var position;
var pos;
function setup() {
    
    console.log(database);
    createCanvas(500, 500);

    Ball = createSprite (250,250,10,10);
    Ball.shapeColor = "red"; 

    database = firebase.database();
    // Estou indo no banco de dados bola->pos
    var posbola = database.ref('bola/pos')
    posbola.on("value",readPosition)
}

function draw() {
    background("white");
    if (keyDown(LEFT_ARROW)) {
        writePosition(-1, 0);
    } else if (keyDown(RIGHT_ARROW)) {
        writePosition(1, 0);
    } else if (keyDown(UP_ARROW)) {
        writePosition(0, -1);
    } else if (keyDown(DOWN_ARROW)) {
        writePosition(0, +1);
    }
    drawSprites();
}

function writePosition(x, y) {
    database.ref('bola/pos').set({
        x:pos.x+x,
        y:pos.y+y
    })
    
    
}



function readPosition(data) {
    pos = data.val();
    Ball.x = pos.x;
    Ball.y = pos.y;
    
}

function showError() {
   
   
}