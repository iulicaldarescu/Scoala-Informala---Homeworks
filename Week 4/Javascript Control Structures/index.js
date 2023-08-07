//       1            ---------------------display in the console the numbers from 1 to 20-------------------------



// for (let i = 0; i <= 20; i++){
//     console.log(i);
// }



//        2           -------------------display in the console the odd numbers from 1 to 20---------------------

// for (let i = 0; i <=20; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }




//       3        ------------------------compute the sum of the elements of an array and display it in the console-----------------

// const arr = [1,4,23,245,213,25];
// let sum = 0;

// arr.forEach(element => {
//     sum = sum + element;
// });


// console.log(sum);





//     4     -----------------------compute the maximum of the elements of an array and display it in the console --------------------

// const arr = [1,4,23,245,213,25];
// let max = 0;

// for(let i = 0; i < arr.length; i++){
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(max);


//    5   ----------------------------------compute how many times a certain element appears in an array---------------

// const arr = [1,4,23,245,213,25,4,26,19,213,,99,4,121,6,4];

// function repeatNumber(number, array){
//     let times = 0;
//     for(let i = 0; i < array.length; i++){
//         if(number === arr[i]){
//             times++;
//         }
//     }

//     console.log(times);
// }

// repeatNumber(213,arr);




// ----------------------- Challenge ------------------------------------


// 0 1 0 1
// 1 0 1 0
// 0 1 0 1
// 1 0 1 0 

// let string = " ";

// for ( let i = 0; i < 4; i ++){
    
//    for(let j = 0; j < 4; j++){
//         if((i+j) % 2 === 0) {
//             string = string + "0 ";
//         }else {
//             string = string + "1 ";
//         }

        
//     }

//     console.log(string + "\n");
//     string = " ";
// }

