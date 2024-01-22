/**
	Generate an svg QR code easily with this class. Just instatiate an instance
	with one of the constructors, then either generate the QR code svg as a
	string with `.svg(...)` or save it to a file with `.save(...)`.
**/
@:jsRequire("qrcode-svg") extern class QrcodeSvg {
	/**
		Create a QRCode with the default options and the passed content.
	**/
	@:overload(function(options:qrcode_svg.Options):QrcodeSvg { })
	function new(content:String);
	/**
		The raw model of this QRCode.
	**/
	var qrcode : qrcode_svg.Model;
	/**
		The options that were used to create this QRCode.
	**/
	var options : qrcode_svg.Options;
	/**
		Generates an SVG image of this QRCode
	**/
	function svg(?opt:{ var container : String; }):String;
	/**
		Writes this QRCode to a file. Requires `fs`.
	**/
	function save(file:String, callback:ts.AnyOf2<() -> Void, (error:js.lib.Error) -> Void>):Void;
	static var prototype : QrcodeSvg;
}