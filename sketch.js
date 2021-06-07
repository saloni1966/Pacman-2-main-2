var pacman, pacmanImg;
var g1, g1Img;
var g2, g2Img;
var g3, g3Img;
var g4, g4Img;
var dotImg;
var SpDot;
var pacmanU, pacmanL, pacmanD;
var edges;
var score1 = 0;
var timer = 9000;

function preload() {

    pacmanImg = loadAnimation("pacman1.png", "pacman2.png");
    pacmanU = loadAnimation("pacmanU.png", "pacman2.png");
    pacmanD = loadAnimation("pacmanD.png", "pacman2.png");
    pacmanL = loadAnimation("pacmanL.png", "pacman2.png");
    blueG = loadAnimation("blue.png")

    SpDot = loadAnimation("power1.png", "power2.png", "power3.png");

    g1Img = loadImage("G1.png");
    g2Img = loadImage("G2.png");
    g3Img = loadImage("G3.png");
    g4Img = loadImage("G4.png");

    dotImg = loadImage("Coins.png");

}
function setup() {
    createCanvas(1600, 800);
    b = createSprite(365, 400, 50, 50)
    b.shapeColor = "black";

  
    pacman = createSprite(140, 760, 40, 40);
    pacman.addAnimation("pacman", pacmanImg);
    pacman.addAnimation("pacmanU", pacmanU);
    pacman.addAnimation("pacmanL", pacmanL);
    pacman.addAnimation("pacmanD", pacmanD);
    pacman.scale = 0.6

   





    g1 = createSprite(820, 400, 40, 40);
    g1.addImage(g1Img);
    g1.scale = 0.2;

    g2 = createSprite(740, 400, 40, 40);
    g2.addImage(g2Img);
    g2.scale = 0.2;

    g3 = createSprite(650, 400, 40, 40);
    g3.addImage(g3Img);
    g3.scale = 0.2;

    g4 = createSprite(890, 400, 40, 40);
    g4.addImage(g4Img);
    g4.scale = 0.2;



    //LEFT SIDE DOTS
    d1 = createSprite(140, 140, 20, 20);
    d1.addImage(dotImg);

    d2 = createSprite(140, 200, 20, 20);
    d2.addImage(dotImg);

    d3 = createSprite(140, 260, 20, 20);
    d3.addImage(dotImg);

    d4 = createSprite(140, 320, 20, 20);
    d4.addImage(dotImg);

    d5 = createSprite(140, 380, 20, 20);
    d5.addImage(dotImg);

    d6 = createSprite(140, 440, 20, 20);
    d6.addImage(dotImg);

    d7 = createSprite(140, 500, 20, 20);
    d7.addImage(dotImg);

    d8 = createSprite(140, 560, 20, 20);
    d8.addImage(dotImg);

    d9 = createSprite(140, 620, 20, 20);
    d9.addImage(dotImg);

    d10 = createSprite(140, 680, 20, 20);
    d10.addImage(dotImg);


    //RIGHT SIDE DOTS
    d11 = createSprite(1460, 140, 20, 20);
    d11.addImage(dotImg);

    d12 = createSprite(1460, 200, 20, 20);
    d12.addImage(dotImg);

    d13 = createSprite(1460, 260, 20, 20);
    d13.addImage(dotImg);

    d14 = createSprite(1460, 320, 20, 20);
    d14.addImage(dotImg);

    d15 = createSprite(1460, 380, 20, 20);
    d15.addImage(dotImg);

    d16 = createSprite(1460, 440, 20, 20);
    d16.addImage(dotImg);

    d17 = createSprite(1460, 500, 20, 20);
    d17.addImage(dotImg);

    d18 = createSprite(1460, 560, 20, 20);
    d18.addImage(dotImg);

    d19 = createSprite(1460, 620, 20, 20);
    d19.addImage(dotImg);

    d20 = createSprite(1460, 680, 20, 20);
    d20.addImage(dotImg);


    //TOP DOTS
    d21 = createSprite(280, 40, 20, 20);
    d21.addImage(dotImg);

    d22 = createSprite(340, 40, 20, 20);
    d22.addImage(dotImg);

    d23 = createSprite(400, 40, 20, 20);
    d23.addImage(dotImg);

    d24 = createSprite(460, 40, 20, 20);
    d24.addImage(dotImg);

    d25 = createSprite(520, 40, 20, 20);
    d25.addImage(dotImg);

    d26 = createSprite(580, 40, 20, 20);
    d26.addImage(dotImg);

    d27 = createSprite(640, 40, 20, 20);
    d27.addImage(dotImg);

    d28 = createSprite(720, 40, 20, 20);
    d28.addImage(dotImg);

    d29 = createSprite(780, 40, 20, 20);
    d29.addImage(dotImg);

    d30 = createSprite(840, 40, 20, 20);
    d30.addImage(dotImg);

    d31 = createSprite(900, 40, 20, 20);
    d31.addImage(dotImg);

    d32 = createSprite(960, 40, 20, 20);
    d32.addImage(dotImg);

    d33 = createSprite(1020, 40, 20, 20);
    d33.addImage(dotImg);

    d34 = createSprite(1080, 40, 20, 20);
    d34.addImage(dotImg);

    d35 = createSprite(1140, 40, 20, 20);
    d35.addImage(dotImg);

    d36 = createSprite(1200, 40, 20, 20);
    d36.addImage(dotImg);

    d37 = createSprite(1260, 40, 20, 20);
    d37.addImage(dotImg);

    d38 = createSprite(1320, 40, 20, 20);
    d38.addImage(dotImg);


    //BOTTOM DOTS
    d39 = createSprite(280, 760, 20, 20);
    d39.addImage(dotImg);

    d40 = createSprite(340, 760, 20, 20);
    d40.addImage(dotImg);

    d41 = createSprite(400, 760, 20, 20);
    d41.addImage(dotImg);

    d42 = createSprite(460, 760, 20, 20);
    d42.addImage(dotImg);

    d43 = createSprite(520, 760, 20, 20);
    d43.addImage(dotImg);

    d44 = createSprite(580, 760, 20, 20);
    d44.addImage(dotImg);

    d45 = createSprite(640, 760, 20, 20);
    d45.addImage(dotImg);

    d46 = createSprite(720, 760, 20, 20);
    d46.addImage(dotImg);

    d47 = createSprite(780, 760, 20, 20);
    d47.addImage(dotImg);

    d48 = createSprite(840, 760, 20, 20);
    d48.addImage(dotImg);

    d49 = createSprite(900, 760, 20, 20);
    d49.addImage(dotImg);

    d50 = createSprite(960, 760, 20, 20);
    d50.addImage(dotImg);

    d51 = createSprite(1020, 760, 20, 20);
    d51.addImage(dotImg);

    d52 = createSprite(1080, 760, 20, 20);
    d52.addImage(dotImg);

    d53 = createSprite(1140, 760, 20, 20);
    d53.addImage(dotImg);

    d54 = createSprite(1200, 760, 20, 20);
    d54.addImage(dotImg);

    d55 = createSprite(1260, 760, 20, 20);
    d55.addImage(dotImg);

    d56 = createSprite(1320, 760, 20, 20);
    d56.addImage(dotImg);


    //LEFT SIDE :2
    d57 = createSprite(290, 140, 20, 20);
    d57.addImage(dotImg);

    d58 = createSprite(290, 200, 20, 20);
    d58.addImage(dotImg);

    d59 = createSprite(290, 260, 20, 20);
    d59.addImage(dotImg);

    d60 = createSprite(290, 320, 20, 20);
    d60.addImage(dotImg);

    d61 = createSprite(290, 380, 20, 20);
    d61.addImage(dotImg);

    d62 = createSprite(290, 440, 20, 20);
    d62.addImage(dotImg);

    d63 = createSprite(290, 500, 20, 20);
    d63.addImage(dotImg);

    d64 = createSprite(290, 560, 20, 20);
    d64.addImage(dotImg);

    d65 = createSprite(290, 620, 20, 20);
    d65.addImage(dotImg);

    d66 = createSprite(290, 680, 20, 20);
    d66.addImage(dotImg);


    //RIGHT SIDE DOTS:2
    d67 = createSprite(1310, 140, 20, 20);
    d67.addImage(dotImg);

    d68 = createSprite(1310, 200, 20, 20);
    d68.addImage(dotImg);

    d69 = createSprite(1310, 260, 20, 20);
    d69.addImage(dotImg);

    d70 = createSprite(1310, 320, 20, 20);
    d70.addImage(dotImg);

    d71 = createSprite(1310, 380, 20, 20);
    d71.addImage(dotImg);

    d72 = createSprite(1310, 440, 20, 20);
    d72.addImage(dotImg);

    d73 = createSprite(1310, 500, 20, 20);
    d73.addImage(dotImg);

    d74 = createSprite(1310, 560, 20, 20);
    d74.addImage(dotImg);

    d75 = createSprite(1310, 620, 20, 20);
    d75.addImage(dotImg);

    d76 = createSprite(1310, 680, 20, 20);
    d76.addImage(dotImg);


    //LEFT SIDE DOTS:3
    d77 = createSprite(440, 200, 20, 20);
    d77.addImage(dotImg);

    d78 = createSprite(440, 260, 20, 20);
    d78.addImage(dotImg);

    d79 = createSprite(440, 320, 20, 20);
    d79.addImage(dotImg);

    d80 = createSprite(440, 380, 20, 20);
    d80.addImage(dotImg);

    d81 = createSprite(440, 440, 20, 20);
    d81.addImage(dotImg);

    d82 = createSprite(440, 500, 20, 20);
    d82.addImage(dotImg);

    d83 = createSprite(440, 560, 20, 20);
    d83.addImage(dotImg);

    d84 = createSprite(440, 620, 20, 20);
    d84.addImage(dotImg);

    //RIGHT SIDE DOTS:3
    d85 = createSprite(1160, 200, 20, 20);
    d85.addImage(dotImg);

    d86 = createSprite(1160, 260, 20, 20);
    d86.addImage(dotImg);

    d87 = createSprite(1160, 320, 20, 20);
    d87.addImage(dotImg);

    d88 = createSprite(1160, 380, 20, 20);
    d88.addImage(dotImg);

    d89 = createSprite(1160, 440, 20, 20);
    d89.addImage(dotImg);

    d90 = createSprite(1160, 500, 20, 20);
    d90.addImage(dotImg);

    d91 = createSprite(1160, 560, 20, 20);
    d91.addImage(dotImg);

    d92 = createSprite(1160, 620, 20, 20);
    d92.addImage(dotImg);

    //TOP SIDE DOTS:2
    d93 = createSprite(520, 120, 20, 20);
    d93.addImage(dotImg);

    d94 = createSprite(580, 120, 20, 20);
    d94.addImage(dotImg);

    d95 = createSprite(640, 120, 20, 20);
    d95.addImage(dotImg);

    d96 = createSprite(720, 120, 20, 20);
    d96.addImage(dotImg);

    d97 = createSprite(780, 120, 20, 20);
    d97.addImage(dotImg);

    d98 = createSprite(840, 120, 20, 20);
    d98.addImage(dotImg);

    d99 = createSprite(900, 120, 20, 20);
    d99.addImage(dotImg);

    d100 = createSprite(960, 120, 20, 20);
    d100.addImage(dotImg);

    d101 = createSprite(1020, 120, 20, 20);
    d101.addImage(dotImg);


    //BOTTOM DOTS :3
    d102 = createSprite(520, 680, 20, 20);
    d102.addImage(dotImg);

    d103 = createSprite(580, 680, 20, 20);
    d103.addImage(dotImg);

    d104 = createSprite(640, 680, 20, 20);
    d104.addImage(dotImg);

    d105 = createSprite(720, 680, 20, 20);
    d105.addImage(dotImg);

    d106 = createSprite(780, 680, 20, 20);
    d106.addImage(dotImg);

    d107 = createSprite(840, 680, 20, 20);
    d107.addImage(dotImg);

    d108 = createSprite(900, 680, 20, 20);
    d108.addImage(dotImg);

    d109 = createSprite(960, 680, 20, 20);
    d109.addImage(dotImg);

    d110 = createSprite(1020, 680, 20, 20);
    d110.addImage(dotImg);


    //SPECIAL DOTS

    s1 = createSprite(130, 40, 30, 30);
    s1.addAnimation("SpDot", SpDot)
    s1.scale = 0.6;

    s2 = createSprite(1470, 40, 30, 30);
    s2.addAnimation("SpDot", SpDot)
    s2.scale = 0.6;

    s3 = createSprite(1460, 760, 30, 30);
    s3.addAnimation("SpDot", SpDot)
    s3.scale = 0.6;

    //extra dots
    d111 = createSprite(220, 140, 20, 20);
    d111.addImage(dotImg);

    d112 = createSprite(220, 200, 20, 20);
    d112.addImage(dotImg);

    d113 = createSprite(220, 260, 20, 20);
    d113.addImage(dotImg);

    d114 = createSprite(220, 320, 20, 20);
    d114.addImage(dotImg);

    d115 = createSprite(220, 380, 20, 20);
    d115.addImage(dotImg);

    d116 = createSprite(220, 440, 20, 20);
    d116.addImage(dotImg);

    d117 = createSprite(220, 500, 20, 20);
    d117.addImage(dotImg);

    d118 = createSprite(220, 560, 20, 20);
    d118.addImage(dotImg);

    d119 = createSprite(220, 620, 20, 20);
    d119.addImage(dotImg);

    d120 = createSprite(220, 680, 20, 20);
    d120.addImage(dotImg);

    d121 = createSprite(360, 140, 20, 20);
    d121.addImage(dotImg);

    d122 = createSprite(360, 200, 20, 20);
    d122.addImage(dotImg);

    d123 = createSprite(360, 260, 20, 20);
    d123.addImage(dotImg);

    d124 = createSprite(360, 320, 20, 20);
    d124.addImage(dotImg);

    d125 = createSprite(360, 380, 20, 20);
    d125.addImage(dotImg);

    d126 = createSprite(360, 440, 20, 20);
    d126.addImage(dotImg);

    d127 = createSprite(360, 500, 20, 20);
    d127.addImage(dotImg);

    d128 = createSprite(360, 560, 20, 20);
    d128.addImage(dotImg);

    d129 = createSprite(360, 620, 20, 20);
    d129.addImage(dotImg);

    d130 = createSprite(360, 680, 20, 20);
    d130.addImage(dotImg);



    d131 = createSprite(1380, 140, 20, 20);
    d131.addImage(dotImg);

    d132 = createSprite(1380, 200, 20, 20);
    d132.addImage(dotImg);

    d133 = createSprite(1380, 260, 20, 20);
    d133.addImage(dotImg);

    d134 = createSprite(1380, 320, 20, 20);
    d134.addImage(dotImg);

    d135 = createSprite(1380, 380, 20, 20);
    d135.addImage(dotImg);

    d136 = createSprite(1380, 440, 20, 20);
    d136.addImage(dotImg);

    d137 = createSprite(1380, 500, 20, 20);
    d137.addImage(dotImg);

    d138 = createSprite(1380, 560, 20, 20);
    d138.addImage(dotImg);

    d139 = createSprite(1380, 620, 20, 20);
    d139.addImage(dotImg);

    d140 = createSprite(1380, 680, 20, 20);
    d140.addImage(dotImg);

    d141 = createSprite(1240, 140, 20, 20);
    d141.addImage(dotImg);

    d142 = createSprite(1240, 200, 20, 20);
    d142.addImage(dotImg);

    d143 = createSprite(1240, 260, 20, 20);
    d143.addImage(dotImg);

    d144 = createSprite(1240, 320, 20, 20);
    d144.addImage(dotImg);

    d145 = createSprite(1240, 380, 20, 20);
    d145.addImage(dotImg);

    d146 = createSprite(1240, 440, 20, 20);
    d146.addImage(dotImg);

    d147 = createSprite(1240, 500, 20, 20);
    d147.addImage(dotImg);

    d148 = createSprite(1240, 560, 20, 20);
    d148.addImage(dotImg);

    d149 = createSprite(1240, 620, 20, 20);
    d149.addImage(dotImg);

    d150 = createSprite(1240, 680, 20, 20);
    d150.addImage(dotImg);



    w1 = createSprite(100, 400, 10, 800);

    w2 = createSprite(1500, 400, 10, 800);

    w3 = createSprite(800, 795, 1400, 10);

    w4 = createSprite(800, 5, 1400, 10);

    //top second layer
    w5 = createSprite(750, 80, 700, 10);

    //bottom second layer 
    w6 = createSprite(800, 720, 800, 10);

    //left side second layer
    w7 = createSprite(400, 400, 10, 650);


    //right side second layer
    w8 = createSprite(1200, 400, 10, 650);
    w8.debug = true;

    //top layer third layer
    w9 = createSprite(800, 160, 630, 10);

    //left side third layer
    w10 = createSprite(480, 400, 10, 490);

    //right side third layer 
    w11 = createSprite(1120, 400, 10, 490);

    //bottom  third layer
    w12 = createSprite(760, 640, 550, 10);

    w13 = createSprite(180, 400, 10, 650);

    w14 = createSprite(1420, 400, 10, 650);

    w15 = createSprite(260, 400, 10, 650);

    w16 = createSprite(1340, 400, 10, 650);

    w17 = createSprite(330, 400, 10, 650);

    w18 = createSprite(1270, 400, 10, 650);

    blue1 = createSprite(20000, 20000, 50, 50);
    blue1.scale - 0.15;
    blue2 = createSprite(-20000, -20000, 50, 50);
    blue2.scale - 0.15;
    blue3 = createSprite(20000, 20000, 50, 50);
    blue3.scale - 0.15;
    blue4 = createSprite(20000, 20000, 50, 50);
    blue4.scale - 0.15;
    blue1.debug = true;
    blue2.debug = true;
    blue3.debug = true;
    blue4.debug = true;

    blue1.depth = w8.depth
    blue1.setCollider("circle", 0, 0, 100);


}

