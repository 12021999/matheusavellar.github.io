//\\//\\//\\//\\//\\//\\//\\//\\//\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\
//Código mais não pratico da História da Humanidade :l
//\\//\\//\\//\\//\\//\\//\\//\\//\\

//Canvas
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.imageSmoothingEnabled = true;

var passar_video = false;
var Video = function(video){
    this.video = video;
    this.video.play();
    this.count = 0;
    this.video.volume = 0.5;

    this.update = function(){
        if(this.count++ >= 225 || passar_video){
            scene = "menu";
            passar_video = false;
            this.count = 0;
        }
        if(typeof scene == "string"){
            this.video.volume -= this.video.volume;
        }
    }

    this.draw = function(){
        context.drawImage(this.video, 0, 0, canvas.width, canvas.height)
    }
}

var sounds = {t:true,c:0};
var imageReady = false;

//Trequetes que eu esqueci pra que que servem
var cowN = 1;
var plN = 1;
var pplN = 0;
var galN = 1;
var galNL = 0;
var pasN = 0;

    ///////////////MENU\\\\\\\\\\\\\\\ 

//Botoes
var play = new Image();
var playDefault = new Image();
playDefault.src = "Images/Buttons/playDefault.png";
var playSelected = new Image();
playSelected.src = "Images/Buttons/playSelected.png";
var creditoDefault = new Image();
creditoDefault.src = "Images/Buttons/creditoDefault.png";
var creditoSelected = new Image();
creditoSelected.src = "Images/Buttons/creditoSelected.png";
var creditoLocked = new Image();
creditoLocked.src = "Images/Buttons/creditoLocked.png";
var menu = new Image();
var menuDefault = new Image();
menuDefault.src = "Images/Buttons/menuDefault.png";
var menuSelected = new Image();
menuSelected.src = "Images/Buttons/menuSelected.png";
var pauseDefault = new Image();
pauseDefault.src = "Images/Buttons/pauseDefault.png";
var pauseSelected = new Image();
pauseSelected.src = "Images/Buttons/pauseSelected.png";

//Grupo de aldeoes
var galera = new Image();
galera.src = "Images/Player/Galera" + galN + ".png";

//Nuvens, chao
var clouds = new Image();
clouds.src = "Images/BG/clouds.png";
var ground = new Image();

//Plano de fundo do menu
var menuBG = new Image();
menuBG.src = "Images/MenuBG.png";

//Imagens dos creditos
var Atila = new Image();
Atila.src = "Images/Credits/Atila1.png";
var AtilaNome = new Image();
AtilaNome.src = "Images/Credits/AtilaNome.png";
var Avellar = new Image();
Avellar.src = "Images/Credits/Avellar1.png";
var AvellarNome = new Image();
AvellarNome.src = "Images/Credits/AvellarNome.png";
var Camila = new Image();
Camila.src = "Images/Credits/Camila1.png";
var CamilaNome = new Image();
CamilaNome.src = "Images/Credits/CamilaNome.png";
var Sara = new Image();
Sara.src = "Images/Credits/Sara1.png";
var SaraNome = new Image();
SaraNome.src = "Images/Credits/SaraNome.png";
var vacaS = new Image();
vacaS.src = "Images/Credits/vacaS.png";
var EasterNome = new Image();
EasterNome.src = "Images/Credits/EasterNome.png";

    ///////////////JOGO\\\\\\\\\\\\\\\


var hit = new Audio();
hit.src = "Audio/Punch.mp3";
var happy = new Audio();
happy.src = "Audio/Spring_In_My_Step.mp3";

//Player
var playerSprite = new Image();
playerSprite.src = "Images/Player/player1Sprite1.png";
var playerVida = new Image();

//Press space
var space = new Image();
space.src = "Images/Space.png";

//Tela de morte
var black = new Image();
black.src = "Images/black.png";

//Sol e obstaculos
var sol = new Image();
sol.src = "Images/sol.png";
var obs = new Image();
var obs2 = new Image();
var obs3 = new Image();
var obs4 = new Image();
var spec = new Image();

//Moedinha
var coin = new Image();
coin.src = "Images/coin.png";

//Pontos
var pt = new Image();
var pt2 = new Image();
pt.src = "Images/pt.png";
pt2.src = "Images/pts.png";
pts = {x:canvas.width/2 - 45,y:canvas.height/2 - 50,h:53,w:180};

