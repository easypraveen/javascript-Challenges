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

