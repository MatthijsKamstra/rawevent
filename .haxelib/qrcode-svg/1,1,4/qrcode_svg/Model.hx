package qrcode_svg;

typedef Model = {
	/**
		This QRCode's data matrix. A square, two-dimensional boolean array
		of `moduleCount` x `moduleCount` size. True in a given slot means
		that spot is filled in in the QRCode visualization.
	**/
	var modules : Array<Array<Bool>>;
	/**
		The calculated type number for this QRCode.
	**/
	var typeNumber : Float;
	/**
		The numerical error correction level for this QRCode.
	**/
	var errorCorrectLevel : Float;
	/**
		The width/length of this QRCode's modules matrix.
	**/
	var moduleCount : Float;
	/**
		The cache used to store data during the creation of this QRCode.
	**/
	var dataCache : Null<Array<Float>>;
	/**
		A list of the data added to this QRCode.
	**/
	var dataList : Array<{
		var data : String;
		var mode : Float;
		var parsedData : Array<Float>;
	}>;
	/**
		Queue data up to be added to this QRCode. `make` needs to be called
		   to actually generate the QRCode from the data.
	**/
	function addData(data:String):Void;
	/**
		Whether a given coordinate is filled in in this QRCode's matrix.
	**/
	function isDark(row:Float, col:Float):Bool;
	/**
		Returns the length/width of this QRCode's matrix.
	**/
	function getModuleCount():Float;
	/**
		Generate this QRCode's matrix from the queued data.
	**/
	function make():Void;
};