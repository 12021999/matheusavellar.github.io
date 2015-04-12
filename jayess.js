var isPt = false;
var isMob = false;
var hasLoaded = false;
setTimeout(function(){
	if (!hasLoaded){
		window.location.reload();
	}
},10000);

function fadeStuff(){
	hasLoaded = true;
	$("#loading").fadeOut();
	$("#right").fadeIn();
	$("#bottom").fadeIn();
}

function beforeStart(){
	if (window.location.href.indexOf("pt") != -1){isPt = true;}
	if (window.location.href.indexOf("mobile") != -1){isMob = true;}
	if (BD.OS.indexOf("iPhone") != -1 && !isMob){window.location.assign("/mobile");}
	if (localStorage.getItem('betaPreviousColor')){fadeStuff();}else{setTimeout(function(){fadeStuff();},3000);}
}
