// ARRAY 1 

// let n = 6;
// let array = [];
// for (let i = 1; i < n*2; i++){
//   if (i % 2 != 0){
//     array.push(i);
//   } 
// }
// console.log(array);


// ARRAY 2


// let n = 5;
// let count = 1;
// let array = [];

// for (let i = 1; i <= n; i++){
//   count +=i*i;
//   array.push(count);
// }
// console.log(array);


// ARRAY 5


// let n = 5;
// let n1 = 1;
// let n2 = 1;
// let result;
// let arr = [];

// for (let i = 1; i <= n; i++){
//   result = n1 + n2;
//   n1 = n2;
//   n2 = result;
//   arr.push(result);
// }
// console.log(arr);


// ARRAY 7


// let n = [1,2,23,4,5];
// n.reverse();
// console.log(n);


// ARRAY 8


// let n = [1,3,66,5,12,3,11];
// let box;
// let count = 0;

// for (let i = 1; i < n.length; i++){
//   let sanoq = 0;
//   if (n[i] % 2 != 0){
//     console.log(n[i]);
//       count++;
//     }
//   }
//   console.log(`Toq sonlar: >> ${count}`);


// ARRAY 9

// let n = [1,3,66,5,12,3,11];
// let box;
// let count = 0;
// let sanoq = 0;

// for (let i = 1; i < n.length; i++){
//   let sanoq = 0;
//   if (n[i] % 2 == 0){
//     console.log(n[i]);
//       count++;
//     }
//   }
//   console.log(`Juft sonlar: >> ${count}`);


// ARRAY 10


// let newArray = [4,1,11, 5, 7, 8, 6, 9];
// let bigger = [];
// let smaller = [];

// for(let i = 0, j = newArray.length-1 ; i < newArray.length; i++, j--){
//   if(newArray[i] % 2 == 0){
//     bigger.push(newArray[i]);
//   } 
//   if(newArray[j] % 2 != 0){
//     smaller.push(newArray[j]);
//   }
// }

// console.log(bigger, smaller);



// ARRAY 18

// let n = [144,44,4,45,5];
// let lastElement = n.pop();
// let count = 0;

// for (let i = 0; i < n.length; i++){
//   if (n[i] < lastElement){
//     count=n[i];
//   }
// }
// console.log(count);



// ARRAY 19


// let n = [42,22,412,42,111];
// let lastElement = n.pop();
// let firstElement = n.shift();
// let count = 0;
// let bigger = 0;

// for (let i = 0; i < n.length; i++){
//   if (n[i] < lastElement){
//     count=n[i];
//   }
//   if (n[i] > firstElement){
//    bigger = n[i];
//   }
// }
// console.log(bigger, count);




// ARRAY 20


// let n = [1,2,55,4];
// let count = 0;

// for (let i = 0; i < n.length; i++){
//    count+=n[i];
// }
// console.log(count);


// ARRAY 28


// let n = [122,2,3,4,6,8];
// let even = [];

// for (let i = 0; i < n.length; i++){
//   if (i % 2 ==0){
//     even.push(n[i]);
//   }
// }
// console.log(even);



// let n = [12,-3,53,111,5];
// let count = n[0];

// for (let i = 1; i < n.length; i++){
//    if (n[i] < count){
//      count = n[i];
//    }
// }
// console.log(count);


// let n = [12,-3,53,111,5];

// for (let i = 0; i < n.length; i++){
//   for (let j = 0; j < n.length; j++){
//     if (n[j] > n[j+1]){
//       let a = n[j+1];
//       n[j+1] = n[j];
//       n[j] = a;
//     }
//   }
// }
// console.log(n);


// let n = [1,2,3,4,5,6];
// let odd = [];
// let even = [];

// for (let i = 1; i < n.length; i++){
//   if (n[i] % 2 == 0){
//     even.push(n[i]);
//   }
//   else{
//     odd.push(n[i]);
//   }
// }


