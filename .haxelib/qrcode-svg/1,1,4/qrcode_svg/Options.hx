package qrcode_svg;

typedef Options = {
	/**
		QR Code content, the only **required** parameter.
	**/
	var content : String;
	/**
		White space padding. `0` for no border. Default is `4`.
	**/
	@:optional
	var padding : Float;
	/**
		QR Code width in pixels. Default is `256`.
	**/
	@:optional
	var width : Float;
	/**
		QR Code height in pixels. Default is `256`.
	**/
	@:optional
	var height : Float;
	/**
		Color of modules (squares), color name or hex string. Default is `#000000`.
	**/
	@:optional
	var color : String;
	/**
		Color of background, color name or hex string. Default is `#fffff`.
	**/
	@:optional
	var background : String;
	/**
		Error correction level. Default is `"M"`.
	**/
	@:optional
	var ecl : String;
	/**
		Join modules (squares) into one shape, into the SVG path element, **recommended** for web and responsive use. Default is `false`.
	**/
	@:optional
	var join : Bool;
	/**
		To create a squares as pattern, then populate the canvas. Default is `false`.
	**/
	@:optional
	var predefined : Bool;
	/**
		Apply indents and new lines. Default is `true`.
	**/
	@:optional
	var pretty : Bool;
	/**
		Swap X and Y modules, only if you have issues with some QR readers. Default is `false`.
	**/
	@:optional
	var swap : Bool;
	/**
		Prepend XML declaration to the SVG document, i.e. ```<?xml version="1.0" standalone="yes"?>```. Default is `true`.
	**/
	@:optional
	var xmlDeclaration : Bool;
	/**
		Wrapping element. Default is `svg`. \
		`svg`: Populate squares in a SVG document with `width` and `height` attribute.
		Recommended for converting to raster images or PDF where QR Code is being static (exact size). \
		`svg-viewbox`: Populate squares in a SVG document with viewBox attriute.
		**Recommended** for responsive web pages. \
		`g`: Put squares in `g` element.
		Useful when you need to put multiple QR Codes in a single SVG document \
		`none`: No wrapper.
	**/
	@:optional
	var container : String;
};