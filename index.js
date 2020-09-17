var list = [
	{
		'id': Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
		'name': 'Xin việc ở Google',
		'status': 'chua'
	},
	{
		'id': Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
		'name': 'Cưới vợ',
		'status': 'xong'
	},
	{
		'id': Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
		'name': 'Mua xe hơi',
		'status': 'xong'
	},
	{
		'id': Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
		'name': 'Sinh con',
		'status': 'chua'
	},
	{
		'id': Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
		'name': 'Đi du lịch vòng quanh thế giới',
		'status': 'xong'
	},
]
load();
function load(){
	if(localStorage.getItem('list') === null){
		localStorage.setItem('list', JSON.stringify(list) );
	}
	else{
		list = JSON.parse(localStorage.getItem('list'));
	}
	var ul = document.getElementById('list-work');
 	var html = "";
	for(var item of list){
		if(item.status === 'xong'){
			var li = "<li class="+item.status+">" +
						"<span>"+item.name+"</span>"+
						"<span "+" onclick=\"delFunction('"+item.id+"')\"><i class='fa fa-close'></i></span>"+
						"<span class='check' "+" onclick=\"editFunction('"+item.id+"')\"><i class='fa fa-check'></i></span>"+
					"</li>";
		}
		else{
			var li = "<li class="+item.status+">" +
						"<span>"+item.name+"</span>"+
						"<span "+" onclick=\"delFunction('"+item.id+"')\"><i class='fa fa-close'></i></span>"+
						"<span "+" onclick=\"editFunction('"+item.id+"')\"><i class='fa fa-check'></i></span>"+
					"</li>";
		}
		
		html += li;
	}
	ul.innerHTML = html;
}

function addClick(){
	var name = document.getElementById('name').value;
	var newWork = {
		'id': Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
		'name': name,
		'status': 'chua'
	}
	list.push(newWork);
	localStorage.setItem('list', JSON.stringify(list) );
	document.getElementById('name').value = "";
	alert("Đã thêm công việc "+ name +" thành công");
	load();
}

function delFunction(id){
	if(confirm("Bạn có chắc muốn xóa công việc này?")){
		var tmp_list = [];
		for(var item of list){
			if(item.id !== id){
				tmp_list.push(item);
			}
		}
		list = tmp_list;
		localStorage.setItem('list', JSON.stringify(list));
		load();
	}
}

function editFunction(id){
	if(confirm("Công việc đã làm xong ?")){
		for(var item of list){
			if(item.id === id ){
				item.status = 'xong';
			}
		}
		localStorage.setItem('list', JSON.stringify(list));
		load();
	}
}