package;

typedef AttendeeObj = {
	/**
	 * uniq code, should be simular to UIID
	 */
	@:optional var _id:String;

	var firstName:String; // ":"Zulma";
	var company:String; // ":"Smit V.O.F.";
	var lastName:String; // ":"Bakker";
	var id:String; // ":"Zulma Bakker";
	var middleName:String; // ":"Corazon";
	var email:String; // ":"zulma@bakker.nl";

	/**
	 * firstname and lastname with underscorn "zulma_bakker"
	 */
	var userName:String;
}
