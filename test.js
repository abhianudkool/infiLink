document.getElementById("button1").addEventListener("click",abc);

function abc(){
        alert("Tondu bohat dimag khaata hai");
	$.jStorage.set("a",1);
	$.jStorage.set("b",2);
	$.jStorage.set("c",3);
	$.jStorage.set("d",4);

	value = $.jStorage.get("a");

	alert(value);
}
