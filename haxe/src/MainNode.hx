package;

import const.Folder;
import haxe.Json;
import haxe.crypto.Sha256;
import haxe.io.Path;
import js.Browser.*;
import sys.FileSystem;

class MainNode {
	public function new() {
		info('Start RawEvent project');
		init();
		info('End RawEvent project');
	}

	function init() {
		// var path = 'data/attendees_00010.json';
		// var path = 'data/attendees_00100.json';
		var path = 'data/attendees_00176.json';
		//
		initFolders();
		testQRCodeGeneration();
		generateQR4Attendees(path);
		// convert combo from svg to png
		// will take a while
		// convertSVG2PNG();

		// convert png to json file
		convertPNG2JSONScribis();

		// convert json to fake database;
		convertFakeDatabase(path);
		convertFakeLogin(path);
	}

	function convertFakeLogin(path:String) {
		log('convertFakeLogin');
		var content = File.getContent(path);
		// trace(content);
		var json = {
			fakelogin: {}
		};
		var attendeesArr:Array<AST.AttendeeObj> = Json.parse(content).attendees;
		// log(attendeesArr.length);
		for (i in 0...attendeesArr.length) {
			var _attendees = attendeesArr[i];
			// trace(_attendees);

			var obj = Reflect.field(json, 'fakelogin');

			var hash = Sha256.encode('${_attendees.userName}1234');
			var token = Sha256.encode('${_attendees.firstName}1234');

			Reflect.setField(_attendees, 'token', token);

			Reflect.setField(obj, '${hash}', _attendees);
		}

		log('write json', 1);

		File.saveContent('${Folder.EXPORT}/fake_login.json', Json.stringify(json, null, '\t'));
	}

	function convertFakeDatabase(path:String) {
		log('convertFakeDatabase');
		var content = File.getContent(path);
		// trace(content);
		var json = {
			fakedatabase: {}
		};
		var attendeesArr:Array<AST.AttendeeObj> = Json.parse(content).attendees;
		// log(attendeesArr.length);
		for (i in 0...attendeesArr.length) {
			var _attendees = attendeesArr[i];
			// trace(_attendees);

			var obj = Reflect.field(json, 'fakedatabase');

			Reflect.setField(obj, '${_attendees._id}', _attendees);
		}

		log('write json', 1);

		File.saveContent('${Folder.EXPORT}/fake_database.json', Json.stringify(json, null, '\t'));
	}

	function initFolders() {
		Folder.ROOT_FOLDER = Sys.getCwd();
		Folder.BIN = Path.join([Sys.getCwd(), 'bin']);
		Folder.DIST = Path.join([Sys.getCwd(), 'dist']);
		Folder.ASSETS = Path.join([Sys.getCwd(), 'assets']);
		Folder.EXPORT = Path.join([Sys.getCwd(), 'export']);
		info('Folder.ROOT_FOLDER: ${Folder.ROOT_FOLDER}', 1);
		// info(Folder.BIN, 1);
		// info(Folder.DIST, 1);
		info('Folder.ASSETS: ${Folder.ASSETS}', 1);
		info('Folder.EXPORT: ${Folder.EXPORT}', 1);

		FileSystem.createDirectory(Folder.EXPORT);
		FileSystem.createDirectory(Folder.EXPORT + '/qr');
		FileSystem.createDirectory(Folder.EXPORT + '/tag');
		FileSystem.createDirectory(Folder.EXPORT + '/combo');
	}

	function generateQR4Attendees(path:String) {
		// read the file
		var content = File.getContent(path);
		// trace(content);

		var attendeesArr:Array<AST.AttendeeObj> = Json.parse(content).attendees;
		// log(attendeesArr.length);
		for (i in 0...attendeesArr.length) {
			var _attendees = attendeesArr[i];
			// trace(_attendees);
			createQRCodes(_attendees, i);
			createTag(_attendees, i);
			combineQrAndTag(_attendees, i);
		}
	}

	function convertSVG2PNG() {
		// bin/export/combo/00000_combo_slyvia_de_vries.svg

		// check if ffmpeg is installed
		// Sys.command('ffmpeg', ['-version']);
		// check for Inkscape
		// Sys.command('inkscape', ['--version']);
		// Sys.command('inkscape', ["--export-type png", "export/combo/00000_combo_slyvia_de_vries.svg"]);
		Sys.command('inkscape', ["--export-type", "png", "export/combo/00097_combo_angle_smit.svg", "-w", "1024"]);

		var directory = 'export/combo';
		for (file in sys.FileSystem.readDirectory(directory)) {
			var path = haxe.io.Path.join([directory, file]);
			if (!sys.FileSystem.isDirectory(path)) {
				// trace("file found: " + path);
				// do something with file
				if (path.indexOf('.svg') != -1) {
					// log(path);
					Sys.command('inkscape', ["--export-type", "png", '${path}', "-w", "1024"]);
				}
			}
		}
	}