//Variaveis pro menu
var pbSelected = false;
var cbSelected = false;
var cbLocked = false;

var pl_jump = {d:17,up:17,down:0};

var lockMenu = false;
var lockCre = false;
var lockCow = false;
var lockP = false;
var lockGame = false;
var lockDeath = false;
var lockScore = false;
var lockCoin = false;
var lockPause = true;

var cowActive = false;
var CowTime = 0;
var CowTimeMenu = 0;

var spaceX = canvas.width / 3;
var spaceY = canvas.height / 3 + 20;
var spaceW = 217 * 1.1;
var spaceH = 73 * 1.1;
var visTick = 0;

var fading = 0;

var player_jump = false;
var player_jumpS = false;

var menuPO = {x:-200,y:302,w:138,h:42,s:5};

var menuPVX = menuPO.x + 130;
var menuPVY = menuPO.y - 50;
var menuPVW = 78;
var menuPVH = 52;

var EasterTime = 100;

var lives = 3;
var points = 0;
var Score = Math.floor(points);
var distance = 0;

var death = true;

var map = "Campo";

//Botao de Play
var menuBP = {x:0,y:5,w:57,h:36};
//var menuBP.x = canvas.width - menuBPW - 5;

//Mute
var mute = {img:new Image(),x:25,y:375,w:35,h:35};
mute.img.src = "Images/Buttons/soundOn.png";

//Botao de Pausa
var pauseBPY = 5;
var pauseBPW = 43;
var pauseBPX = canvas.width - 50;
var pauseBPH = 43;

//Variaveis de nuvem
var cloudsO = {"x":0,"y":0,"w":2812,"h":137};

//Variaveis do chao
var groundO = {"x":0,"y":0,"w":8436,"h":450};

//Variavreis do dinossauro
var dinoUnitX = -250 + Math.floor(Math.random() * 900);
var dinoUnitY = 380 + Math.floor(Math.random() * 30);
var dinoUnitW = 584;
var dinoUnitH = 65;
var dinoUnitSRC = 1 + Math.floor(Math.random() * 6);
var dinoUnit = new Image();
dinoUnit.src = "Images/Dino/dinoUnit" + dinoUnitSRC + ".png";

var menuT = {i:new Image(),x:200,y:500,w:387,h:137,s:7.1};
menuT.i.src = "Images/Logo/Logo.png";

var creditoX = 400;
var creditoY = 150;
var creditoW = 34;
var creditoH = 64;
var creditoS = 150;
var creditoNomeX = creditoX;
var creditoNomeY = creditoY + 75;
var creditoNomeW = 182;
var creditoNomeH = 45;
var creditoNomeS = 20;
var creditoEasterX = -1000;
var creditoEasterY = 20;
var creditoEasterW = 78;
var creditoEasterH = 52;
var creditoEasterS = 3;

var txt;
var txt2;
var txt_x = 101;
var txt_y = 422;
var txt_c = '#000000';
var dF = "15px Arial";

var ptX = 20;
var ptY = 400;
var ptW = 120;
var ptH = 35;

var lockItself = false;

var playTX = 100;
var playTY = 175;
var playTT = "Play!";
var playTC = "#FFFFFF";
var playTF = "30px Arial";

var playRX = 85;
var playRY = 140;
var playRH = 53;
var playRW = 100;
var playRC = "Default";

var playBG = {img: new Image(),img2: new Image(),x:0,y:20,w:8235,h:450,x2:8235};
playBG.img.src = "Images/Loop/Loop_Campo.png";
playBG.img2.src = "Images/Loop/Loop_Campo.png";

var BGspeed = 10;

var solO = {"x":25,"y":20,"w":145,"h":138,"s":0.01};

var coinX = canvas.width;
var coinY = 200;
var coinH = 81;
var coinW = 81;
var coinS = BGspeed * -1;

var mbD = true;
var mbS = false;
var pbD = true;
var pbS = false;

var credRX = 85;
var credRY = 215;
var credRH = 43;
var credRW = 100;
var credRC = "#2f6622";

var player = {"x":50,"y":315,"w":34,"h":50};

var ifInvis = "";
var hurt = false;
var hurtTime = 0;

