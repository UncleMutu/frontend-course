let datas = [
	{ 
		id: 1, 
		value: "testing"
	}, 
	{
		id: 2,
		value: "testing1"
	}, 
	{
		id: 3, 
		value: "testing2"
	}
];
let dataString = ""
let par1 = document.getElementById("par1")
refreshView()

function refreshView() {
	for (let i = 0;i<datas.length;i++) {
		dataString += "<div><b>" + datas[i].value + "</b><button type=\"button\" onclick=\"removeData("+ datas[i].id +")\">delete</button></div>"
	}
	par1.innerHTML = dataString;
}

function addData() {
	// Get element by id.
	let form1 = document.getElementById('form1');
	// Push data into current array.
	datas.push({ id: datas[datas.length-1].id + 1, value: form1.value})
	// Empty var dataString.
	dataString = ""
	refreshView()
}

function removeData(id) {
	for (let i = 0;i<datas.length;i++) {
		if (datas[i].id === id) {
			datas.splice(i, 1)
		}
	}
	// Empty var dataString.
	dataString = ""
	refreshView()
}
