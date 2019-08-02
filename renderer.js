$( document ).ready(function() {
	var request = new XMLHttpRequest();
	request.open('GET', 'http://localhost/ci3110', true);

	request.onload = function() {
	  if (this.status >= 200 && this.status < 400) {
		// Success!
		//var data = JSON.parse(this.response);
		//document.body.appendChild(this.response);
		$('#container').append(this.response);
	  } else {
		// We reached our target server, but it returned an error

	  }
	};

	request.onerror = function() {
	  // There was a connection error of some sort
	};

	request.send();
});