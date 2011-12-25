// Simple library

function HelloWorld(from) {
	this.from = from;
}

HelloWorld.prototype = {
	from: null,
	greet: function () {
		window.alert(this.from + " says 'Hello, World!'");
	}
};
