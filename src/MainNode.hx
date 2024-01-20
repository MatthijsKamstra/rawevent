package;

import const.Folder;
import haxe.Json;
import haxe.io.Path;
import js.Browser.*;
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
		FileSystem.createDirectory(Folder.EXPORT + '/qr');
		FileSystem.createDirectory(Folder.EXPORT + '/tag');
		FileSystem.createDirectory(Folder.EXPORT + '/combo');
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
			createTag(_attendees, i);
			combineQrAndTag(_attendees, i);
		}
	}

	function combineQrAndTag(attendee:AttendeeObj, i:Int) {
		var str = '00000';
		var temp = (str.length - '${i}'.length);
		var newID:String = str.substr(0, temp) + i;

		var tag = sys.io.File.getContent('${Folder.EXPORT}/tag/${newID}_tag_${attendee.userName}.svg');
		var qr = sys.io.File.getContent('${Folder.EXPORT}/qr/${newID}_qr_${attendee.userName}.svg');

		var qrArr = qr.split('\n');

		var rects = '';
		for (i in 0...qrArr.length) {
			var line = qrArr[i];
			if (line.indexOf('<rect') != -1) {
				rects += line + '\n';
			}
		}

		// log(qrArr.length);

		var combo = tag;
		combo = combo.replace('</svg>', '<g	id="qrcode" transform="matrix(0.26682031,0,0,0.26682031,4.847,35.24044)">${rects}</g></svg>');

		sys.io.File.saveContent('${Folder.EXPORT}/combo/${newID}_combo_${attendee.userName}.svg', combo);
	}

	function createTag(attendee:AttendeeObj, i:Int) {
		var str = '00000';
		var temp = (str.length - '${i}'.length);
		var newID:String = str.substr(0, temp) + i;

		var svg = '<svg>${attendee.userName}</svg>';

		var svg = sys.io.File.getContent('template/nametag_cleaner_v01.svg');

		svg = svg.replace("$company", '${attendee.company}');
		svg = svg.replace("$lastname", '${attendee.lastName}');
		svg = svg.replace("$firstname", '${attendee.firstName}');

		sys.io.File.saveContent('${Folder.EXPORT}/tag/${newID}_tag_${attendee.userName}.svg', svg);
	}

	function createQRCodes(attendee:AttendeeObj, i:Int) {
		var str = '00000';
		var temp = (str.length - '${i}'.length);
		var newID:String = str.substr(0, temp) + i;

		// log(newID);

		// 256px  = 67,733 mm

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
