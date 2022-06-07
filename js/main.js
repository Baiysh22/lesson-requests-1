// const age = +prompt("enter your age")
// const newPromise = new Promise(function(resolve,reject){
//     if(age>18){
//         resolve({status:200,data:"ok"})
//     }else{
//         reject({status:404,data: console.error})
        
//     }
// });
// newPromise
// .then(result => console.log(result))
// .catch(error => console.log(error))

// setTimeout(()=> {
//     console.log("hello");
// },2000)
// setInterval(()=>{
//     console.log("hello setINTERVAL");
// },1000)
// let counter = 0;
// let func = setInterval(() => {
//   console.log("hello setInverval!");
//   counter++;
//   if (counter > 5) {
//     clearInterval(func);
//   }
// }, 1000);

// const newPromise = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         console.log("preparing data...");
//         let data = {
//             server: "localhost",
//             port:8000,
//             status:200,
//         };
//         if(data){
//             resolve(data);
//         }else{
//             reject("404! data is not found")
//         }
//     },2000);
// });
// newPromise.then(data => console.log(data))
// .catch(err => console.log(error)).finally(()=> console.log("finish"));

// async function getData(){
//    await newPromise
// .then(data => console.log(data))
// .catch(err => console.log(error))
// .finally(()=> console.log("finish"));
//  newPromise
// .then(data => console.log(data))
// .catch(err => console.log(error))
// .finally(()=> console.log("finish"));
// console.log("Hello");
// }
// getData();
// resolve - callback для успешного кейса - вызывается внутри промиса, принимает данные,
//  которые нужно вернуть
// reject - callback для передачи ошибки - принимает саму ошибку и возвращает ее

// async await - конструкция, которая используется при отправке запросов (в случае если нужно дождаться 
// выполнения запроса и только потом читать дальнейший код)


// then - ловит успешный кейс
// catch - ловит ошибку
// finally - отработает в любом случае при завершении

// resolve - callback для успешного кейса - вызывается внутри промиса, принимает данные, которые нужно вернуть
// reject - callback для передачи ошибки - принимает саму ошибку и возвращает ее

// async await - конструкция, которая используется при отправке запросов (в случае если нужно дождаться выполнения запроса и только потом читать дальнейший код)

/*
Види запросов!
 POST-добавление данных
PUT-полная замена данных
PATCH-частичная замена данных
DELETE- удаление
GET-получение данных
*/
/*Команда для запуска json-server 
npx json-server -w db.json -p 8000*/
/*CRUD-Create Read Update Delete */

const API = "http://localhost:8000/todos"

let inpAdd = document.getElementById("inp-add");
let btnAdd = document.getElementById("btn-add");
// console.log(inpAdd,btnAdd);
btnAdd.addEventListener("click",function(){
  let newTodo = {
    todo: inpAdd.value
  };
  // console.log(newTodo);
  fetch(API,{
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-type": "application/json; charset=utf-8"
    },
  })
})