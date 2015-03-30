var BD = {
	agent: window.navigator.userAgent,
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++){
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{string: navigator.userAgent,subString: "Chrome",identity: "Chrome"},
		{string: navigator.userAgent,subString: "OmniWeb",versionSearch: "OmniWeb/",identity: "OmniWeb"},
		{string: navigator.vendor,subString: "Apple",identity: "Safari",versionSearch: "Version"},
		{prop: window.opera,identity: "Opera",versionSearch: "Version"},
		{string: navigator.vendor,subString: "iCab",identity: "iCab"},
		{string: navigator.vendor,subString: "KDE",identity: "Konqueror"},
		{string: navigator.userAgent,subString: "Firefox",identity: "Firefox"},
		{string: navigator.vendor,subString: "Camino",identity: "Camino"},
		{string: navigator.userAgent,subString: "Netscape",identity: "Netscape"},// for newer Netscapes (6+)
		{string: navigator.userAgent,subString: "MSIE",identity: "Explorer",versionSearch: "MSIE"},
		{string: navigator.userAgent,subString: "Gecko",identity: "Mozilla",versionSearch: "rv"},
		{string: navigator.userAgent,subString: "Mozilla",identity: "Netscape",versionSearch: "Mozilla"}// for older Netscapes (4-)
	],
	dataOS : [
		{string: navigator.platform,subString: "Win",identity: "Windows"},
		{string: navigator.platform,subString: "Mac",identity: "Mac"},
		{string: navigator.userAgent,subString: "iPhone",identity: "iPhone/iPod"},
		{string: navigator.platform,subString: "Linux",identity: "Linux"}
	],
	browserName: "",
	isWindowPhone: function(){
		if (agent.indexOf("IEMobile") > -1 || agent.indexOf("Windows Phone") > -1){
			BD.browserName += " Windows Phone ";
		}
	},
	isFirefox: function(){
		if (agent.indexOf("Firefox") > -1){
			BD.browserName += " Firefox ";
		}
	},
	isOpera: function(){
		if (window.opera != null){
			BD.browserName += " Opera ";
		}
	},
	isChrome: function(){
		if (agent.indexOf("Chrome") > -1){
			BD.browserName += " Chrome ";
		}
	},
	isIOS: function(){
		if (agent.indexOf("iPod") > -1 || agent.indexOf("iPhone") > -1 || agent.indexOf("iPad") > -1){
			if (!BD.isWindowPhone){
				BD.browserName += " iOS ";
			}
		}
	},
	isAndroid: function(){
		if (agent.indexOf("Android") > -1 && !BD.isWindowPhone){
			BD.browserName += " Android ";
		}
	},
	isBlackberry: function(){
		if (agent.indexOf("Blackberry") > -1){
			BD.browserName += " Blackberry ";
		}
	}
};
BD.init();
