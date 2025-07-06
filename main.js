// challenge :1 Remove Duplicates Without Using Built-in Methods

// let arr = [2,4,2,7,4,8,7]
// let resultArray = [];

// for(let i = 0; i < arr.length;i++){
//     let isDuplicate = false;
//     for(let j = 0; j < resultArray.length;j++){
//         if(resultArray[j] === arr[i]){
//             isDuplicate = true;
//             break;
//         }
//     }
//     if(!isDuplicate){
//         resultArray[resultArray.length] = arr[i]
//     }
// }

// console.log(resultArray)

// challenge :2 Reverse Array Element without using any pre-build javascript function

// let arr = [2,4,2,7,4,8,7]
// let resultArray = [];

// for(let i = arr.length-1;i >= 0;i--){
//     resultArray[resultArray.length] = arr[i]
// }

// console.log(resultArray)

//class constructor

// class user{
//     constructor(name,age){
//         this.name = name;
//         this.age = age
//     }
//     welcome(){
//         return `my name is ${this.name}. My age is ${this.age}`;
//     }
// }

// let result = new user("praveen singh", 10)
// console.log(result)

//Promise , async/await , try catch and then catch
// function fetchData(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             reject('Something went wrong!')
//         },2000)
//     })
// }

//using async await and try catch
// async function getData(){
//   try {
//       let result = await fetchData();
//       console.log(result)
//   }
//   catch(error){
//       console.log(error)
//   }
// }

//Using then and catch
// fetchData().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

// Fetch Api
// async function getUserData(){
//   try {
//        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//        let data = await response.json()
//        console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

// getUserData()

// challenge 3 Count frequency of each element
// let arr = [2, 4, 2, 7, 4, 8, 7, 7];
// let result = [];
// let resultIndex = 0;

// for(let i = 0; i < arr.length;i++){
//     let isAlreadyCounted = false;
    
//     for(let j = 0; j < resultIndex;j++){
//         if(result[j][0] === arr[i]){
//             isAlreadyCounted = true;
//             break;
//         }
//     }
    
//     if(!isAlreadyCounted){
//         let count = 0;
//         for (let k = 0; k < arr.length;k++){
//             if(arr[k] === arr[i]){
//                 count++
//             }
//         }
            
//     result[resultIndex] = [arr[i], count];
//     resultIndex++
//     }
// }

// console.log(result)

//Challenge 4: Sort an Array in Ascending Order Without Using Any Built-In Sort Method

// let arr = [5, 2, 9, 1, 5, 6];

// for(let i = 0;i < arr.length-1;i++){
//     for(let j =0; j < arr.length-i-1;j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }

// console.log(arr)

// CallBack Hell

//Promise

// const p1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//     resolve("p1 resolved");
//     //reject("p1 rejected")
//     },10000)
// })

// const p2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//     resolve("p2 resolved");
//     //reject("p2 rejected")
//     },20000)
// })

// const p3 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("p3 resolved");
//         //reject("p3 rejected")
//         },30000)
// })

//promise.all() method
// Promise.all([p1,p2,p3]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

//promis.allSettled() method
// Promise.allSettled([p1,p2,p3]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

//promise.race() method
// Promise.race([p1,p2,p3]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

//promise.any() method
// Promise.any([p1,p2,p3]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

// const APP_URL = 'https://api.github.com/users/easypraveen'


// const data = fetch(APP_URL)

// data
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err))


// let user = {
//     name: "praveen",
//     age: 20,
// }

// let printDetails = function(city,state){
//     console.log(`my name is ${this.name} and my age is ${this.age}, I am from ${city} ${state}.`)
// }

// let user2 = {
//     name: "john",
//     age: 25,
// }

// let printDetails2 = printDetails.bind(user2, "agra", "uttarpradesh")
// printDetails2()

//pollyfill for bind method
// Function.prototype.mybind = function(...args){
//     let obj = this;
//     let params = args.slice(1)
//     return function(...args2){
//         //obj.apply(args[0],[...params,...args2])
//         obj.call(args[0],...params,...args2)
//     }
// }

// let printDetails2 = printDetails.mybind(user2, "agra")
// printDetails2("uttarpradesh")

//pollyfill for call method
// Function.prototype.mycall = function(...args){
//     let obj = this;
//     obj.call(args[0],...args.slice(1))
// }

// let printDetails = function(city,state){
//     console.log(`my name is ${this.name} and my age is ${this.age}, I am from ${city} ${state}.`)
// }

// let user3 = {
//     name: "john",
//     age: 25,
// }
// printDetails.mycall(user3, "agra", "uttarpradesh")

//pollyfill for apply method
// Function.prototype.myapply = function(context,args){
//     console.log(...args)
//     context.fn = this;
//     context.fn(...args)
// }

// let printDetails = function(city,state){
//     console.log(`my name is ${this.name} and my age is ${this.age}, I am from ${city} ${state}.`)
// }

// let user3 = {
//     name: "john",
//     age: 25,
// }
// printDetails.myapply(user3, ["agra", "uttarpradesh"])

//debouncing method
// let count = 0
// let getData = (query) => {
//     if(query.trim() === ''){
//         return;
//     }
//    console.log("Fetching Data..." + count++ + " " + query)
// }

// const debounce = function (fn, delay) {
//     let timer;
//     return function (){
//         let context = this,
//         args = arguments;
//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             fn.apply(context,arguments)
//         },delay)
//     }
// }

// let betterFunction = debounce(getData,5000)
// betterFunction("praveen", "singh")

