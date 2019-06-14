function importJS(resourseJs){
	var script = "<script language='javascript' type='text/javascript' src='"+ resourseJs +"'></script>";
	document.write(script);
}
importJS("jquery-2.1.0.js");
importJS("parseJson.js");