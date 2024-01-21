package utils;

class Convert {
	static var PX(default, null):Float = 1;
	static var MM(default, null):Float = 1;

	static var baseValue:Float;

	// Example usage with your values
	static var pixels = 256.0;
	static var conversionFactor = 67.733;

	// 256px  = 67,733 mm

	public function new() {
		var millimeters = pixelsToMillimeters(pixels, conversionFactor);
		log('${pixels} pixels is approximately ${millimeters} mm');
	}

	// var px = Convert.mm(10).px();

	public static function mm(value:Float):Float {
		if (value == null)
			return baseValue * MM;
		baseValue = value;
		return baseValue;
	}

	public static function px(value:Float):Float {
		if (value == null)
			return baseValue * PX;
		baseValue = value;
		return baseValue;
	}

	public static function pixelsToMillimeters(pixels:Float, conversionFactor:Float) {
		return pixels * conversionFactor;
	}
}
