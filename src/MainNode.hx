package;

import const.Folder;
import haxe.Json;
import haxe.Log;
import haxe.io.Path;
import js.Browser.*;
import js.Syntax;
import sys.FileSystem;

class MainNode {
	public function new() {
		trace('MainNode');

		init();
	}

	function init() {
		initFolders();
		dummyQR();
		generateQR4Attendees();
	}

	function initFolders() {
		Folder.ROOT_FOLDER = Sys.getCwd();
		Folder.BIN = Path.join([Sys.getCwd(), 'bin']);
		Folder.DIST = Path.join([Sys.getCwd(), 'dist']);
		Folder.ASSETS = Path.join([Sys.getCwd(), 'assets']);
		Folder.EXPORT = Path.join([Sys.getCwd(), 'export']);
		info('Folder.ROOT_FOLDER: ${Folder.ROOT_FOLDER}', 1);
		info(Folder.BIN, 1);
		info(Folder.DIST, 1);
		info('Folder.ASSETS: ${Folder.ASSETS}', 1);
		info('Folder.EXPORT: ${Folder.EXPORT}', 1);

		// var folder = 'export/interstellar';
		FileSystem.createDirectory(Folder.EXPORT);
		FileSystem.createDirectory(Folder.EXPORT + '/test');
		FileSystem.createDirectory(Folder.EXPORT + '/qr');
	}

	function generateQR4Attendees() {
		// read the file
		// var content = sys.io.File.getContent('data/attendees_00010.json');
		var content = sys.io.File.getContent('data/attendees_00100.json');
		// var content = sys.io.File.getContent('data/attendees_00176.json');
		// trace(content);

		var attendeesArr:Array<AST.AttendeeObj> = Json.parse(content).attendees;
		log(attendeesArr.length);
		for (i in 0...attendeesArr.length) {
			var _attendees = attendeesArr[i];
			// trace(_attendees);
			createQRCodes(_attendees, i);
		}
	}

	function createQRCodes(attendee:AttendeeObj, i:Int) {
		var str = '00000';
		var temp = (str.length - '${i}'.length);
		var newID:String = str.substr(0, temp) + i;

		// log(newID);

		var svg = new QrcodeSvg({
			// content: 'http://foobar.nl/${attendee.userName}',
			content: '${attendee.userName}',
			padding: 4,
			width: 256,
			height: 256,
			color: "#000000",
			background: "#ffffff",
			ecl: "M",
		}).svg();

		sys.io.File.saveContent('${Folder.EXPORT}/qr/${newID}_qr_${attendee.userName}.svg', svg);
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
