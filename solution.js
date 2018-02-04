var callWhenReadyToGo = function () {
	console.log('in callWhenReadyToGo, time to add JS');
}

var xhrRequest = XMLHttpRequest.prototype.send;

XMLHttpRequest.prototype.send = function() {
	this.onreadystatechange = function() {
		if (this.readyState == 4) {
			callWhenReadyToGo();
		}
  }
  xhrRequest.apply(this, arguments);
}

document.addEventListener("DOMContentLoaded", function() {
	callWhenReadyToGo();
});
