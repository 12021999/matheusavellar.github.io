var isPt = false;
var isMob = false;
var hasLoaded = false;
setTimeout(function(){
	if (!hasLoaded){
		window.location.reload();
	}
},10000);

function beforeStart(){
	if (window.location.href.indexOf("pt") != -1){isPt = true;}
	if (window.location.href.indexOf("mobile") != -1){isMob = true;}
	if (BD.OS.indexOf("iPhone") != -1 && !isMob){window.location.assign("/mobile");}
	if (localStorage.getItem('betaPreviousColor')){
		start();
		$("#loading").fadeOut();
		$("#right").fadeIn();
		$("#bottom").fadeIn();
	}else{
		//Oh my god at the efficiency this has holy crap//
		setTimeout(function(){
			start();
			$("#loading").fadeOut();
			$("#right").fadeIn();
			$("#bottom").fadeIn();
		},3000);
	}
}
function start(){
	$("body").hover(function(){/*AJAX TEST*/});
	hasLoaded = true;
	var bg_colour = Math.floor(Math.random() * 16777215).toString(16);
	bg_colour = "#" + ("000000" + bg_colour).slice(-6);
	document.bgColor = bg_colour;

	$("#refresh").mouseup(function() {
		$(this).css({"background-color":"#62BDB6","border":"1px solid #000000"});
	}).mousedown(function() {
		$(this).css({"background-color":"#9393A0","border":"1px solid #A50000"});
		$("#refresh .loaded").animate({"width":"100%"},500,function(){
			if (!isPt){$("#refresh .refreshmsg").text("Done!");}
			else{$("#refresh .refreshmsg").text("Pronto!");}
		});
		setTimeout(function(){window.location.reload();},500);
	});

	$("span.cheers").append("<strong>" + bg_colour + "</strong>");
	$("#uselessinfo").hover(function(){$("#uselessinfo").fadeOut();});
	var prev = localStorage.getItem('betaPreviousColor');
	localStorage.setItem('betaPreviousColor', bg_colour);
	if (bg_colour == "#000000" || bg_colour == "#ffffff"){
		$("#refresh").fadeOut();
		$("#title").css({"color":"#999"});
		$("#subtitle").css({"color":"#999"});
		$("#subtitle").text("Holy crap! You got " + bg_colour + " as a background color!");
		window.onbeforeunload = function(){return "DUDE! Just WHAT are you doing?!";}
	}else if(prev == bg_colour){
		$("#refresh").fadeOut();
		$("#title").css({"color":"#999"});
		$("#subtitle").css({"color":"#999"});
		$("#subtitle").text("Holy crap! You got " + bg_colour + " as a background color last time you joined the page!");
		window.onbeforeunload = function(){return "DUDE! Just WHAT are you doing?!";}
	}

	$("div.iconbox").hover(function(){
		$(this).stop().animate({"opacity":"1"},250);
	}, function(){
		$(this).stop().animate({"opacity":"0.4"},250);
	});

	//Possibly the most unefficient way possible to make this//
	//But flipping *for* won't work here for whatever reason//
	$(".keybox.gold").hover(function(){
		$(".iconbox.gold").stop().animate({"opacity":"1"},250);
		$(".iconbox.gold").addClass("shine");
	}, function(){
		$(".iconbox.gold").stop().animate({"opacity":"0.4"},250);
		$(".iconbox.gold").removeClass("shine");
	});

	$(".keybox.silver").hover(function(){
		$(".iconbox.silver").stop().animate({"opacity":"1"},250);
		$(".iconbox.gold").addClass("shine");
	}, function(){
		$(".iconbox.silver").stop().animate({"opacity":"0.4"},250);
		$(".iconbox.gold").removeClass("shine");
	});

	$(".keybox.bronze").hover(function(){
		$(".iconbox.bronze").stop().animate({"opacity":"1"},250);
		$(".iconbox.gold").addClass("shine");
	}, function(){
		$(".iconbox.bronze").stop().animate({"opacity":"0.4"},250);
		$(".iconbox.gold").removeClass("shine");
	});

	$(".keybox.void").hover(function(){
		$(".iconbox.void").stop().animate({"opacity":"1"},250);
		$(".iconbox.gold").addClass("shine");
	}, function(){
		$(".iconbox.void").stop().animate({"opacity":"0.4"},250);
		$(".iconbox.gold").removeClass("shine");
	});
}
