/* ""Отправка данных на сервер""

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе
 в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер 
 для сохранения. Функция должна возвращать промис, который разрешается, если данные
 успешно отправлены, или отклоняется в случае ошибки. */
 setTimeout(() => {
    console.log("Task 2");
}, 3000)

 async function saveUserData(userData) {
    let response = await fetch("https://jsonplaceholder.typicode.com/users",
       {
          method: 'POST',
          headers: {
             'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(userData)
       }
    );
    if (response.ok) {
        console.log("SUCCESS");
       return response.json();

    } else {
      console.log("ERROR");
    }
 }

 const user_501 = {
    id: "501",
    name: 'Thomas',
    age: 50,
 };
 
 setTimeout(() => {
    saveUserData(user_501);  
 }, 4000);