var floor = 360;

var morteSla = true;
var morteSla2 = 0;

var player_ran = Math.floor(Math.random() * 6);

var fundoPlayO = {x:0,y:0,w:1435.5,h:450};
var fundoPlay = new Image();
var fundoPlay2 = new Image();

var ranN = Math.floor(Math.random() * 400);
if (ranN <= 66) {
obs.src = "Images/Obs/rockCampo.png";
fundoPlay.src = "Images/BG/fundoPlayCampo.png";
fundoPlay2.src = "Images/BG/fundoPlayCampo.png";
ground.src = "Images/BG/groundCampo.png";
} else if (ranN >= 67 && ranN <= 132) {
obs.src = "Images/Obs/rockCampo2.png";
fundoPlay.src = "Images/BG/fundoPlayCampo.png";
fundoPlay2.src = "Images/BG/fundoPlayCampo.png";
ground.src = "Images/BG/groundCampo.png";
} else if (ranN >= 133 && ranN <= 198) {
obs.src = "Images/Obs/rockFloresta.png";
fundoPlay.src = "Images/BG/fundoPlayCampo.png";
fundoPlay2.src = "Images/BG/fundoPlayCampo.png";
ground.src = "Images/BG/groundCampo.png";
} else if (ranN >= 199 && ranN <= 264) {
obs.src = "Images/Obs/rockDeserto.png";
fundoPlay.src = "Images/BG/fundoPlayDeserto.png";
fundoPlay2.src = "Images/BG/fundoPlayDeserto.png";
ground.src = "Images/BG/groundDeserto.png";
} else if (ranN >= 265 && ranN <= 330) {
obs.src = "Images/Obs/rockNeve.png";
fundoPlay.src = "Images/BG/fundoPlayNeve.png";
fundoPlay2.src = "Images/BG/fundoPlayNeve.png";
ground.src = "Images/BG/groundNeve.png";
} else if (ranN >= 330 && ranN <= 400) {
obs.src = "Images/Obs/rockFloresta.png";
fundoPlay.src = "Images/BG/fundoPlayCampo.png";
fundoPlay2.src = "Images/BG/fundoPlayCampo.png";
ground.src = "Images/BG/groundCampo.png";
}

var obsS = -1 * BGspeed;

var oobs = {"x":canvas.width,"y":314, "h":48, "w":52};
var oobs2 = {"x":canvas.width + 200,"y":314, "h":48, "w":52};
var oobs3 = {"x":canvas.width + 300,"y":350, "h":28, "w":96};
var oobs4 = {"x":canvas.width + 300,"y":350, "h":48, "w":5};
var ospec = {"x":0,"y":246, "h":117, "w":3012};

var count = 1;
var count2 = 1;

var mouseX = 0;
var mouseY = 0;
var mouse_pressed = false;

var gameStart = false;
var pause = false;

