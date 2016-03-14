        var name = [ ];
for (var i=0; i<5; i++)
	{
		name[i]=prompt('Введите имя');

	}


var user = prompt('Введите имя пользователя.');

var flag = false;

for (var i=0; i<5; i++) {
	if (user == name[i]) {
		flag = true;
	}
}

if (flag) { alert(user + ', Вы успешно вошли')} 
else {alert(user + ',Доступ запрещен')} 
		
		