function draw() {
    background("black");
    fill("white")
    textSize(20)
    text("SCORE :", 1580, 100)
    text(score1, 1615, 130);
    pacmanControl();
    
    ghostTime1()
    drawSprites();
    text(mouseX + ',' + mouseY, mouseX, mouseY)
    //console.log(score1);
    coinScore();

}

function pacmanControl() {
    if (keyDown(RIGHT_ARROW)) {
        pacman.x = pacman.x + 4;
        pacman.changeAnimation("pacman", pacmanImg);
    }
    if (keyDown(LEFT_ARROW)) {
        pacman.x = pacman.x - 4;
        pacman.changeAnimation("pacmanL", pacmanL);
    }
    if (keyDown(UP_ARROW)) {
        pacman.y = pacman.y - 4;
        pacman.changeAnimation("pacmanU", pacmanU);
    }
    if (keyDown(DOWN_ARROW)) {
        pacman.y = pacman.y + 4;
        pacman.changeAnimation("pacmanD", pacmanD);
    }
    edges = createEdgeSprites();
    g1.addSpeed(0.5, 20)
    g2.addSpeed(0.5, 30)
    g3.addSpeed(0.5, 45)
    g4.addSpeed(0.5, 50)


    g1.bounceOff(w1)
    g1.bounceOff(w2)
    g1.bounceOff(w3)
    g1.bounceOff(w4)
    g1.bounceOff(w5)
    g1.bounceOff(w6)
    g1.bounceOff(w7)
    g1.bounceOff(w8)
    g1.bounceOff(w9)
    g1.bounceOff(w10)
    g1.bounceOff(w11)
    g1.bounceOff(w12)
    g1.bounceOff(w13)
    g1.bounceOff(w14)
    g1.bounceOff(edges)

    g2.bounceOff(w1)
    g2.bounceOff(w2)
    g2.bounceOff(w3)
    g2.bounceOff(w4)
    g2.bounceOff(w5)
    g2.bounceOff(w6)
    g2.bounceOff(w7)
    g2.bounceOff(w8)
    g2.bounceOff(w9)
    g2.bounceOff(w10)
    g2.bounceOff(w11)
    g2.bounceOff(w12)
    g2.bounceOff(w13)
    g2.bounceOff(w14)
    g2.bounceOff(edges)

    g3.bounceOff(w1)
    g3.bounceOff(w2)
    g3.bounceOff(w3)
    g3.bounceOff(w4)
    g3.bounceOff(w5)
    g3.bounceOff(w6)
    g3.bounceOff(w7)
    g3.bounceOff(w8)
    g3.bounceOff(w9)
    g3.bounceOff(w10)
    g3.bounceOff(w11)
    g3.bounceOff(w12)
    g3.bounceOff(w13)
    g3.bounceOff(w14)
    g3.bounceOff(edges)

    g4.bounceOff(w1)
    g4.bounceOff(w2)
    g4.bounceOff(w3)
    g4.bounceOff(w4)
    g4.bounceOff(w5)
    g4.bounceOff(w6)
    g4.bounceOff(w7)
    g4.bounceOff(w8)
    g4.bounceOff(w9)
    g4.bounceOff(w10)
    g4.bounceOff(w11)
    g4.bounceOff(w12)
    g4.bounceOff(w13)
    g4.bounceOff(w14)
    g4.bounceOff(edges)

    pacman.bounceOff(w1)
    pacman.bounceOff(w2)
    pacman.bounceOff(w3)
    pacman.bounceOff(w4)
    pacman.bounceOff(w5)
    pacman.bounceOff(w6)
    pacman.bounceOff(w7)
    pacman.bounceOff(w8)
    pacman.bounceOff(w9)
    pacman.bounceOff(w10)
    pacman.bounceOff(w11)
    pacman.bounceOff(w12)
    pacman.bounceOff(w13)
    pacman.bounceOff(w14)
    pacman.bounceOff(edges)

}
function ghostTime1() {
    if (pacman.isTouching(s1)) {
      timer = 400;
      blue1.addAnimation("g1", blueG);
      blue2.addAnimation("g2", blueG);
      blue3.addAnimation("g3", blueG);
      blue4.addAnimation("g4", blueG);
      blue1.visible = true;
      blue2.visible = true;
      blue3.visible = true;
        blue4.visible = true;
        blue1.scale = 0.12;
        blue2.scale = 0.12;
        blue3.scale = 0.12;
        blue4.scale = 0.12;
        
      g1.x = -100;
      g1.y = 100;
      g2.x = -100;
      g2.y = 100;
      g3.x = -100;
      g3.y = 100;
      g4.x = -100;
      g4.y = 100;
      g1.velocityX = 0;
      g1.velocityY = 0;
      g2.velocityX = 0;
      g2.velocityY = 0;
      g3.velocityX = 0;
      g3.velocityY = 0;
      g4.velocityX = 0;
      g4.velocityY = 0;
        blue1.velocityY = 5;
        blue1.velocityX= 0;

      blue2.velocityY = 5;
      blue3.velocityY = 5;
      blue4.velocityY = 5;
      blue1.x = 438;
      blue1.y = 121;
      blue2.x = 135;
      blue2.y = 43;
      blue3.x = 77;
      blue3.y = 73;
      blue4.x = 320;
      blue4.y = 193;
      s1.visible = false;
     
      score1 = score1 + 10;
      s1.y = 400;
      s1.x = 400;
    }
    if (blue1.x > 200) {
      timer = timer - 1;
    }
    if (timer == 0) {
      g1.x = 49;
      g1.y = 50;
      g1.velocityY = 5;
        g2.x = 135;
    g2.y = 43;
  g2.velocityY = 5;
   g3.x = 77;
      g3.y = 73;
   g3.velocityY = 5;
    g4.x = 320;
      g4.y = 193;
      g4.velocityY = 5;
      
      blue1.x = 400;
      blue1.y = 400;
      blue2.x = 400;
      blue2.y = 400;
      blue3.x = 400;
      blue3.y = 400;
      blue4.x = 400;
      blue4.y = 400;
      
      blue1.visible = false;
      blue2.visible = false;
      blue3.visible = false;
      blue4.visible = false;
      
    }
    if (blue1.y >= 673) {
      blue1.velocityY = 0;
      blue1.velocityX = 5
    }
    if (blue1.x >= 1158) {
        blue1.velocityY = -5;
        blue1.velocityX = 0;
    }
   /* if (blue1.x >= 350) {
      blue1.velocityY = -5;
      blue1.velocityX = 0;
    }
    if ((blue1.y) <= 40) {
      blue1.velocityY = 0;
      blue1.velocityX = -5;
    }*/
   
    
  }

  