function reset() {
    context.clearRect(0, 0, canvas.width, canvas.height);
        
    cowN = 1;
    plN = 1;
    pplN = 0;
    galN = 1;
    galNL = 0;

    Dplayer_up = 17;
    player_up = Dplayer_up;
    player_down = 0;

    cowActive = false;
    CowTime = 0;
    CowTimeMenu = 0;

    spaceX = canvas.width / 3;
    spaceY = canvas.height / 3 + 20;
    spaceW = 217 * 1.1;
    spaceH = 73 * 1.1;
    visTick = 0;

    player_jump = false;
    player_jumpS = false;

    menuPO.w = 138;
    menuPO.x = -1 * menuPO.w - 100;
    menuPO.y = 302;
    menuPO.h = 42;
    menuPO.s = 5;
    menuPVX = menuPO.x + 130;
    menuPVY = menuPO.y - 50;
    menuPVW = 78;
    menuPVH = 52;
    EasterTime = 100;
    
    lives = 3;
    points = 0;
    Score = Math.floor(points);
    distance = 0;
    
    death = true;
    map = "Campo";
    
    menuBPY = 5;
    menuBPW = 57;
    menuBPX = canvas.width - menuBPW - 5;
    menuBPH = 36;
    
    pauseBPY = menuBPY;
    pauseBPW = 43;
    pauseBPX = canvas.width - 50;
    pauseBPH = 43;
    
    cloudsO.x = 0;
    cloudsO.y = 0;
    cloudsO.w = 2812;
    cloudsO.h = 137;
    
    groundO.x = 0;
    groundO.y = 0;
    groundO.w = 8436;
    groundO.h = 450;
    
    menuTX = 200;
    menuTY = 500;
    menuTW = 387;
    menuTH = 137;
    menuTS = 7.1;
 
    creditoX = 400;
    creditoY = 150;
    creditoW = 34;
    creditoH = 64;
    creditoS = 150;
    creditoNomeX = creditoX;
    creditoNomeY = creditoY + 75;
    creditoNomeW = 182;
    creditoNomeH = 45;
    creditoNomeS = 20;
    creditoEasterX = -1000;
    creditoEasterY = 20;
    creditoEasterW = 78;
    creditoEasterH = 52;
    creditoEasterS = 3;

    txt2;
    txt_x = 101;
    txt_y = 422;
    txt_c = '#000000';
    dF = "15px Arial";

    playBG.x = 0;
    playBG.y = 20;
    playBG.h = 450;
    playBG.w = 8235;
    BGspeed = 10;

    ptX = 20;
    ptY = 400;
    ptW = 120;
    ptH = 35;

    solO.x = 25;
    solO.y = 20;
    solO.h = 138;
    solO.w = 145;
    solO.s = .01;

    coinX = canvas.width;
    coinY = 200;
    coinH = 81;
    coinW = 81;
    coinS = BGspeed * -1;

    mbD = true;
    mbS = false;
    pbD = true;
    pbS = false;

    player.x = 50;
    player.h = 50;
    player.y = 365 - player.h;
    player.w = 34;
    
    ifInvis = "";
    hurt = false;
    hurtTime = 0;
    floor = 360;
    morteSla = true;
    morteSla2 = 0;
    player_ran = Math.floor(Math.random() * 6);
    
    if (ranN <= 66) {
         obs.src = "Images/Obs/rockCampo.png";
         fundoPlay.src = "Images/BG/fundoPlayCampo.png";
         ground.src = "Images/BG/groundCampo.png";
    } else if (ranN >= 67 && ranN <= 132) {
         obs.src = "Images/Obs/rockCampo2.png";
         fundoPlay.src = "Images/BG/fundoPlayCampo.png";
         ground.src = "Images/BG/groundCampo.png";
    } else if (ranN >= 133 && ranN <= 198) {
         obs.src = "Images/Obs/rockFloresta.png";
         fundoPlay.src = "Images/BG/fundoPlayCampo.png";
         ground.src = "Images/BG/groundCampo.png";
    } else if (ranN >= 199 && ranN <= 264) {
         obs.src = "Images/Obs/rockDeserto.png";
         fundoPlay.src = "Images/BG/fundoPlayDeserto.png";
         ground.src = "Images/BG/groundDeserto.png";
    } else if (ranN >= 265 && ranN <= 330) {
         obs.src = "Images/Obs/rockNeve.png";
         fundoPlay.src = "Images/BG/fundoPlayNeve.png";
         ground.src = "Images/BG/groundNeve.png";
    } else if (ranN >= 330 && ranN <= 400) {
         obs.src = "Images/Obs/rockFloresta.png";
         fundoPlay.src = "Images/BG/fundoPlayCampo.png";
         ground.src = "Images/BG/groundCampo.png";
    }
    
    fundoPlayO.x = 0;
    fundoPlayO.y = 0;
    fundoPlayO.h = 450;
    fundoPlayO.w = 1436;
    
    oobs = {"x":canvas.width,"y":314, "h":48, "w":52};
    oobs2 = {"x":canvas.width + 200,"y":314, "h":48, "w":52};
    oobs3 = {"x":canvas.width + 300,"y":350, "h":28, "w":96};
    oobs4 = {"x":canvas.width + 300,"y":350, "h":48, "w":5};
    ospec = {"x":0,"y":246, "h":117, "w":3012};
    
    count = 1;
    count2 = 1;
    
    mouseX = 0;
    mouseY = 0;
    mouse_pressed = false;
    
    gameStart = false;
    pause = false;
    
    lockCow = false;
    lockDeath = true;
    lockMenu = true;
    lockGame = false;
    lockScore = false;
    checkItself();
}