package;

import const.Folder;
import haxe.Json;
import haxe.io.Path;
import sys.FileSystem;

class MainNeko {
	public function new() {
		info('Start RawEvent project');
		init();
		info('End RawEvent project');
	}

	function init() {
		initFolders();
		generateSQlite();
	}

	function generateSQlite() {
		var conn = sys.db.Sqlite.open("rawevent.sqlite");

		// var rs = conn.request('CREATE TABLE IF NOT EXISTS artists_backup
		// (
		// 	artistid INTEGER PRIMARY KEY AUTOINCREMENT,
		// 	name NVARCHAR
		// );');
		// var rs = conn.request('CREATE TABLE IF NOT EXISTS users (
		var rs = conn.request('CREATE TABLE IF NOT EXISTS users (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			_id TEXT,
			firstName TEXT,
			middleName TEXT,
			lastName TEXT,
			userName TEXT,
			company TEXT,
			email TEXT
		);');

		// var content = sys.io.File.getContent('data/attendees_00100.json');
		var content = sys.io.File.getContent('data/attendees_00176.json');
		// trace(content);

		var attendeesArr:Array<AST.AttendeeObj> = Json.parse(content).attendees;
		// log(attendeesArr.length);
		for (i in 0...attendeesArr.length) {
			var user = attendeesArr[i];
			// trace(_attendees);
			// 		//  (Cannot execute several SQL requests at the same time)
			// 		// var rs = conn.request('INSERT INTO artists_backup (name) VALUES ("John");');
			var rs = conn.request('INSERT INTO users (
				_id,
				firstName,
				middleName,
				lastName,
				userName,
				company,
				email
			   ) VALUES (
				"${user._id}",
				"${user.firstName}",
				"${user.middleName}",
				"${user.lastName}",
				"${user.userName}",
				"${user.company}",
				"${user.email}"
				);');
		}

		// 		// var rs = conn.request('SELECT * FROM artists_backup;');

		// 		// trace('-- SELECT * FROM artists_backup');
		// 		// for (record in (rs : Iterator<ArtistsBackupRecord>)) {
		// 		// 	trace('${record.artistid}) ${record.name} --> ${haxe.Json.stringify(record)}');
		// 		// }

		var rs = conn.request('SELECT * FROM users;');
		trace('-- SELECT * FROM users');
		for (record in (rs : Iterator<AttendeeObj>)) {
			trace('${record._id}) ${record.firstName} --> ${haxe.Json.stringify(record)}');
		}
	}

	function testSQlite() {
		var conn = sys.db.Sqlite.open("rawevent_test.sqlite");

		// var rs = conn.request('CREATE TABLE IF NOT EXISTS artists_backup
		// (
		// 	artistid INTEGER PRIMARY KEY AUTOINCREMENT,
		// 	name NVARCHAR
		// );');
		// var rs = conn.request('CREATE TABLE IF NOT EXISTS users (
		var rs = conn.request('CREATE TABLE IF NOT EXISTS users (
			firstName TEXT,
			company TEXT,
			lastName TEXT,
			id TEXT,
			_id TEXT,
			middleName TEXT,
			email TEXT,
			userName TEXT
		);');
		// 		//  (Cannot execute several SQL requests at the same time)
		// 		// var rs = conn.request('INSERT INTO artists_backup (name) VALUES ("John");');
		var rs = conn.request("INSERT INTO users (firstName, company, lastName, id, _id, middleName, email, userName)
		VALUES ('Sunshine', 'Van Leeuwen BV', 'De Wit', 'Sunshine De Wit', '2b40c6d0-0b50-45e8-826e-915e8059cded', 'Chantell', 'sunshine@dewit.nl', 'sunshine_de_wit');");

		// 		// var rs = conn.request('SELECT * FROM artists_backup;');

		// 		// trace('-- SELECT * FROM artists_backup');
		// 		// for (record in (rs : Iterator<ArtistsBackupRecord>)) {
		// 		// 	trace('${record.artistid}) ${record.name} --> ${haxe.Json.stringify(record)}');
		// 		// }

		var rs = conn.request('SELECT * FROM users;');
		trace('-- SELECT * FROM users');
		for (record in (rs : Iterator<AttendeeObj>)) {
			trace('${record._id}) ${record.firstName} --> ${haxe.Json.stringify(record)}');
		}
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

	static public function main() {
		var app = new MainNeko();
	}
}