	function convertPNG2JSONScribis() {
		var json = {};

		var _w = 78; // mm
		var _h = 108; // mm
		var _bleed = 3; // mm

		Reflect.setField(json, 'pages', []);
		var directory = 'export/combo';
		for (file in sys.FileSystem.readDirectory(directory)) {
			var path = haxe.io.Path.join([directory, file]);
			if (!sys.FileSystem.isDirectory(path)) {
				// trace("file found: " + path);
				// do something with file
				if (path.indexOf('.png') != -1) {
					// log(path);
					var arr = Reflect.field(json, 'pages');
					// "export/combo/00000_combo_slyvia_de_vries.png",

					var pageObj = {
						left: {},
						right: {
							_alias: "test",
							images: [
								{
									path: '${path}',
									x: {"unit": "mm", "value": -_bleed},
									y: {"unit": "mm", "value": -_bleed},
									width: {"unit": "mm", "value": (2 * _bleed) + _w},
									height: {"unit": "mm", "value": (2 * _bleed) + _h}
								}
							]
						}
					}

					arr.push(pageObj);
				}
			}
		}

		log('write json', 1);

		File.saveContent('${Folder.EXPORT}/export_scribus.json', Json.stringify(json, null, '\t'));
	}

	function combineQrAndTag(attendee:AttendeeObj, i:Int) {
		var str = '00000';
		var temp = (str.length - '${i}'.length);
		var newID:String = str.substr(0, temp) + i;

		var tag = File.getContent('${Folder.EXPORT}/tag/${newID}_tag_${attendee.userName}.svg');
		var qr = File.getContent('${Folder.EXPORT}/qr/${newID}_qr_${attendee.userName}.svg');

		var qrArr = qr.split('\n');

		var rects = '';
		for (i in 0...qrArr.length) {
			var line = qrArr[i];
			if (line.indexOf('<rect') != -1) {
				rects += line + '\n';
			}
		}

		// log(qrArr.length);

		// replace and guess...
		var combo = tag;
		combo = combo.replace('</svg>', '<g id="qrcode" transform="matrix(0.26682031,0,0,0.26682031,4.847,35.24044)">${rects}</g></svg>');

		File.saveContent('${Folder.EXPORT}/combo/${newID}_combo_${attendee.userName}.svg', combo);
	}

	function createTag(attendee:AttendeeObj, i:Int) {
		var str = '00000';
		var temp = (str.length - '${i}'.length);
		var newID:String = str.substr(0, temp) + i;

		// var svg = '<svg>${attendee.userName}</svg>';

		var svg = File.getContent('template/nametag_cleaner_v01.svg');

		svg = svg.replace("$company", '${attendee.company}');
		svg = svg.replace("$lastname", '${attendee.lastName}');
		svg = svg.replace("$firstname", '${attendee.firstName}');

		File.saveContent('${Folder.EXPORT}/tag/${newID}_tag_${attendee.userName}.svg', svg);
	}

	function createQRCodes(attendee:AttendeeObj, i:Int) {
		var str = '00000';
		var temp = (str.length - '${i}'.length);
		var newID:String = str.substr(0, temp) + i;

		// log(newID);

		// 256px  = 67,733 mm

		var url = '${attendee._id}';

		var svg = new QrcodeSvg({
			// content: 'http://foobar.nl/${attendee.userName}',
			content: url,
			padding: 4,
			width: 256,
			height: 256,
			color: "#000000",
			// background: "#ffffff",
			// background: "#ffffffAA",
			// background: "rgba(255, 255, 255, 0.0)",
			background: "none",
			// background: "transparant",
			ecl: "M",
		}).svg();

		File.saveContent('${Folder.EXPORT}/qr/${newID}_qr_${attendee.userName}.svg', svg);
	}

	// ----------------------------------------- test -----------------------------------------

	function testQRCodeGeneration() {
		log('testQRCodeGeneration');
		var qrcode = new QrcodeSvg({
			content: "Matthijs de gekste!",
			padding: 4,
			width: 256,
			height: 256,
			color: "#000000",
			background: "#ffffff",
			ecl: "M",
		});
		qrcode.save("test.svg", function(error) {
			if (error != null)
				throw error;
			console.log("Done!");
		});
	}

	// var svg = new QRCode("Hello World!").svg();
	// console.log(svg);
	// untyped __js__('// [nodejs] comment');
	// js.Node.console.log('js.Node.console.log');
	// untyped ('// [${TARGET}] simple untyped');
	// Syntax.code('# [python] comment');
	// var svg = Syntax.code('new QRCode("Hello World!").svg()');
	// console.log(svg);
	// console.log(new QrcodeSvg('hello').svg());

	function dummyWrite() {
		var str:String = 'Hello World!\nWritten on: ' + Date.now().toString();
		File.saveContent('hello.txt', str);
	}

	static public function main() {
		var app = new MainNode();
	}
}
