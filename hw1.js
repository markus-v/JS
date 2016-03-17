      var logins = [];

for (var i = 0; i < 5; i++) { 
  logins[i] = prompt('Введите имя');
}

var name = prompt('Войти в аккаунт: Введите имя');

for (var i = 0; i < logins.length; i++) {
  
  if (name == logins[i]) {
    message = (logins[i] + ', вы успешно вошли!');
    
    if (i = logins.length) continue;
    
  } else {
    message = ('Пользователь не найден.')
  }
}
  alert(message);

		
