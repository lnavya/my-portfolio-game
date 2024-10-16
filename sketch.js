let playerX;  
let playerY;
let playerSize = 50;
let objectX;
let objectY;
let objectSize = 25;
let score = 0;
let speed = 3;
let gameOver = false;

function setup() {
  createCanvas(400, 600);
  playerX = width / 2 - playerSize / 2;
  playerY = height - 50;
  resetObject();
}

function draw() {
  background(220);

  if (!gameOver) {
    // Draw player (basket)
    rect(playerX, playerY, playerSize, playerSize / 2);

    // Draw falling object
    ellipse(objectX, objectY, objectSize, objectSize);

    // Move object down
    objectY += speed;

    // Check for catching the object
    if (objectY > playerY && objectX > playerX && objectX < playerX + playerSize) {
      score++;
      document.getElementById('score').innerText = "Score: " + score;
      resetObject();
    }

    // Check if the object hits the bottom (missed)
    if (objectY > height) {
      gameOver = true;
      document.getElementById('game-over').classList.remove('hidden');
    }

    // Player movement
    if (keyIsDown(65)) { // 'A' key
      playerX -= 5;
    }
    if (keyIsDown(68)) { // 'D' key
      playerX += 5;
    }

    // Constrain player to the screen
    playerX = constrain(playerX, 0, width - playerSize);
  }
}

function resetObject() {
  objectX = random(0, width - objectSize);  
  objectY = 0;
}

function keyPressed() {
  if (gameOver && key == 'r') {
    gameOver = false;
    score = 0;
    document.getElementById('score').innerText = "Score: " + score;
    document.getElementById('game-over').classList.add('hidden');
    resetObject();
  }
}
