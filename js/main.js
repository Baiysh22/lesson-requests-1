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

const newPromise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("preparing data...");
        let data = {
            server: "localhost",
            port:8000,
            status:200,
        };
        if(data){
            resolve(data);
        }else{
            reject("404! data is not found")
        }
    },2000);
});
// newPromise.then(data => console.log(data))
// .catch(err => console.log(error)).finally(()=> console.log("finish"));

async function getData(){
   await newPromise
.then(data => console.log(data))
.catch(err => console.log(error))
.finally(()=> console.log("finish"));
 newPromise
.then(data => console.log(data))
.catch(err => console.log(error))
.finally(()=> console.log("finish"));
console.log("Hello");
}
getData();


