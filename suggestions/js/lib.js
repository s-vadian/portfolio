////////////////////////////////////////////////////////////////////////
/////////////////////////////////FOOTER/////////////////////////////////
////////////////////////////////////////////////////////////////////////
function  getWindowSize(tag){
	tag = tag.toLowerCase();
	var windowWidth, windowHeight;
	if (self.innerHeight) { // all except Explorer
		windowWidth = self.innerWidth;
		windowHeight = self.innerHeight;
	} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
		windowWidth = document.documentElement.clientWidth;
		windowHeight = document.documentElement.clientHeight;
	} else if (document.body) { // other Explorers
		windowWidth = document.body.clientWidth;
		windowHeight = document.body.clientHeight;
	}
	if (tag == 'width') {
		return windowWidth;
	}
	if (tag == 'height') {
		return windowHeight;
	}
	if ((tag != 'height') && (tag != 'width')) {
		return [windowWidth,windowHeight];
	}	
}
function getBlockHeight(tag){
	return $(tag).outerHeight(true);
}
function setFooter(){
	var heightAllBlocks = getBlockHeight('#content') + getBlockHeight('#header') + getBlockHeight('#footer');
	if (heightAllBlocks > getWindowSize('height')) {
		$('#footer').css('position', 'relative');
	} else {
		$('#footer').css('position', 'absolute');
		$('#footer').css('bottom', '0px');
	}
}
////////////////////////////////////////////////////////////////////////
//////////////////////////////ADD-CONTRACT//////////////////////////////
////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
	var flag = false;
	$('#in-contract').click(function () {
		if (!flag) {
			$('#block-contract').fadeIn(100);
			flag = true;
		} else {
			$('#block-contract').hide();
			flag = false;
		}		
	});
});
////////////////////////////////////////////////////////////////////////
////////////////////////////SEARCH-AJAX-XML/////////////////////////////
////////////////////////////////////////////////////////////////////////
var xmlHttpGetSuggestions = createXmlHttpRequestObject();
var position = -1; // позиция подсвеченой подсказки
var suggestions = 0; // количество подсказок
var idsuggestions = []; // id подсказок
var maxSuggestions = 6; // максимальное количество вывобимых подсказок
function createXmlHttpRequestObject(){
	var xmlHttp;
	try {
		xmlHttp = new XMLHttpRequest();		
	} catch(e) {
		var XmlHttpVersions = new Array("MSXML2.XMLHTTP.6.0",
										"MSXML2.XMLHTTP.5.0",
										"MSXML2.XMLHTTP.4.0",
										"MSXML2.XMLHTTP.3.0",
										"MSXML2.XMLHTTP",
										"Microsoft.XMLHTTP");
		for (var i=0; i<XmlHttpVersions.length && !xmlHttp; i++) {
			try {
				xmlHttp = new ActiveXObject(XmlHttpVersions[i]);
      		} catch (e) {}
		}
	}
	if (!xmlHttp) {
		//alert("Error creating the XMLHttpRequest object.");
	} else {
		return xmlHttp;
	}
}
function getSuggestions(keyword) {	
	if(keyword != "" && keyword.length > 0) {
		document.getElementById("result").innerHTML = "";
		if(xmlHttpGetSuggestions) {
			try	{
				if (xmlHttpGetSuggestions.readyState == 4 || xmlHttpGetSuggestions.readyState == 0) {
					xmlHttpGetSuggestions.open("GET", "php/suggest.php?keyword=" + keyword, true);
					xmlHttpGetSuggestions.onreadystatechange = handleGettingSuggestions; 
					xmlHttpGetSuggestions.send(null);
				} else {
					//console.log('there was timer');
					// if (timeoutId != -1) clearTimeout(timeoutId);
					// timeoutId = setTimeout("getSuggestions(userKeyword);", 500);
				}
			} catch(e) {
				//console.log('error in getSuggestions');
				//displayError("Can't connect to server:\n" + e.toString());
			}
		}
	} else {
		document.getElementById("result").innerHTML = "";
		document.getElementById("matches").innerHTML = "";
	}
}
function handleGettingSuggestions() {
	if (xmlHttpGetSuggestions.readyState == 4) {
		if (xmlHttpGetSuggestions.status == 200) { 
			try {
				updateSuggestions();				
			} catch(e) {
				console.log('error in handleGettingSuggestions1');
				//displayError(e.toString());
			}  
		} else {
			console.log('error in handleGettingSuggestions2');
			//displayError("There was a problem retrieving the data:\n" + xmlHttpGetSuggestions.statusText);
		}       
	}
}
function updateSuggestions() {
	var ms;
	try {
		var xmlResponse = xmlHttpGetSuggestions.responseXML;
		xmlRoot = xmlResponse.documentElement;   
		fio = xmlRoot.getElementsByTagName("fio");
		iin = xmlRoot.getElementsByTagName("iin");
		id = xmlRoot.getElementsByTagName("id");
		html = "<table id=\"search-client-result\">";

		position = -1;
		suggestions = fio.length;
		if (fio.length > maxSuggestions) {
			ms = maxSuggestions;
		} else {
			ms = fio.length;
		}
		
		for (var i=0; i<ms; i++){
			idsuggestions[i] = id.item(i).firstChild.data;
			html += "<tr id=\"tr" + i + "\" onclick=\"handleOnClick(this.id);\" onmouseover=\"handleOnMouseOver(this);\" onmouseout=\"handleOnMouseOut(this);\"><td>" + fio.item(i).firstChild.data + ", " + iin.item(i).firstChild.data + "</td></tr>";
		}
		html += "</table>";

		resultDiv = document.getElementById("result");
		matchesDiv = document.getElementById("matches");		
		resultDiv.innerHTML = html;
		matchesDiv.innerHTML = fio.length;

		if (fio.length == 0) {
			resultDiv.innerHTML = "";
		}
	} catch(e) {
		console.log('error in updateSuggestions');
	}
}
function handleOnMouseOver(oTr)
{
  //deselectAll();  
  oTr.className = "highlightrow";  
  position = oTr.id.substring(2, oTr.id.length);
}
function handleOnMouseOut(oTr)
{
  oTr.className = "";   
  position = -1;
}
function handleOnClick(id){	
	id = '#' + id + ' td';
	var newValue = $(id).html();
	$('#key').val(newValue);
	$('#result').html('');
	goToClientCard(idsuggestions[position]);
	position = -1;
}
function handleKeyUp(e) 
{
	e = (!e) ? window.event : e;
	target = (!e.target) ? e.srcElement : e.target;
	if (target.nodeType == 3) 
		target = target.parentNode;
	code = (e.charCode) ? e.charCode :
	((e.keyCode) ? e.keyCode :
	((e.which) ? e.which : 0));
	if (e.type == "keyup") 
	{
		isKeyUpDownPressed = false; 
		if ((code < 13 && code != 8) || 
			(code >=14 && code < 32) || 
			(code >= 33 && code <= 46 && code != 38 && code != 40) || 
			(code >= 112 && code <= 123)) {
			//
		} else {		
			if(code == 13)
			{
				if (position>-1 && position<suggestions) {
					id = '#tr' + position + ' td';
					var newValue = $(id).html();
					$('#key').val(newValue);
					$('#result').html('');
					goToClientCard(idsuggestions[position]);
					position = -1;
				}
			} else {
				if(code == 40)
				{
					newTR=document.getElementById("tr"+(++position));
					oldTR=document.getElementById("tr"+(--position));
					if(position>=0 && position<suggestions-1)
						oldTR.className = "";
					if(position < suggestions - 1) {
						newTR.className = "highlightrow";
						position++;
					} else {
						if(position == suggestions - 1 && suggestions != 0){
							oldTR.className = "";
							position++;
						}
					}
				} else {
					if(code == 38) {
						newTR=document.getElementById("tr"+(--position));
						oldTR=document.getElementById("tr"+(++position));
						if(position>=0 && position <= suggestions - 1) {
							oldTR.className = "";
						}
						if(position > 0) {
							newTR.className = "highlightrow";
							position--;
						}     
						else
						if(position == 0)
							position--;
					}
				}
			}
		}
	}
}
function goToClientCard(id) {
	// window.location.href = "/client-card.php?id="+id;
}
////////////////////////////////////////////////////////////////////////
/////////////////////////////--------------/////////////////////////////
////////////////////////////////////////////////////////////////////////
function setDob(value){
	if (value.length == 12) {
		var year = value[0] + value[1];
		var month = value[2] + value[3];
		var day = value[4] + value[5];
		if (year < 16) {
			year = "20" + year;
		} else {
			year = "19" + year;
		}	
		$('#dob').val(year + "-" + month + "-" + day);
	};
}
function checkFormat(value, id, tag, maxq){
	if (value == "") {
		//
	} else {
		var newValue;
		newValue = "1" + value;
		newValue = parseInt(newValue);
		newValue = newValue + "";
		newValue = newValue.substr(1, newValue.length);
		if (value.length > maxq) {
			newValue = value.substr(0, maxq);
		};
		if (isNaN(newValue)) {
			newValue = "";
		}
		$('#' + id).val(newValue);
	}
}
////////////////////////////////////////////////////////////////////////
/////////////////////////////INICIALIZATION/////////////////////////////
////////////////////////////////////////////////////////////////////////
function inicialization(){
	setFooter();
}
////////////////////////////////////////////////////////////////////////
/////////////////////////////--------------/////////////////////////////
////////////////////////////////////////////////////////////////////////
// $(document).ready(function(){
// 	$(window).resize(function(){
// 		setFooter();
// 	});
// });


