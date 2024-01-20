package;

import haxe.Log;
import haxe.io.Path;
import js.Browser.*;
import js.Syntax;

class MainNode {
	public function new() {
		trace('MainNode');

		init();
	}

	function init() {
		dummyQR();
		generateQR4Attendees();
	}

	function generateQR4Attendees() {
		// read the file
		var content = sys.io.File.getContent('data/attendees_00010.json');
		trace(content);
	}

	function dummyQR() {
		var qrcode = new QrcodeSvg({
			content: "http://github.com/",
			padding: 4,
			width: 256,
			height: 256,
			color: "#000000",
			background: "#ffffff",
			ecl: "M",
		});
		qrcode.save("sample.svg", function(error) {
			if (error != null)
				throw error;
			console.log("Done!");
		});

		// var svg = new QRCode("Hello World!").svg();
		// console.log(svg);

		// untyped __js__('// [nodejs] comment');
		// js.Node.console.log('js.Node.console.log');
		// untyped ('// [${TARGET}] simple untyped');
		// Syntax.code('# [python] comment');

		// var svg = Syntax.code('new QRCode("Hello World!").svg()');
		// console.log(svg);

		// console.log(new QrcodeSvg('hello').svg());
	}

	function dummyWrite() {
		var str:String = 'Hello World!\nWritten on: ' + Date.now().toString();
		sys.io.File.saveContent('hello.txt', str);
	}

	static public function main() {
		var app = new MainNode();
	}
}