function coinScore() {
    if (pacman.isTouching(d1)) {
        d1.visible = false;
        score1 = score1 + 10
        d1.x = -400
        d1.y = -400

    }
    if (pacman.isTouching(d2)) {
        d2.visible = false;
        score1 = score1 + 10
        d2.x = -400
        d2.y = -400

    }
    if (pacman.isTouching(d3)) {
        d3.visible = false;
        score1 = score1 + 10
        d3.x = -400
        d3.y = -400

    }
    if (pacman.isTouching(d4)) {
        d4.visible = false;
        score1 = score1 + 10
        d4.x = -400
        d4.y = -400

    }
    if (pacman.isTouching(d5)) {
        d5.visible = false;
        score1 = score1 + 10
        d5.x = -400
        d5.y = -400

    }
    if (pacman.isTouching(d6)) {
        d6.visible = false;
        score1 = score1 + 10
        d6.x = -400
        d6.y = -400

    }
    if (pacman.isTouching(d7)) {
        d7.visible = false;
        score1 = score1 + 10
        d7.x = -400
        d7.y = -400

    }
    if (pacman.isTouching(d8)) {
        d8.visible = false;
        score1 = score1 + 10
        d8.x = -400
        d8.y = -400
    }

    if (pacman.isTouching(d9)) {
        d9.visible = false;
        score1 = score1 + 10
        d9.x = -400
        d9.y = -400
    }
    if (pacman.isTouching(d10)) {
        d10.visible = false;
        score1 = score1 + 10
        d10.x = -400
        d10.y = -400
    }
    if (pacman.isTouching(d11)) {
        d11.visible = false;
        score1 = score1 + 10
        d11.x = -400
        d11.y = -400
    }
    if (pacman.isTouching(d12)) {
        d12.visible = false;
        score1 = score1 + 10
        d12.x = -400
        d12.y = -400

    }
    if (pacman.isTouching(d13)) {
        d13.visible = false;
        score1 = score1 + 10
        d1.x = -400
        d1.y = -400
    }
    if (pacman.isTouching(d14)) {
        d14.visible = false;
        score1 = score1 + 10
        d14.x = -400
        d14.y = -400
    }

    if (pacman.isTouching(d15)) {
        d15.visible = false;
        score1 = score1 + 10
        d15.x = -400
        d15.y = -400
    }
    if (pacman.isTouching(d16)) {
        d16.visible = false;
        score1 = score1 + 10
        d16.x = -400
        d16.y = -400
    }
    if (pacman.isTouching(d17)) {
        d17.visible = false;
        score1 = score1 + 10
        d17.x = -400
        d17.y = -400
    }
    if (pacman.isTouching(d18)) {
        d18.visible = false;
        score1 = score1 + 10
        d18.x = -400
        d18.y = -400
    }

    if (pacman.isTouching(d19)) {
        d19.visible = false;
        score1 = score1 + 10
        d19.x = -400
        d19.y = -400
    }
    if (pacman.isTouching(d20)) {
        d20.visible = false;
        score1 = score1 + 10
        d20.x = -400
        d20.y = -400
    }
    if (pacman.isTouching(d21)) {
        d21.visible = false;
        score1 = score1 + 10
        d21.x = -400
        d21.y = -400
    }
    if (pacman.isTouching(d22)) {
        d22.visible = false;
        score1 = score1 + 10
        d22.x = -400
        d22.y = -400
    }
    if (pacman.isTouching(d23)) {
        d23.visible = false;
        score1 = score1 + 10
        d23.x = -400
        d23.y = -400
    }
    if (pacman.isTouching(d24)) {
        d24.visible = false;
        score1 = score1 + 10
        d24.x = -400
        d24.y = -400
    }
    if (pacman.isTouching(d25)) {
        d25.visible = false;
        score1 = score1 + 10
        d25.x = -400
        d25.y = -400
    }
    if (pacman.isTouching(d26)) {
        d26.visible = false;
        score1 = score1 + 10
        d26.x = -400
        d26.y = -400
    } if (pacman.isTouching(d27)) {
        d27.visible = false;
        score1 = score1 + 10
        d27.x = -400
        d27.y = -400
    } if (pacman.isTouching(d28)) {
        d28.visible = false;
        score1 = score1 + 10
        d28.x = -400
        d28.y = -400
    } if (pacman.isTouching(d29)) {
        d29.visible = false;
        score1 = score1 + 10
        d29.x = -400
        d29.y = -400
    } if (pacman.isTouching(d30)) {
        d30.visible = false;
        score1 = score1 + 10
        d30.x = -400
        d30.y = -400
    } if (pacman.isTouching(d31)) {
        d31.visible = false;
        score1 = score1 + 10
        d31.x = -400
        d31.y = -400
    } if (pacman.isTouching(d32)) {
        d32.visible = false;
        score1 = score1 + 10
        d32.x = -400
        d32.y = -400
    } if (pacman.isTouching(d33)) {
        d33.visible = false;
        score1 = score1 + 10
        d33.x = -400
        d33.y = -400
    } if (pacman.isTouching(d34)) {
        d34.visible = false;
        score1 = score1 + 10
        d34.x = -400
        d34.y = -400
    }
    if (pacman.isTouching(d35)) {
        d35.visible = false;
        score1 = score1 + 10
        d35.x = -400
        d35.y = -400
    }
    if (pacman.isTouching(d36)) {
        d36.visible = false;
        score1 = score1 + 10
        d36.x = -400
        d36.y = -400
    }
    if (pacman.isTouching(d37)) {
        d37.visible = false;
        score1 = score1 + 10
        d37.x = -400
        d37.y = -400
    }
    if (pacman.isTouching(d38)) {
        d38.visible = false;
        score1 = score1 + 10
        d38.x = -400
        d38.y = -400
    }
    if (pacman.isTouching(d39)) {
        d39.visible = false;
        score1 = score1 + 10
        d39.x = -400
        d39.y = -400
    }
    if (pacman.isTouching(d40)) {
        d40.visible = false;
        score1 = score1 + 10
        d40.x = -400
        d40.y = -400
    }
    if (pacman.isTouching(d41)) {
        d41.visible = false;
        score1 = score1 + 10
        d41.x = -400
        d41.y = -400
    }
    if (pacman.isTouching(d42)) {
        d42.visible = false;
        score1 = score1 + 10
        d42.x = -400
        d42.y = -400
    }
    if (pacman.isTouching(d43)) {
        d43.visible = false;
        score1 = score1 + 10
        d43.x = -400
        d43.y = -400
    }
    if (pacman.isTouching(d44)) {
        d44.visible = false;
        score1 = score1 + 10
        d44.x = -400
        d44.y = -400
    }
    if (pacman.isTouching(d45)) {
        d45.visible = false;
        score1 = score1 + 10
        d45.x = -400
        d45.y = -400
    }
    if (pacman.isTouching(d46)) {
        d46.visible = false;
        score1 = score1 + 10
        d46.x = -400
        d46.y = -400
    }
    if (pacman.isTouching(d47)) {
        d47.visible = false;
        score1 = score1 + 10
        d47.x = -400
        d47.y = -400
    }
    if (pacman.isTouching(d48)) {
        d48.visible = false;
        score1 = score1 + 10
        d48.x = -400
        d48.y = -400
    }
    if (pacman.isTouching(d49)) {
        d49.visible = false;
        score1 = score1 + 10
        d49.x = -400
        d49.y = -400
    }
    if (pacman.isTouching(d50)) {
        d50.visible = false;
        score1 = score1 + 10
        d50.x = -400
        d50.y = -400
    }
    if (pacman.isTouching(d51)) {
        d51.visible = false;
        score1 = score1 + 10
        d51.x = -400
        d51.y = -400
    }
    if (pacman.isTouching(d52)) {
        d52.visible = false;
        score1 = score1 + 10
        d52.x = -400
        d52.y = -400
    }
    if (pacman.isTouching(d53)) {
        d53.visible = false;
        score1 = score1 + 10
        d53.x = -400
        d53.y = -400
    }
    if (pacman.isTouching(d54)) {
        d54.visible = false;
        score1 = score1 + 10
        d54.x = -400
        d54.y = -400
    }
    if (pacman.isTouching(d55)) {
        d55.visible = false;
        score1 = score1 + 10
        d55.x = -400
        d55.y = -400
    }
    if (pacman.isTouching(d56)) {
        d56.visible = false;
        score1 = score1 + 10
        d56.x = -400
        d56.y = -400
    }
    if (pacman.isTouching(d57)) {
        d57.visible = false;
        score1 = score1 + 10
        d57.x = -400
        d57.y = -400
    }

    if (pacman.isTouching(d58)) {
        d58.visible = false;
        score1 = score1 + 10
        d58.x = -400
        d58.y = -400
    }
    if (pacman.isTouching(d59)) {
        d59.visible = false;
        score1 = score1 + 10
        d59.x = -400
        d59.y = -400
    }
    if (pacman.isTouching(d60)) {
        d60.visible = false;
        score1 = score1 + 10
        d60.x = -400
        d60.y = -400
    }
}





