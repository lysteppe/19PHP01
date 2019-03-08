	var start = "0";
	var amount = "10";
	var times = prompt("Nhập bảng cửu chương muốn in","");

	do 	{
		start++;
		document.write("<DIV>" + times * 1 + " x " + start * 1+ " = " + times * start + "</DIV>");
		}
	while	(start < amount);
